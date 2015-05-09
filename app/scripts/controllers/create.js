'use strict';
/**
 * @ngdoc function
 * @name aokeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('aokeApp')
  .controller('CreateCtrl', function ($scope, Auth, $location, $q, Ref, $timeout, YoutubeFactory. $firebaseObject) {
    var roomsRef = new Firebase("https://aoke.firebaseio.com/rooms");
    $scope.room = {
      creator : Auth.getCurrentUser(),
      users : []
    }

    $scope.search = function(query){
      YoutubeFactory.search(query).then(function(data){
        $scope.searchResults = data;
      })
    }

    $scope.createRoom = function(title, description, videoId) {
      YoutubeFactory.createPlaylist(title, description).then(function(playlist){
        $scope.room.playlist = playlist;
        YoutubeFactory.addSong(videoId, playlist).then(function(data){
          console.log('created room');
          var roomKey = roomsRef.push(room);
        })
      })
    }




});
