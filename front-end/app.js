var appJ = angular.module('aws-sample', ['ngMaterial', 'ngMessages', 'ui.router', ])

appJ.config(function($stateProvider) {
    $stateProvider
        .state({
            name: "home",
            url: "/home-url",
            template: "<h1>I am home!</h1>"

        })
        .state({
            name: "auth",
            url: "/auth-url",
            templateUrl: "views/auth.ejs",
            params: {
                listData: null,
                listType: null
            }

        })
        .state({
            name: 'list-buckets',
            url: '/list-bucket-url',
            templateUrl: "views/list-buckets.ejs",
        })
        .state({
            name: 'list-bucket-objects',
            url: '/list-bucket-objects-url',
            templateUrl: "views/list-bucket-objects.ejs",
        })
})