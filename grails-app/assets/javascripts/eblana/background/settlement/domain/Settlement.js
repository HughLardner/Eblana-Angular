//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.background.settlement")
    .factory("Settlement", Settlement);

function Settlement($resource) {
    var Settlement = $resource(
        "settlement/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Settlement.list = Settlement.query;

    Settlement.prototype.toString = function() {
        return 'eblana.background.Settlement : ' + (this.id ? this.id : '(unsaved)');
    };

    return Settlement;
}
