'use strict';
/* global angular */

angular.module('vibes.controllers', []).
  controller('categoriesCtrl', ['$scope', 'tagSvc', function($scope, tagSvc) {
    tagSvc.toptags().$promise.then(function(res) {
      $scope.categories = res.toptags.tag;
    });
  }]);

