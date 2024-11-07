use hdk::{hdi::hash_path::path::root_hash, prelude::*};
use roles_integrity::*;

///Allow other processes to get commited to source chain before commiting the commit
pub fn create_relaxed(entry_type: EntryTypes) -> ExternResult<()> {
    HDK.with(|h| {
        let index = ScopedEntryDefIndex::try_from(&entry_type)?;
        let vis = EntryVisibility::from(&entry_type);
        let entry = Entry::try_from(entry_type)?;

        h.borrow().create(CreateInput::new(
            index,
            vis,
            entry,
            // This is used to test many conductors thrashing creates between
            // each other so we want to avoid retries that make the test take
            // a long time.
            ChainTopOrdering::Relaxed,
        ))
    })?;

    Ok(())
}

///Allowing other links to be created and commited before commiting link
pub fn create_link_relaxed<T, E>(
    base_address: impl Into<AnyLinkableHash>,
    target_address: impl Into<AnyLinkableHash>,
    link_type: T,
    tag: impl Into<LinkTag>,
) -> ExternResult<()>
where
    ScopedLinkType: TryFrom<T, Error = E>,
    WasmError: From<E>,
{
    let ScopedLinkType {
        zome_index,
        zome_type: link_type,
    } = link_type.try_into()?;
    HDK.with(|h| {
        h.borrow().create_link(CreateLinkInput::new(
            base_address.into(),
            target_address.into(),
            zome_index,
            link_type,
            tag.into(),
            ChainTopOrdering::Relaxed,
        ))
    })?;

    Ok(())
}

///Allowing for other operations to commit before committing link deletion
pub fn delete_link_relaxed(address: ActionHash) -> ExternResult<()> {
    HDK.with(|h| {
        h.borrow()
            .delete_link(DeleteLinkInput::new(address, ChainTopOrdering::Relaxed))
    })?;

    Ok(())
}

///Allowing for other operations to commit before deleting an entry
pub fn delete_relaxed(address: ActionHash) -> ExternResult<()> {
    HDK.with(|h| {
        h.borrow()
            .delete(DeleteInput::new(address, ChainTopOrdering::Relaxed))
    })?;

    Ok(())
}

pub fn ensure_relaxed(path: &TypedPath) -> ExternResult<()> {
    if !path.exists()? {
        if path.is_root() {
            create_link_relaxed(
                root_hash()?,
                path.path_entry_hash()?,
                path.link_type,
                path.make_tag()?,
            )?;
        } else if let Some(parent) = path.parent() {
            ensure_relaxed(&parent)?;
            create_link_relaxed(
                parent.path_entry_hash()?,
                path.path_entry_hash()?,
                path.link_type,
                path.make_tag()?,
            )?;
        }
    }
    Ok(())
}
pub fn create_link_to_link(action_hash: ActionHash, create_link: CreateLink) -> Link {
    Link {
        author: create_link.author,
        base: create_link.base_address,
        target: create_link.target_address,
        tag: create_link.tag,
        timestamp: create_link.timestamp,
        zome_index: create_link.zome_index,
        link_type: create_link.link_type,

        create_link_hash: action_hash,
    }
}
