//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.event.downtime")
    .factory("Downtime", Downtime);

function Downtime($resource) {
    var Downtime = $resource(
        "downtime/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Downtime.list = Downtime.query;

    Downtime.prototype.toString = function() {
        return 'eblana.event.Downtime : ' + (this.id ? this.id : '(unsaved)');
    };

    return Downtime;
}
