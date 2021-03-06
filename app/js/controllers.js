'use strict';
/* global angular */

angular.module('vibes.controllers', [])
  .controller('categoriesCtrl', ['$scope', 'tagSvc', function($scope, tagSvc) {
    tagSvc.toptags({}, function(data) {
      $scope.categories = data.toptags.tag;
    })
  }])

  .controller('searchByTrackCtrl', ['$scope', 'trackSvc', 'playlistSvc', function($scope, trackSvc, playlistSvc) {
    $scope.search = function() {
      trackSvc.search({
        q: $scope.name
      }, function(data) {
        console.log(data.tracks[0]);
        $scope.playlist = playlistSvc.normal({
          song_id: 'spotify-WW:track:' + data.tracks[0].href.split(':')[2]
        });
      });
    };
  }]);


