(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components.character')
    .controller('CharacterController', CharacterController);

  CharacterController.$inject = ['$interval', 'logger', '$http'];
  function CharacterController($interval, logger, $http) {

    var vm = this;

    logger.info('Loading controller:', vm);
    
    $http({
    	  method: 'GET',
    	  url: '/playerCharacter/58'
    	}).then(function successCallback(response) {
    	    vm.character = response.data
    	  }, function errorCallback(response) {
    	    // called asynchronously if an error occurs
    	    // or server returns response with an error status.
    	  });
console.log(vm)
  }

})(window.projectName = window.projectName || {}, angular);


angular
.module("app.components.character")
.component("playerCharacter", {   	  
    templateUrl: "assets/components/character/character.view.html",
    controller:   'CharacterController',
    controllerAs: 'vm',
    bindings:{
    	id:'<',
    }
});