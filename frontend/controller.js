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
    
});


app.controller('resumeCtlr',function($scope,$http) {
    var docs = {
        'resume':'files/Amador_Trey_Resume.pdf',
        'riverside':'files/Amador_Trey_UCR_Unofficial.pdf',
        'pomona':'files/Amador_Trey_Pomona_Unofficial.pdf',
        'nih':'https://www.ncbi.nlm.nih.gov/pmc/articles/'+
                'PMC5013726/pdf/nihms-808778.pdf',
        'ugrj':'http://ssp.ucr.edu/journal/volumes/'+
                'volume7/ugrjournal-volvii_amador.pdf'
    };
    $scope.open_pdf = function(key) {
        window.open(docs[key]);
    }
});


app.controller('demoCtlr',function($scope) {
    $scope.status = construction();
});


app.controller('contactCtlr',function($scope) {
    $scope.status = construction();
});


app.controller('blogCtlr',function($scope) {
    $scope.status = construction();
});


app.controller('errorCtlr',function($scope,$http) {
    $http.get('/404').success(function(res) {
        $scope.code = res;
    });
});


var construction = function() {
    return 'this webpage is under construction';
}


