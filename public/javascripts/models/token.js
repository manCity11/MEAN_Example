angular.module('token.model', ['ngResource'])
	.factory('Token', function($resource, $rootScope){
		return $resource('/api/authenticate/', {},
		{
			'create': {method: 'POST'}
		});
	});
