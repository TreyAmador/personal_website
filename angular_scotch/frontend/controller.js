/**
 * routing applications
 */

var scotchApp = angular
.module('personalApp',['ngRoute'])
.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtlr'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtlr'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtlr'
        });
        $locationProvider.html5Mode({
            enabled: true
        });
});


scotchApp.controller('homeCtlr', function($scope,$http) {
    //$scope.message = 'This comes from the main controller';
    $http.get('/home').success(function(res) {
        $scope.message = res;
    });


});


scotchApp.controller('aboutCtlr',function($scope) {
    $scope.message = 'This is a description of me!';
});


scotchApp.controller('contactCtlr',function($scope) {
    $scope.message = 'Contact us. This is a demo.'
});

