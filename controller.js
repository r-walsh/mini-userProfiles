var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

	$scope.getUsers = function() {
		$scope.users = mainService.getUsers();
		console.log($scope.users);
	}

	$scope.getUsers();

});