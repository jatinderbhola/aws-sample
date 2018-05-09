angular.module('aws-sample')

.controller('MainController', function($scope, $http, $mdToast, $state) {
    console.log('main controller calling');

    $scope.gotoState = function(state) { //"home"
        if (state === 'auth') {
            // get the list of buckets
            var listData = [{
                    "name": "John",
                    "age": 303,
                    "cars": ["Ford", "BMW", "Fiat"]
                },
                {
                    "name": "Johan",
                    "age": 302,
                    "cars": ["Ford", "BMW", "Fiat"]
                }, {
                    "name": "Johssn",
                    "age": 303,
                    "cars": ["Foasdrd", "BMW", "Fiat"]
                }
            ];
            $state.go(state, { listData: listData, listType: 'bucket' });
            return;
        }

        $state.go(state);
        //learn about $state with params
        //$state.reload()
    };
})