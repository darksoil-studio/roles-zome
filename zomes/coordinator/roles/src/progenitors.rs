use hdk::prelude::*;
use roles_integrity::{
    role_path, utils::serialize_tag, AssigneeRoleClaimLinkMode, AssigneeRoleClaimLinkTag,
    LinkTypes, RoleToAssigneeLinkMode, RoleToAssigneeLinkTag, ADMIN_ROLE,
};

pub fn claim_admin_role_as_progenitor() -> ExternResult<()> {
    let my_pub_key = agent_info()?.agent_initial_pubkey;

    let path = role_path(&ADMIN_ROLE.to_string())?;
    path.ensure()?;

    let tag = RoleToAssigneeLinkTag {
        role: ADMIN_ROLE.to_string(),
        linked_devices: None,
        mode: RoleToAssigneeLinkMode::ProgenitorClaimingAdminAtInit,
    };

    let role_to_assignee_create_link_hash = create_link(
        path.path_entry_hash()?,
        my_pub_key.clone(),
        LinkTypes::RoleToAssignee,
        serialize_tag(tag)?,
    )?;

    let tag = AssigneeRoleClaimLinkTag {
        role: ADMIN_ROLE.to_string(),
        mode: AssigneeRoleClaimLinkMode::ProgenitorClaimingAdminAtInit,
    };
    create_link(
        my_pub_key,
        role_to_assignee_create_link_hash,
        LinkTypes::AssigneeRoleClaim,
        serialize_tag(tag)?,
    )?;
    Ok(())
}
