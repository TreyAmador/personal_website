

var app = angular.module('TreyAmador',[]);

app.controller('indexctrl',[
    '$scope',
    function($scope){
        $scope.test = 'Hello, world!';
        console.log($scope.test);
    }
]);


