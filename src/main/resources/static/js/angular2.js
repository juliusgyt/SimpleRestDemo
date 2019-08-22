angular.module('demo', [])
.controller('Hello', function($scope, $http) {
//	alert("Invocando el servicio REST http://localhost:8080/clientes/3 con AngularJS");
//	$http.get('http://localhost:9898/clientes/3').
	$http.get('https://simplerestdemo.herokuapp.com/clientes/3').
        then(function(response) {
            $scope.greeting = response.data;
        });
});