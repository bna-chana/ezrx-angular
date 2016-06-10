'use strict';

/* Controllers */

var ezrxControllers = angular.module('ezrxControllers', []);

ezrxControllers.controller('LoginCtrl', ['$scope', '$location',
  function($scope, $location) {

  }]);

ezrxControllers.controller('HomeCtrl', ['$scope', 'Data',
  function($scope, Data) {

    $scope.data = Data.autoCompleteData();




  }]);

ezrxControllers.controller('SearchCtrl', ['$scope', '$routeParams', 'Data',
  function($scope, $routeParams, Data) {
    $scope.searchQuery = $routeParams.query;



    $scope.listData = Data.all();

    for (var i = 0; i < $scope.listData.length; i++) {
      if ($scope.listData[i].id == $scope.searchQuery) {
        $scope.details = $scope.listData[i];
      }
    }





  }]);
