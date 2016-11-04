(function () {
    'use strict';

    angular
        .module('main')
        .controller('FrameworkController', FrameworkController);

    FrameworkController.$inject = ['framework', '$routeParams', '$location'];

    function FrameworkController(framework, $routeParams, $location) {
        var vm = this;
        vm.framework = null;
        vm.frameworks = null;
        vm.mensagem = null;

        vm.getFramework = getFramework;
        vm.getOneFramework = getOneFramework;
        vm.postFramework = postFramework;
        vm.putFramework = putFramework;
        vm.deleteFramework = deleteFramework;

        var state = $routeParams.state;

        if (state === 'list') {
            vm.getFramework();
        }

        if (state === 'edit') {
            vm.getOneFramework();
        }

        ////////////////

        function getFramework() {
            framework.getFramework().success(function (data) {
                vm.frameworks = data;
            });
        }

        function getOneFramework() {
            var id = $routeParams.Id;

            framework.getOneFramework(id).success(function (data) {
                vm.framework = data;
            });
        }

        function postFramework() {
            framework.postFramework({
                nome: vm.nome,
                site: vm.site,
                foto: vm.foto,
                descricao: vm.descricao
            }).success(function () {
                vm.nome = null;
                vm.site = null;
                vm.foto = null;
                vm.descricao = null;

                $location.path('/framework/list');
            });
        }

        function putFramework() {
            var id = $routeParams.Id;

            var data = {nome: vm.framework.nome, site: vm.framework.site, foto: vm.framework.foto};

            framework.putFramework(id, data);
        }

        function deleteFramework(id){
            framework.deleteFramework(id).success(function(){
                vm.getFramework();
            });
        }
    }
})();