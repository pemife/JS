window.onload = function(){
  buscar();
  botonAñadir.onclick = añadir;
  botonBorrar.onclick = borrar;
  botonClonar.onclick = clonar;
}

// Completar con atajos de teclado dirigidos a botones (ctrl + a = añadir, etc)
// prevent default en el evento de submit al pulsar intro y redirigirlo a una funcion

function añadir(){
  var textoInput = document.getElementsByTagName('input')[0].value;
  var punto = document.createElement('li');
  punto.appendChild(document.createTextNode(textoInput));
  document.getElementsByTagName('ul')[0].appendChild(punto);
}

function borrar(){
  var hijos = document.getElementsByTagName('ul')[0].children;
  var hijosBorrar = [];
  for (var i = 0; i < hijos.length; i++) {
    if(hijos[i].firstChild.length == 0){
      hijosBorrar.push(hijos[i]);
    }
  }
  hijosBorrar.forEach(hijoVacio => {
    document.getElementsByTagName('ul')[0].removeChild(hijoVacio)
  });
}

function clonar(){
  var ultimoHijo = document.getElementsByTagName('ul')[0].lastChild.cloneNode(true);
  document.getElementsByTagName('ul')[0].appendChild(ultimoHijo);
}
