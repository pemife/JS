window.onload = function(){
  var imagenes = document.getElementsByTagName('img');
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = mostrarDescripcion;
  }
}

var imagenDescripcion = new Map()
imagenDescripcion.set("imagen1", "La formacion de la comunidad del anillo en el señor de los anillos");
imagenDescripcion.set("imagen2", "Hermione explicandole a ron como debe pronunciar el hechizo en harry potter 1");
imagenDescripcion.set("imagen3", "Lo que pasa cuando programas 1000 lineas sin comprobar errores");

function mostrarDescripcion(){
  descripcion.firstChild.nodeValue< = imagenDescripcion.get(this.name);
}
