angular.module('post.model', ['ngResource'])
	.factory('Post', function($resource){
		return $resource('/api/post/:slug/', {slug: '@slug'},
		{
			'create': {
				headers: {'Content-Type': 'application/json'},
				method: 'POST'
			},
			'delete': {method: 'DELETE'},
			'get': {method: 'GET'},
			'query': {
				url: '/api/posts/',
				method: 'GET',
				isArray: true
			},
			'save': {method: 'PUT'}
		});
	});
