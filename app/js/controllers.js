'use strict';
/* global angular */


angular.module('vibes.controllers', []).
controller('categories', ['$scope',function($scope) {
  $scope.categories = [
    'rap',
    'trap',
    'rock',
    'indie rock',
    'r&b'
  ]
}])
