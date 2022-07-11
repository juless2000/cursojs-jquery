$(document).ready(function(){

	// EFECTOS

	var caja = $("#caja");

	// SHOW Y HIDE -> MOSTRAR Y OCULTAR

	// fast | normal -> configurar la velocidad del efecto 

	// Ocultar el boton mostrar
	$("#mostrar").hide();

/*
	// Aparece unicamente el ocultar y al dar click      
	$("#ocultar").click(function(){
		// Se oculta el boton ocultar
		$(this).hide();
		// Se muestra el boton mostrar 
		$("#mostrar").show();
		// Se oculta el div  
		$("#caja").hide('fast');
	})

	// Aparece unicamente el boton mostrar y al darle click
	$("#mostrar").click(function(){
		// Se oculta el boton mostrar
		$(this).hide();
		// Se muestra el boton ocultar
		$("#ocultar").show();
		// Se muestra el div
		$("#caja").show('fast');
	});

*/	


/*

	// FadeIn y FadeOut -> Similar al show y hide, pero con un efecto suavizado

	// Aparece unicamente el ocultar y al dar click      
	$("#ocultar").click(function(){
		// Se oculta el boton ocultar
		$(this).hide();
		// Se muestra el boton mostrar 
		$("#mostrar").show();
		// Se oculta el div  
		$("#caja").fadeOut('Slow');
	})

	// Aparece unicamente el boton mostrar y al darle click
	$("#mostrar").click(function(){
		// Se oculta el boton mostrar
		$(this).hide();
		// Se muestra el boton ocultar
		$("#ocultar").show();
		// Se muestra el div
		$("#caja").fadeIn('Slow');
	});
*/
	// FadeTo('velocidad', 'opacidad') -> default 1 en mostrar y ocultar 0
/*	
	// Aparece unicamente el ocultar y al dar click      
	$("#ocultar").click(function(){
		// Se oculta el boton ocultar
		$(this).hide();
		// Se muestra el boton mostrar 
		$("#mostrar").show();
		// Se oculta el div  
		$("#caja").fadeTo('Slow', 0);
	})

	// Aparece unicamente el boton mostrar y al darle click
	$("#mostrar").click(function(){
		// Se oculta el boton mostrar
		$(this).hide();
		// Se muestra el boton ocultar
		$("#ocultar").show();
		// Se muestra el div
		$("#caja").fadeTo('Slow', 1);
	});
*/	

	// Con un solo boton
	// toggle -> Al dar click, se va a mostrar y ocultar 
	$("#todoenuno").click(function(){
		caja.toggle('fast');
	})

	// fadeToggle -> Igual q el toggle pero con el efecto fade(desvanecer)
	$("#todoenuno").click(function(){
		caja.fadeToggle('fast');
	})

	// slideToggle -> Despegable
	$("#todoenuno").click(function(){
		caja.slideToggle('fast');
	})

	// SlideDown -> bajar como ventana despegable
	$("#mostrar").click(function(){
		// Se oculta el boton mostrar
		$(this).hide();
		// Se muestra el boton ocultar
		$("#ocultar").show();
		// Se muestra el div hacia abajo
		caja.slideDown('Slow');
	});

	// SlideUp -> subir como ventana despegable
	$("#ocultar").click(function(){
		// Se oculta el boton ocultar
		$(this).hide();
		// Se muestra el boton mostrar 
		$("#mostrar").show();
		// Se oculta el div hacia arriba 
		caja.slideUp('Slow', function(){
			// Se muestra el console una vez terminada la funcion
			// gracias a q podemos añadir como segundo parametro
			// un callback 
			console.log("Cartel ocultado");
		});

	})

	// Animaciones 
	// animate() -> junto a un JSON, se pueden encadenar varios estilos
	// para la animacion, junto a la velocidad de reproduccion

	$("#animar").click(function(){
			caja.animate({
				marginLeft: '500px', 
				fontSize: '40px',
				height: '110px',
			}, 'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '100px'
		},'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		},'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		},'slow')
			.animate({
					marginLeft: '500px', 
					fontSize: '40px',
					height: '110px',
			}, 'slow')
	})





});	