function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtEdad").value);

  if (!(edad < 13 || edad > 17)) {
      alert(" aolescente ");
    
  }
}
