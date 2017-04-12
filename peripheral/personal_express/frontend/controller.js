

var app = angular.module('form',[]);

app.controller('formCtrl',function($scope,$http) {

    var reset_input = function() {
        $scope.message.username = '';
        $scope.message.subject = '';
        $scope.message.textbody = '';
        $scope.message.email = '';
    }

    var reset_result = function() {
        $scope.submission_result = '';
    }

    $scope.submit_form = function() {
        // check form here
        var proper_input = true;
        $('input,textarea').each(function() {
            var holder = $(this).attr('placeholder');
            if (holder !== 'E-mail (optional)' && (!$(this) || !$(this).val())) {
                $scope.submission_result = holder+' space left blank.';
                proper_input = false;
            }
        });
        if (proper_input) {
            $http({
                method:'POST',
                url:'/contact',
                data:$scope.message
            }).then(function(res) {
                $scope.submission_result = 'Message sent.';
                reset_input();
            }, function(res) {
                $scope.submission_result = 'Error sending message!';
                reset_input();
            });
        }
    }

});


/*
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
*/

