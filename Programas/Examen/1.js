window.onload = function (){
  buscar();
  var tabla = crearTabla(3,3);
  botonesNumeros = document.getElementsByTagName('input');
  botonesNumeros[2].after(tabla);

  botonesFunciones = document.getElementsByTagName('button');
  botonesFunciones[0].addEventListener('click', generarNumeros);
}

function crearTabla(x, y){
  var tabla = document.createElement('table');
  for (var i = 0; i < x; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < y; j++) {
      fila.appendChild(document.createElement('td'));
    }
    tabla.appendChild(fila);
  }
  return tabla;
}

function generarNumeros(e){
  e.preventDefault();

  ventana = window.open('', '', 'height=300, width=500');
  botonesFunciones[0].disabled = true;
  ventana.moveBy(300, 0);

  ventana.document.write(`<form>
				<input type="text" id="primero"><br>
				<input type="text" id="segundo"><br>
				<input type="text" id="tercero"><br>
				<button type="button" name="cerrar" id="cerrar">Cerrar</button>
			</form>`);
  var inputs = ventana.document.getElementsByTagName('input');
  console.log(inputs);
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function(e){
      if(ventana.cerrar.nextSibling != null &&
        ventana.cerrar.nextSibling.name == 'mensajeError'){
        borraError(ventana.cerrar);
      }
      if(/^\d\d$/g.test(e.srcElement.value)){
        e.srcElement.readOnly = true;
        borraError(e.srcElement);
      }else{
        alertaError(e.srcElement, "Debe ser un numero de 2 cifras");
      }
    });
  }
  ventana.cerrar.addEventListener('click', validar);
}

function alertaError(elemento, mensaje){
  var texto = document.createElement('p');
  texto.name = 'mensajeError';
  var textoError = document.createTextNode(mensaje);
  if(elemento.nextSibling.name == 'mensajeError'){
    elemento.nextSibling.replaceChild(textoError, elemento.nextSibling.childNodes[0]);
  } else {
    texto.appendChild(textoError);
    elemento.after(texto);
  }
}

function borraError(elemento){
  if(elemento.nextSibling.name == 'mensajeError'){
    elemento.nextSibling.parentNode.removeChild(elemento.nextSibling);
  }
}

function validar(){
  var inputs = ventana.document.getElementsByTagName('input');
  var numerosInput = [];
  for (var i = 0; i < inputs.length; i++) {
    if(!/^\d\d$/g.test(inputs[i].value)){
      alertaError(ventana.cerrar, "Hay un error en '" + inputs[i].id + "'!");
      return null;
    }
    numerosInput[i] = inputs[i].value;
  }
  asignarValores(numerosInput);
  ventana.close();
}

function asignarValores(arr){
  for (var i = 0; i < arr.length; i++) {
    botonesNumeros[i].value = arr[i];
  }
}

function limpiarTabla(){
  var tabla = document.getElementsByTagName('table')[0];

  if(tabla != undefined){

  }
}
