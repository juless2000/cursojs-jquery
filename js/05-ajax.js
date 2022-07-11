$(document).ready(function(){

	// METODOS AJAX

	// LOAD
	// Nos permite hacer una petision ajax por GET e incrustar el 
	// resultado dentro de un div o cualquier otro elemento

	// Incrustamos todo el contenido del link
	// al div datos
	// $("#datos").load("https://reqres.in/");

	// METODO GET
	// Pasamos la pagina del resultado como primer parametro
	// como segundo param, le pasamos un JSON con el nombre del param y la pag q quiera sacar
	// Como tercer param, la funcion de callback, donde se recoge el resultado
	// y hacer lo que querramos con el

	$.get("https://reqres.in/api/users?page=2", {page: 3}, function(response){
		// response.data -> se accede donde estan los usuarios
		// foreach de JS normal
		// Recorre el resultado del api q está dentro del response
		// y mas concretamente dentro de data 
		response.data.forEach((element, index) => {
			// Cada q recorre el array de response.data, agregar un elemento html con append 
			// Se incrusta dentro del div de Datos
			$("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
		});	

		// Nos devuelve el resultado de la pagina 3
		console.log(response);
	})

	// METODO POST

	
	// Capturamos el evento submit del formulario
	$("#formulario").submit(function(e){
		// Para que no redirija la pagina
		e.preventDefault();
		// Creamos nuestro JSON para crear nuevo usuario
		var usuario = {
			// Recoger el input, cuyo name sea web o name
			name: $('input[name="name').val(),
			web: $('input[name="web').val()
		};
		/*

		// En lugar de tener la utl fija, la obtenemos del action del formulario
		// con attr
		$.post($(this).attr("action"), usuario, function(response){
			// Response contiene los datos del usuario
			console.log(response);
		}).done(function(){
			alert("Usuario añadido correctamente")
		});

		*/

		// METODO $.ajax
		// Permite manipular de una manera mas amplia cualquier 
		// peticion ajax q querramos hacer

		$.ajax({
			type: 'POST',
			// url -> la url de los datos
			url: $(this).attr("action"),
			// data -> el objeto q vamos a enviar
			data: usuario,
			// beforeSend -> Antes q se envie, haga alguna accion
			beforeSend: function(){
				console.log("Enviando usuario...");
			},
			// success -> em el caso q todo vaya correcto, muestra los datos(response)
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("Ha ocurrido un error")
			},
			// cuantos segundos quiere q tarde en realizarse la peticion
			// Si demora mas de 100ms, entrará al error
			timeout: 1000
			/*
			dataType: 'json',
			contentType: 'application/json'*/
		})

		// Para q no haga la accion de redirigir por defecto del form
		return false;
	});


	

	

})