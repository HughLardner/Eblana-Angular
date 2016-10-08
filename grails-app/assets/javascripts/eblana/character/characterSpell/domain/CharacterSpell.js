//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.characterSpell")
    .factory("CharacterSpell", CharacterSpell);

function CharacterSpell($resource) {
    var CharacterSpell = $resource(
        "characterSpell/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    CharacterSpell.list = CharacterSpell.query;

    CharacterSpell.prototype.toString = function() {
        return 'eblana.character.CharacterSpell : ' + (this.id ? this.id : '(unsaved)');
    };

    return CharacterSpell;
}
