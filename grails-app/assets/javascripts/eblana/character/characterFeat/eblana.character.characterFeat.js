//= wrapped
//= require /angular/angular 
//= require /eblana/character/core/eblana.character.core
//= require /eblana/character/playerCharacter/eblana.character.playerCharacter
//= require /eblana/character/effect/eblana.character.effect
//= require /eblana/character/feat/eblana.character.feat
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("eblana.character.characterFeat", [
    "eblana.character.core",
    "eblana.character.playerCharacter",
    "eblana.character.effect",
    "eblana.character.feat"
]);