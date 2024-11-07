use std::collections::BTreeMap;

use hdi::prelude::*;
use linked_devices_types::{
    validate_agents_have_linked_devices, AGENT_TO_LINKED_DEVICES_LINK_INDEX,
};
use roles_types::PendingUnassignmentLinkTag;

use crate::{
    linked_devices::{linked_devices_integrity_zome_index, linked_devices_integrity_zome_name},
    utils::deserialize_tag,
    LinkTypes,
};

/// AllRoleClaimsDeletedProof struct
///
/// This is only created to allow for the validation of the PendingUnassignment link to pass.
/// When an assignee is requested to have a certain role unassigned, a PendingUnassignment link
/// gets created targetting the initial RoleToAssignee create link hash, with a list of all the linked devices agents
/// for the assignee in the tag. This is to make it visible to everyone that those agents
/// have not completed the request and still have the RoleClaims in their source chain which enable them to perform
/// actions for that role.
///
/// To delete the RoleToAssignee and PendingUnassignment link, the assignee has to proof to validators that they have deleted the
/// AssigneeRoleClaims for the given role for **all their devices**. In practice this means they have to start their
/// conductor and have it automatically perform that `DeleteLink` for them.
///
/// If the assignee has lost control of any of their devices, they have to declare them as lost here.
/// With this, their are promising they won't commit any further action with them in the future.
///
/// In the future, we'd like to be able to use `key_state()` from DPKI to validate that the status of the
/// lost agents keys is Invalid, which means the assignee has revoked those keys in DPKI.
/// Since that's not available, for now all agents in this DHT will automatically block the lost agents.
#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct AllRoleClaimsDeletedProof {
    pub assign_role_create_link_hash: ActionHash,
    pub pending_unassignment_create_link_hash: ActionHash,
    // This will point to the `DeleteLinks` actions for the AssigneeRoleClaim links for all the agents
    // associated with the initial assignee for the role
    pub role_claims_delete_links_hashes: BTreeMap<AgentPubKey, ActionHash>,
    pub lost_agents: Vec<AgentPubKey>,
}

// Validate the creation of an AllRoleClaimsDeletedProof
pub fn validate_create_all_role_claims_deleted_proof(
    _action_hash: ActionHash,
    action: EntryCreationAction,
    all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    if !all_role_claims_deleted_proof
        .role_claims_delete_links_hashes
        .contains_key(action.author())
    {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The author's RoleClaim delete hash was not inclued in `role_claims_deletes_hashes`"
        )));
    }

    if let Some(linked_devices_integrity_zome_name) = linked_devices_integrity_zome_name() {
        // TODO: should we also check whether the lost_agents have linked devices?
        let result = validate_agents_have_linked_devices(
            &all_role_claims_deleted_proof
                .role_claims_delete_links_hashes
                .clone()
                .into_iter()
                .collect(),
            linked_devices_integrity_zome_name.clone(),
        )?;
        let ValidateCallbackResult::Valid = result else {
            return Ok(result);
        };
    }

    let mut all_agents_referenced_in_the_chains: BTreeSet<AgentPubKey> = BTreeSet::new();

    let pending_unassignment_record =
        must_get_valid_record(all_role_claims_deleted_proof.pending_unassignment_create_link_hash)?;
    let Action::CreateLink(pending_unassignment_create_link) = pending_unassignment_record.action()
    else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The pending_unassignment_create_link_hash does not point to a CreateLink"
        )));
    };
    let Ok(Some(LinkTypes::PendingUnassignments)) = LinkTypes::from_type(
        pending_unassignment_create_link.zome_index,
        pending_unassignment_create_link.link_type,
    ) else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The pending_unassignment_create_link_hash does not point to a CreateLink with a PendingUnassigment link type"
        )));
    };

    let tag: PendingUnassignmentLinkTag =
        deserialize_tag(pending_unassignment_create_link.tag.clone())?;

    for (agent, _) in tag.all_agents_for_assignee {
        all_agents_referenced_in_the_chains.insert(agent.clone());
    }

    for (agent, delete_role_claim_hash) in all_role_claims_deleted_proof
        .role_claims_delete_links_hashes
        .clone()
    {
        let delete_role_claim_record = must_get_valid_record(delete_role_claim_hash.clone())?;
        let Action::DeleteLink(delete_link) = delete_role_claim_record.action().clone() else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} does not point to a DeleteLink action"               
            )));
        };
        let role_claim_record = must_get_valid_record(delete_link.link_add_address)?;
        let Action::CreateLink(role_claim_create_link) = role_claim_record.action().clone() else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} points to a DeleteLink action that is not for a CreateLink action"
            )));
        };

        let Ok(Some(LinkTypes::AssigneeRoleClaim)) = LinkTypes::from_type(
            role_claim_create_link.zome_index,
            role_claim_create_link.link_type,
        ) else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} points to a DeleteLink action that is not for a CreateLink with link type AssigneeRoleClaim"
            )));
        };

        let Some(target_role_to_assignee_link_hash) =
            role_claim_create_link.target_address.into_action_hash()
        else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "Unreachable: AssigneeRoleClaim does not point to an ActionHash"
            )));
        };

        if target_role_to_assignee_link_hash
            .ne(&all_role_claims_deleted_proof.assign_role_create_link_hash)
        {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} points to a DeleteLink action that is for an AssigneeRoleClaim with different assign_role_create_link_hash other than the one in the AllRoleClaimsDeletedProof."
            )));
        }

        let Some(linked_devices_integrity_zome_index) = linked_devices_integrity_zome_index()?
        else {
            continue;
        };

        let filter = ChainFilter::new(delete_role_claim_hash);
        let activity_vec = must_get_agent_activity(agent.clone(), filter)?;

        for activity in activity_vec {
            let action = activity.action.hashed.content;

            // Check if this action is either a ProfileClaim or an AgentToProfile link
            // if so, add the references to all agents referenced in chains
            match action {
                Action::CreateLink(create_link) => {
                    if create_link.zome_index == linked_devices_integrity_zome_index
                        && create_link.link_type.0 == AGENT_TO_LINKED_DEVICES_LINK_INDEX
                    {
                        let linked_device = create_link
                            .target_address
                            .clone()
                            .into_agent_pub_key()
                            .ok_or(wasm_error!(WasmErrorInner::Guest(format!(
                                "Base of AgentToProfile link is not an agent"
                            ))))?;
                        all_agents_referenced_in_the_chains.insert(linked_device);
                    }
                }
                _ => {}
            }
        }
    }

    for agent_referenced in all_agents_referenced_in_the_chains {
        let has_delete_role_claim = all_role_claims_deleted_proof
            .role_claims_delete_links_hashes
            .contains_key(&agent_referenced);
        let is_declared_lost = all_role_claims_deleted_proof
            .lost_agents
            .iter()
            .find(|a| a.eq(&&agent_referenced))
            .is_some();
        if !has_delete_role_claim && !is_declared_lost {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The delete RoleClaim action hash for agent {agent_referenced:?} is missing."
            )));
        }
    }

    Ok(ValidateCallbackResult::Valid)
}

///Validate the update of an AllRoleClaimsDeletedProof
pub fn validate_update_all_role_claims_deleted_proof(
    _action: Update,
    _all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
    _original_action: EntryCreationAction,
    _original_all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "Role Claims cannot be updated".to_string(),
    ))
}

///Validate the deletion of an AllRoleClaimsDeletedProof
pub fn validate_delete_all_role_claims_deleted_proof(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "AllRoleClaimsDeletedProofs cannot be deleted".to_string(),
    ))
}
