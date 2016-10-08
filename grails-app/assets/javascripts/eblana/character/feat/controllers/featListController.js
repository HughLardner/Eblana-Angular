//= wrapped

angular
    .module("eblana.character.feat")
    .controller("FeatListController", FeatListController);

function FeatListController(Feat) {
    var vm = this;

    var max = 10, offset = 0;

    Feat.list({max: max, offset: offset}, function(data) {
        vm.featList = data;
    });
}
