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
			.state('posts', {
				url: '/',
				templateUrl: 'html/test.html'
			});
	});
