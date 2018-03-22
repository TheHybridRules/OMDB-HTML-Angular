filmApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/view/:id',{
			templateUrl:"view.html",
			controller:"viewController"
		});
}]);

filmApp.controller('viewController', function($scope, $http, $location, $routeParams){

	$scope.details = null;

	if($routeParams.id)
	{
		$http.get("http://www.omdbapi.com/?i=" + $routeParams.id + "&plot=full&apikey=e51645fb")
			.then(function successCallback(data){
				$scope.details = data;
				
				console.log("This is what getMovie returns ", data);
			}, function errorCallback(data){
				console.log("Unable to perform get request");
			});
	}
	
	$scope.goBack = function () {
		$location.path('/search/');
	};

	

});