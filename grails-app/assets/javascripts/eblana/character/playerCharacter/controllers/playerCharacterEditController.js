//= wrapped

angular
    .module("eblana.character.playerCharacter")
    .controller("PlayerCharacterEditController", PlayerCharacterEditController);

function PlayerCharacterEditController(PlayerCharacter, $stateParams, $state) {
    var vm = this;

    

    PlayerCharacter.get({id: $stateParams.id}, function(data) {
        vm.playerCharacter = new PlayerCharacter(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve playerCharacter with ID " + $stateParams.id}];
    });

    vm.updatePlayerCharacter = function() {
        vm.errors = undefined;
        vm.playerCharacter.$update(function() {
            $state.go('playerCharacter.show', {id: vm.playerCharacter.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
