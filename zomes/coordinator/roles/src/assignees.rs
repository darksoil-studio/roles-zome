use hdk::prelude::*;
use roles_integrity::{utils::serialize_tag, *};

use crate::{
    linked_devices::{get_linked_devices_for, linked_devices_zome_name},
    role_claim::{claim_roles_assigned_to_me, query_undeleted_role_claims_for_role},
};

/// Assigning roles to agents
#[hdk_extern]
pub fn assign_role(input: AssignRoleInput) -> ExternResult<Vec<ActionHash>> {
    let admin_role_claims = query_undeleted_role_claims_for_role(ADMIN_ROLE.into())?;

    if admin_role_claims.len() == 0 {
        claim_roles_assigned_to_me()?;
    }

    let path = role_path(&input.role)?;
    path.ensure()?;

    let actions_hashes = input
        .assignees
        .into_iter()
        .map(|assignee| assign_role_to(input.role.clone(), assignee))
        .collect::<ExternResult<Vec<ActionHash>>>()?;

    Ok(actions_hashes)
}

fn assign_role_to(role: String, assignee: AgentPubKey) -> ExternResult<ActionHash> {
    let linked_devices = match linked_devices_zome_name() {
        Some(zome_name) => {
            let assignee_activity = get_agent_activity(
                assignee.clone(),
                ChainQueryFilter::new(),
                ActivityRequest::Full,
            )?;
            let (_, chain_top) = assignee_activity.valid_activity.last().ok_or(wasm_error!(
                WasmErrorInner::Guest(format!("This agent has no source chain activity"))
            ))?;

            let linked_devices = get_linked_devices_for(zome_name, assignee.clone())?;
            Some(AssigneeLinkedDevices {
                assignee_chain_top: chain_top.clone(),
                linked_devices,
            })
        }
        None => None,
    };

    let tag = RoleToAssigneeLinkTag {
        role: role.clone(),
        linked_devices: linked_devices.clone(),
        mode: RoleToAssigneeLinkMode::AdminAssigningNormalRole,
    };

    let path = role_path(&role)?;
    let role_to_assignee_create_link = create_link(
        path.path_entry_hash()?,
        assignee.clone(),
        LinkTypes::RoleToAssignee,
        serialize_tag(tag)?,
    )?;

    let tag = AssigneeToRoleLinkTag {
        role,
        mode: AssignmentMode::AdminAssignment,
    };
    let link_tag = serialize_tag(tag)?;
    create_link(
        assignee.clone(),
        role_to_assignee_create_link.clone(),
        LinkTypes::AssigneeToRole,
        link_tag.clone(),
    )?;
    if let Some(linked_devices) = linked_devices {
        for linked_device in linked_devices.linked_devices {
            create_link(
                linked_device.clone(),
                role_to_assignee_create_link.clone(),
                LinkTypes::AssigneeToRole,
                link_tag.clone(),
            )?;
        }
    }

    Ok(role_to_assignee_create_link)
}

///Get all agents that have been assigned a role
#[hdk_extern]
pub fn get_assignees_for_role(role: String) -> ExternResult<Vec<Link>> {
    let path = role_path(&role)?;

    let links = get_links(
        GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::RoleToAssignee)?.build(),
    )?;
    Ok(links)
}

///Get all roles that have been assigned to the given agent  
#[hdk_extern]
pub fn get_roles_for_assignee(assignee: AgentPubKey) -> ExternResult<Vec<Link>> {
    get_links(GetLinksInputBuilder::try_new(assignee, LinkTypes::AssigneeRoleClaim)?.build())
}

#[hdk_extern]
pub fn get_all_roles() -> ExternResult<Vec<Link>> {
    let all_roles_path = all_roles_path()?;
    all_roles_path.children()
}

pub fn get_all_roles_strings() -> ExternResult<Vec<String>> {
    let all_roles_path = all_roles_path()?;
    let children_paths = all_roles_path.children_paths()?;

    let roles = children_paths
        .into_iter()
        .map(|path| {
            let components: Vec<Component> = path.path.into();
            let Some(component) = components.last() else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid path: no components"
                ))));
            };

            let component_str = String::try_from(component).map_err(|_err| {
                wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid path: last component is not a string"
                )))
            })?;
            Ok(component_str)
        })
        .collect::<ExternResult<Vec<String>>>()?;

    Ok(roles)
}
