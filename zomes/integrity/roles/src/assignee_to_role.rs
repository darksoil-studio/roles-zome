use hdi::prelude::*;
use roles_types::ROLE_CLAIM_LINK_TYPE_INDEX;

use crate::{validate_agent_was_admin_at_the_time, LinkTypes, RoleToAssigneeLinkTag};

// #[derive(Serialize, Deserialize, Debug, SerializedBytes)]
// pub struct AssigneeLinkedDevices {
//     assignee_chain_top: ActionHash,
//     linked_devices: Vec<AgentPubKey>,
// }

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub enum AssignmentMode {
    AdminAssignment,
    LinkedDeviceReassignment,
}

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct AssigneeToRoleLinkTag {
    pub role: String,
    pub mode: AssignmentMode,
}

pub fn validate_create_link_assignee_to_role(
    action_hash: &ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(tag.clone().into_inner()));

    let Ok(assignee_to_role_tag) = AssigneeToRoleLinkTag::try_from(tag_bytes) else {
        return Err(wasm_error!(
            "RoleToAssignee links must contain the role in their LinkTag.",
        ));
    };

    let Some(assignee) = base_address.into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No entry hash associated with the base of the link.".to_string(),
        ));
    };

    // Check the entry type for the given action hash
    let Some(role_to_assignee_create_link_hash) = target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No ActionHash associated with the target of an AssigneeToRole link.".to_string(),
        ));
    };

    let role_to_assignee_create_link_record =
        must_get_valid_record(role_to_assignee_create_link_hash.clone())?;
    let Action::CreateLink(role_to_assignee_create_link) =
        role_to_assignee_create_link_record.action()
    else {
        return Ok(ValidateCallbackResult::Invalid(
            "Target of an AssigneeToRole link is not a CreateLink".to_string(),
        ));
    };
    let Some(LinkTypes::RoleToAssignee) = LinkTypes::from_type(
        role_to_assignee_create_link.zome_index,
        role_to_assignee_create_link.link_type,
    )?
    else {
        return Ok(ValidateCallbackResult::Invalid(
            "Target of an AssigneeToRole link is not a RoleToAssignee link".to_string(),
        ));
    };

    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(
        role_to_assignee_create_link.tag.clone().into_inner(),
    ));

    let Ok(role_to_assignee_tag) = RoleToAssigneeLinkTag::try_from(tag_bytes) else {
        return Err(wasm_error!(
            "RoleToAssignee links must contain the role in their LinkTag.",
        ));
    };

    if role_to_assignee_tag.role.ne(&assignee_to_role_tag.role) {
        return Err(wasm_error!(
            "Role in the RoleToAssignee link tag is not the same as the role in the AssigneeToRole link tag.",
        ));
    }

    // Either this link was committed by the admin and the assignee must be in the list of linked devices in the RoleToAssignee link tag,
    // Or it was committed by a linked-device with a valid RoleClaim for this assign_role_create_link_hash

    match assignee_to_role_tag.mode {
        AssignmentMode::AdminAssignment => {
            let was_admin = validate_agent_was_admin_at_the_time(&action.author, action_hash)?;

            let ValidateCallbackResult::Valid = was_admin else {
                return Ok(was_admin);
            };

            let Some(role_to_assignee_target) = role_to_assignee_create_link
                .target_address
                .clone()
                .into_agent_pub_key()
            else {
                return Ok(ValidateCallbackResult::Invalid(format!(
                    "Unreachable: target of a RoleToAssignee link is not an AgentPubKey"
                )));
            };

            if assignee.ne(&role_to_assignee_target) {
                let Some(linked_devices) = role_to_assignee_tag.linked_devices else {
                    return Ok(ValidateCallbackResult::Invalid(format!("Assignee for AssigneeToRole link is not the same as the RoleToAssignee one")))  ;
                };

                let assignee_in_linked_devices = linked_devices
                    .linked_devices
                    .iter()
                    .find(|linked_device| linked_device.eq(&&assignee));

                if assignee_in_linked_devices.is_none() {
                    return Ok(ValidateCallbackResult::Invalid(format!("Assignee for AssigneeToRole link is not in the linked devices for the RoleToAssignee link tag")))  ;
                }
            }

            Ok(ValidateCallbackResult::Valid)
        }
        AssignmentMode::LinkedDeviceReassignment => {
            let result = validate_agent_had_undeleted_role_claim_at_the_time(
                &action.author,
                action_hash,
                role_to_assignee_create_link_hash,
            )?;
            let ValidateCallbackResult::Valid = result else {
                return Ok(result);
            };

            Ok(ValidateCallbackResult::Valid)
        }
    }
}

fn validate_agent_had_undeleted_role_claim_at_the_time(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    assign_role_create_link_hash: ActionHash,
) -> ExternResult<ValidateCallbackResult> {
    let filter = ChainFilter::new(chain_top.clone()).include_cached_entries();
    let activity = must_get_agent_activity(agent.clone(), filter)?;

    let deleted_hashes: Vec<ActionHash> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::DeleteLink(d) => Some(d.link_add_address.clone()),
            _ => None,
        })
        .collect();

    let roles_zome_index = zome_info()?.id;

    let undeleted_role_claim_creates: Vec<CreateLink> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::CreateLink(create_link) => {
                match deleted_hashes.contains(&activity.action.hashed.hash) {
                    true => None,
                    false => Some(create_link.clone()),
                }
            }
            _ => None,
        })
        .filter(|create_link| {
            create_link.zome_index.eq(&roles_zome_index)
                && create_link.link_type.0 == ROLE_CLAIM_LINK_TYPE_INDEX
        })
        .collect();

    for undeleted_create in undeleted_role_claim_creates {
        let Some(target_assign_role_create_link_hash) =
            undeleted_create.target_address.into_action_hash()
        else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "Unreachable: AgentRoleClaim did not have an ActionHash as its target"
            )));
        };

        if target_assign_role_create_link_hash.eq(&assign_role_create_link_hash) {
            return Ok(ValidateCallbackResult::Valid);
        }
    }

    return Ok(ValidateCallbackResult::Invalid(format!(
        "Agent did not have the RoleClaim for the RoleToAssignee link {assign_role_create_link_hash} at the time of committing the action",
    )));
}

pub fn validate_delete_link_assignee_to_role(
    _action_hash: ActionHash,
    action: DeleteLink,
    _original_action: CreateLink,
    base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(assignee) = base.into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No AgentPubKey associated with the base of the link".to_string(),
        ));
    };
    if action.author.ne(&assignee) {
        return Ok(ValidateCallbackResult::Invalid(
            "Only assignees can delete their own AssigneeToRole links".to_string(),
        ));
    }

    Ok(ValidateCallbackResult::Valid)
}
