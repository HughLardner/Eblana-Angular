(function(projectName, angular) {

	'use strict';

	angular.module('app.components.downtime', [ 'ngResource' ])
		.factory('DowntimeService', [ '$resource', function($resource) {
				return $resource('/downtime/:id')
		}])
		.controller('DowntimeController', ['logger', 'DowntimeService',  function(logger, DowntimeService) {
				var vm = this;				
				vm.downtime = DowntimeService.get({id : vm.id});
				logger.info('Loading controller:', vm);
			    
			    vm.next = function () {
			      vm.id++; 
			      vm.downtime = DowntimeService.get({id : vm.id});
			      logger.info('Loading controller:', vm);
			    }
			    
			    vm.back = function () {
				      vm.id--; 
				      vm.downtime = DowntimeService.get({id : vm.id});
				      logger.info('Loading controller:', vm);
				    }
		}])
		.component("downtime", {
			templateUrl : "assets/components/downtime/downtime.component.html",
			controller : 'DowntimeController',
			controllerAs : 'vm',
			bindings : {
				id : '<',
			}
		});

})(window.projectName = window.projectName || {}, angular);