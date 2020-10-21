


document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById('formulario').addEventListener('submit',manejadorValidacion);
});

function manejadorValidacion(e){
	e.preventDefault();
 	console.log('Validando formulario!');
 	var usuario= document.getElementById("usuario").value;
 	var password= document.getElementById("password").value;
 	if(usuario.indexOf('@')==-1){
 		alert("el usuario debe contener por lo menos un @");
 	}else{
 		window.open("form_enviado.html", "Formulario Enviado", "width=300, height=200");
 		this.submit();
 	}
 	

 }