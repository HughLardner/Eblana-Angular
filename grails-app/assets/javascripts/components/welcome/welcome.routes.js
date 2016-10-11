
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components.welcome')
    .run(appRun);

  function appRun(routerHelper) {

    routerHelper.configureStates(getStates());

  }

  function getStates() {

    return [
      {
        state: 'welcome',
        config: {
          url: '/',
          templateUrl:  'assets/components/welcome/welcome.view.html',
          controller:   'WelcomeController',
          controllerAs: 'WelcomeController',
        },
      },
    ];

  }

})(window.projectName = window.projectName || {}, angular);
