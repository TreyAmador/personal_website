/**
 * routing applications
 */

var app = angular
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


app.controller('homeCtlr', function($scope,$http) {
    //$http.get('/home').success(function(res) {
    //    $scope.message = res;
    //});
});


app.controller('resumeCtlr',function($scope,$http) {
    $scope.resume_pdf = function() {
        window.open('files/Amador_Trey_Resume.pdf');
    }
});


app.controller('demoCtlr',function($scope) {
    $scope.message = 'Demonstrations';
});


app.controller('contactCtlr',function($scope) {
    $scope.message = 'Contact us. This is a demo.'
});


app.controller('errorCtlr',function($scope,$http) {
    $http.get('/404').success(function(res) {
        $scope.code = res;
    });
});


