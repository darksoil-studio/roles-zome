{ inputs, ... }:

{
  perSystem = { inputs', system, self', ... }: rec {
    builders.roles = { notifications_coordinator_zome_name
      , linked_devices_coordinator_zome_name }:
      inputs.tnesh-stack.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        cargoArtifacts = inputs'.tnesh-stack.packages.zomeCargoArtifacts;
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

