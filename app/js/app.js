'use strict';

/* App Module */

var ezrx = angular.module('ezrx', [
  'ngRoute',
  'ezrxControllers',
  'ezrxServices',
  'ezrxDirectives',
  'angucomplete-alt'
]);

ezrx.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/search/:query', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
