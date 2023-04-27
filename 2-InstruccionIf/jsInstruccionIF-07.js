function mostrar()
{
	
let edad
let estadocivil 

edad = parseInt (document.getElementById("txtEdad").value) 
estadocivil = document.getElementById("estadoCivil").value

if(edad < 18 && estadocivil != "Soltero" ){


	alert("sos muy pequeño para no ser soltero ")
}



}