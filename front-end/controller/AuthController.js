angular.module('aws-sample')

.controller('AuthController', function($scope, $state, $stateParams) {
    console.log('main controller calling');
    if ($stateParams) {
        $scope.listTypeV = $stateParams.listType;
        $scope.listDataV = $stateParams.listData;
    }

})