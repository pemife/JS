window.onload = function (){
  botonVotar.addEventListener("click", recogerDatos);
  crearCookies();
  mostrarEstadisticas();
}

function recogerDatos(){
  var resultado = document.getElementsByName('moviles');
  for (var i = 0; i < resultado.length; i++) {
    if(resultado[i].checked==true){
      sumarCookie(resultado[i].value);
    }
  }
}

function crearCookies(){
  var resultado = document.getElementsByName('moviles');
  for (var i = 0; i < resultado.length; i++) {
    if(getCookie(resultado[i].value) == null ){
      setCookie(resultado[i].value, 0);
    }
  }
}

function sumarCookie(movil){
  console.log(getCookie(movil));
}

function mostrarEstadisticas(){
  var cookies = document.cookie;
  var arrCookies = cookies.split(";");
  // TODO
}
