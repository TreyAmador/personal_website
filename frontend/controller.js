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
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutCtlr'
            })
            .when('/cengine', {
                templateUrl: 'views/democengine.html',
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
        $locationProvider.hashPrefix('');
    });


const docs = {
    'resume':'files/Amador_Trey_Resume.pdf',
    'riverside':'files/Amador_Trey_UCR_Unofficial.pdf',
    'pomona':'files/Amador_Trey_Pomona_Unofficial.pdf',
    'nih':'https://www.ncbi.nlm.nih.gov/pmc/articles/'+
            'PMC5013726/pdf/nihms-808778.pdf',
    'ugrj':'http://ssp.ucr.edu/journal/volumes/'+
            'volume7/ugrjournal-volvii_amador.pdf'
};


app.controller('homeCtlr', function($scope,$http) {

    $scope.open_pdf = function() {
        window.open(docs['resume']);
    }

});


app.controller('aboutCtlr',function($scope,$http) {

    $scope.open_pdf = function(key) {
        window.open(docs[key]);
    }
    
});


app.controller('demoCtlr',function($scope) {
    $scope.status = construction();
});


app.controller('contactCtlr',function($scope,$http) {
    var reset_input = function() {
        $scope.message.username = '';
        $scope.message.subject = '';
        $scope.message.textbody = '';
        $scope.message.email = '';
    }
    var reset_result = function() {
        $scope.submission_result = '';
    }
    $scope.submit = function(message) {
        var proper_input = true;
        $('input,textarea').each(function() {
            var holder = $(this).attr('placeholder');
            if (holder !== 'E-mail (optional)' && (!$(this) || !$(this).val())) {
                $scope.submission_result = holder+' space left blank.';
                proper_input = false;
            }
        });
        if (proper_input) {
            var user_message = $scope.message;
            $http.post('/user-message',user_message).then(function(res) {
                if (res.data.code == 500) {
                    $scope.submission_result = res.data.errormsg;
                } else if (res.data.code == 200) {
                    $scope.submission_result = 'Message sent!';
                    reset_input();
                } else {
                    reset_result();
                }
            },function(err) {
                $scope.submission_result = 'There was a server error.';
            });
        }
    }
});


app.controller('blogCtlr',function($scope) {
    $scope.status = construction();
});


app.controller('errorCtlr',function($scope,$http) {
    $http.get('/404').then(function(res) {
        $scope.code = res.data;
    },function(err) {
        $scope.code = 'unknown';
    });
});


var construction = function() {
    return 'this webpage is under construction';
}


