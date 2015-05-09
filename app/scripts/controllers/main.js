'use strict';

/**
 * @ngdoc function
 * @name aokeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aokeApp
 */
angular.module('aokeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
