use hdk::prelude::*;
use roles_integrity::{
    utils::{deserialize_tag, serialize_tag},
    AssigneeRoleClaimLinkTag, AssigneeToRoleLinkTag, LinkTypes,
};
use serde::de::DeserializeOwned;

use crate::{
    assignees::get_roles_for_assignee, role_claim::query_undeleted_role_claims,
    utils::create_link_relaxed,
};

#[hdk_extern]
pub fn reassign_roles_to_linked_device(linked_device: AgentPubKey) -> ExternResult<()> {
    let roles_for_linked_device = get_roles_for_assignee(linked_device.clone())?;
    let role_to_assignee_create_link_hashes_already_claimed_by_linked_device: Vec<ActionHash> =
        roles_for_linked_device
            .into_iter()
            .filter_map(|link| link.target.into_action_hash())
            .collect();

    let undeleted_role_claims_links = query_undeleted_role_claims()?;

    for undeleted_role_claim in undeleted_role_claims_links {
        let assignee_role_claim_tag: AssigneeRoleClaimLinkTag =
            deserialize_tag(undeleted_role_claim.tag)?;
        let Some(target_role_to_assignee_create_link_hash) =
            undeleted_role_claim.target.into_action_hash()
        else {
            continue;
        };

        if role_to_assignee_create_link_hashes_already_claimed_by_linked_device
            .contains(&target_role_to_assignee_create_link_hash)
        {
            continue;
        }

        let tag = AssigneeToRoleLinkTag {
            role: assignee_role_claim_tag.role,
            mode: roles_integrity::AssignmentMode::LinkedDeviceReassignment,
        };

        create_link_relaxed(
            linked_device.clone(),
            target_role_to_assignee_create_link_hash,
            LinkTypes::AssigneeToRole,
            serialize_tag(tag)?,
        )?;
    }

    Ok(())
}

pub fn call_local_zome<P, R>(
    zome_name: ZomeName,
    fn_name: FunctionName,
    payload: P,
) -> ExternResult<R>
where
    P: serde::Serialize + std::fmt::Debug,
    R: DeserializeOwned + std::fmt::Debug,
{
    let response = call_remote(
        agent_info()?.agent_latest_pubkey,
        zome_name.clone(),
        fn_name.clone(),
        None,
        payload,
    )?;

    match response {
        ZomeCallResponse::Ok(result) => {
            let result: R = result.decode().map_err(|err| wasm_error!(err))?;
            Ok(result)
        }
        _ => Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Failed to call {zome_name}/{fn_name}: {response:?}"
        )))),
    }
}

pub fn linked_devices_zome_name() -> Option<ZomeName> {
    match std::option_env!("LINKED_DEVICES_COORDINATOR_ZOME_NAME") {
        Some(zome_name) => Some(zome_name.into()),
        None => None,
    }
}

pub fn get_linked_devices_for(
    linked_devices_zome_name: ZomeName,
    agent: AgentPubKey,
) -> ExternResult<Vec<AgentPubKey>> {
    let links: Vec<Link> = call_local_zome(
        linked_devices_zome_name,
        "get_linked_devices_for_agent".into(),
        agent,
    )?;
    let agents: Vec<AgentPubKey> = links
        .into_iter()
        .filter_map(|link| link.target.into_agent_pub_key())
        .collect();
    Ok(agents)
}

pub fn query_my_linked_devices(
    linked_devices_zome_name: ZomeName,
) -> ExternResult<Vec<AgentPubKey>> {
    let links: Vec<Link> = call_local_zome(
        linked_devices_zome_name,
        "query_my_linked_devices".into(),
        (),
    )?;
    let agents: Vec<AgentPubKey> = links
        .into_iter()
        .filter_map(|link| link.target.into_agent_pub_key())
        .collect();
    Ok(agents)
}

pub fn get_all_my_agents() -> ExternResult<Vec<AgentPubKey>> {
    let my_pub_key = agent_info()?.agent_latest_pubkey;
    let mut my_agents = match linked_devices_zome_name() {
        Some(name) => query_my_linked_devices(name)?,
        None => vec![],
    };
    my_agents.push(my_pub_key);

    Ok(my_agents)
}
