angular.module('postApp.services', ['ngResource'])
	.factory('Post', function($resource){
		return $resource('/api/post/:slug/');
	});
