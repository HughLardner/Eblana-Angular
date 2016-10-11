
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components.character')
    .run(appRun);

  function appRun(routerHelper) {

    routerHelper.configureStates(getStates());

  }

  function getStates() {

    return [
      {
        state: 'character',
        config: {
          url: '/character/:id',
          templateUrl:  'assets/components/character/character.view.html',
          controller:   'CharacterController',
          controllerAs: 'CharacterController',
        },
      },
    ];

  }

})(window.projectName = window.projectName || {}, angular);
