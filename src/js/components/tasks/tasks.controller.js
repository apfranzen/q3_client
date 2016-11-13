(function() {

  'use strict';

  angular
    .module('myApp.components.tasks', [])
    .controller('tasksController', tasksController);

  tasksController.$inject = ['tasksService'];

  function tasksController(tasksService) {
    /*jshint validthis: true */
    this.greeting = 'Task Control!';
    this.test = 'test';
    this.form = false;

    tasksService.getAllTasks()
    .then((tasks) => {
      this.tasks = tasks.data;
    });

    this.showForm = function() {
      console.log(this.form);
      this.form = true;
    };

    this.addTask = function(newTask) {
      console.log(newTask);
      tasksService.addTask(newTask)
      .then((newTask) => {
        this.newTask = newTask.data;
      });
      this.form = false;
    };

  }
})();
