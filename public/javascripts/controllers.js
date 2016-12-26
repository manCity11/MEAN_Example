var postCtrl = angular.module('postApp.controllers', []);

postCtrl.controller('PostCtrl', function PostCtrl($scope, Post){
	$scope.posts = {};

	Post.query(function(results){
		$scope.posts = results;
	});
});
