filmApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/search',{
			templateUrl:"search.html"
		});
}]);
filmApp.controller('searchController', function($scope, $http, $location){
	
	//Check and initialise variables. 
	if(angular.isUndefined($scope.searchText)){
		$scope.searchText = "";
	};
	
	if(angular.isUndefined($scope.yearText)){
		$scope.yearText = "";
	};
	
	//Search film function to call the API
	$scope.searchFilm = function () {
		console.log("I am running!"); 
		//Check if a year as been entered to narrow down results
		if($scope.yearText)
		{
			var year = "&y=" + $scope.yearText;
			console.log("year is", year);
		}
		else{
			year = "";
		}
		
		//Call api and get results from omdb
		$http.get("http://www.omdbapi.com/?s=" + $scope.searchText+ year + "&apikey=e51645fb")
		.then(function successCallback(response){
			//Pass results onto the scope. 
			$scope.response = response;
			//Get total amount to display.
			$scope.totalFilms = response.data.totalResults;			
			console.log("The response!", $scope.response);
			console.log("Total films found ", $scope.totalFilms);
		}, function errorCallback(response){
		//Warning if there is a problem/. 
		console.log("Unable to perform get request");
		});
	};
	
	//Get movie function and switch view. 
	$scope.getMovie = function (data) {
		$location.path('/view/' + data);
	};	

});