'use strict';

// Declare app level module which depends on filters, and services
(function () {
    angular.module('myApp', [
            'ngRoute',
            'myApp.controllers',
            'ui.bootstrap'
        ]).
        config(function ($routeProvider,  $locationProvider) {
            $routeProvider.when('/search', {templateUrl: 'theme/partials/bento.html', controller: 'bento'});
            $routeProvider.otherwise({templateUrl: 'theme/partials/typeahead.html', controller: 'bento'});
            $locationProvider.html5Mode(true);
        });
})();
