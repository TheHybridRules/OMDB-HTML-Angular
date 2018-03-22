var filmApp = angular.module("filmApp",['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMessages'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('!');
	$routeProvider
		.otherwise({
			redirectTo:"/search"
		})
}]);
