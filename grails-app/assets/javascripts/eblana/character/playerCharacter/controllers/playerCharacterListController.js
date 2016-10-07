//= wrapped

angular
    .module("eblana.character.playerCharacter")
    .controller("PlayerCharacterListController", PlayerCharacterListController);

function PlayerCharacterListController(PlayerCharacter) {
    var vm = this;

    var max = 10, offset = 0;

    PlayerCharacter.list({max: max, offset: offset}, function(data) {
        vm.playerCharacterList = data;
    });
}
