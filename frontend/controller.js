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
            .when('/resume', {
                templateUrl: 'views/resume.html',
                controller: 'resumeCtlr'
            })
            .when('/demo', {
                templateUrl: 'views/demo.html',
                controller: 'demoCtlr'
            })
            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'blogCtlr'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactCtlr'
            })
            .otherwise({
                templateUrl: 'views/error.html',
                controller: 'errorCtlr'
            });
        $locationProvider.html5Mode({ enabled: true });
    });


personalApp.controller('homeCtlr', function($scope,$http) {
    $http.get('/home').success(function(res) {
        $scope.message = res;
    });
});


personalApp.controller('resumeCtlr',function($scope) {
    $scope.message = 'This is a description of me!';
});


personalApp.controller('demoCtlr',function($scope) {
    $scope.message = 'Demonstrations';
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

