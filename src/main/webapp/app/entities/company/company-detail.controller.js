(function() {
    'use strict';

    angular
        .module('tmsApp')
        .controller('CompanyDetailController', CompanyDetailController);

    CompanyDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Company'];

    function CompanyDetailController($scope, $rootScope, $stateParams, previousState, entity, Company) {
        var vm = this;

        vm.company = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('tmsApp:companyUpdate', function(event, result) {
            vm.company = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
