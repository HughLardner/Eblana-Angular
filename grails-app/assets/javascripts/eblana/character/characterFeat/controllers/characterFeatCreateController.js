//= wrapped

angular
    .module("eblana.character.characterFeat")
    .controller("CharacterFeatCreateController", CharacterFeatCreateController);

function CharacterFeatCreateController(CharacterFeat, $state, $stateParams, PlayerCharacter, Effect, Feat) {

    var vm = this;
    vm.playerCharacterList = PlayerCharacter.list();
    vm.effectList = Effect.list();
    vm.featList = Feat.list();
    vm.characterFeat = new CharacterFeat();
    
    if ($stateParams.characterId) {
        vm.characterFeat.character = {id: $stateParams.characterId};
    }
    
    vm.saveCharacterFeat = function() {
        vm.errors = undefined;
        vm.characterFeat.$save({}, function() {
            $state.go('characterFeat.show', {id: vm.characterFeat.id});
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
