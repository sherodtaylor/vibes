'use strict';
/* global angular */


angular.module('vibes.controllers', []).
  controller('categoriesCtrl', ['$scope',function($scope) {
    $scope.categories = [
      'rap',
      'trap',
      'rock',
      'indie rock',
      'r&b'
    ]
  }]);
