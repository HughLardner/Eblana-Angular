//= wrapped

angular
    .module("eblana.character.feat")
    .controller("FeatShowController", FeatShowController);

function FeatShowController(Feat, $stateParams, $state) {
    var vm = this;

    Feat.get({id: $stateParams.id}, function(data) {
        vm.feat = new Feat(data);
    }, function() {
        $state.go('feat.list');
    });

    vm.delete = function() {
        vm.feat.$delete(function() {
            $state.go('feat.list');
        }, function() {
            //on error
        });
    };

}
