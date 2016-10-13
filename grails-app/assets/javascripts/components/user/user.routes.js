
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components.user')
    .run(appRun);

  function appRun(routerHelper) {

    routerHelper.configureStates(getStates());

  }

  function getStates() {

    return [
      {
        state: 'user',
        config: {
          url: '/user/:id',
          templateUrl:  'assets/components/user/user.view.html',
          controller:   'UserController',
          controllerAs: 'UserController',
        },
      },
    ];

  }

})(window.projectName = window.projectName || {}, angular);
