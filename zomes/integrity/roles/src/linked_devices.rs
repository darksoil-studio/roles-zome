use hdi::prelude::*;

pub(crate) fn linked_devices_integrity_zome_name() -> Option<ZomeName> {
    match std::option_env!("LINKED_DEVICES_INTEGRITY_ZOME_NAME") {
        Some(zome_name) => Some(zome_name.into()),
        None => None,
    }
}

pub(crate) fn linked_devices_integrity_zome_index() -> ExternResult<Option<ZomeIndex>> {
    let Some(linked_devices_integrity_zome_name) = linked_devices_integrity_zome_name() else {
        return Ok(None);
    };

    let all_zome_names = dna_info()?.zome_names;

    let maybe_linked_devices_index = all_zome_names
        .iter()
        .position(|zome_name| zome_name.eq(&linked_devices_integrity_zome_name));

    let Some(linked_devices_index) = maybe_linked_devices_index else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "No zome with name {linked_devices_integrity_zome_name} exists in this DNA"
        ))));
    };

    Ok(Some(ZomeIndex::new(linked_devices_index as u8)))
}
