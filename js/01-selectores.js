// Comprobamos Jquery
// document -> se refiere a todo el documento, es un selector
// ready -> es un evento
// $ -> siempre se refiere al objeto jQuery
$(document).ready(function(){
	
	// Selector de ID -> #
	// .css -> se puede cambiar cualquier propiedad css del elemento
	$("#rojo").css("background", "red")
			  .css("color", "white");	

	$("#amarillo").css("background", "yellow")					 
				  .css("color", "blue");

	$("#verde").css("background", "green")
			   .css("color", "pink");					 		 


	// Selectores de clases
	// Clases -> .
	var mi_clase = $(".zebra").css("padding", "5px");
	/*
	mi_clase.css("border", "5px dashed black");
	*/
	   
	// Capturar el click en los parrafos con clase zebra
	$(".sin_borde").click(function(){
		console.log("Click dado");		
		$(this).addClass("zebra");
	})

	// Selectores de etiqueta
	// Seleccionamos la etiqueta parrafos
	// hasClass -> busca si el elemento tiene la clase indicada
	var parrafos = $('p').css("cursor", "pointer");
	parrafos.click(function(){
		var that = $(this); 
		// Al dar click en los parrafos ...
		// Si no tiene la clase grande, que la ponga
		// SI la tiene, que la quite
		if (!that.hasClass('grande')) {
			that.addClass('grande'); 
		}else{
			that.removeClass('grande');
		}
		
	});

	// Selectores de atributo
	$('[title = "Google"]').css("background", "red");
	$('[title = "Facebook"]').css("background", "green");

	// otros

// Seleccionar varios elementos con jquery y añadirles la clase
	// $('p, a').addClass('margen-superior'); 

// Find -> Sirve para buscar en todo el HTML, etiquetas o algo q no sabemos 
// Encuentra los elementos con la clase resaltado
	// var busqueda = $('#caja').find('.resaltado');
	// parent -> puede saltar de una etiqueta a otra
	// li->ul->div -> ahora si selecciona la clase resaltado porque está en el div 
	var busqueda = $('#elemento2').parent().parent().find('.resaltado');
	console.log(busqueda);

})