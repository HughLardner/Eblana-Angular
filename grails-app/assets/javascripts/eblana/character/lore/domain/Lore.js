//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.lore")
    .factory("Lore", Lore);

function Lore($resource) {
    var Lore = $resource(
        "lore/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Lore.list = Lore.query;

    Lore.prototype.toString = function() {
        return 'eblana.character.Lore : ' + (this.id ? this.id : '(unsaved)');
    };

    return Lore;
}
