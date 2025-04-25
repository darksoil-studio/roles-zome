{ inputs, ... }:

{
  perSystem = { inputs', system, self', ... }: rec {
    builders.roles = { notifications_coordinator_zome_name
      , linked_devices_coordinator_zome_name }:
      inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        zomeEnvironmentVars = {
          NOTIFICATIONS_COORDINATOR_ZOME_NAME =
            notifications_coordinator_zome_name;
          LINKED_DEVICES_COORDINATOR_ZOME_NAME =
            linked_devices_coordinator_zome_name;
        };
      };
    packages.roles = builders.roles {
      notifications_coordinator_zome_name = "notifications";
      linked_devices_coordinator_zome_name = "linked_devices";
    };
  };
}

