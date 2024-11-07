use all_role_claims_deleted_proof::create_all_role_claims_deleted_proofs_if_possible;
use hc_zome_trait_notifications::NotificationsZomeTrait;
use hc_zome_traits::implemented_zome_traits;
use hdk::prelude::*;
use notifications::{send_roles_notification, RolesNotification, RolesNotifications};
use progenitors::claim_admin_role_as_progenitor;
use remote_signal::RolesRemoteSignal;
use role_claim::{
    assign_my_roles_to_linked_devices_which_havent_claimed_it_yet, claim_roles_assigned_to_me,
};
use roles_integrity::{utils::deserialize_tag, *};
use unassignments::unassign_pending_unassignments;

pub mod all_role_claims_deleted_proof;
pub mod assignees;
pub mod progenitors;
pub mod remote_signal;
pub mod role_claim;
pub mod unassignments;
pub mod utils;

pub mod linked_devices;
pub mod notifications;

#[implemented_zome_traits]
pub enum ZomeTraits {
    Notifications(RolesNotifications),
}

/// initial function called when installing the hApp (if Agent is progenitor then Admin role is claimed)
#[hdk_extern]
pub fn init(_: ()) -> ExternResult<InitCallbackResult> {
    let agent_info = agent_info()?;
    let progenitors = progenitors(())?;

    if progenitors.contains(&agent_info.agent_latest_pubkey) {
        claim_admin_role_as_progenitor()?;
    }

    schedule("scheduled_tasks")?;

    let mut fns: BTreeSet<GrantedFunction> = BTreeSet::new();
    fns.insert((zome_info()?.name, FunctionName::from("recv_remote_signal")));
    let functions = GrantedFunctions::Listed(fns);
    let cap_grant = ZomeCallCapGrant {
        tag: String::from("recv_remote_signal"),
        access: CapAccess::Unrestricted,
        functions,
    };
    create_cap_grant(cap_grant)?;

    Ok(InitCallbackResult::Pass)
}

#[hdk_extern(infallible)]
pub fn scheduled_tasks(_schedule: Option<Schedule>) -> Option<Schedule> {
    if let Err(err) = claim_roles_assigned_to_me() {
        error!("Error calling claim_roles_assigned_to_me: {err:?}");
    }
    if let Err(err) = assign_my_roles_to_linked_devices_which_havent_claimed_it_yet() {
        error!(
            "Error calling assign_my_roles_to_linked_devices_which_havent_claimed_it_yet: {err:?}"
        );
    }
    if let Err(err) = unassign_pending_unassignments() {
        error!("Error calling unassign_pending_unassignments: {err:?}");
    }
    if let Err(err) = create_all_role_claims_deleted_proofs_if_possible(()) {
        error!("Error calling create_all_role_claims_deleted_proofs_if_necessary: {err:?}");
    }

    Some(Schedule::Persisted("*/30 * * * * * *".into()))
}

///Signals available in the module
#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
pub enum Signal {
    EntryCreated {
        action: SignedActionHashed,
        app_entry: EntryTypes,
    },
    EntryUpdated {
        action: SignedActionHashed,
        app_entry: EntryTypes,
        original_app_entry: EntryTypes,
    },
    EntryDeleted {
        action: SignedActionHashed,
        original_app_entry: EntryTypes,
    },
    LinkCreated {
        action: SignedActionHashed,
        link_type: LinkTypes,
    },
    LinkDeleted {
        action: SignedActionHashed,
        create_link_action: SignedActionHashed,
        link_type: LinkTypes,
    },
}

///Commiting an action to the source chain
#[hdk_extern(infallible)]
pub fn post_commit(committed_actions: Vec<SignedActionHashed>) {
    for action in committed_actions {
        if let Action::CreateLink(create_link) = &action.hashed.content {
            if let Ok(Some(LinkTypes::RoleToAssignee)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                if let Err(err) = notify_new_role_assigned(&action.hashed.hash, create_link) {
                    error!("Error calling notify_new_role_assigned: {:?}", err);
                }
            }
            if let Ok(Some(LinkTypes::AssigneeToRole)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                if let Err(err) = send_try_claim_new_role_signal(&action.hashed.hash, create_link) {
                    error!("Error calling send_try_claim_new_role_signal: {:?}", err);
                }
            }
            if let Ok(Some(LinkTypes::PendingUnassignments)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                if let Err(err) = notify_pending_unassignment(&action.hashed.hash, create_link) {
                    error!("Error calling notify_pending_unassignment: {:?}", err);
                }
            }
        }
        if let Action::DeleteLink(delete_link) = action.action() {
            if let Ok(LinkTypes::AssigneeRoleClaim) = get_deleted_link_type(delete_link) {
                if let Ok(agent_info) = agent_info() {
                    if let Ok(zome_info) = zome_info() {
                        if let Err(err) = call_remote(
                            agent_info.agent_latest_pubkey,
                            zome_info.name,
                            "create_all_role_claims_deleted_proofs_if_possible".into(),
                            None,
                            (),
                        ) {
                            error!(
                                "Error calling create_all_role_claims_deleted_proofs_if_possible: {err:?}"
                            );
                        }
                    }
                }
            }
        }
        if let Err(err) = signal_action(action) {
            error!("Error signaling new action: {:?}", err);
        }
    }
}

fn get_deleted_link_type(delete_link: &DeleteLink) -> ExternResult<LinkTypes> {
    let Some(Details::Record(record_details)) =
        get_details(delete_link.link_add_address.clone(), GetOptions::default())?
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Invalid get details return value"
        ))));
    };
    match record_details.record.action() {
        Action::CreateLink(create_link) => {
            if let Ok(Some(link_type)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                return Ok(link_type);
            }
            return Err(wasm_error!(WasmErrorInner::Guest(
                "Invalid link type".to_string()
            )));
        }
        _ => Err(wasm_error!(WasmErrorInner::Guest(
            "Create Link should exist".to_string()
        ))),
    }
}

fn notify_new_role_assigned(
    action_hash: &ActionHash,
    role_to_assignee_create_link: &CreateLink,
) -> ExternResult<()> {
    let Some(assignee) = role_to_assignee_create_link
        .target_address
        .clone()
        .into_agent_pub_key()
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Unreachable: RoleToAssignee link does not have an AgentPubKey as its target"
        ))));
    };

    let tag: RoleToAssigneeLinkTag = deserialize_tag(role_to_assignee_create_link.tag.clone())?;

    send_roles_notification(
        assignee,
        RolesNotification::AssignedRole {
            role: tag.role,
            assign_role_create_link_hash: action_hash.clone(),
        },
    )?;
    Ok(())
}

fn send_try_claim_new_role_signal(
    action_hash: &ActionHash,
    assignee_to_role_create_link: &CreateLink,
) -> ExternResult<()> {
    let Some(assignee) = assignee_to_role_create_link
        .base_address
        .clone()
        .into_agent_pub_key()
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Unreachable: AssigneeToRole link does not have an AgentPubKey as its base"
        ))));
    };

    let tag: AssigneeToRoleLinkTag = deserialize_tag(assignee_to_role_create_link.tag.clone())?;

    send_remote_signal(
        RolesRemoteSignal::TryClaimNewRole {
            role: tag.role,
            assignee_to_role_create_link_hash: action_hash.clone(),
        },
        vec![assignee],
    )?;

    Ok(())
}

fn notify_pending_unassignment(
    action_hash: &ActionHash,
    pending_unassignment_create_link: &CreateLink,
) -> ExternResult<()> {
    let Some(role_to_assignee_create_link_hash) = pending_unassignment_create_link
        .target_address
        .clone()
        .into_action_hash()
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Unreachable: RoleToAssignee link does not point to an ActionHash"
        ))));
    };
    let tag: PendingUnassignmentLinkTag =
        deserialize_tag(pending_unassignment_create_link.tag.clone())?;
    let agents: Vec<AgentPubKey> = tag
        .all_agents_for_assignee
        .into_iter()
        .map(|(agent, _)| agent.clone())
        .collect();

    send_remote_signal(
        RolesRemoteSignal::NewPendingUnassignment {
            role: tag.role.clone(),
            pending_unassignment_create_link_hash: action_hash.clone(),
        },
        agents.clone(),
    )?;
    send_roles_notification(
        agents[0].clone(),
        RolesNotification::UnassignedRole {
            role: tag.role,
            assign_role_create_link_hash: role_to_assignee_create_link_hash,
        },
    )?;

    Ok(())
}

///Generate signals to handle all the actions made with module
fn signal_action(action: SignedActionHashed) -> ExternResult<()> {
    match action.hashed.content.clone() {
        Action::Create(_create) => {
            if let Ok(Some(app_entry)) = get_entry_for_action(&action.hashed.hash) {
                emit_signal(Signal::EntryCreated { action, app_entry })?;
            }
            Ok(())
        }
        Action::Update(update) => {
            if let Ok(Some(app_entry)) = get_entry_for_action(&action.hashed.hash) {
                if let Ok(Some(original_app_entry)) =
                    get_entry_for_action(&update.original_action_address)
                {
                    emit_signal(Signal::EntryUpdated {
                        action,
                        app_entry,
                        original_app_entry,
                    })?;
                }
            }
            Ok(())
        }
        Action::Delete(delete) => {
            if let Ok(Some(original_app_entry)) = get_entry_for_action(&delete.deletes_address) {
                emit_signal(Signal::EntryDeleted {
                    action,
                    original_app_entry,
                })?;
            }
            Ok(())
        }
        Action::CreateLink(create_link) => {
            if let Ok(Some(link_type)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                emit_signal(Signal::LinkCreated { action, link_type })?;
            }
            Ok(())
        }
        Action::DeleteLink(delete_link) => {
            let record = get(delete_link.link_add_address.clone(), GetOptions::default())?.ok_or(
                wasm_error!(WasmErrorInner::Guest(
                    "Failed to fetch CreateLink action".to_string()
                )),
            )?;
            match record.action() {
                Action::CreateLink(create_link) => {
                    if let Ok(Some(link_type)) =
                        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
                    {
                        emit_signal(Signal::LinkDeleted {
                            action,
                            link_type,
                            create_link_action: record.signed_action.clone(),
                        })?;
                    }
                    Ok(())
                }
                _ => Err(wasm_error!(WasmErrorInner::Guest(
                    "Create Link should exist".to_string()
                ))),
            }
        }
        _ => Ok(()),
    }
}

///Retrieve entry for a specific action
fn get_entry_for_action(action_hash: &ActionHash) -> ExternResult<Option<EntryTypes>> {
    let record = match get_details(action_hash.clone(), GetOptions::default())? {
        Some(Details::Record(record_details)) => record_details.record,
        _ => return Ok(None),
    };
    let entry = match record.entry().as_option() {
        Some(entry) => entry,
        None => return Ok(None),
    };
    let (zome_index, entry_index) = match record.action().entry_type() {
        Some(EntryType::App(AppEntryDef {
            zome_index,
            entry_index,
            ..
        })) => (zome_index, entry_index),
        _ => return Ok(None),
    };
    EntryTypes::deserialize_from_type(*zome_index, *entry_index, entry)
}
