use hdk::prelude::*;
use roles_integrity::{
    utils::{deserialize_tag, serialize_tag},
    AssigneeRoleClaimLinkTag, *,
};

use crate::{
    assignees::get_roles_for_assignee,
    linked_devices::{linked_devices_zome_name, query_my_linked_devices},
    utils::{create_link_relaxed, create_link_to_link, delete_link_relaxed},
};

pub fn get_assignee_to_role_links_for(agent: AgentPubKey) -> ExternResult<Vec<Link>> {
    get_links(GetLinksInputBuilder::try_new(agent, LinkTypes::AssigneeToRole)?.build())
}

/** If I am assigned to the role but haven't claimed it, do so */
pub fn claim_roles_assigned_to_me() -> ExternResult<()> {
    let my_pub_key = agent_info()?.agent_latest_pubkey;
    let links = get_assignee_to_role_links_for(my_pub_key)?;

    let role_claim_creates = query_role_claim_creates()?;
    let claimed_assign_role_create_links_hashes: Vec<ActionHash> = role_claim_creates
        .into_iter()
        .filter_map(|create_link| create_link.target.into_action_hash())
        .collect();

    for link in links {
        let Some(target_assign_role_create_link_hash) = link.target.into_action_hash() else {
            delete_link_relaxed(link.create_link_hash)?;
            continue;
        };

        let already_created =
            claimed_assign_role_create_links_hashes.contains(&target_assign_role_create_link_hash);

        if !already_created {
            info!("Link for for a new role assigned to me found: creating role claim.");

            let tag_bytes = SerializedBytes::from(UnsafeBytes::from(link.tag.clone().into_inner()));

            let Ok(tag) = AssigneeToRoleLinkTag::try_from(tag_bytes) else {
                return Err(wasm_error!(
                    "RoleToAssignee links must contain the role in their LinkTag.",
                ));
            };

            create_role_claim(
                tag.role,
                link.create_link_hash.clone(),
                target_assign_role_create_link_hash,
            )?;
        }

        delete_link_relaxed(link.create_link_hash)?;
    }

    Ok(())
}

pub fn create_role_claim(
    role: String,
    assignee_to_role_create_link_hash: ActionHash,
    role_to_assignee_create_link_hash: ActionHash,
) -> ExternResult<()> {
    info!("Creating role claim for role {role}.");
    let my_pub_key = agent_info()?.agent_latest_pubkey;

    let tag = AssigneeRoleClaimLinkTag {
        role,
        mode: AssigneeRoleClaimLinkMode::AdminAssigningRole {
            assignee_to_role_create_link_hash,
        },
    };
    let bytes = SerializedBytes::try_from(tag).map_err(|err| wasm_error!(err))?;
    create_link_relaxed(
        my_pub_key,
        role_to_assignee_create_link_hash,
        LinkTypes::AssigneeRoleClaim,
        bytes.bytes().to_vec(),
    )?;
    Ok(())
}

pub fn assign_my_roles_to_linked_devices_which_havent_claimed_it_yet() -> ExternResult<()> {
    let Some(linked_devices_zome_name) = linked_devices_zome_name() else {
        return Ok(());
    };

    let undeleted_role_claims = query_undeleted_role_claims()?;
    let my_devices = query_my_linked_devices(linked_devices_zome_name)?;

    for device in my_devices {
        let roles_for_device = get_roles_for_assignee(device.clone())?;
        let role_to_assignees_claimed_for_devices: Vec<ActionHash> = roles_for_device
            .into_iter()
            .filter_map(|link| link.target.into_action_hash())
            .collect();

        for undeleted_role_claim in &undeleted_role_claims {
            let Some(my_undeleted_role_to_assignee_create_link_hash) =
                undeleted_role_claim.target.clone().into_action_hash()
            else {
                continue;
            };

            if role_to_assignees_claimed_for_devices
                .contains(&my_undeleted_role_to_assignee_create_link_hash)
            {
                continue;
            }
            let tag: AssigneeRoleClaimLinkTag = deserialize_tag(undeleted_role_claim.tag.clone())?;

            let assignee_to_role_tag = AssigneeToRoleLinkTag {
                role: tag.role.clone(),
                mode: AssignmentMode::LinkedDeviceReassignment,
            };
            create_link_relaxed(
                device.clone(),
                my_undeleted_role_to_assignee_create_link_hash,
                LinkTypes::AssigneeToRole,
                serialize_tag(assignee_to_role_tag)?,
            )?;
        }
    }

    Ok(())
}

fn query_role_claim_creates() -> ExternResult<Vec<Link>> {
    let filter = ChainQueryFilter::new().action_type(ActionType::CreateLink);
    let records = query(filter)?;

    let role_claim_creates: Vec<Link> = records
        .into_iter()
        .filter_map(|record| match record.action() {
            Action::CreateLink(create_link) => {
                let Ok(Some(LinkTypes::AssigneeRoleClaim)) =
                    LinkTypes::from_type(create_link.zome_index, create_link.link_type)
                else {
                    return None;
                };

                Some(create_link_to_link(
                    record.action_address().clone(),
                    create_link.clone(),
                ))
            }
            _ => None,
        })
        .collect();
    Ok(role_claim_creates)
}

pub fn query_undeleted_role_claims() -> ExternResult<Vec<Link>> {
    let creates_for_role_claims = query_role_claim_creates()?;
    let filter = ChainQueryFilter::new().action_type(ActionType::DeleteLink);
    let delete_records = query(filter)?;

    let all_deleted_hashes = delete_records
        .into_iter()
        .map(|r| match r.action() {
            Action::DeleteLink(d) => Ok(d.link_add_address.clone()),
            _ => Err(wasm_error!("Invalid DeleteLink action")),
        })
        .collect::<ExternResult<Vec<ActionHash>>>()?;

    let undeleted_role_claims_creates = creates_for_role_claims
        .into_iter()
        .filter(|link| !all_deleted_hashes.contains(&link.create_link_hash))
        .collect();

    Ok(undeleted_role_claims_creates)
}

///Find undeleted role claims for a role
#[hdk_extern]
pub fn query_undeleted_role_claims_for_role(role: String) -> ExternResult<Vec<Link>> {
    let undeleted_role_claims = query_undeleted_role_claims()?;

    let undeleted_claims_for_role = undeleted_role_claims
        .into_iter()
        .filter(|link| {
            let Ok(role_claim_link_tag) =
                deserialize_tag::<AssigneeRoleClaimLinkTag>(link.tag.clone())
            else {
                return false;
            };
            role_claim_link_tag.role.eq(&role)
        })
        .collect();

    Ok(undeleted_claims_for_role)
}
