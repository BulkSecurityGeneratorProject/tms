(function() {
    'use strict';

    angular
        .module('tmsApp')
        .controller('JobDetailController', JobDetailController);

    JobDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Job', 'Employee', 'Task'];

    function JobDetailController($scope, $rootScope, $stateParams, previousState, entity, Job, Employee, Task) {
        var vm = this;

        vm.job = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('tmsApp:jobUpdate', function(event, result) {
            vm.job = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
