/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{   let sueldo;
	let descuento;
	let sueldoFinal;
  
	sueldo = parseInt(document.getElementById("txtImporte").value);
	descuento = sueldo  * 0.25;
	sueldoFinal = sueldo - descuento;
	document.getElementById("txtResultado").value = sueldoFinal

}
