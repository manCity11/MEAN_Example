angular.module('posyApp.services', ['ngResource'])
	.factory('Post', function($resource){
		return $resource('/api/post/:slug/');
	});
