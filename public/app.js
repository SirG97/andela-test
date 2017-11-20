/*
* @Author: SirG
* @Date:   2017-11-05 00:08:40
* @Last Modified by:   SirG
* @Last Modified time: 2017-11-12 03:49:21
*/
var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider.when('/', {
		controller: 'homeController',
		templateUrl: 'views/home.html'
	})
	.when('/students',{
		controller:'studentsController',
		templateUrl: 'views/students.html'
	})
	.when('/students/:id',{
		controller:'studentsController',
		templateUrl: 'views/student-detail.html'
	})
	.when('/add-student',{
		controller:'studentsController',
		templateUrl: 'views/add-student.html'
	})
	.when('/edit-student/:id',{
		controller:'studentsController',
		templateUrl: 'views/edit-student.html'
	})
	.otherwise({
		redirectTo: "/"
	});
});