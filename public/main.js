(function () {
    'use strict';

    angular.module('main', [
        'ngRoute'
    ]).config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/framework', {
            templateUrl: 'partials/framework/list.html',
            controller: 'FrameworkController',
            controllerAs: 'vm'
        });

        $routeProvider.when('/framework/adicionar', {
            templateUrl: 'partials/framework/new.html',
            controller: 'FrameworkController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/framework/update/:Id', {
            templateUrl: 'partials/framework/update.html',
            controller: 'FrameworkController',
            controllerAs: 'vm'
        });

    })

})();