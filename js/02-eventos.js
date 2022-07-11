$(document).ready(function(){
	// Capturamos el ID CAJA
	var caja = $('#caja');

	// This -> Hace referencia a caja y caja referencia al ID($('#caja');)

/*
	// MouseOver
	caja.mouseover(function(){
		$(this).css("background","red");
	});

	// MouseOut
	caja.mouseout(function(){
		$(this).css("background", "green");
	})
*/	

	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background", "green");
	}

	// Hover -> Simular lo mismo que un mouseOver y mouseOut
	caja.hover(cambiaRojo, cambiaVerde);

	// Click, Doble click

	caja.click(function(){
		$(this).css("background", "blue")
			   .css("color", "white");	
	});

	caja.dblclick(function(){
		$(this).css("background", "pink")
			   .css("color", "purple");	
	});

	// Focus y Blur

	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function(){
		$(this).css("background", "red");
	});

	nombre.blur(function(){
		$(this).css("border", "1px solid #ccc");
		// val -> saca información del input
		// $(this).val();
		// show -> muestra el div de los datos
		// text -> incrustar los valores dentro del div
		// Se ingresan los valores del input en el div 
		datos.text($(this).val()).show();
	});

	// MouseDown  MouseUp
	// Al presionar 
	datos.mousedown(function(){
		$(this).css("border-color", "gray");
	});
	// Al soltar
	datos.mouseup(function(){
		$(this).css("border-color", "black");
	});

	// Mousemove
	$(document).mousemove(function(){
		var sigueme = $("#sigueme");
		// Esconder el cursor 
		$('body').css("cursor", "none");
		// Muestra las coordenadas del mouse
		console.log("En X: " + event.clientX);
		console.log("En Y: " + event.clientY);
		// El div sigue el movimiento del cursor
		sigueme.css("left", event.clientX)
			   .css("top", event.clientY);
	});




})