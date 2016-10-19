(function(projectName, angular) {

	'use strict';

	angular.module('app.components.recipe', [ 'ngResource' ])
		.factory('RecipeService', [ '$resource', function($resource) {
				return $resource('/playerCharacter/:id/fetchRecipes')
		}])
		.controller('RecipeController', ['logger', 'RecipeService',  function(logger, RecipeService) {
				var vm = this;				
				vm.recipe = RecipeService.query({id : vm.id});
				logger.info('Loading controller:', vm);
			    
			    vm.next = function () {
			      vm.id++; 
			      vm.recipe = RecipeService.query({id : vm.id});
			      logger.info('Loading controller:', vm);
			    }
			    
			    vm.back = function () {
				      vm.id--; 
				      vm.recipe = RecipeService.query({id : vm.id});
				      logger.info('Loading controller:', vm);
				    }
		}])
		.component("recipe", {
			templateUrl : "assets/components/recipe/recipe.component.html",
			controller : 'RecipeController',
			controllerAs : 'vm',
			bindings : {
				id : '<',
			}
		});

})(window.projectName = window.projectName || {}, angular);