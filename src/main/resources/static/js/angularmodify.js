//alert("controller angular para el modify");
angular
	.module('app', [])
	.controller('appCtrl', ['$http', controladorPrincipal]);

function controladorPrincipal($http){
	var vm=this;
	//inicializo un objeto en los datos de formulario
	vm.fdatos = {};
	
	vm.enviar2 = function(){
		alert("función enviar2 ... ");
	}
	
	// declaro la función enviar
	vm.enviar = function(){
		if(vm.fdatos.idCliente && vm.fdatos.nombre) {
			//$http.put("http://localhost:8080/clientes", vm.fdatos)
			$http.put("/clientes", vm.fdatos)
				.then(function(res){
					console.log(res);
					//por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
					});			
		} else {
			alert("Debe ingresar un ID de Cliente y un nombre !!!");
		}
	}
}