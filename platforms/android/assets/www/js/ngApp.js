/*global angular */
/*jshint globalstrict: true*/
var ngApp = angular.module('ngApp', ['ngRoute','ngDialog']);
// configure our routes
ngApp.config(['$routeProvider', function ($routeProvider) {

    // default
    $routeProvider
        .when('/home', {
      	    url: '/',
      	    templateUrl: 'partials/home.htm',
      	    controller: 'mainCtrl'
      	})
      	.when('/edit', {
      	    url: '/edit',
      	    templateUrl: 'partials/edit.htm',
      	    controller: 'mainCtrl'
      	})
      	.when('/edit/:id', {
      	    url: '/edit',
      	    templateUrl: 'partials/edit.htm',
      	    controller: 'mainCtrl'
      	})
        .otherwise({
            redirectTo: '/home'
        });
}]);
