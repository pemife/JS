window.onload = function(){
  botonGuardar.onclick = comprobarValido;
  var elementos = document.getElementsByTagName('input');
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].onblur = comprobarValido;
  }
}

function comprobarValido(){
  errores.innerHTML = "";
  var elementos = document.getElementsByTagName('input');
  for (var i = 0; i < elementos.length; i++) {
    switch (elementos[i].name) {
      case "nombre":
        elementos[i].setCustomValidity("El nombre no es correcto!");
        break;
      case "numHijos":
        elementos[i].setCustomValidity("Introduzca un numero del 0 al 10");
        break;
      default:
        console.log("Algo pasa");
    }
    if(elementos[i].value != ""){
      if(!elementos[i].checkValidity()){
        elementos[i].value = "";
        errores.innerHTML += "Error en " + elementos[i].name;
      }
    }
  }
}
