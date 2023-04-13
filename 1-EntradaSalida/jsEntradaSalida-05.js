/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {

    let nombre;

    let edad;

    nombre = document.getElementById("txtNombre").value;
    edad = document.getElementById("txtEdad").value;

    alert("su nombre es " + nombre + " su edad es " + edad )


}
