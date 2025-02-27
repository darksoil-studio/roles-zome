use hdk::prelude::*;
use roles_integrity::LinkTypes;

use crate::{
    role_claim::create_role_claim, unassignments::unassign_my_role, utils::create_link_to_link,
};

#[derive(Serialize, Deserialize, Debug)]
pub enum RolesRemoteSignal {
    TryClaimNewRole {
        role: String,
        assignee_to_role_create_link_hash: ActionHash,
    },
    NewPendingUnassignment {
        role: String,
        pending_unassignment_create_link_hash: ActionHash,
    },
}

#[hdk_extern]
pub fn recv_remote_signal(signal: RolesRemoteSignal) -> ExternResult<()> {
    match signal {
        RolesRemoteSignal::TryClaimNewRole {
            role,
            assignee_to_role_create_link_hash,
        } => {
            info!("A TryClaimNewRole remote signal for the role {role} was just received.");
            retry_until(
                || match get_details(
                    assignee_to_role_create_link_hash.clone(),
                    GetOptions::default(),
                ) {
                    Ok(Some(Details::Record(_))) => true,
                    _ => false,
                },
                10,
            )?;
            let Some(Details::Record(record_details)) = get_details(
                assignee_to_role_create_link_hash.clone(),
                GetOptions::default(),
            )?
            else {
                return Ok(());
            };

            let Action::CreateLink(create_link) = record_details.record.action() else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid AssigneeToRole link"
                ))));
            };

            let Ok(Some(LinkTypes::AssigneeToRole)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid AssigneeToRole link"
                ))));
            };

            let Some(target_role_to_assignee_create_link_hash) =
                create_link.target_address.clone().into_action_hash()
            else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid AssigneeToRole link: no ActionHash as its target"
                ))));
            };

            create_role_claim(
                role,
                assignee_to_role_create_link_hash,
                target_role_to_assignee_create_link_hash,
            )
        }
        RolesRemoteSignal::NewPendingUnassignment {
            pending_unassignment_create_link_hash,
            ..
        } => {
            info!("A NewPendingUnassignment remote signal was just received.");
            retry_until(
                || match get_details(
                    pending_unassignment_create_link_hash.clone(),
                    GetOptions::default(),
                ) {
                    Ok(Some(Details::Record(_))) => true,
                    _ => false,
                },
                10,
            )?;
            debug!("[recv_remote_signal/NewPendingUnassignment] Get details succeeded.");

            let Some(Details::Record(record_details)) = get_details(
                pending_unassignment_create_link_hash.clone(),
                GetOptions::default(),
            )?
            else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "Could not find PendingUnassignment link"
                ))));
            };

            let Action::CreateLink(pending_unassignment_create_link) =
                record_details.record.action()
            else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid PendingUnassignment record: not a CreateLink"
                ))));
            };
            return unassign_my_role(create_link_to_link(
                pending_unassignment_create_link_hash,
                pending_unassignment_create_link.clone(),
            ));
        }
    }
}

fn retry_until<F>(task: F, max_retries: u64) -> ExternResult<()>
where
    F: Fn() -> bool,
{
    let mut retry_count = 0;
    while retry_count < max_retries {
        let result = task();
        if result {
            return Ok(());
        }
        retry_count += 1;
        sleep(1_000)?;
    }
    Ok(())
}

fn sleep(ms: u64) -> ExternResult<()> {
    let start = sys_time()?;
    while sys_time()?.as_millis() - start.as_millis() < ms as i64 {}
    Ok(())
}
