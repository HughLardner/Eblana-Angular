//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.background.god")
    .factory("God", God);

function God($resource) {
    var God = $resource(
        "god/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    God.list = God.query;

    God.prototype.toString = function() {
        return 'eblana.background.God : ' + (this.id ? this.id : '(unsaved)');
    };

    return God;
}
