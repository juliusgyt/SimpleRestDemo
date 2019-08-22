$(document).ready(function() {
//	alert("Invocando el servicio REST http://localhost:8080/clientes/3 con jQuery");
    $.ajax({
        url: "https://simplerestdemo.herokuapp.com/clientes/3"
    }).then(function(data) {
       $('.greeting-idCliente').append(data.idCliente);
       $('.greeting-nombre').append(data.nombre);
    });
});