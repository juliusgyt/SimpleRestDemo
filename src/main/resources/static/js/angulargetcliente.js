//alert("controller angular para obtener un cliente");
angular
	.module('app', [])
	.controller('appCtrl', ['$http', controladorPrincipal]);

function controladorPrincipal($http){
	var vm=this;
	var url = "/clientes/";
	//inicializo un objeto en los datos de formulario
	vm.idCliente;
	vm.respuesta = "";
	
	vm.enviar2 = function(){
		alert("vm.cliente.nombre: "+vm.cliente.nombre);
	}
	// declaro la función enviar
	vm.enviar = function(){
		//$http.put("http://localhost:8080/clientes", vm.fdatos)
		if(vm.idCliente) {
			//alert("vm.idCliente no es nulo: "+vm.idCliente);
			$http.get(url+vm.idCliente)
				.then(function(res){
					console.log(res);
					//por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
					vm.cliente = res.data;
					if(res.data == null) {
						vm.respuesta = "El cliente con id = "+vm.idCliente+" no existe";
					} else {
						vm.respuesta = "Nombre: "+vm.cliente.nombre;
					}
					
					});			
		} else {
			alert(" Ingrese el ID de un Cliente !!! ");
		}
		

		}
}