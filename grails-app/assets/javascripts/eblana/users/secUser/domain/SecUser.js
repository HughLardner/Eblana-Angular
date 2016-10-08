//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.users.secUser")
    .factory("SecUser", SecUser);

function SecUser($resource) {
    var SecUser = $resource(
        "secUser/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    SecUser.list = SecUser.query;

    SecUser.prototype.toString = function() {
        return (this ? this.name : '');
    };

    return SecUser;
}
