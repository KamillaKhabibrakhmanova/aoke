'use strict';

/**
 * @ngdoc service
 * @name aokeApp.fb
 * @description
 * # fb
 * Factory in the aokeApp.
 */
angular.module('aokeApp')
  .factory('fb', function ($firebase) {
    var ref = new Firebase("https://aoke.firebaseio.com/");

    // Public API here
    return {
      ref: ref,
      room: ref.child('room'),
      users: ref.child('users')
    };
  });
