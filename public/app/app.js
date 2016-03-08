angular.module('Notes', ['ngRoute','CtrlNotes','CtrlHome'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/note', {
			templateUrl: 'app/views/notes/create-note.html',
			controller: 'Note'
		}).when('/home', {
			templateUrl: 'app/views/notes/home.html',
			controller: 'Home'
		}).otherwise({redirectTo:'/note'});
    $locationProvider.html5Mode(true);
}).run(function($rootScope,$location){
	/*apply active class */
    $rootScope.isActive = function (getVal) { 
        return getVal === $location.path();
    };
});