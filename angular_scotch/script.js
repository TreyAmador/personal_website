/**
 * routing applications
 */

var scotchApp = angular.module('scotchApp',['ngRoute']);


scotchApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});


scotchApp.controller('mainController', function($scope) {
    $scope.message = 'This comes from the main controller';
});


scotchApp.controller('aboutController',function($scope) {
    $scope.message = 'This is a description of me!';
});


scotchApp.controller('contactController',function($scope) {
    $scope.message = 'Contact us. This is a demo.'
});

