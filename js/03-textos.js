$(document).ready(function(){
	//console.log($('a').length);

	reloadLinks();

	var menu = $("#menu");

	// Obtenemos el button y al darle click...
	$("#add_button")
		.removeAttr('disabled') // removeAttr -> Eliminar el atributo
		.click(function(){
		// Recoger el valor del input add_link -> $("#add_link").val()

		// html-> incrusta html dentro de una lista o de cualquier elemento, pero no añade
		// append -> añade el valor del usuario a la lista, es mas efectivo
		// prepend -> añade al principio el valor a la lista
		// before -> añade fuera de la lista
		// after -> añade despues del elemento q seleccionamos

		// Añadir el valor del input como lista al dar click
		menu.append('<li><a href="' + $("#add_link").val() + '"></a></li>');
		// Limpiar al añadir un nuevo elemento
		$("#add_link").val("");
		// Leer los links que se añaden  
		reloadLinks();
	})

	
});

function reloadLinks(){

	// Recorre el elemento 'a' con each
	$('a').each(function(index){
		// Hace referencia a las etiquetas a
		var that = $(this);
		// 	attr -> seleccionar el atributo href
		var enlace = that.attr("href");
		// target, blank -> Abrir los enlaces en una nueva pestaña
		// attr -> añadirle un atributo a cada enlace
		that.attr('target', '_blank');

		// Incrustarlo dentro del body/etiquetas -> .text(los enlaces)
		that.text(enlace);
	});

}