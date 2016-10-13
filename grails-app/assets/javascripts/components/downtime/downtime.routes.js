
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components.downtime')
    .run(appRun);

  function appRun(routerHelper) {

    routerHelper.configureStates(getStates());

  }

  function getStates() {

    return [
      {
        state: 'downtime',
        config: {
          url: '/downtime/:id',
          templateUrl:  'assets/components/downtime/downtime.view.html',
          controller:   'DowntimeController',
          controllerAs: 'DowntimeController',
        },
      },
    ];

  }

})(window.projectName = window.projectName || {}, angular);
