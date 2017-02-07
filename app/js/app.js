var testApp = angular.module('testingAngularApp', []);
testApp.controller('testingAngularCtrl', function($rootScope, $scope){
    $scope.title = "Testing AngularJS Application";

    $scope.destinations = [];
    $scope.newDestination = {
        city: undefined, 
        country: undefined
    }

    $scope.addDestination = function(){
        $scope.destinations.push(
            {
                city: $scope.newDestination.city,
                country: $scope.newDestination.country
            }
        )
    }
})