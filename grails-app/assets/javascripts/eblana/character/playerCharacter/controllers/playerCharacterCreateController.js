//= wrapped

angular
    .module("eblana.character.playerCharacter")
    .controller("PlayerCharacterCreateController", PlayerCharacterCreateController);

function PlayerCharacterCreateController(PlayerCharacter, $state) {

    var vm = this;
    
    vm.playerCharacter = new PlayerCharacter();
    
    vm.savePlayerCharacter = function() {
        vm.errors = undefined;
        vm.playerCharacter.$save({}, function() {
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
