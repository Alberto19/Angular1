(function () {
    'use strict';

    angular
        .module('main')
        .controller('FrameworkController', FrameworkController);

    FrameworkController.$inject = ['framework'];

    function FrameworkController(framework) {
        var vm = this;
        vm.framework = null;
        vm.frameworks = null;
        vm.mensagem = null;

        vm.getFramework = getFramework;
        vm.getOneFramework = getOneFramework;
        vm.postFramework = postFramework;

        vm.getFramework();

        ////////////////

        function getFramework() {
            framework.getFramework().success(function (data) {
                vm.frameworks = data;
            });
        }

        function getOneFramework(id) {
            framework.getOneFramework({id:vm.framework._id}).success(function (data) {
                vm.framework.id = data
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
                }
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