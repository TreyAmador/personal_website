/**
 * routing applications
 */

var personalApp = angular
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
            })
            .otherwise({
                templateUrl: 'views/error.html',
                controller: 'errorCtlr'
            });
        $locationProvider.html5Mode({
            enabled: true
        });
    });


personalApp.controller('homeCtlr', function($scope,$http) {
    $http.get('/home').success(function(res) {
        $scope.message = res;
    });
});


personalApp.controller('aboutCtlr',function($scope) {
    $scope.message = 'This is a description of me!';
});


personalApp.controller('contactCtlr',function($scope) {
    $scope.message = 'Contact us. This is a demo.'
});


personalApp.controller('errorCtlr',function($scope,$http) {
    $http.get('/404').success(function(res) {
        //console.log(res);
        $scope.code = res;
    });
});

