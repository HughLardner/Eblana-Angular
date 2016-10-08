//= wrapped

angular
    .module("eblana.character.playerCharacter")
    .controller("PlayerCharacterEditController", PlayerCharacterEditController);

function PlayerCharacterEditController(PlayerCharacter, $stateParams, $state, CharacterSpell, Item, Lore, Classes, Recipe, Settlement, Downtime, Species, CharacterFeat, SecUser, God, Group) {
    var vm = this;

    vm.characterSpellList = CharacterSpell.list();
    vm.itemList = Item.list();
    vm.loreList = Lore.list();
    vm.classesList = Classes.list();
    vm.recipeList = Recipe.list();
    vm.settlementList = Settlement.list();
    vm.downtimeList = Downtime.list();
    vm.speciesList = Species.list();
    vm.characterFeatList = CharacterFeat.list();
    vm.secUserList = SecUser.list();
    vm.godList = God.list();
    vm.groupList = Group.list();

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
