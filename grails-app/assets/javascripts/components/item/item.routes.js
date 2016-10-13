
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components.item')
    .run(appRun);

  function appRun(routerHelper) {

    routerHelper.configureStates(getStates());

  }

  function getStates() {

    return [
      {
        state: 'item',
        config: {
          url: '/item/:id',
          templateUrl:  'assets/components/item/item.view.html',
          controller:   'ItemController',
          controllerAs: 'ItemController',
        },
      },
    ];

  }

})(window.projectName = window.projectName || {}, angular);
