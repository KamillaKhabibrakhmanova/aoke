'use strict';

/**
 * @ngdoc function
 * @name aokeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aokeApp
 */
angular.module('aokeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
