'use strict';
/**
 * @ngdoc function
 * @name aokeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('aokeApp')
  .controller('CreateCtrl', function ($scope, Auth, $location, $q, Ref, $timeout, YoutubeFactory. $firebaseObject, user) {
    var roomsRef = new Firebase("https://aoke.firebaseio.com/rooms");
    $scope.room = {
      creator : user,
      users : []
    }

    $scope.search = function(query){
      YoutubeFactory.search(query, user).then(function(data){
        console.log('search happend');
        $scope.searchResults = data;
      })
    }

    $scope.createRoom = function(title, description, videoId) {
      YoutubeFactory.createPlaylist(title, description, user).then(function(playlist){
        $scope.room.playlist = playlist;
        YoutubeFactory.addSong(videoId, playlist, user).then(function(data){
          console.log('created room');
          var roomKey = roomsRef.push(room);
        })
      })
    }




});
