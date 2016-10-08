//= wrapped

angular
    .module("eblana.character.characterFeat")
    .controller("CharacterFeatListController", CharacterFeatListController);

function CharacterFeatListController(CharacterFeat) {
    var vm = this;

    var max = 10, offset = 0;

    CharacterFeat.list({max: max, offset: offset}, function(data) {
        vm.characterFeatList = data;
    });
}
