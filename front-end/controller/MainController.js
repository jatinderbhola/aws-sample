angular.module('aws-sample')

.controller('MainController', function($scope, $http, $mdToast) {
    console.log('main controller calling');

    $scope.toggleAuthContainer = false;
    $scope.amazon = {};
    // authenticate the aws api token and key
    $scope.authentication = function() {
        if (!$scope.amazon.apiKey) {
            toastMsg("Enter api key! Required Field");
            return;
        }

        if (!$scope.amazon.apiToken) {
            toastMsg("Enter api Token! Required Field");
            return;
        }

        $http.post("/amazon/auth", $scope.amazon).then((result) => { //wwww,x.com?a=a&b=b
            result = result.data || result;
            if (result.Buckets && result.Buckets.length)
                toastMsg("Authenticated");
        }).catch((err) => {
            toastMsg(err.data)
            console.error(err);
        });
    };

    $scope.checkAuthRequest = function() {
        $scope.toggleAuthContainer = true;
    };

    function toastMsg(msg) {
        var toast = $mdToast.simple({ position: "bottom right" })
            .textContent(msg)
            .hideDelay(3000) //3000
            .highlightAction(false);
        $mdToast.show(toast);
    }
})