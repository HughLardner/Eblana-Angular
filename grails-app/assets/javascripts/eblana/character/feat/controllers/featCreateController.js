//= wrapped

angular
    .module("eblana.character.feat")
    .controller("FeatCreateController", FeatCreateController);

function FeatCreateController(Feat, $state, Species, Feat, Classes) {

    var vm = this;
    vm.speciesList = Species.list();
    vm.featList = Feat.list();
    vm.classesList = Classes.list();
    vm.feat = new Feat();
    
    vm.saveFeat = function() {
        vm.errors = undefined;
        vm.feat.$save({}, function() {
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
