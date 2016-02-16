angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope){
		$scope.nombre = "Manuel";
/*
		//Actualizo el nombre pero no se actualiza en la vista
		setTimeout(function(){
			//Sin $apply no actualiza la vista
			$scope.$apply(function(){
				$scope.nombre = "Manutepowa";
				console.log($scope.nombre);
			})
		},2000);
*/
		document.querySelector('#boton').addEventListener('click', function(){
			//Con ng-click no hace falta apply
			$scope.$apply(function(){
				$scope.nombre = "Manutepowa";
				console.log($scope.nombre);
			})
		});
	});