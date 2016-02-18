angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope, $http){
		var jsonPlaceholder = "http://jsonplaceholder.typicode.com/";
		$scope.posts = [];
		$scope.loading = true;
		/**
		 * $http.
		 * get, post, put, delete .....
		 */
		$http.get(jsonPlaceholder+'posts')
			.success(function(data){
				$scope.posts = data;
				console.log(data);
				$scope.loading = false;
			})
			.error(function(err){
				console.log(err);
				$scope.loading = false;
			});
	});