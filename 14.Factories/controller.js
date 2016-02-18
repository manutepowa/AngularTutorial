angular.module("MyFirstApp", ["LocalStorageModule"])
	.factory('ToDoService', function(localStorageService){
		var todoService = {};

		todoService.key = "angular-todolist";
		if (localStorageService.get(todoService.key)) {
			todoService.activities = localStorageService.get(todoService.key);
		}
		else{
			todoService.activities = [];
		}

		todoService.add = function(newActv){
			todoService.activities.push(newActv);
			todoService.updateLocalStorage();
		};
		todoService.updateLocalStorage = function(){
			localStorageService.set(todoService.key,todoService.activities);
		}

		todoService.clean = function(){
			todoService.activities = [];
			todoService.updateLocalStorage();
		}

		todoService.getAll = function(){
			return todoService.activities;
		}
		todoService.removeItem = function(item){
			todoService.activities = todoService.activities.filter(function(activity){
				return activity !== item;
			});
			todoService.updateLocalStorage();
			return todoService.getAll();
		}


		return todoService;
	})
	.controller("FirstController", function($scope,ToDoService){
		$scope.todo = ToDoService.getAll();


		$scope.addActv = function(){
			ToDoService.add($scope.newActv);
			$scope.newActv = {};
		}

		$scope.removeActv = function(item){
			$scope.todo = ToDoService.removeItem(item);
		}
		$scope.clean = function(){
			ToDoService.clean();
		}
	});