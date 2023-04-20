function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtEdad").value);

  if (edad >= 18) {
    alert(" mayor de edad");
  } else {
    alert(" menor de edad ");
  }
}
