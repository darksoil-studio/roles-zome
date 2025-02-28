use hdi::prelude::*;
use linked_devices_types::validate_agent_has_linked_device;

use crate::{
    linked_devices::linked_devices_integrity_zome_name, progenitors, role_path,
    validate_agent_was_admin_at_the_time, AllRoleClaimsDeletedProof, LinkTypes, UnitEntryTypes,
    ADMIN_ROLE,
};

#[derive(Serialize, Clone, Deserialize, Debug, SerializedBytes)]
pub struct AssigneeLinkedDevices {
    pub assignee_chain_top: ActionHash,
    pub linked_devices: Vec<AgentPubKey>,
}

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub enum RoleToAssigneeLinkMode {
    ProgenitorClaimingAdminAtInit,
    AdminAssigningNormalRole,
}

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct RoleToAssigneeLinkTag {
    pub role: String,
    pub linked_devices: Option<AssigneeLinkedDevices>,
    pub mode: RoleToAssigneeLinkMode,
}

/// Validation of the link that assignees use to claim roles, checks entrytypes, paths and that issuer was admin
pub fn validate_create_link_role_to_assignee(
    action_hash: &ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let Some(assignee) = target_address.into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No AgentPubKey associated with link".to_string(),
        ));
    };

    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(tag.clone().into_inner()));

    let Ok(tag) = RoleToAssigneeLinkTag::try_from(tag_bytes) else {
        return Err(wasm_error!(
            "RoleToAssignee links must contain the role in their LinkTag.",
        ));
    };

    let Some(base_entry_hash) = base_address.into_entry_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No entry hash associated with the base of the link.".to_string(),
        ));
    };

    if !role_path(&tag.role)?
        .path_entry_hash()?
        .eq(&base_entry_hash)
    {
        return Ok(ValidateCallbackResult::Invalid(
            "Invalid path entry hash at the base.".to_string(),
        ));
    };

    if let Some(linked_devices) = tag.linked_devices {
        let Some(linked_devices_integrity_zome_name) = linked_devices_integrity_zome_name() else {
            return Ok(ValidateCallbackResult::Invalid(
            "No linked_devices zome was configured but there are linked devices in the RoleToAssignee link tag.".to_string(),
        ));
        };
        for linked_device in linked_devices.linked_devices {
            let result = validate_agent_has_linked_device(
                &assignee,
                &linked_devices.assignee_chain_top,
                &linked_device,
                linked_devices_integrity_zome_name.clone(),
            )?;
            let ValidateCallbackResult::Valid = result else {
                return Ok(ValidateCallbackResult::Invalid(
            "Device in the linked_devices of the RoleToAssignee link tag has not linked devices.".to_string(),
        ));
            };
        }
    }

    if let RoleToAssigneeLinkMode::ProgenitorClaimingAdminAtInit = tag.mode {
        if tag.role.as_str() != ADMIN_ROLE {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "ProgenitorClaimingAdminAtInit link for some role other than admin."
            )));
        }

        let progenitors = progenitors(())?;
        let author_is_progenitor = progenitors.contains(&action.author);

        if !author_is_progenitor {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "ProgenitorClaimingAdminAtInit link was not authored by a progenitor"
            )));
        }

        let assignee_is_author = assignee.eq(&action.author);

        if !assignee_is_author {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "ProgenitorClaimingAdminAtInit link was not assigned to themselves"
            )));
        }

        let activity =
            must_get_agent_activity(action.author.clone(), ChainFilter::new(action_hash.clone()))?;

        let previous_admin_role_assigment_for_this_progenitor = activity
            .iter()
            .filter(|activity| activity.action.action_address().ne(&action_hash))
            .find(|activity| match activity.action.action() {
                Action::CreateLink(create_link) => {
                    let Ok(Some(LinkTypes::RoleToAssignee)) =
                        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
                    else {
                        return false;
                    };

                    let Some(previous_assignee) =
                        create_link.target_address.clone().into_agent_pub_key()
                    else {
                        return false;
                    };
                    let Ok(role) = String::from_utf8(create_link.tag.0.clone()) else {
                        return false;
                    };

                    role.as_str() == ADMIN_ROLE && previous_assignee.eq(&assignee)
                }
                _ => false,
            });

        if previous_admin_role_assigment_for_this_progenitor.is_some() {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "Progenitors can only assign the admin role to itself once.",
            )));
        }
        Ok(ValidateCallbackResult::Valid)
    } else {
        let was_admin = validate_agent_was_admin_at_the_time(&action.author, action_hash)?;

        let ValidateCallbackResult::Valid = was_admin else {
            return Ok(was_admin);
        };
        Ok(ValidateCallbackResult::Valid)
    }
}

pub fn validate_delete_link_role_to_assignee(
    _action_hash: ActionHash,
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(assignee) = original_action.target_address.into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee must point to an AgentPubKey.",
        )));
    };

    let previous_record = must_get_valid_record(action.prev_action)?;
    let Action::Create(create) = previous_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an AllRoleClaimsDeletedProof entry.")
        ));
    };

    let all_role_claims_deleted_proof_entry_type: EntryType =
        UnitEntryTypes::AllRoleClaimsDeletedProof.try_into()?;

    if create
        .entry_type
        .ne(&all_role_claims_deleted_proof_entry_type)
    {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an entry of type AllRoleClaimsDeletedProof.")
        ));
    }

    let Some(entry) = previous_record.entry().as_option() else {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an AllRoleClaimsDeletedProof entry that is not None.")
        ));
    };

    let all_role_claims_deleted_proof = AllRoleClaimsDeletedProof::try_from(entry.clone())?;

    if all_role_claims_deleted_proof
        .assign_role_create_link_hash
        .ne(&action.link_add_address)
    {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an AllRoleClaimsDeletedProof entry that references it.")
        ));
    }

    let agents_deleted_in_proof: Vec<AgentPubKey> = all_role_claims_deleted_proof
        .role_claims_delete_links_hashes
        .into_keys()
        .map(|pub_key| AgentPubKey::from(pub_key))
        .collect();

    if !agents_deleted_in_proof.contains(&action.author) {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link can only be committed by one of the devices that is providing the proof.")
        ));
    }

    if !agents_deleted_in_proof.contains(&assignee)
        && !all_role_claims_deleted_proof
            .lost_agents
            .contains(&assignee)
    {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link can only be committed by one of the devices for the assignee.")
        ));
    }

    Ok(ValidateCallbackResult::Valid)
}
