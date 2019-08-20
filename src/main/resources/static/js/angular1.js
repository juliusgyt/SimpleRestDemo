angular.module('demo', [])
.controller('Hello', function($scope, $http) {
//	alert("Invocando el servicio REST http://rest-service.guides.spring.io/greeting con AngularJS");
	$http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});