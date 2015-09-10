(function() {
    'use strict';

    angular.module('boilerplate').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                controller: 'IndexCtrl',
                templateUrl: 'app/components/index/index.html'
            });
    });
})();
