var app = angular.module("AfricaApp", ['ngRoute']).config(function($routeProvider) {
        $routeProvider.when('/flights', {
            templateUrl: 'views/flights.html',
            controller:'Controller'
        }).when('/bus', {
            templateUrl: 'views/bus.html',
            controller: 'Controller'
        }).when('/taxi',{
        	templateUrl: 'views/taxi.html',
        	controller: 'Controller'
        });
    });