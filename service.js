var app = angular.module('userProfiles');

app.service('mainService', function($http) {

  this.getUsers = function() {
  	return $http.get('http://reqr.es/api/users?page=1');
  }
});