use hdi::prelude::*;
use linked_devices_types::validate_agent_has_linked_device;
pub use roles_types::validate_agent_had_undeleted_role_claim_at_the_time;
use roles_types::{AssigneeRoleClaimLinkMode, AssigneeRoleClaimLinkTag};

use crate::{
    linked_devices::linked_devices_integrity_zome_name, role_path, LinkTypes,
    RoleToAssigneeLinkMode, RoleToAssigneeLinkTag,
};

///Validate the creation of a role claim for an agent
pub fn validate_create_link_agent_role_claim(
    action_hash: &ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Only one undeleted RoleClaim for a certain role at any given point in time
    let Some(role_to_assignee_create_link_hash) = target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Target of an AgentRoleClaim link should be an action hash"
        )));
    };
    let Some(assignee) = base_address.into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Base of an AgentRoleClaim link should be an AgentPubKey"
        )));
    };

    if assignee.ne(&action.author) {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "AssignRoleClaim links must have their authors as base"
        )));
    }

    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(tag.clone().into_inner()));

    let Ok(assignee_role_claim_link_tag) = AssigneeRoleClaimLinkTag::try_from(tag_bytes) else {
        return Err(wasm_error!(
            "AssigneeRoleClaim links must contain an AssignRoleClaimLinkTag in their LinkTag.",
        ));
    };

    let result =
        validate_agent_has_not_previously_committed_a_role_claim_for_this_role_to_assignee_link(
            &action,
            &assignee_role_claim_link_tag,
        )?;
    let ValidateCallbackResult::Valid = result else {
        return Ok(result);
    };

    // Get the CreateLink for the assign_role_create_link_hash, and verify it's a link from the role to the assignee
    let role_to_assignee_link_record =
        must_get_valid_record(role_to_assignee_create_link_hash.clone())?;

    let role_to_assignee_link_action = role_to_assignee_link_record.action().clone();

    let Action::CreateLink(role_to_assignee_create_link) = role_to_assignee_link_action.clone()
    else {
        return Ok(ValidateCallbackResult::Invalid(format!("The assign_role_create_link_hash references a record that does not contain a CreateLink action")));
    };

    let role_to_assignee_base_address = role_to_assignee_create_link.base_address;

    let Some(actual_base_entry_hash) = role_to_assignee_base_address.into_entry_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No entry hash associated with the base of the link".to_string(),
        ));
    };
    let path = role_path(&assignee_role_claim_link_tag.role)?;
    let expected_role_path_entry_hash = path.path_entry_hash()?;

    if expected_role_path_entry_hash.ne(&actual_base_entry_hash) {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The base for the assign_role link does not match the expected role path entry hash"
        )));
    }

    let Some(link_type) = LinkTypes::from_type(
        role_to_assignee_create_link.zome_index,
        role_to_assignee_create_link.link_type,
    )?
    else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Invalid LinkType: not a roles link type"
        )));
    };

    let LinkTypes::RoleToAssignee = link_type else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Assign role link is not of type RoleToAssignee"
        )));
    };

    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(
        role_to_assignee_create_link.tag.clone().into_inner(),
    ));

    let Ok(role_to_assignee_link_tag) = RoleToAssigneeLinkTag::try_from(tag_bytes) else {
        return Err(wasm_error!(
            "RoleToAssignee links must contain a RoleToAssigneeLinkTag in their LinkTag.",
        ));
    };
    if role_to_assignee_link_tag
        .role
        .ne(&assignee_role_claim_link_tag.role)
    {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The tag of the RoleToAssignee link must be the same role as the role declared RoleClaim",
        )));
    }

    let Some(role_to_assignee_target_assignee) = role_to_assignee_create_link
        .target_address
        .into_agent_pub_key()
    else {
        return Ok(ValidateCallbackResult::Invalid(
            "No action hash associated with link".to_string(),
        ));
    };

    match assignee_role_claim_link_tag.mode {
        AssigneeRoleClaimLinkMode::ProgenitorClaimingAdminAtInit => {
            let RoleToAssigneeLinkMode::ProgenitorClaimingAdminAtInit =
                role_to_assignee_link_tag.mode
            else {
                return Ok(ValidateCallbackResult::Invalid(format!(
                    "AssigneeRoleClaim link with ProgenitorClaimingAdminAtInit mode points to a RoleToAssignee that does not have ProgenitorClaimingAdminAtInit mode"
                )));
            };
            Ok(ValidateCallbackResult::Valid)
        }
        AssigneeRoleClaimLinkMode::AdminAssigningRole {
            assignee_to_role_create_link_hash,
        } => {
            let assignee_to_role_record = must_get_valid_record(assignee_to_role_create_link_hash)?;

            let Action::CreateLink(assignee_to_role_create_link) = assignee_to_role_record.action()
            else {
                return Ok(ValidateCallbackResult::Invalid(format!("AssigneeRoleClaim contains in its tag an assignee_to_role_create_link_hash that does not point to a CreateLink")));
            };

            let Some(assignee_to_role_link_type) = LinkTypes::from_type(
                assignee_to_role_create_link.zome_index,
                assignee_to_role_create_link.link_type,
            )?
            else {
                return Ok(ValidateCallbackResult::Invalid(format!(
                    "Invalid LinkType: not a roles link type"
                )));
            };

            let LinkTypes::AssigneeToRole = assignee_to_role_link_type else {
                return Ok(ValidateCallbackResult::Invalid(format!(
                    "Assignee to role link is not of type AssigneeToRole"
                )));
            };

            let Some(target_role_to_assignee_in_assignee_to_role) = assignee_to_role_create_link
                .target_address
                .clone()
                .into_action_hash()
            else {
                return Ok(ValidateCallbackResult::Invalid(format!(
                    "AssigneeToRole link tag does not have an ActionHash as its target"
                )));
            };

            if target_role_to_assignee_in_assignee_to_role.ne(&role_to_assignee_create_link_hash) {
                return Ok(ValidateCallbackResult::Invalid(format!(
                    "AssigneeToRole link and AssigneeRoleClaim don't have the same target"
                )));
            }

            if role_to_assignee_target_assignee.eq(&action.author) {
                return Ok(ValidateCallbackResult::Valid);
            }

            if let Some(linked_devices) = role_to_assignee_link_tag.linked_devices {
                if linked_devices.linked_devices.contains(&action.author) {
                    return Ok(ValidateCallbackResult::Valid);
                }
            }
            if let Some(linked_devices_integrity_zome_name) = linked_devices_integrity_zome_name() {
                validate_agent_has_linked_device(
                    &action.author,
                    action_hash,
                    &assignee_to_role_create_link.author,
                    linked_devices_integrity_zome_name,
                )
            } else {
                return Ok(ValidateCallbackResult::Invalid(format!(
                    "The author of the AgentRoleClaim is not the assignee in the RoleToAssignee link"
                )));
            }
        }
    }
}

fn validate_agent_has_not_previously_committed_a_role_claim_for_this_role_to_assignee_link(
    action: &CreateLink,
    assignee_role_claim_link_tag: &AssigneeRoleClaimLinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(role_to_assignee_create_link_hash) = action.target_address.clone().into_action_hash()
    else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Target of an AgentRoleClaim link should be an action hash"
        )));
    };
    let filter = ChainFilter::new(action.prev_action.clone()).include_cached_entries();
    let activity = must_get_agent_activity(action.author.clone(), filter)?;

    let deleted_hashes: Vec<ActionHash> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::DeleteLink(d) => Some(d.link_add_address.clone()),
            _ => None,
        })
        .collect();

    let previous_role_claim_creates: Vec<(ActionHash, CreateLink)> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::CreateLink(create_link) => {
                Some((activity.action.hashed.hash.clone(), create_link.clone()))
            }
            _ => None,
        })
        .filter(|(_hash, create_link)| {
            match LinkTypes::from_type(create_link.zome_index, create_link.link_type) {
                Ok(Some(LinkTypes::AssigneeRoleClaim)) => true,
                _ => false,
            }
        })
        .collect();

    for (create_action_hash, previous_role_claim) in previous_role_claim_creates {
        let Some(previous_assign_role_create_link_hash) =
            previous_role_claim.target_address.into_action_hash()
        else {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "AgentRoleClaim must have an ActionHash as its target",
            )));
        };
        if previous_assign_role_create_link_hash.eq(&role_to_assignee_create_link_hash) {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "There already was a RoleClaim for this assign_role_create_link_hash.",
            )));
        }
        let tag_bytes = SerializedBytes::from(UnsafeBytes::from(
            previous_role_claim.tag.clone().into_inner(),
        ));

        let Ok(previous_assignee_role_claim_link_tag) =
            AssigneeRoleClaimLinkTag::try_from(tag_bytes)
        else {
            return Err(wasm_error!(
                "AssigneeRoleClaim links must contain an AssignRoleClaimLinkTag in their LinkTag.",
            ));
        };

        let is_deleted = deleted_hashes.contains(&create_action_hash);
        if !is_deleted {
            if previous_assignee_role_claim_link_tag
                .role
                .eq(&assignee_role_claim_link_tag.role)
            {
                return Ok(ValidateCallbackResult::Invalid(String::from(
                    "There already is an undeleted RoleClaim for this role.",
                )));
            }
        }
    }

    Ok(ValidateCallbackResult::Valid)
}

// fn validate_linked_agent_did_not_already_delete_this_role_claim(
//     profile_claim_hash: EntryHash,
//     assign_role_create_link_hash: ActionHash,
// ) -> ExternResult<ValidateCallbackResult> {
//     let profile_claim_entry = must_get_entry(profile_claim_hash)?;
//     let profile_claim = ProfileClaim::try_from(profile_claim_entry.content)?;

//     let create_link_hash = profile_claim.agent_to_profile_create_link_hash;

//     let agent_to_profile_link_record = must_get_valid_record(create_link_hash.clone())?;

//     let filter = ChainFilter::new(create_link_hash).include_cached_entries();
//     let activity = must_get_agent_activity(
//         agent_to_profile_link_record.action().author().clone(),
//         filter,
//     )?;

//     let role_claim_entry_type: EntryType = UnitEntryTypes::RoleClaim.try_into()?;

//     let role_claim_creates: Vec<(ActionHash, RoleClaim)> = activity
//         .iter()
//         .filter_map(|activity| match &activity.action.hashed.content {
//             Action::Create(create) => Some((activity.action.hashed.hash.clone(), create.clone())),
//             _ => None,
//         })
//         .filter(|(_hash, create)| create.entry_type.eq(&role_claim_entry_type))
//         .map(|(hash, create)| {
//             let entry = must_get_entry(create.entry_hash)?;
//             let role_claim = RoleClaim::try_from(entry)?;
//             Ok((hash, role_claim))
//         })
//         .collect::<ExternResult<Vec<(ActionHash, RoleClaim)>>>()?;

//     for (role_claim_create_action_hash, role_claim) in role_claim_creates {
//         if role_claim
//             .assign_role_create_link_hash
//             .ne(&assign_role_create_link_hash)
//         {
//             continue;
//         }
//         let deleted_actions: Vec<ActionHash> = activity
//             .iter()
//             .filter_map(|activity| match &activity.action.hashed.content {
//                 Action::Delete(d) => Some(d.deletes_address.clone()),
//                 _ => None,
//             })
//             .collect();
//         let role_claim_was_deleted = deleted_actions.contains(&role_claim_create_action_hash);

//         if role_claim_was_deleted {
//             return Ok(ValidateCallbackResult::Invalid(format!(
//                 "RoleClaim had already been deleted by the profile linked agent when they created the AgentToProfile link"
//             )));
//         }
//     }

//     Ok(ValidateCallbackResult::Valid)
// }

///Validates deletions of the AgentRoleClaim links
pub fn validate_delete_link_agent_role_claim(
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    if action.author.ne(&original_action.author) {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "AgentRoleClaim links can only be deleted by their own authors"
        )));
    }

    Ok(ValidateCallbackResult::Valid)
}
