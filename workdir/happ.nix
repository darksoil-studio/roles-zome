{ inputs, ... }:

{
  perSystem = { inputs', lib, system, self', ... }: {
    packages.roles_test_happ =
      inputs.tnesh-stack.outputs.builders.${system}.happ {
        happManifest = ./happ.yaml;

        dnas = {
          # Include here the DNA packages for this hApp, e.g.:
          # my_dna = inputs'.some_input.packages.my_dna;
          # This overrides all the "bundled" properties for the hApp manifest 
          roles_test = self'.packages.roles_test_dna;
        };
      };
  };
}
