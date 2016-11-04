(function () {
    'use strict';

    angular
        .module('main')
        .factory('framework', framework);

    framework.$inject = ['$http'];

    function framework($http) {
        var service = {
            getFramework: getFramework,
            getOneFramework: getOneFramework,
            postFramework: postFramework,
            putFramework: putFramework,
            deleteFramework: deleteFramework
        };

        return service;

        ////////////////
        function getFramework() { 
            return $http.get('find');
        }

        function getOneFramework(id) {
            return $http.get('findOne/' + id);
        }

        function postFramework(data) {
            return $http.post('new', data);
        }

        function putFramework(id, data) {
            return $http.put('updateId/' + id, data);
        }

        function deleteFramework(id) {
            return $http.delete('remove/' + id);
        }
    }
})();