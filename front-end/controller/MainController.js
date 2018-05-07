angular.module('aws-sample')

.controller('MainController', function($scope, $http) {
    console.log('main controller calling');
    // authenticate the aws api token and key
    $scope.authentication = function() {
        $http.get("/amazon").then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(result);
        });
    };

    $scope.createBucket = function() {};
})