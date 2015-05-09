'use strict';

/**
 * @ngdoc function
 * @name aokeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aokeApp
 */
angular.module('aokeApp')
  .controller('MainCtrl', function ($scope, Auth, $location, $q, Ref, $firebaseObject) {


    $scope.oauthLogin = function(provider, authData) {
    	console.log('authData', authData);
      $scope.err = null;
      Auth.$authWithOAuthPopup(provider, {
      	rememberMe: true, 
      	scope: 'https://www.googleapis.com/auth/youtube'
      })
      .then(redirect, showError);
    };

    // $scope.user = user;

    // $scope.logout = function() { Auth.$unauth(); };

    // var profile = $firebaseObject(Ref.child('users/'+user.uid));
    // profile.$bindTo($scope, 'profile');

    function redirect() {
    	$location.path('/account')
    }

     function showError(err) {
      $scope.err = err;
    }
  });
