//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.background.group")
    .factory("Group", Group);

function Group($resource) {
    var Group = $resource(
        "group/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Group.list = Group.query;

    Group.prototype.toString = function() {
        return 'eblana.background.Group : ' + (this.id ? this.id : '(unsaved)');
    };

    return Group;
}
