var postCtrl = angular.module('post.controllers', [
	'ui.router',
]);

postCtrl
	.controller('PostListCtrl', function PostListCtrl($scope, Post){
		$scope.posts = {};

		Post.query().$promise
			.then(function(results){
				$scope.posts = results;
			});
	})
	
	.controller('PostDetailCtrl', function PostDetail($location, $scope, $stateParams, Post){
		Post.get({slug: $stateParams.slug}).$promise
			.then(function(result){
				$scope.postTmp = result;
			});

		$scope.delClick = function(){
			Post.delete({}, {slug: $scope.postTmp.slug}).$promise
				.then(function(){
					console.log("Sucessfully removed");
				});
				/*.catch(function(error){
					console.log(error);
				});*/
		};
	});
