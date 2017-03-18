/**
 * routing applications
 */

var scotchApp = angular.module('scotchApp',['ngRoute']);


scotchApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        });
});


scotchApp.controller('mainController', function($scope,$http) {
    $scope.message = 'This comes from the main controller';
    $http.get('/').success(function(res) {
        //$scope.message = res.body;
        console.log(res);
    });


});


scotchApp.controller('aboutController',function($scope) {
    $scope.message = 'This is a description of me!';
});


scotchApp.controller('contactController',function($scope) {
    $scope.message = 'Contact us. This is a demo.'
});

