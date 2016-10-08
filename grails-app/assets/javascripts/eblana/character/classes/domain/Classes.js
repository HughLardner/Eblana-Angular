//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.classes")
    .factory("Classes", Classes);

function Classes($resource) {
    var Classes = $resource(
        "classes/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Classes.list = Classes.query;

    Classes.prototype.toString = function() {
        return (this ? this.name + ' ' + this.level : '');
    };

    return Classes;
}
