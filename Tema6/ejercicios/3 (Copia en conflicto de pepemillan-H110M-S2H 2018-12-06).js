window.onload = function(){
  buscar();
  botonAñadir.onclick = añadir;
  botonBorrar.onclick = borrar;
  botonClonar.onclick = clonar;
}


function añadir(){
  var textoInput = document.getElementsByTagName('input')[0].value;
  var punto = document.createElement('li');
  punto.appendChild(document.createTextNode(textoInput));
  document.getElementsByTagName('ul')[0].appendChild(punto);
}

function borrar(){
  var hijos = document.getElementsByTagName('ul')[0].children;
  console.log(document.getElementsByTagName('ul'));
  var hijosBorrar = [];
  for (var i = 0; i < hijos.length; i++) {
    if(hijos[i].firstChild.length == 0){
      hijosBorrar.push(hijos[i]);
    }
  }
  console.log(hijosBorrar);
  for (elemento in hijosBorrar) {
    elemento.removeChild;
  }
  console.log(hijosBorrar);
}

function clonar(){

}
