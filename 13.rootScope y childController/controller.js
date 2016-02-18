angular.module("MyFirstApp", [])
	.run(function($rootScope){ //Metodo que se ejecuta automaticamente cuando se inicia el modulo
		$rootScope.nombre = "MAnutepowa";
	})
	.controller("FirstController", function($scope){
		$scope.nombre = "epowa";
	});