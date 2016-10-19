/**
 *  @module components
 *  @memberof app
 *  @see module:app
 *  @description
 *  It exposes application component
 */


(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components', [
      'app.components.welcome',
      'app.components.character', 
      'app.components.user',
      'app.components.downtime',
      'app.components.item',
      'app.components.minor',
      'app.components.recipe'
    ]);

})(window.projectName = window.projectName || {}, angular);