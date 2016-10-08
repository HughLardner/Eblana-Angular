//= wrapped
//= require /angular/angular
//= require /eblana/core/eblana.core
//= require /eblana/index/eblana.index
//= require /eblana/character/playerCharacter/eblana.character.playerCharacter
//= require /eblana/character/feat/eblana.character.feat
//= require /eblana/character/characterFeat/eblana.character.characterFeat
angular.module("eblana", [
        "eblana.core",
        "eblana.index",
        "eblana.character.playerCharacter",
        "eblana.character.feat",
        "eblana.character.characterFeat"
    ]);
