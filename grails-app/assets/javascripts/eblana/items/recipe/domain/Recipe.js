//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.items.recipe")
    .factory("Recipe", Recipe);

function Recipe($resource) {
    var Recipe = $resource(
        "recipe/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Recipe.list = Recipe.query;

    Recipe.prototype.toString = function() {
        return 'eblana.items.Recipe : ' + (this.id ? this.id : '(unsaved)');
    };

    return Recipe;
}
