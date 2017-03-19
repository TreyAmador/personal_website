/**
 * the front-end routing mechanism using angularjs
 */


var app = angular.module('frontend',['ngRoute']);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when('/',{
        templateUrl: '../public/main.html'
    })
    .when('/resume',{
        templateUrl: '../public/resume.html'
    })
    .when('/demos',{
        templateUrl: 'demos.html'
    })
    .when('/blog',{
        templateUrl: 'blog.html'
    });

    
    
});


