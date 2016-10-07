//= wrapped

angular
    .module("eblana.character.playerCharacter")
    .controller("PlayerCharacterShowController", PlayerCharacterShowController);

function PlayerCharacterShowController(PlayerCharacter, $stateParams, $state) {
    var vm = this;

    PlayerCharacter.get({id: $stateParams.id}, function(data) {
        vm.playerCharacter = new PlayerCharacter(data);
    }, function() {
        $state.go('playerCharacter.list');
    });

    vm.delete = function() {
        vm.playerCharacter.$delete(function() {
            $state.go('playerCharacter.list');
        }, function() {
            //on error
        });
    };

}
