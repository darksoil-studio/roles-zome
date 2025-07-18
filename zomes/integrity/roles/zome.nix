{ inputs, ... }:

{
  perSystem = { inputs', system, ... }: rec {
    builders.roles_integrity = { linked_devices_integrity_zome_name }:
      inputs.holochain-utils.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        zomeEnvironmentVars = {
          LINKED_DEVICES_INTEGRITY_ZOME_NAME =
            linked_devices_integrity_zome_name;
        };
      };

    packages.roles_integrity = builders.roles_integrity {
      linked_devices_integrity_zome_name = "linked_devices_integrity";
    };
  };
}

