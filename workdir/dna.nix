{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.roles_test_dna =
      inputs.tnesh-stack.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = let
          example = inputs.tnesh-stack.outputs.builders.${system}.rustZome {
            workspacePath = inputs.self.outPath;
            crateCargoToml = ../zomes/coordinator/example/Cargo.toml;
            cargoArtifacts = inputs'.tnesh-stack.packages.zomeCargoArtifacts;
          };
          example_integrity =
            inputs.tnesh-stack.outputs.builders.${system}.rustZome {
              workspacePath = inputs.self.outPath;
              crateCargoToml = ../zomes/integrity/example/Cargo.toml;
              cargoArtifacts = inputs'.tnesh-stack.packages.zomeCargoArtifacts;
            };
        in {
          inherit example example_integrity;
          # Include here the zome packages for this DNA, e.g.:
          profiles_integrity =
            inputs'.profiles-zome.packages.profiles_integrity;
          profiles = inputs'.profiles-zome.packages.profiles;
          notifications_integrity =
            inputs'.notifications-zome.packages.notifications_integrity;
          notifications = inputs'.notifications-zome.packages.notifications;
          linked_devices_integrity =
            inputs'.linked-devices-zome.packages.linked_devices_integrity;
          linked_devices = inputs'.linked-devices-zome.packages.linked_devices;
          # This overrides all the "bundled" properties for the DNA manifest
          roles_integrity = self'.packages.roles_integrity;
          roles = self'.packages.roles;
        };
      };
  };
}

