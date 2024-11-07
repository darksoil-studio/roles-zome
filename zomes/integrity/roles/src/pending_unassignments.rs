use hdi::prelude::*;
use linked_devices_types::validate_agents_have_linked_devices;
use roles_types::PendingUnassignmentLinkTag;

use crate::{
    linked_devices::linked_devices_integrity_zome_name, utils::deserialize_tag,
    validate_agent_was_admin_at_the_time, LinkTypes, RoleToAssigneeLinkTag,
};

/// Validates links created for unassignments pending (agents that should delete their claims to roles)
pub fn validate_create_link_pending_unassignments(
    action_hash: &ActionHash,
    action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let tag: PendingUnassignmentLinkTag = deserialize_tag(tag)?;

    if tag.all_agents_for_assignee.len() == 0 {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Invalid PendingUnassignmentLinkTag: all_agents_for_assignee was empty"
        )));
    }

    if let Some(linked_devices_integrity_zome_name) = linked_devices_integrity_zome_name() {
        let result = validate_agents_have_linked_devices(
            &tag.all_agents_for_assignee,
            linked_devices_integrity_zome_name.clone(),
        )?;
        let ValidateCallbackResult::Valid = result else {
            return Ok(result);
        };
    }

    let Some(role_to_assignee) = target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "No ActionHash associated with a PendingUnassigment link"
        )));
    };

    let role_to_assignee_record = must_get_valid_record(role_to_assignee)?;

    let Action::CreateLink(create_link) = role_to_assignee_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Invalid PendingUnassignments target: does not point to a CreateLink"
        )));
    };
    let Ok(Some(LinkTypes::RoleToAssignee)) =
        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
    else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Invalid PendingUnassignments target: points to a CreateLink that's not of type RoleToAssignee"
        )));
    };

    let was_admin = validate_agent_was_admin_at_the_time(&action.author, action_hash)?;

    let ValidateCallbackResult::Valid = was_admin else {
        return Ok(was_admin);
    };
    Ok(ValidateCallbackResult::Valid)
}

///Validates deletions of the pending unassignment links (link integrity and that assignees must be the ones to unassign and delete)
pub fn validate_delete_link_pending_unassigments(
    action_hash: ActionHash,
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(role_to_assignee_create_link_hash) = original_action.target_address.into_action_hash()
    else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "PendingUnassignments link must point to an ActionHash",
        )));
    };

    let tag: PendingUnassignmentLinkTag = deserialize_tag(tag)?;

    let previous_record = must_get_valid_record(action.prev_action)?;
    let Action::DeleteLink(delete_link) = previous_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(String::from("Delete PendingUnassignment link must be committed immediately after deleting RoleToAssignee link")));
    };
    if delete_link.author.ne(&action.author) {
        return Ok(ValidateCallbackResult::Invalid(String::from("Delete PendingUnassignment link must be committed immediately after deleting RoleToAssignee link by the same author")));
    }

    let role_to_assignee_record = must_get_valid_record(delete_link.link_add_address.clone())?;
    let Action::CreateLink(role_to_assignee_create_link) = role_to_assignee_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(String::from("Unreachable: delete_link.add_link_address points to a record that is not a CreateLink action.")));
    };

    let Ok(Some(LinkTypes::RoleToAssignee)) = LinkTypes::from_type(
        role_to_assignee_create_link.zome_index,
        role_to_assignee_create_link.link_type,
    ) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The previous DeleteLink does not delete a RoleToAssignee link.",
        )));
    };

    let role_to_assignee_tag: RoleToAssigneeLinkTag =
        deserialize_tag(role_to_assignee_create_link.tag.clone())?;

    if role_to_assignee_tag.role.ne(&tag.role) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The role in the RoleToAssignee link pointed to by the previous DeleteLink is not the same role as the PendingUnassignment link role",
        )));
    }

    if delete_link
        .link_add_address
        .ne(&role_to_assignee_create_link_hash)
    {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The RoleToAssignee link create hash pointed to by the previous DeleteLink is not the same role as the one in the PendingUnassignment link being deleted",
        )));
    }

    Ok(ValidateCallbackResult::Valid)
}
