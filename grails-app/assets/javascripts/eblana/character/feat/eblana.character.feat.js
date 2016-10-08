//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /eblana/character/core/eblana.character.core
//= require /eblana/character/species/eblana.character.species
//= require /eblana/character/feat/eblana.character.feat
//= require /eblana/character/classes/eblana.character.classes
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("eblana.character.feat", [
    "ui.router",
    "ngResource",
    "eblana.character.core",
    "eblana.character.species",
    "eblana.character.feat",
    "eblana.character.classes"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('feat', {
            url: "/feat",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('feat.list', {
            url: "",
            templateUrl: "/eblana/character/feat/list.html",
            controller: "FeatListController as vm"
        })
        .state('feat.create', {
            url: "/create",
            templateUrl: "/eblana/character/feat/create.html",
            controller: "FeatCreateController as vm"
        })
        .state('feat.edit', {
            url: "/edit/:id",
            templateUrl: "/eblana/character/feat/edit.html",
            controller: "FeatEditController as vm"
        })
        .state('feat.show', {
            url: "/show/:id",
            templateUrl: "/eblana/character/feat/show.html",
            controller: "FeatShowController as vm"
        });
}
