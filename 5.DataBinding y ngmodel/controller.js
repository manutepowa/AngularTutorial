angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope){
		$scope.nombre = "Manuel";
		$scope.newComment = {};
		$scope.comentarios = [{
				comentario: "Bueno",
				username: 	"Manuel"
			},
			{
				comentario: "Malisimo",
				username: 	"yo"
		}];

		$scope.addComment = function(){
			$scope.comentarios.push($scope.newComment);
			console.log($scope.newComment);
			$scope.newComment = {};
		}

		
	});