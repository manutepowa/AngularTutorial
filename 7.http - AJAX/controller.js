angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope, $http){
		var jsonPlaceholder = "http://jsonplaceholder.typicode.com/";
		$scope.posts = [];
		$scope.newPost = {};

		/**
		 * $http.
		 * get, post, put, delete .....
		 */
		$http.get(jsonPlaceholder+'posts')
			.success(function(data){
				$scope.posts = data;
				console.log(data);
			})
			.error(function(err){
				console.log(err);
			});

		$scope.addPost = function(){
			$http.post(jsonPlaceholder+'posts', {
				title: $scope.newPost.title,
				body:  $scope.newPost.body,
				userId:323
			})
			.success(function(data,status, headers, config){
				console.log({
					datos: data,
					status: status,
					headers: headers,
					config: config
				});
			})
			.error(function(err,status, headers, config){
				console.log(err);
			});
		}
	});