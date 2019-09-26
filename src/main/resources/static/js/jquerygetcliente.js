$(document).ready(function() {

$( "#searchForm" ).submit(function( event ) {
	  // Stop form from submitting normally
	  event.preventDefault();
	 
	  // Get some values from elements on the page:
	  var $form = $( this ),
	    idCli = $form.find( "input[name='idCliente']" ).val();
	    url = $form.attr( "action" )+"/"+idCli;
	  
	  $.ajax({
//	        url: "https://simplerestdemo.herokuapp.com/clientes/3"		 
		  url: url
	    }).then(function(data) {
//	    	console.log( "nombre:", data.nombre );
//	       console.log( "result:", data );
	       $("#result").html( "Nombre Cliente: "+data.nombre );
	       
	    });
	 
	});

});