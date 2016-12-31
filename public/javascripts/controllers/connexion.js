var connexionCtrl = angular.module('connexion.controllers', [
	'ui.router',
	'ui.bootstrap'
]);

connexionCtrl
	.controller('FormCtrl', function FormCtrl($scope, $rootScope, $uibModal){
			$scope.form = function(){
				var modalInstance = $uibModal.open({
					templateUrl: 'html/login.html',
					controller: function($scope, $rootScope, $uibModalInstance, Token){
						$scope.cancel = function(){
							$uibModalInstance.dismiss('cancel');
						};

						$scope.login = function(){
							var user = new Token();
							user.username = $scope.username;
							user.password = $scope.password;

							user.$create().then(function(data){
								if(data.token){
									$rootScope.token = data.token;
									$scope.cancel();
								}
							}, function(error){
								console.log("Authentication failed");
							});
						};
					}
				});
			};

			$scope.logout = function(){
				$rootScope.token = null;
				console.log($rootScope.token);
			};
	})

	.controller('LogoutCtrl', function LogoutCtrl($scope, $rootScope, Token){
		$scope.logout = function(){
			if($rootScope.user.token){
				$rootScope.user.token = null;
			}
		};
	});
