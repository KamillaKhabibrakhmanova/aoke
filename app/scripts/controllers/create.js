'use strict';

/**
 * @ngdoc function
 * @name aokeApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the aokeApp
 */
angular.module('aokeApp')
    .controller('CreateCtrl', function($scope, $http, fb, auth, $location, localStorageService) {
        var creator = auth.getCurrentUser();
        var api = "AIzaSyDyrtn0sfyk4-FLVyWS1q2uvOiIu__FLMY";

        $scope.videoId = "";
        $scope.searchResults = [];
        $scope.room = {
            creator: creator,
            playlist: [],
            users: [],
            videos: []
        }

        $scope.playlistCreated = false;
        $scope.addedVideos = [];
        console.log('creator', creator);
        $scope.room.users.push(creator);

        $scope.search = function(query) {
            $http({
                    url: 'https://www.googleapis.com/youtube/v3/search',
                    method: 'GET',
                    params: {
                        part: 'snippet',
                        q: 'karaoke ' + query,
                        maxResults: 9
                    },
                    headers: {
                        Authorization: 'Bearer ' + creator.google.accessToken
                    }
                })
                .success(function(res) {
                    $scope.searchResults = res.items;
                });
        };

        /*  $scope.addToIdsArray = function(videoId) {
            $scope.videoId = videoId;
            angular.element('#search-results').css({display: 'none'});
          }*/

        $scope.createPlaylist = function(isValid) {

            $scope.playlistCreated = true;
            if(isValid) {
                console.log('Form is valid')
            };

            $http({
                    url: "https://www.googleapis.com/youtube/v3/playlists",
                    method: "POST",
                    params: {
                        part: 'snippet, status',
                        key: api
                    },
                    data: {
                        snippet: {
                            'title': $scope.playlist.title,
                            'description': $scope.playlist.description
                        },
                        status: {
                            'privacyStatus': 'public'
                        }
                    },
                    headers: {
                        Authorization: 'Bearer ' + creator.google.accessToken
                    }
                })
                .success(function(playlist) {
                    console.log(playlist);
                    $scope.playlist = playlist;
                    $scope.room.playlist.push(playlist);
                    var key = fb.room.push($scope.room);
                    $scope.roomKey = key.toString().split("room/")[1];
                });
        }

        $scope.addVideo = function(videoId) {
            

            $http({
                    url: 'https://www.googleapis.com/youtube/v3/playlistItems',
                    method: 'POST',
                    params: {
                        part: 'snippet',
                    },
                    data: {
                        snippet: {
                            playlistId: $scope.playlist.id,
                            resourceId: {
                                kind: 'youtube#video',
                                videoId: videoId
                            }
                        }
                    },
                    headers: {
                        Authorization: 'Bearer ' + creator.google.accessToken
                    }
                })
                .success(function(video) {
                    angular.element('#' + videoId).css({
                        display: 'block'
                    });
                    $scope.addedVideos.push(video);
                    console.log('added videos', $scope.addedVideos )
                });
        }

        $scope.createRoom = function() {
            localStorageService.set("creator", creator);
            $location.path('/room/' + $scope.roomKey);
        }

    $(function() {
      $("#firstb").click(function () {
        $('html,body').animate({
            scrollTop: $("#second").offset().top
          },
          'slow');
      });

    });

    });
