use serde::de::DeserializeOwned;
use std::collections::BTreeMap;
use xliff::t::T;

use hc_zome_trait_notifications::*;
use hc_zome_traits::*;
use hdk::prelude::*;
use notifications_types::SendNotificationInput;

use crate::linked_devices::call_local_zome;

pub fn notifications_zome_name() -> Option<ZomeName> {
    match std::option_env!("NOTIFICATIONS_COORDINATOR_ZOME_NAME") {
        Some(zome_name) => Some(zome_name.into()),
        None => None,
    }
}

pub struct RolesNotifications;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
#[serde(tag = "type")]
pub enum RolesNotification {
    AssignedRole {
        role: String,
        assign_role_create_link_hash: ActionHash,
    },
    UnassignedRole {
        role: String,
        assign_role_create_link_hash: ActionHash,
    },
}
impl RolesNotification {
    fn role(&self) -> String {
        match self {
            Self::AssignedRole { role, .. } => role.clone(),
            Self::UnassignedRole { role, .. } => role.clone(),
        }
    }
    fn assign_role_create_link_hash(&self) -> ActionHash {
        match self {
            Self::AssignedRole {
                assign_role_create_link_hash,
                ..
            } => assign_role_create_link_hash.clone(),
            Self::UnassignedRole {
                assign_role_create_link_hash,
                ..
            } => assign_role_create_link_hash.clone(),
        }
    }
    fn notification_type(&self) -> String {
        match self {
            Self::AssignedRole { .. } => format!("AssignedRole"),
            Self::UnassignedRole { .. } => format!("UnassignedRole"),
        }
    }
}

#[implement_zome_trait_as_externs]
impl NotificationsZomeTrait for RolesNotifications {
    fn get_notifications_types(locale: String) -> ExternResult<BTreeMap<String, NotificationType>> {
        let mut types: BTreeMap<String, NotificationType> = BTreeMap::new();

        types.insert(
            "AssignedRole".into(),
            NotificationType {
                name: t(&locale, "Role assigned"),
                description: t(&locale, "An administrator assigned a role to you"),
            },
        );

        types.insert(
            "UnassignedRole".into(),
            NotificationType {
                name: t(&locale, "Role removed"),
                description: t(&locale, "An administrator removed one of your roles"),
            },
        );

        Ok(types)
    }
    fn get_notification_contents(
        input: GetNotificationContentsInput,
    ) -> ExternResult<NotificationContents> {
        let notification = RolesNotification::try_from(input.notification.content)
            .map_err(|err| wasm_error!(err))?;

        match notification {
            RolesNotification::AssignedRole { role, .. } => Ok(NotificationContents {
                title: t(&input.locale, ""),
                body: format!(
                    "{} {} {}.",
                    t(&input.locale, "You have been assigned the"),
                    role,
                    t(&input.locale, "role"),
                ),
                icon_src: format!(
                    "data:image/svg+xml;charset=utf-8,{}",
                    md_icons::filled::ICON_ADD_MODERATOR
                ),
                url_path_to_navigate_to_on_click: Some(String::from("")),
            }),
            RolesNotification::UnassignedRole { role, .. } => Ok(NotificationContents {
                title: t(&input.locale, ""),
                body: format!(
                    "{} {} {}.",
                    t(&input.locale, "An administrator removed your"),
                    role,
                    t(&input.locale, "role"),
                ),
                icon_src: format!(
                    "data:image/svg+xml;charset=utf-8,{}",
                    md_icons::filled::ICON_REMOVE_MODERATOR
                ),
                url_path_to_navigate_to_on_click: Some(String::from("")),
            }),
        }
    }
}

fn t(locale: &String, source: &str) -> String {
    match locale.as_str() {
        // "sv" => t_from_xliff(include_str!("../../../../ui/xliff/sv.xlf"), source),
        "en" => source.to_string(),
        _ => source.to_string(),
    }
}

fn t_from_xliff(xliff_str: &str, source: &str) -> String {
    let t = T::load_str(xliff_str);
    let unit = t.t_source(None, source);
    if let Some(unit) = unit {
        if let Some(t) = unit.target_text() {
            return t.clone();
        }
    }
    source.to_string()
}

// Call the notifications zome, if it exists
// If the notifications zome does not exist, it will return None
fn call_notifications<R, P>(fn_name: FunctionName, payload: P) -> ExternResult<Option<R>>
where
    P: serde::Serialize + std::fmt::Debug,
    R: DeserializeOwned + std::fmt::Debug,
{
    let Some(zome_name) = notifications_zome_name() else {
        return Ok(None);
    };
    let result: R = call_local_zome(zome_name, fn_name, payload)?;
    Ok(Some(result))
}

pub fn send_roles_notification(
    recipient: AgentPubKey,
    roles_notification: RolesNotification,
) -> ExternResult<()> {
    // We don't care in this case if the notification is not sent
    let _result: Option<()> = call_notifications(
        "send_notification".into(),
        SendNotificationInput {
            zome_name: zome_info()?.name,
            notification_type: roles_notification.notification_type(),
            notification_group: format!(
                "{}-{}",
                roles_notification.assign_role_create_link_hash(),
                roles_notification.role()
            ),
            recipient,
            content: SerializedBytes::try_from(roles_notification)
                .map_err(|err| wasm_error!(err))?,
        },
    )?;

    Ok(())
}
