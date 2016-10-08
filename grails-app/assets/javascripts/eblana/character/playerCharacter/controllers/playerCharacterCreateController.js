//= wrapped

angular
    .module("eblana.character.playerCharacter")
    .controller("PlayerCharacterCreateController", PlayerCharacterCreateController);

function PlayerCharacterCreateController(PlayerCharacter, $state, $stateParams, CharacterSpell, Item, Lore, Classes, Recipe, Settlement, Downtime, Species, CharacterFeat, SecUser, God, Group) {

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
    vm.playerCharacter = new PlayerCharacter();
    
    if ($stateParams.settlementId) {
        vm.playerCharacter.settlement = {id: $stateParams.settlementId};
    }
    
    if ($stateParams.userId) {
        vm.playerCharacter.user = {id: $stateParams.userId};
    }
    
    if ($stateParams.godId) {
        vm.playerCharacter.god = {id: $stateParams.godId};
    }
    
    if ($stateParams.groupId) {
        vm.playerCharacter.group = {id: $stateParams.groupId};
    }
    
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
