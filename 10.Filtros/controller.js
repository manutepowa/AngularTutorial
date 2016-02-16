angular.module("MyFirstApp", [])
	.filter("removeHtml", function(){
		//Retorna una funcion para realizar el filtro
		
		return function(texto){
			// return texto.toUpperCase();
			return String(texto).replace(/<[^>]+>/gm, '');
		}
	})
	.controller("FirstController", function($scope){
		$scope.miHtml = "<p>Hola Mundo</p>";

		$scope.pJson = {};
		$scope.pJson.nombre = "Manuel";
		$scope.pJson.apellido = "Tercero";

		$scope.costo = 2.64;
	});