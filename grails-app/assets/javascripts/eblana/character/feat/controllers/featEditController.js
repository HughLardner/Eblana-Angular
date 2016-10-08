//= wrapped

angular
    .module("eblana.character.feat")
    .controller("FeatEditController", FeatEditController);

function FeatEditController(Feat, $stateParams, $state, Species, Feat, Classes) {
    var vm = this;

    vm.speciesList = Species.list();
    vm.featList = Feat.list();
    vm.classesList = Classes.list();

    Feat.get({id: $stateParams.id}, function(data) {
        vm.feat = new Feat(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve feat with ID " + $stateParams.id}];
    });

    vm.updateFeat = function() {
        vm.errors = undefined;
        vm.feat.$update(function() {
            $state.go('feat.show', {id: vm.feat.id});
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
