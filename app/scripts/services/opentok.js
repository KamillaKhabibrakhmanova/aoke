'use strict';

 angular.module('aokeApp')
   .value({
    apiKey:'45232972'
  })

 .factory('OpenTok', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      createNewSession: function() {
        return $http.get('http://localhost:3000/new');
      },

      newPublisherToken: function(session) {
        return $http.get('http://localhost:3000/new/publisher/' + session);
      }
    }



});
