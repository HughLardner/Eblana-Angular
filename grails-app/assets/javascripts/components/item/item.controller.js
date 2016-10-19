(function(projectName, angular) {

	'use strict';

	angular.module('app.components.item', [ 'ngResource' ])

	.factory('ItemService', [ '$resource', function($resource) {
		return $resource('/item/:id')
	} ])

	.controller('ItemController',
			[ 'logger', 'ItemService', function(logger, ItemService) {
				var vm = this;
				vm.item = ItemService.get({
					id : vm.id
				});
				logger.info('Loading controller:', vm);
			} ])

	.component("item", {
		templateUrl : "assets/components/item/item.component.html",
		controller : 'ItemController',
		controllerAs : 'vm',
		bindings : {
			id : '<',
		}
	});

})(window.projectName = window.projectName || {}, angular);
