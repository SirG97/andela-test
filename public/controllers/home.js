/*
* @Author: SirG
* @Date:   2017-11-07 23:57:03
* @Last Modified by:   SirG
* @Last Modified time: 2017-11-09 13:55:07
*/
var app = angular.module('myApp');

app.controller('homeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('Checking out the home controller..');
	$scope.home = function(){
		$http.get('/').then(function(response){
			$scope.home = response;
		});
	}
}]);