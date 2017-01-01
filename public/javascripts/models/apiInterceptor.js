angular.module('apiInterceptor.model', [])
	.service('APIInterceptor', function($rootScope){
		var service = this;

		service.request = function(config){
			if($rootScope.token){
				config.headers.token = $rootScope.token;
			}
			return config;
		};

		service.responseError = function(response){
			return response;
		};
	});
