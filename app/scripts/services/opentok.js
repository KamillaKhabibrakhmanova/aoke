'use strict';

 angular.module('aokeApp')
 .factory('OpenTok', function () {
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
