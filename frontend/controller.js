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
        $locationProvider.hashPrefix('');
    });


app.controller('homeCtlr', function($scope,$http) {
    
});


app.controller('resumeCtlr',function($scope,$http) {

    var reset_input = function() {
        $scope.message.username = '';
        $scope.message.subject = '';
        $scope.message.textbody = '';
        $scope.message.email = '';
    }
    var reset_result = function() {
        $scope.submission_result = '';
    }
    reset_result();

    const docs = {
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

    $scope.submit = function(message) {
        

        //var iter = $('.input-list div').children();
        //for (var i = 0; i < iter.length; ++i) {
        //    console.log(iter[i].attr('placeholder'));
        //}

        //$('.input-list div').each(function(input,i) {
        //    console.log($(this).attr('placeholder'));
        //});

        /*
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; ++i) {
            var elem = inputs.item(i);
            if (elem.placeholder !== 'E-mail' &&
                elem && elem.value) {

                }
        }
        */
        var inputs = document.getElementsByTagName('input');
        var textareas = document.getElementsByTagName('textarea');
        for (var i = 0; i < inputs.length; ++i) {
            if (inputs.item(i) && inputs.item(i).value) {
                console.log(inputs.item(i).placeholder);
            }
        }
        for (var i = 0; i < textareas.length; ++i) {
            if (textareas.item(i) && textareas.item(i).value) {
                console.log(textareas.item(i).placeholder);
            }
        }
        /*
        if (el !== null && el.value === "")
{
  //The element was found and the value is empty.
}
        */


        var user_message = $scope.message;
        $http.post('/user-message',user_message).then(function(res) {
            if (res.data.code == 500 || res.data.code == 422) {
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
    $http.get('/404').then(function(res) {
        $scope.code = res.data;
    },function(err) {
        $scope.code = 'unknown';
    });
});


var construction = function() {
    return 'this webpage is under construction';
}


