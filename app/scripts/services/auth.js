'use strict';

/**
 * @ngdoc service
 * @name aokeApp.auth
 * @description
 * # auth
 * Service in the aokeApp.
 */
angular.module('aokeApp')
    // AngularJS will instantiate a singleton by calling "new" on this
.factory('auth', function(localStorageService){

	var CurrentUser;

	return {

	setCurrentUser : function(userData, cb){
    	CurrentUser = userData;
    	localStorageService.set('user', CurrentUser);

    	console.log('user set:', CurrentUser);
    },

    getCurrentUser : function(){
    	CurrentUser = localStorageService.get('user');
    	return CurrentUser;
    }

	}
})
