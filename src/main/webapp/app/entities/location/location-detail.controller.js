(function() {
    'use strict';

    angular
        .module('tmsApp')
        .controller('LocationDetailController', LocationDetailController);

    LocationDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Location', 'Country'];

    function LocationDetailController($scope, $rootScope, $stateParams, previousState, entity, Location, Country) {
        var vm = this;

        vm.location = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('tmsApp:locationUpdate', function(event, result) {
            vm.location = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
