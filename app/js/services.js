angular.module('vibes.services', ['ngResource'])
	.factory('tagSvc', ['$resource', function($resource) {
		return $resource('http://ws.audioscrobbler.com/2.0/', {
			api_key: LASTFM_KEY,
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
	}]);	