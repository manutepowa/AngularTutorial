angular.module("MyFirstApp", [])
	.directive("backImg", function(){
		return function(scope,element,attrs){
			/**
			 * recibe el scope == el mismo del controller en el que se llama
			 * element == El elemento que lo contiene (<div>)
			 * attrs == Son los atributos (class, ng-show, id.....)
			 */
			attrs.$observe('backImg', function(value){
				// value == al la url de la imagen
				// Contiene el valor de back-img="{{repo.owner.avatar_url}}"
				element.css({
					"background":"url("+value+")",
					"background-size":"cover",
					"background-position":"center"
				});
			})
		}
	}) /*style="background:url({{repo.owner.avatar_url}})"*/
	.controller("FirstController", function($scope,$http){
		$http.get("https://api.github.com/users/jveldboom/repos")
			.success(function(data){
				$scope.repos = data;
			})
			.error(function(err) {
				console.log(err);
			});
	});