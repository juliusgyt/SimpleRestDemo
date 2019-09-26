angular.module('demo', [])
.controller('Hello', function($scope, $http) {
	//alert("controller angular para get all");
	var vm=this;
	vm.clientes = {};
	vm.idCliente = 0;
	
	vm.detalle = function(idCli){
		alert("idCliente: "+idCli);
	}
	
	$http.get('/clientes').
        then(function(response) {
//        	console.log("clientes "+response.data);
        	vm.clientes = response.data;
        	//console.log("clientes "+vm.clientes);
        });
});