angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope,$http){
		$http.get("https://api.github.com/users/jveldboom/repos")
			.success(function(data){
				$scope.repos = data;
			})
			.error(function(err) {
				console.log(err);
			});
	});