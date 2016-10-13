(function(projectName, angular) {

	'use strict';

	angular.module('app.components.character', [ 'ngResource' ])
		.factory('CharacterService', [ '$resource', function($resource) {
				return $resource('/playerCharacter/:id')
		}])
		.controller('CharacterController', ['logger', 'CharacterService',  function(logger, CharacterService) {
				var vm = this;				
				vm.character = CharacterService.get({id : vm.id});
				logger.info('Loading controller:', vm);
			    
			    vm.next = function () {
			      vm.id++; 
			      vm.character = CharacterService.get({id : vm.id});
			      logger.info('Loading controller:', vm);
			    }
			    
			    vm.back = function () {
				      vm.id--; 
				      vm.character = CharacterService.get({id : vm.id});
				      logger.info('Loading controller:', vm);
				    }
		}])
		.component("playerCharacter", {
			templateUrl : "assets/components/character/character.component.html",
			controller : 'CharacterController',
			controllerAs : 'vm',
			bindings : {
				id : '<',
			}
		});

})(window.projectName = window.projectName || {}, angular);