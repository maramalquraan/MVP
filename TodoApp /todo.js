var app=angular.module('todoApp', []);

app.controller('todoController', function($scope, $http) {
    $scope.todoList = [{todoText:'Finish MVP Project', done:false}];

    $scope.addTodo = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };
    $scope.deleteTodo = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };

var data = todoList.todoText;
		todoList.todoText = "";
		$http({
			method: 'POST',
			url: '/',
			data:{todo: data, done: false}
		}).then(function successCallback(response) {
			console.log(response)
			todoList.todos = response.data;
		}, function errorCallback(response) {
			console.log(response);
		});

		$http({
		 method: ‘GET’,
		 url: ‘/getTodos’
		 }).then(function successCallback(response) {
		 console.log(response)
		 todoList.todos = response.data;
		 }, function errorCallback(response) {
		 console.log(response);
		 });	

});







		

