angular.module('postApp', [
	'ui.router',
	'ngResource',
	'postApp.services',
	'postApp.controllers'
])
	.config(function($stateProvider, $urlRouterProvider){
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
