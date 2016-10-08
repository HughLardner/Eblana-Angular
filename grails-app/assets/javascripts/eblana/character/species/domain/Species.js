//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.species")
    .factory("Species", Species);

function Species($resource) {
    var Species = $resource(
        "species/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Species.list = Species.query;

    Species.prototype.toString = function() {
        return (this ? this.name : '');
    };

    return Species;
}
