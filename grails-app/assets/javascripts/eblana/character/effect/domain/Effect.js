//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.effect")
    .factory("Effect", Effect);

function Effect($resource) {
    var Effect = $resource(
        "effect/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Effect.list = Effect.query;

    Effect.prototype.toString = function() {
        return 'eblana.character.Effect : ' + (this.id ? this.id : '(unsaved)');
    };

    return Effect;
}
