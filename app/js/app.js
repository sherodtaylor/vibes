'use strict';
 /* global angular */

angular.module('vibes', [
  'ngRoute',
  'vibes.controllers',
  'vibes.services'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/playlist', {
    templateUrl: '/templates/playlist.html',
    controller: 'searchCtrl'
  });
}]);
