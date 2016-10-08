//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.characterFeat")
    .factory("CharacterFeat", CharacterFeat);

function CharacterFeat($resource) {
    var CharacterFeat = $resource(
        "characterFeat/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    CharacterFeat.list = CharacterFeat.query;

    CharacterFeat.prototype.toString = function() {
        return ((this.feat? this.feat.name : '') + (this.effect?'<' + this.effect.name + '>':''));
    };

    return CharacterFeat;
}
