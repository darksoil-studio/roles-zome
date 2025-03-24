use hdi::prelude::holo_hash::AgentPubKeyB64;
use hdi::prelude::*;

///App properties (progenitor info)
#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct Properties {
    pub progenitors: Vec<AgentPubKeyB64>,
}

///Hardcoded admin role need for creating other roles
pub const ADMIN_ROLE: &'static str = "admin";

pub const ROLE_CLAIM_LINK_TYPE_INDEX: u8 = 3;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub enum AssigneeRoleClaimLinkMode {
    ProgenitorClaimingAdminAtInit,
    AdminAssigningRole {
        assignee_to_role_create_link_hash: ActionHash,
    },
}

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct AssigneeRoleClaimLinkTag {
    pub role: String,
    pub mode: AssigneeRoleClaimLinkMode,
}

///Validate that agents had acces to the role at the time of the action (an undeleted claim earlier in source chain)
pub fn validate_agent_had_undeleted_role_claim_at_the_time(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    role: &String,
    roles_integrity_zome_name: &ZomeName,
) -> ExternResult<ValidateCallbackResult> {
    let dna_info = dna_info()?;

    let Some(roles_zome_index) = dna_info
        .zome_names
        .into_iter()
        .position(|z| z.eq(&roles_integrity_zome_name))
    else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Unreachable: there is no 'roles' integrity zome in this DNA",
        )));
    };

    validate_agent_had_undeleted_role_claim_at_the_time_with_zome_index(
        agent,
        chain_top,
        role,
        ZomeIndex::new(roles_zome_index as u8),
    )
}
///Validate that agents had acces to the role at the time (with zome index)
pub fn validate_agent_had_undeleted_role_claim_at_the_time_with_zome_index(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    role: &String,
    roles_zome_index: ZomeIndex,
) -> ExternResult<ValidateCallbackResult> {
    let filter = ChainFilter::new(chain_top.clone());
    let activity = must_get_agent_activity(agent.clone(), filter)?;

    let deleted_hashes: Vec<ActionHash> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::DeleteLink(d) => Some(d.link_add_address.clone()),
            _ => None,
        })
        .collect();

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
        let tag_bytes =
            SerializedBytes::from(UnsafeBytes::from(undeleted_create.tag.clone().into_inner()));

        let Ok(assignee_role_claim_link_tag) = AssigneeRoleClaimLinkTag::try_from(tag_bytes) else {
            return Err(wasm_error!(
                "AssigneeRoleClaim links must contain an AssignRoleClaimLinkTag in their LinkTag.",
            ));
        };
        let undeleted_role_claim_role = assignee_role_claim_link_tag.role;

        if undeleted_role_claim_role.eq(role) {
            return Ok(ValidateCallbackResult::Valid);
        }
    }

    return Ok(ValidateCallbackResult::Invalid(format!(
        "Agent did not have the RoleClaim for the role {role} at the time of committing the action",
    )));
}

/// Input structure for assigning roles
#[derive(Serialize, Deserialize, Debug)]
pub struct AssignRoleInput {
    pub role: String,
    pub assignees: Vec<AgentPubKey>,
}

/// Input structure for unassigning roles
#[derive(Serialize, Deserialize, Debug)]
pub struct RequestUnassignRoleInput {
    pub role: String,
    pub role_to_assignee_create_link_hash: ActionHash,
}

/// Input structure for unassigning roles
#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct PendingUnassignmentLinkTag {
    pub role: String,
    pub all_agents_for_assignee: Vec<(AgentPubKey, ActionHash)>,
}
