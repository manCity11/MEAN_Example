angular.module('postApp.services', ['ngResource'])
	.factory('Post', function($resource, $rootScope){
		return $resource('/api/post/:slug/', {slug: '@slug'},
		{
			'delete': {method: 'DELETE'},
			'get': {method: 'GET'},
			'query': {
				url: '/api/posts/',
				method: 'GET',
				isArray: true
			},
		});
	});
