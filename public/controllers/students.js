var app = angular.module('myApp');

app.controller('studentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('Checking out the student controller..');
	$scope.getStudents = function(){
		$http.get('/students').then(function(response){
			console.log(response);
			$scope.students = response.data;
			console.log("This is correct, students are loaded");
		}, function(error) {
			// body...
			console.log("There is an error loading students");
		});
	}

	$scope.getStudent = function(){
		var id = $routeParams.id;
		$http.get('/students/'+ id).then(function(response){
			console.log(response.data);
			$scope.student = response.data;
			console.log("Welcome to the individual page");
		}, function(error) {
			// body...
			console.log("There is an error loading students full info");
		});
	}

		$scope.addStudent = function(){
		$http.post('/students/',$scope.student).then(function(response){
			window.location.href = "#/students";
			console.log("Welcome to the form page");
		}, function(error) {
			console.log("There is an error adding a student");
		});
	}

		$scope.updateStudent = function(){
		var id = $routeParams.id;
		$http.put('/students/'+ id, $scope.student).then(function(response){
			window.location.href = "#/students";
			console.log("Welcome to the individual page for editing");
		}, function(error) {
			// body...
			console.log("There is an error editing this student..");
		});
	}

	$scope.rusticate = function(id){
		$http.delete('/students/'+ id).then(function(response){
			window.location.href = "#/students";
			console.log("Deleted");
		}, function(error) {
			// body...
			console.log("There is an error deleting this student..");
		});
	}
}]);