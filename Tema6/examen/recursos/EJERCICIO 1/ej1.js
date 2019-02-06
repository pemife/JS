window.onload = function (){
  limpiar();
  crearTabla();
  var botonGenerar = document.getElementsByTagName('button')[0];
  botonGenerar.addEventListener('click', function(e){
    generar();
  });

  var botonSumar = document.getElementsByTagName('button')[2];
  botonSumar.addEventListener('click', function(e){
    sumar();
  });

  var contador = 1;
  var botonLimpiar = document.getElementsByTagName('button')[1];
  botonLimpiar.addEventListener('click', function(e){
    contador++;
    limpiar();
    crearTabla();
    alert("Partida nº: " + contador);
  });
  // document.addEventListener('keyPress', function(e){
  //   console.log("algo pasa");
  //   if(e.keyCode == "1"){
  //     contador++;
  //     limpiar();
  //     crearTabla();
  //     alert("Partida nº: " + contador);
  //   }
  // });

  // document.getElementsByTagName('body')[0].onKeyPress = function(e){
  //   console.log(e.keyCode);
  // }
  
}

function crearTabla(){
  var tabla = document.getElementsByTagName('table')[0];
  for (var i = 0; i < 3; i++) {
    tabla.appendChild(document.createElement('tr'));
    for (var j = 0; j < 3; j++) {
      tabla.children[i].appendChild(document.createElement('td'));
      tabla.children[i].children[j].appendChild(document.createTextNode(""));
    }
  }
}

function limpiar(){
  var tabla = document.getElementsByTagName('table')[0];
  while(tabla.firstChild != undefined){
    tabla.removeChild(tabla.firstChild);
  }
}

function generar(){
  var aux = window.open('aux.html','auxiliar','innerWidth=500, innerHeight=250');
}

function sumar(){
  var tabla = document.getElementsByTagName('table')[0];
  var suma = 0;
  for (fila of tabla.children) {
    for (casilla of fila.children) {
      suma += casilla.firstChild.nodeValue;
    }
  }
}
