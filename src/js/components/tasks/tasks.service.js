(function() {

  'use strict';

  angular
    .module('myApp.components.tasks')
    .service('tasksService', tasksService);

  tasksService.$inject = ['$http'];

  function tasksService($http) {
    /*jshint validthis: true */
    this.greeting = 'Task Control!';
    this.test = 'test';

    this.getAllTasks = function() {
      console.log('getAllTasks hit');
      return $http.get('http://localhost:4567/tasks');
    };

    this.addTask = function() {
      console.log('addTask in Service hit');
      return $http.post('http://localhost:4567/tasks');
    };
  }

})();
