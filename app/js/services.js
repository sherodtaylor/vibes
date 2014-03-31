angular.module('vibes.services', [])
	.factory('tagsSvc', ['$resource', function($resource) {
		return $resource('http://ws.audioscrobbler.com/2.0/', {
			api_key: LASTFM_KEYS,
			format: 'json'
		}, {
			topTags: {
				method: 'GET',
				params: {
					method: 'tags.getTopTags'
				}
			}
		})
	}]);	