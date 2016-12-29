var connexionCtrl = angular.module('connexion.controllers', [
	'ui.router',
	'ui.bootstrap'
]);

connexionCtrl
	.controller('FormCtrl', function FormCtrl($scope, $uibModal){
			$scope.form = function(){
				var modalInstance = $uibModal.open({
					templateUrl: 'html/login.html',
					controller: function($scope, $uibModalInstance){
						$scope.cancel = function(){
							$uibModalInstance.dismiss('cancel');
						};

						$scope.login = function(){
							console.log("login");
						};
					}
				});
			};
	})

	.controller('LoginCtrl', function LoginCtrl($scope, $rootScope, Token){
		$scope.login = function(){
			var user = new Token();
			user.username = $scope.username;
			user.password = $scope.password;

			user.create().$promise
				.then(function(result){
					$rootScope.user = result;
				});
		};
	})

	.controller('LogoutCtrl', function LogoutCtrl($scope, $rootScope, Token){
		$scope.logout = function(){
			if($rootScope.user.token){
				$rootScope.user.token = null;
			}
		};
	});
