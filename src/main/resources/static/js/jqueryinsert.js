$(document).ready(function() {

	// Attach a submit handler to the form
	$( "#insertForm" ).submit(function( event ) {
	 
	  // Stop form from submitting normally
	  event.preventDefault();
	 
	  // Get some values from elements on the page:
	  var $form = $( this );
	  cliente = $form.find( "input[name='cliente']" ).val();
	  url = $form.attr( "action" );
	  	//alert(url);
//	  	alert(cliente);
	 

	  
	  $.ajax({
		  	type: "POST",
	        url: url,
	        data: cliente, 
	        contentType: "application/json; charset=utf-8",
	        dataType: "json"
	    }).then(function(data) {
	    	console.log( "nombre:", "data.nombre" );
//	       console.log( "result:", data );
	       $("#result").html( "Nombre Cliente: "+data.nombre );
	       
	    })
	    .done(function() {
		    alert( "success" );
		  })
		  .fail(function(jqXHR, textStatus, errorThrown) {
			console.log( "error"+url );
			console.log( "Request failed: " + textStatus );
		    console.log( "nombre:", "data.nombre", jqXHR);
		    console.log( "errorThrown: ", errorThrown);
		    console.log( "textStatus: ", textStatus);
		  })
		  .always(function(data) {
//		    alert( "complete" );
		    //$("#result").html( "El cliente: "+data.nombre+" ha sido registrado en la base de datos" );
			$("#result").html( "El cliente ha sido registrado en la base de datos" );
		  });
	  
	  
	});
    
});