//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /eblana/character/core/eblana.character.core
//= require /eblana/character/characterSpell/eblana.character.characterSpell
//= require /eblana/items/item/eblana.items.item
//= require /eblana/character/lore/eblana.character.lore
//= require /eblana/character/classes/eblana.character.classes
//= require /eblana/items/recipe/eblana.items.recipe
//= require /eblana/background/settlement/eblana.background.settlement
//= require /eblana/event/downtime/eblana.event.downtime
//= require /eblana/character/species/eblana.character.species
//= require /eblana/character/characterFeat/eblana.character.characterFeat
//= require /eblana/users/secUser/eblana.users.secUser
//= require /eblana/background/god/eblana.background.god
//= require /eblana/background/group/eblana.background.group
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("eblana.character.playerCharacter", [
    "ui.router",
    "ngResource",
    "eblana.character.core",
    "eblana.character.characterSpell",
    "eblana.items.item",
    "eblana.character.lore",
    "eblana.character.classes",
    "eblana.items.recipe",
    "eblana.background.settlement",
    "eblana.event.downtime",
    "eblana.character.species",
    "eblana.character.characterFeat",
    "eblana.users.secUser",
    "eblana.background.god",
    "eblana.background.group"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('playerCharacter', {
            url: "/playerCharacter",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('playerCharacter.list', {
            url: "",
            templateUrl: "/eblana/character/playerCharacter/list.html",
            controller: "PlayerCharacterListController as vm"
        })
        .state('playerCharacter.create', {
            url: "/create",
            params: {"settlementId":null,"userId":null,"godId":null,"groupId":null},
            templateUrl: "/eblana/character/playerCharacter/create.html",
            controller: "PlayerCharacterCreateController as vm"
        })
        .state('playerCharacter.edit', {
            url: "/edit/:id",
            templateUrl: "/eblana/character/playerCharacter/edit.html",
            controller: "PlayerCharacterEditController as vm"
        })
        .state('playerCharacter.show', {
            url: "/show/:id",
            templateUrl: "/eblana/character/playerCharacter/show.html",
            controller: "PlayerCharacterShowController as vm"
        });
}
