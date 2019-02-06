var patrones = [
  // DNI
  /^\d{2}\.\d{3}\.\d{3}\-[A-Z]$/g,
  // Nombre
  /^[A-ZÑÁÉÍÓÚ]+ [A-ZÑÁÉÍÓÚ]+ [A-ZÑÁÉÍÓÚ]+ [A-ZÑÁÉÍÓÚ]+$/gi,
  // Fecha
  /^((0\d|[1-2]\d)|3(0|1))\/(0\d|1[12])\/((0|1)\d{3}|20[01][0-8])$/g,
  // Email
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
  // Pag. Web
  /^(http|https):\/\/(www\.)?\w+\.\w+$/gi,
  // contraseña
  /^.{8,10}$/g,
  //Confirmar Contraseña
  /^.{8,10}$/g];

window.onload = function (){
  validar.onclick = validarFormulario;
  botonVer.onmouseenter = verContraseña;
  botonVer.onmouseout = ocultarContraseña;

}

function verContraseña(){
  id5.type = "text";
  id6.type = "text";
}

function ocultarContraseña(){
  id5.type = "password";
  id6.type = "password";
}

function validarFormulario(){
  errores.innerHTML = "";
  for (var i = 0; i < patrones.length; i++) {
    var inputId = "id" + i;
    var valorInput = document.getElementById(inputId).value;
    if(!patrones[i].test(valorInput)){
      errores.innerHTML += "Hay un error en " + document.getElementById(inputId).name + "<br>";
      document.getElementById(inputId).value = "";
    }
  }
  var contraseñas = [document.getElementById('id5').value,
                     document.getElementById('id6').value];
  if(contraseñas[0]!=contraseñas[1]){
    errores.innerHTML += "Las contraseñas no coinciden!<br>";
  }
}
