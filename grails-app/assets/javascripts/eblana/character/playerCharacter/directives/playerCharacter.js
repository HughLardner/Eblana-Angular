//= wrapped

function PlayerCharacterController() {
}

angular
    .module("eblana.character.playerCharacter")
    .component("playerCharacter", {   	  
        templateUrl: "/eblana/character/playerCharacter/playerCharacter.html",
        bindings:{
        	vm:'<'
        }
    });

