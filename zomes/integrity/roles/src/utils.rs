use hdi::prelude::*;

pub fn serialize_tag<T>(payload: T) -> ExternResult<LinkTag>
where
    T: serde::Serialize + std::fmt::Debug,
    SerializedBytes: TryFrom<T, Error = SerializedBytesError>,
{
    let bytes = SerializedBytes::try_from(payload).map_err(|err| wasm_error!(err))?;

    Ok(LinkTag::from(bytes.bytes().clone()))
}

pub fn deserialize_tag<T>(tag: LinkTag) -> ExternResult<T>
where
    T: TryFrom<SerializedBytes, Error = SerializedBytesError>,
{
    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(tag.0));

    let t =
        T::try_from(tag_bytes).map_err(|err| wasm_error!("Error deserializing tag: {err:?}."))?;
    Ok(t)
}
