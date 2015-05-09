'use strict';
/**
 * @ngdoc function
 * @name aokeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('aokeApp')
  .controller('RoomCtrl', function ($scope, Auth, $location, $q, Ref, $timeout) {

    $scope.addVideo = function(videoId) {
      $scope.video = videoId;
    }
    $scope.createRoom = function() {
    }




});
