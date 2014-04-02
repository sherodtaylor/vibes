var config = require('../js/config.js');

angular.module('vibes.services', ['ngResource'])
	.factory('tagSvc', ['$resource', function($resource) {
		return $resource('http://ws.audioscrobbler.com/2.0/', {
			api_key: config.lastfm.key,
			format: 'json'
		}, {
			toptags: {
				method: 'GET',
				params: {
					method: 'tag.getTopTags',
					isArray: true
				}
			}
		})
	}])

	.factory('trackSvc', ['$resource', function($resource) {
		return $resource('http://ws.spotify.com/search/1/track.json', {}, {
			search: {
				method: 'GET'
			}
		});
	}])

	.factory('playlistSvc', ['$resource', function($resource) {
		return $resource('http://developer.echonest.com/api/v4/playlist', {
			api_key: config.echoNest.apiKey,
			format: 'json'
		}, {
			normal: {
				url: 'http://developer.echonest.com/api/v4/playlist/static',
				method: 'GET'
			}
		});
	}]);