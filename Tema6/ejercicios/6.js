window.onload = function (){
  botonGenerar.onclick = function(e){
    e.preventDefault();
    generar();
  }
  botonComparar.onclick = function(e){
    e.preventDefault();
    comparar();
  }
  console.log(document.getElementsByName('fila1'));
}

function generar(){
  let numeros = new Array(2);
  let cajas = document.getElementsByName('fila1');
  if(cajas[0].childNodes.length!=0){
    cajas[0].removeChild(cajas[0].childNodes[0]);
  }
  for (var i = 0; i < numeros.length; i++) {
    numeros[i] = Math.floor(Math.random()*10);
    let nodoTexto = document.createTextNode("" + numeros[i]);
    cajas[i].appendChild(nodoTexto);
  }
  console.log(document.getElementsByName('fila1'));
}

function comparar(){
  if(resultado.childNodes.length!=0){
    resultado.removeChild(resultado.childNodes[0]);
  }
  let numeros = document.getElementsByName('fila1');
  if(numeros[0].value > numeros[1].value) {
    resultado.appendChild(numeros[0]);
    numeros[0].removeChild(numeros[0].childNodes[0]);
  } else {
    resultado.appendChild(numeros[1]);
    numeros[1].removeChild(numeros[1].childNodes[0]);
  }
  // resultado.value = Math.max(numeros[0].value, numeros[1].value);
}
