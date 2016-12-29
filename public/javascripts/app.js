angular.module('postApp', [
	'ui.router',
	'ui.bootstrap',
	'ngResource',
	'post.model',
	'post.controllers',
	'token.model',
	'connexion.controllers'
])
	.config(function($stateProvider, $urlRouterProvider, $qProvider){
		//for modal errors
		$qProvider.errorOnUnhandledRejections(false);
		
		//Routing
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('list', {
				url: '/',
				templateUrl: 'html/post-list.html',
				controller: 'PostListCtrl'
			})
			.state('detail', {
				url: '/post/:slug/',
				templateUrl: 'html/post-detail.html',
				controller: 'PostDetailCtrl'
			});
	});
