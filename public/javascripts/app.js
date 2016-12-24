angular.module('postApp', [
	'ui.router',
	'postApp.services',
	'postApp.controllers'
])
	.config(function($stateProvider, $urlRouterProvider){
		//Routing
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('', {

			})
			.state('', {

			})
	});
