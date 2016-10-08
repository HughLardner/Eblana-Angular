//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.feat")
    .factory("Feat", Feat);

function Feat($resource) {
    var Feat = $resource(
        "feat/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Feat.list = Feat.query;

    Feat.prototype.toString = function() {
        return 'eblana.character.Feat : ' + (this.id ? this.id : '(unsaved)');
    };

    return Feat;
}
