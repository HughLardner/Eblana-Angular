//= wrapped

angular
    .module("eblana.character.playerCharacter")
    .directive("playerCharacter", playerCharacter);

function playerCharacter() {
    var directive = {
        restrict: "E",
        templateUrl: "/eblana/character/playerCharacter/playerCharacter.html",
        controller: PlayerCharacterController,
        controllerAs: "vm",
        transclude: true,
        scope: {},
        bindToController: {
        }
    };

    return directive;

    /*@ngInject*/
    function PlayerCharacterController() {

    }
}
