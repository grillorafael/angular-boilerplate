(function() {
    'use strict';
    angular.module('boilerplate').controller('IndexCtrl', IndexCtrl);

    function IndexCtrl($scope) {
        $scope.title = 'Hello World';
    }
})();
