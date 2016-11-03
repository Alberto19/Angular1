(function () {
    'use strict';

    angular
        .module('main')
        .controller('FrameworkController', FrameworkController);

    FrameworkController.$inject = ['framework', '$routeParams'];

    function FrameworkController(framework, $routeParams) {
        var vm = this;
        vm.framework = null;
        vm.frameworks = null;
        vm.mensagem = null;

        vm.getFramework = getFramework;
        vm.getOneFramework = getOneFramework;
        vm.postFramework = postFramework;

        var state = $routeParams.state;

        if (state === 'list') {
            vm.getFramework();
        }

        if (state === 'edit') {
            vm.getOneFramework();
        }

        if(state === 'remove'){
            //Faz ai. Rs
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
                vm.mensagem = {
                    text: 'Adicionado com sucesso',
                    type: 'success'
                };
            }).error(function (erro) {
                vm.mensagem = {
                    text: 'Não foi possível adicionar',
                    type: 'danger'
                }
                console.log(erro);
            })
        }
    }
})();