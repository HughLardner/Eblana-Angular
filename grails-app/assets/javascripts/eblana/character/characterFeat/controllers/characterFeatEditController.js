//= wrapped

angular
    .module("eblana.character.characterFeat")
    .controller("CharacterFeatEditController", CharacterFeatEditController);

function CharacterFeatEditController(CharacterFeat, $stateParams, $state, PlayerCharacter, Effect, Feat) {
    var vm = this;

    vm.playerCharacterList = PlayerCharacter.list();
    vm.effectList = Effect.list();
    vm.featList = Feat.list();

    CharacterFeat.get({id: $stateParams.id}, function(data) {
        vm.characterFeat = new CharacterFeat(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve characterFeat with ID " + $stateParams.id}];
    });

    vm.updateCharacterFeat = function() {
        vm.errors = undefined;
        vm.characterFeat.$update(function() {
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
