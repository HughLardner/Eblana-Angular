(function(projectName, angular) {

	'use strict';

	angular.module('app.components.minor', [  ])
		.component("resource", {
			templateUrl : "assets/components/minor/resource.component.html",
			bindings : {
				air:'<',
				earth : '<',
				fire : '<',
				water : '<',
				blended : '<',
				void : '<'
			}
		}).component("transfer", {
			templateUrl : "assets/components/minor/transfer.component.html",
			bindings : {
				transfer:'<',
			}
		});

})(window.projectName = window.projectName || {}, angular);