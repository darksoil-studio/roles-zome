{
  description = "Template for Holochain app development";

  inputs = {
    holonix.url = "github:holochain/holonix/main-0.5";
    nixpkgs.follows = "holonix/nixpkgs";
    flake-parts.follows = "holonix/flake-parts";
    crane.follows = "holonix/crane";

    scaffolding.url = "github:darksoil-studio/scaffolding/main-0.5";
    holochain-nix-builders.url =
      "github:darksoil-studio/holochain-nix-builders/main-0.5";
    playground.url = "github:darksoil-studio/holochain-playground/main-0.5";
    p2p-shipyard.url = "github:darksoil-studio/p2p-shipyard/main-0.5";

    linked-devices-zome.url =
      "github:darksoil-studio/linked-devices-zome/main-0.5";
    profiles-zome.url = "github:darksoil-studio/profiles-zome/main-0.5";
    notifications-zome.url =
      "github:darksoil-studio/notifications-zome/main-0.5";
  };

  nixConfig = {
    extra-substituters = [
      "https://holochain-ci.cachix.org"
      "https://darksoil-studio.cachix.org"
    ];
    extra-trusted-public-keys = [
      "holochain-ci.cachix.org-1:5IUSkZc0aoRS53rfkvH9Kid40NpyjwCMCzwRTXy+QN8="
      "darksoil-studio.cachix.org-1:UEi+aujy44s41XL/pscLw37KEVpTEIn8N/kn7jO8rkc="
    ];
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } rec {
      imports = [
        ./zomes/integrity/roles/zome.nix
        ./zomes/coordinator/roles/zome.nix
        # Just for testing purposes
        ./workdir/dna.nix
        ./workdir/happ.nix
        inputs.holochain-nix-builders.outputs.flakeModules.builders
      ];

      flake = {
        lib.progenitor-network = { pkgs, system }:
          { happ, roles_to_modify, ui_port }:
          pkgs.writeShellApplication {
            name = "run-network";

            derivationArgs = { allowSubstitutes = false; };

            runtimeInputs = [
              happ
              # (outputs inputs).packages.${system}.hc-progenitor
              inputs.p2p-shipyard.outputs.packages.${system}.hc-pilot
            ];

            text = ''
              ${
                pkgs.writeScript "network" (builtins.readFile ./network.sh)
              } ${happ} ${roles_to_modify} ${builtins.toString ui_port}
            '';
          };
      };

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', self', config, pkgs, system, ... }: {

        packages.network = (pkgs.callPackage flake.lib.progenitor-network { }) {
          happ = self'.packages.roles_test_happ;
          roles_to_modify = "roles_test";
          ui_port = 8888;
        };

        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.scaffolding.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];

          packages = [
            inputs'.holochain-nix-builders.packages.holochain
            inputs'.scaffolding.packages.hc-scaffold-zome
            inputs'.playground.packages.hc-playground
            inputs'.p2p-shipyard.packages.hc-pilot
          ];
        };
        devShells.npm-ci = inputs'.scaffolding.devShells.synchronized-pnpm;

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.scaffolding.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "roles-zome \
                --integrity-zome-name roles_integrity \
                --coordinator-zome-name roles \
                --remote-zome-git-url github:darksoil-studio/roles-zome \
                --remote-npm-package-name @darksoil-studio/roles-zome \
                --remote-zome-git-branch main-0.5 \
                --context-element roles-context \
                --context-element-import @darksoil-studio/roles-zome/dist/elements/roles-context.js" 
          '';
        };
      };
    };
}
