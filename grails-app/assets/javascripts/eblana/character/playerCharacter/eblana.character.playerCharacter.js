//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /eblana/character/core/eblana.character.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("eblana.character.playerCharacter", ["ui.router", "ngResource", "eblana.character.core"]).config(config);

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
