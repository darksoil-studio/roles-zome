use hdk::prelude::*;
use roles_integrity::{
    utils::{deserialize_tag, serialize_tag},
    *,
};

use crate::{
    assignees::get_roles_for_assignee,
    linked_devices::{
        get_all_my_agents, get_linked_devices_for, linked_devices_zome_name,
        query_my_linked_devices,
    },
    role_claim::{claim_roles_assigned_to_me, query_undeleted_role_claims_for_role},
    utils::{create_link_relaxed, delete_link_relaxed},
};

///Generating path to pending_unassignments
fn pending_unassignments_path() -> Path {
    Path::from("pending_unassignments")
}

/// Creating requests for people to unassign roles
#[hdk_extern]
pub fn request_unassign_role(input: RequestUnassignRoleInput) -> ExternResult<()> {
    let admin_role_claims = query_undeleted_role_claims_for_role(ADMIN_ROLE.into())?;

    if admin_role_claims.len() == 0 {
        claim_roles_assigned_to_me()?;
    }

    let Some(role_to_assignee_link) = get(
        input.role_to_assignee_create_link_hash.clone(),
        GetOptions::default(),
    )?
    else {
        return Err(wasm_error!("RoleToAssignee link not found."));
    };

    let Action::CreateLink(role_to_assignee_create_link) = role_to_assignee_link.action() else {
        return Err(wasm_error!(
            "Invalid RoleToAssignee link hash: not a CreateLink action."
        ));
    };

    let Some(assignee) = role_to_assignee_create_link
        .target_address
        .clone()
        .into_agent_pub_key()
    else {
        return Err(wasm_error!(
            "Invalid RoleToAssignee link hash: does not point to an AgentPubKey."
        ));
    };

    let mut all_agents = match linked_devices_zome_name() {
        Some(linked_devices_zome_name) => {
            get_linked_devices_for(linked_devices_zome_name, assignee.clone())?
        }
        None => vec![],
    };

    all_agents.push(assignee);

    let agents_with_chain_tops = all_agents
        .into_iter()
        .map(|agent| {
            let activity = get_agent_activity(
                agent.clone(),
                ChainQueryFilter::new(),
                ActivityRequest::Full,
            )?;
            let (_, chain_top) = activity
                .valid_activity
                .last()
                .ok_or(wasm_error!("This agent has no source chain activity."))?;
            Ok((agent, chain_top.clone()))
        })
        .collect::<ExternResult<Vec<(AgentPubKey, ActionHash)>>>()?;

    let tag = PendingUnassignmentLinkTag {
        role: input.role,
        all_agents_for_assignee: agents_with_chain_tops,
    };
    create_link(
        pending_unassignments_path().path_entry_hash()?,
        input.role_to_assignee_create_link_hash.clone(),
        LinkTypes::PendingUnassignments,
        serialize_tag(tag)?,
    )?;

    Ok(())
}

/** If I have a PendingUnassignment link for me but I still have an undeleted RoleClaim for it, delete the role claim */
pub fn unassign_pending_unassignments() -> ExternResult<()> {
    let pending_unassignment_links_for_me = get_pending_unassignment_links_for_me()?;

    for my_pending_unassignment_link in pending_unassignment_links_for_me {
        info!("Found a pending unassignment for one of my roles.");
        unassign_my_role(my_pending_unassignment_link)?;
    }

    Ok(())
}

pub fn get_pending_unassignment_links_for_me() -> ExternResult<Vec<Link>> {
    let links = get_pending_unassignments(())?;

    let my_agents = get_all_my_agents()?;

    let links = links
        .into_iter()
        .filter(|link| {
            let Ok(tag) = deserialize_tag::<PendingUnassignmentLinkTag>(link.tag.clone()) else {
                return false;
            };

            tag.all_agents_for_assignee
                .into_iter()
                .find(|(agent, _)| my_agents.contains(agent))
                .is_some()
        })
        .collect();

    Ok(links)
}

pub fn unassign_my_role(my_pending_unassignment_link: Link) -> ExternResult<()> {
    let Some(pending_unassignment_role_to_assignee_create_link_hash) = my_pending_unassignment_link
        .target
        .clone()
        .into_action_hash()
    else {
        return Err(wasm_error!(
            "Invalid PendingUnassignment link: target is not an ActionHash."
        ));
    };
    let tag: PendingUnassignmentLinkTag =
        deserialize_tag(my_pending_unassignment_link.tag.clone())?;

    let role_claims = query_undeleted_role_claims_for_role(tag.role.clone())?;

    let role_claims_to_delete: Vec<Link> = role_claims
        .into_iter()
        .filter(|link| {
            let Some(role_to_assignee_create_link_hash) = link.target.clone().into_action_hash()
            else {
                return false;
            };
            role_to_assignee_create_link_hash
                .eq(&pending_unassignment_role_to_assignee_create_link_hash)
        })
        .collect();

    if role_claims_to_delete.len() == 0 {
        info!("Tried to unassign a role that I don't have a claim for.");
        return Ok(());
    }

    // Just before deleting our RoleClaim, create any leftover AssigneeToRole link
    // for any of our devices that haven't claimed this role yet
    // This is to prevent a deadlock in which the other device has not yet claimed the role
    // yet we need to proof that all our devices have deleted it
    if let Some(linked_devices_zome_name) = linked_devices_zome_name() {
        let my_devices = query_my_linked_devices(linked_devices_zome_name)?;
        for device in &my_devices {
            let roles_for_device = get_roles_for_assignee(device.clone())?;
            let role_to_assignees_claimed_for_devices: Vec<ActionHash> = roles_for_device
                .into_iter()
                .filter_map(|link| link.target.into_action_hash())
                .collect();

            for role_claim_to_delete in &role_claims_to_delete {
                let Some(role_to_assignee_create_link_hash_for_role_claim_to_delete) =
                    role_claim_to_delete.target.clone().into_action_hash()
                else {
                    continue;
                };
                let device_already_claimed_this_role = role_to_assignees_claimed_for_devices
                    .contains(&role_to_assignee_create_link_hash_for_role_claim_to_delete);

                if !device_already_claimed_this_role {
                    let assignee_to_role_tag = AssigneeToRoleLinkTag {
                        role: tag.role.clone(),
                        mode: AssignmentMode::LinkedDeviceReassignment,
                    };
                    create_link_relaxed(
                        device.clone(),
                        role_to_assignee_create_link_hash_for_role_claim_to_delete,
                        LinkTypes::AssigneeToRole,
                        serialize_tag(assignee_to_role_tag)?,
                    )?;
                }
            }
        }
    }

    for role_claim_to_delete in role_claims_to_delete {
        delete_link_relaxed(role_claim_to_delete.create_link_hash.clone())?;
        info!("Unassigning role: deleted role claim link.");
    }

    Ok(())
}

///Get pending unassignments to see if I should unassign of if someone should but haven't
#[hdk_extern]
pub fn get_pending_unassignments() -> ExternResult<Vec<Link>> {
    get_links(
        GetLinksInputBuilder::try_new(
            pending_unassignments_path().path_entry_hash()?,
            LinkTypes::PendingUnassignments,
        )?
        .build(),
    )
}
