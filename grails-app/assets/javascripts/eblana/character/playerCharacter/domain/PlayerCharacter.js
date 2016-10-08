//= wrapped
//= require /angular/angular-resource

angular
    .module("eblana.character.playerCharacter")
    .factory("PlayerCharacter", PlayerCharacter);

function PlayerCharacter($resource, domainListConversion, domainToManyConversion, domainConversion) {
    var PlayerCharacter = $resource(
        "playerCharacter/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("CharacterSpell", "spell", "domainToManyConversion"), domainListConversion("Item", "item", "domainToManyConversion"), domainListConversion("Lore", "lore", "domainToManyConversion"), domainListConversion("Classes", "classes", "domainToManyConversion"), domainListConversion("Recipe", "recipe", "domainToManyConversion"), domainListConversion("Settlement", "settlement", "domainConversion"), domainListConversion("Downtime", "downtime", "domainToManyConversion"), domainListConversion("Species", "species", "domainConversion"), domainListConversion("CharacterFeat", "feat", "domainToManyConversion"), domainListConversion("SecUser", "user", "domainConversion"), domainListConversion("God", "god", "domainConversion"), domainListConversion("Group", "group", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("CharacterSpell", "spell"), domainToManyConversion("Item", "item"), domainToManyConversion("Lore", "lore"), domainToManyConversion("Classes", "classes"), domainToManyConversion("Recipe", "recipe"), domainConversion("Settlement", "settlement"), domainToManyConversion("Downtime", "downtime"), domainConversion("Species", "species"), domainToManyConversion("CharacterFeat", "feat"), domainConversion("SecUser", "user"), domainConversion("God", "god"), domainConversion("Group", "group")]}}
    );

    PlayerCharacter.list = PlayerCharacter.query;

    PlayerCharacter.prototype.toString = function() {
        return 'eblana.character.PlayerCharacter : ' + (this.id ? this.id : '(unsaved)');
    };

    return PlayerCharacter;
}
