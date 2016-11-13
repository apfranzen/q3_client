(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'js/components/tasks/tasks.view.html',
        controller: 'tasksController',
        controllerAs: 'tasksCtrl'
      })
      .otherwise({
          redirectTo: '/'
        });
  }

})();
