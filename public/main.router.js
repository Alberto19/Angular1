(function () {
    'use strict';

    angular
        .module('main')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider.when('/framework/adicionar', {
                    templateUrl: 'partials/framework/new.html',
                    controller: 'FrameworkController',
                    controllerAs: 'vm'
                })
                .when('/framework/:state', {
                    templateUrl: 'partials/framework/list.html',
                    controller: 'FrameworkController',
                    controllerAs: 'vm'
                })
                .when('/framework/:state/:Id', {
                    templateUrl: 'partials/framework/update.html',
                    controller: 'FrameworkController',
                    controllerAs: 'vm'
                });
        }]);
})();