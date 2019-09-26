//alert("controller angular para el insert");
angular
	.module('app', [])
	.controller('appCtrl', ['$http', controladorPrincipal]);

function controladorPrincipal($http){
	var vm=this;
	//inicializo un objeto en los datos de formulario
	vm.fdatos = {};
	
	vm.enviar2 = function(){
		alert("vm.fdatos: "+vm.fdatos.nombre);
	}
	// declaro la función enviar
	vm.enviar = function(){
		//$http.post("http://localhost:8080/clientes", vm.fdatos)
		$http.post("/clientes", vm.fdatos)
			.then(function(res){
				console.log(res);
				//por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
				});
		}
}