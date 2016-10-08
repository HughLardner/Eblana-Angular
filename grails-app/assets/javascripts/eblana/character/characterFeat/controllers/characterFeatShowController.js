//= wrapped

angular
    .module("eblana.character.characterFeat")
    .controller("CharacterFeatShowController", CharacterFeatShowController);

function CharacterFeatShowController(CharacterFeat, $stateParams, $state) {
    var vm = this;

    CharacterFeat.get({id: $stateParams.id}, function(data) {
        vm.characterFeat = new CharacterFeat(data);
    }, function() {
        $state.go('characterFeat.list');
    });

    vm.delete = function() {
        vm.characterFeat.$delete(function() {
            $state.go('characterFeat.list');
        }, function() {
            //on error
        });
    };

}
