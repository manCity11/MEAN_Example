angular.module('token.model', ['ngResource'])
	.factory('Token', function($resource){
		return $resource('/api/authenticate/', {},
		{
			'create': {method: 'POST'}
		});
	});
