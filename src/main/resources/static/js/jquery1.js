$(document).ready(function() {
//	alert("Invocando el servicio REST http://rest-service.guides.spring.io/greeting con jQuery");
    $.ajax({
        url: "https://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});