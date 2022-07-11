$(document).ready(function(){

	// DRAGGABLE -> Permite mover los elementos por la página 
	$('.elemento').draggable();

	// REDIMENSIONAR
	$('.elemento').resizable();

	// SELECCIONAR ELEMENTOS
	// $('.lista-seleccionable').selectable();

	// ORDENAR ELEMENTOS
	$('.lista-seleccionable').sortable({
		// update -> Propiedad q tiene una funcion de callback 
		// Puede recoger el evento y el Ui
		// Se puede ver en que posicion puede estar cada elemento
		update: function(event, ui){
			console.log("Ha cambiado la lista");
		}
	});

	// DROP -> SOLTAR Y ARRASTRAR

	$('#elemento-movido').draggable();

	$('#area').droppable({
		// El evento drop ejecuta una funcion de callback
		drop: function(){
			console.log("Has soltado algo dentro del area");
		}
	});

	// EFECTOS jQuery UI

	$('#mostrar').click(function(){
		$('.caja-efectos').toggle('fade');
		$('.caja-efectos').toggle('explode');
		$('.caja-efectos').toggle('blind');
		$('.caja-efectos').toggle('slide');
		$('.caja-efectos').toggle('drop');
		$('.caja-efectos').toggle('fold');
		$('.caja-efectos').toggle('puff');
		$('.caja-efectos').toggle('scale');
		$('.caja-efectos').toggle('shake', 5000);
	})

	// TOOLTIP -> Al pasar por encima de un input o enlace, muestra un
	// cuadro de dialogo/popUp
	$(document).tooltip();

	// DIALOG -> Muestra un PopUp al dar click en el boton lanzar
	$('#lanzar-popup').click(function(){
		$('#popup').dialog();
	})

	// DATEPICKER -> Crear calendario en un input
	$('#calendario').datepicker();

	// TABS -> Muestra pestañas con contenidos
	$('#pestanas').tabs();
	


})