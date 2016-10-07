//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.playerCharacter")
    .factory("PlayerCharacter", PlayerCharacter);

function PlayerCharacter($resource) {
    var PlayerCharacter = $resource(
        "playerCharacter/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    PlayerCharacter.list = PlayerCharacter.query;

    PlayerCharacter.prototype.toString = function() {
        return 'eblana.character.PlayerCharacter : ' + (this.id ? this.id : '(unsaved)');
    };

    return PlayerCharacter;
}
