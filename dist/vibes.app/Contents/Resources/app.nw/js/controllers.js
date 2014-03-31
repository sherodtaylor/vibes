'use strict';
/* global angular */


angular.module('vibes.controllers', []).
  controller('categoriesCtrl', ['$scope', 'tagScv', function($scope, tagScv) {
    $scope.categories = tagScv.topTags();
  }]);
