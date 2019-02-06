var patrones = {
  'dni' : /^\d{2}\.\d{3}\.\d{3}\-[A-Z]$/,
  'nombre' : /^[A-ZÑÁÉÍÓÚ]+ [A-ZÑÁÉÍÓÚ]+ [A-ZÑÁÉÍÓÚ]+ [A-ZÑÁÉÍÓÚ]+$/i,
  'fechaNac' : /^((0\d|[1-2]\d)|3(0|1))\/(0\d|1[12])\/((0|1)\d{3}|20[01][0-8])$/,
  'email' : /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i,
  'pagWeb' : /^(http|https):\/\/(www\.)?\w+\.\w+$/i,
  'pass' : /^.{8,10}$/,
  'confPass' : /^.{8,10}$/
};

window.onload = function (){
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onchange = validarCampos;
  }
  botonGuardar.onclick = guardarCookies;
  botonVer.onclick = verCookie;
  botonVerTodas.onclick = verCookies;
  botonDelCookie.onclick = borrarCookie;
  botonDelTodas.onclick = borrarCookies;
}

function guardarCookies(){
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].value!=""){
      setCookie(inputs[i].name, inputs[i].value);
    }
  }
}

function verCookies(){
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if(getCookie(inputs[i].name) != null){
      console.log(inputs[i].name + " = " + getCookie(inputs[i].name));
    }
  }
}

function verCookie(){
  alert(getCookie(selectCookie("ver")));
}

function borrarCookie(){
  var cookie = selectCookie("borrar");
  delCookie(cookie);
}

function selectCookie(accion){
  var contadorIteraciones = 0;
  var nombreCookie = "";
  do{
    if(contadorIteraciones > 2){
      contadorIteraciones = prompt("Ha agotado el numero de intentos," +
      "no se aplicara ninguna accion");
      return null;
    }else if(contadorIteraciones == 0){
      nombreCookie = prompt("Diga que cookie quiere " + accion);
    }else{
      nombreCookie = prompt("Error: La cookie que busca no esta!, Intentelo de nuevo");
    }
    contadorIteraciones++;
  }while(getCookie(nombreCookie)==null)
  return nombreCookie;
}

function borrarCookies(){
  var inputs = document.getElementsByTagName('input');
  // for (input of inputs) {
  //   delCookie(input.name);
  // }
  for (var i = 0; i < inputs.length; i++) {
    delCookie(inputs[i].name);
  }
}

function validarCampos(){
  errores.innerHTML = "";
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if(!patrones[inputs[i].name].test(inputs[i].value)){
      errores.innerHTML += "Hay un error en el campo " + inputs[i].name + "<br>";
    }
  }
  validarContraseña();
}

function validarContraseña(){
  var contraseñas = [document.getElementsByName('contraseña').value,
  document.getElementsByName('confirmarContraseña').value];
  if(contraseñas[0]!=contraseñas[1]){
    errores.innerHTML += "Las contraseñas no coinciden!<br>";
  }
}
