use std::collections::BTreeMap;

use hdk::prelude::*;
use roles_integrity::{AllRoleClaimsDeletedProof, EntryTypes, LinkTypes};

use crate::{
    linked_devices::get_all_my_agents,
    unassignments::get_pending_unassignment_links_for_me,
    utils::{create_relaxed, delete_link_relaxed},
};

#[hdk_extern]
pub fn create_all_role_claims_deleted_proofs_if_possible() -> ExternResult<()> {
    let pending_unassignment_links_for_me = get_pending_unassignment_links_for_me()?;

    let my_delete_links = query(ChainQueryFilter::new().action_type(ActionType::DeleteLink))?;
    let my_deleted_links_hashes = my_delete_links
        .into_iter()
        .map(|record| match record.action() {
            Action::DeleteLink(delete_link) => Ok(delete_link.link_add_address.clone()),
            _ => Err(wasm_error!(WasmErrorInner::Guest(format!(
                "DeleteLink record does not include a DeleteLink"
            )))),
        })
        .collect::<ExternResult<Vec<ActionHash>>>()?;
    let undeleted_pending_unassignment_links_for_me: Vec<Link> = pending_unassignment_links_for_me
        .into_iter()
        .filter(|link| !my_deleted_links_hashes.contains(&link.create_link_hash))
        .collect();

    if undeleted_pending_unassignment_links_for_me.len() == 0 {
        // I have no pending unassignments: do nothing
        return Ok(());
    }

    let all_my_agents_activities = get_all_my_agents_role_claims_activities()?;

    for my_pending_unassignment_link in undeleted_pending_unassignment_links_for_me {
        create_all_role_claims_deleted_proof_if_possible(
            my_pending_unassignment_link,
            &all_my_agents_activities,
        )?;
    }
    Ok(())
}

pub fn get_all_my_agents_role_claims_activities(
) -> ExternResult<BTreeMap<AgentPubKey, AgentActivity>> {
    let all_my_agents = get_all_my_agents()?;
    let mut all_my_agents_activities: BTreeMap<AgentPubKey, AgentActivity> = BTreeMap::new();
    let creates_and_deletes_role_claims_query_filter = ChainQueryFilter::new()
        .action_type(ActionType::CreateLink)
        .action_type(ActionType::DeleteLink);

    for agent in all_my_agents {
        let activity = get_agent_activity(
            agent.clone(),
            creates_and_deletes_role_claims_query_filter.clone(),
            ActivityRequest::Full,
        )?;
        all_my_agents_activities.insert(agent, activity);
    }

    Ok(all_my_agents_activities)
}

/** If all my agents have deleted their role claim, create the AllRoleClaimsDeletedProof and delete the links */
pub fn create_all_role_claims_deleted_proof_if_possible(
    my_pending_unassignment_link: Link,
    all_my_agents_activity: &BTreeMap<AgentPubKey, AgentActivity>,
) -> ExternResult<()> {
    let Some(assign_role_create_link_hash) = my_pending_unassignment_link.target.into_action_hash()
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Invalid PendingUnassignment link: must have an ActionHash as its target"
        ))));
    };
    let mut role_claims_deletes_hashes: BTreeMap<AgentPubKey, ActionHash> = BTreeMap::new();
    for (agent, activity) in all_my_agents_activity {
        let maybe_role_claim_deletes =
            get_deleted_role_claim_for(activity, &assign_role_create_link_hash)?;
        let Some(role_claim_delete) = maybe_role_claim_deletes else {
            return Ok(());
        };
        role_claims_deletes_hashes.insert(agent.clone(), role_claim_delete);
    }

    let proof = AllRoleClaimsDeletedProof {
        assign_role_create_link_hash: assign_role_create_link_hash.clone(),
        pending_unassignment_create_link_hash: my_pending_unassignment_link
            .create_link_hash
            .clone(),
        role_claims_delete_links_hashes: role_claims_deletes_hashes,
        lost_agents: vec![],
    };
    create_relaxed(EntryTypes::AllRoleClaimsDeletedProof(proof))?;
    delete_link_relaxed(assign_role_create_link_hash)?;
    delete_link_relaxed(my_pending_unassignment_link.create_link_hash)?;

    Ok(())
}

fn get_deleted_role_claim_for(
    activity: &AgentActivity,
    assign_role_create_link_hash: &ActionHash,
) -> ExternResult<Option<ActionHash>> {
    let get_inputs: Vec<GetInput> = activity
        .valid_activity
        .iter()
        .map(|(_, action_hash)| GetInput::new(action_hash.clone().into(), GetOptions::default()))
        .collect();

    let maybe_records = HDK.with(|hdk| hdk.borrow().get_details(get_inputs))?;

    let records = maybe_records
        .into_iter()
        .map(|maybe_details| {
            let details = maybe_details.ok_or(wasm_error!(WasmErrorInner::Guest(format!(
                "Could not get Record for my agent activity"
            ))))?;
            let Details::Record(RecordDetails { record, .. }) = details else {
                return Err(wasm_error!(WasmErrorInner::Guest(String::from(
                    "get_details returned EntryDetails"
                ))));
            };
            Ok(record)
        })
        .collect::<ExternResult<Vec<Record>>>()?;

    for role_claim_create_link_record in &records {
        let Action::CreateLink(role_claim_create_link) = role_claim_create_link_record.action()
        else {
            continue;
        };

        let Ok(Some(LinkTypes::AssigneeRoleClaim)) = LinkTypes::from_type(
            role_claim_create_link.zome_index,
            role_claim_create_link.link_type,
        ) else {
            continue;
        };

        let Some(role_claim_role_to_assignee_create_link_hash) = role_claim_create_link
            .target_address
            .clone()
            .into_action_hash()
        else {
            continue;
        };

        if role_claim_role_to_assignee_create_link_hash.ne(assign_role_create_link_hash) {
            continue;
        }

        let delete_record = records.iter().find(|delete_record| {
            let Action::DeleteLink(delete_link) = delete_record.action() else {
                return false;
            };
            delete_link
                .link_add_address
                .eq(role_claim_create_link_record.action_address())
        });
        return Ok(delete_record.map(|r| r.action_address().clone()));
    }

    Ok(None)
}
