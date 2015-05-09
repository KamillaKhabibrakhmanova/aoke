'use strict';

angular.module('aokeApp')
    .factory('YoutubeFactory', ['Auth', '$http', function(Auth, $http) {
        return {
            search: function(query, user) {
                return $http({
                    url: 'https://www.googleapis.com/youtube/v3/search',
                    method: 'GET',
                    params: {
                        part: 'snippet',
                        q: 'karaoke ' + query,
                        maxResults: 4
                    },
                    headers: {
                        Authorization: 'Bearer ' + user.google.accessToken
                    }
                }).then(function(data) {
                    return data.items;
                })
            },
            createPlaylist: function(title, description, user) {
                return $http({
                    url: "https://www.googleapis.com/youtube/v3/playlists",
                    method: "POST",
                    params: {
                        part: 'snippet, status',
                        key: api
                    },
                    data: {
                        snippet: {
                            'title': title,
                            'description': description
                        },
                        status: {
                            'privacyStatus': 'public'
                        }
                    },
                    headers: {
                        Authorization: 'Bearer ' + user.google.accessToken
                    }
                }).then(function(playlist) {
                    return playlist;
                })
            },
            addSong: function(videoId, playlist, user) {
                return $http({
                    url: 'https://www.googleapis.com/youtube/v3/playlistItems',
                    method: 'POST',
                    params: {
                        part: 'snippet',
                    },
                    data: {
                        snippet: {
                            playlistId: playlist.id,
                            resourceId: {
                                kind: 'youtube#video',
                                videoId: videoId
                            }
                        }
                    },
                    headers: {
                        Authorization: 'Bearer ' + user.google.accessToken
                    }
                }).then(function(data){
                  return data;
                })
            }
        }
    }])
