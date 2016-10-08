//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.items.item")
    .factory("Item", Item);

function Item($resource) {
    var Item = $resource(
        "item/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Item.list = Item.query;

    Item.prototype.toString = function() {
        return 'eblana.items.Item : ' + (this.id ? this.id : '(unsaved)');
    };

    return Item;
}
