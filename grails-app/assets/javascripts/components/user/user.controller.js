(function(projectName, angular) {

	'use strict';

	angular.module('app.components.user', [ 'ngResource' ])
		.factory('UserService', [ '$resource', function($resource) {
				return $resource('/secUser/:id')
		}])
		.controller('UserController', ['logger', 'UserService',  function(logger, UserService) {
				var vm = this;				
				vm.user = UserService.get({id : vm.id});
				logger.info('Loading controller:', vm);
			    
			    vm.next = function () {
			      vm.id++; 
			      vm.user = UserService.get({id : vm.id});
			      logger.info('Loading controller:', vm);
			    }
			    
			    vm.back = function () {
				      vm.id--; 
				      vm.user = UserService.get({id : vm.id});
				      logger.info('Loading controller:', vm);
				    }
		}])
		.component("user", {
			templateUrl : "assets/components/user/user.component.html",
			controller : 'UserController',
			controllerAs : 'vm',
			bindings : {
				id : '<',
			}
		});

})(window.projectName = window.projectName || {}, angular);