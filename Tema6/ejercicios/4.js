// 1a forma, pregunta/respuesta preparados y mmostrar ocultar respuesta
// 2a solo tenemos la pregunta, y el nodo respuesta se añado de forma dinamiga
//

window.onload = function(){
  contactoPrint.style = "display: flex; justify-content: space-between; background-color: lightblue; padding: 8px;";
  enlacePrint.onclick = function(e){
    e.preventDefault();
    window.print();
  }
  preguntasEventos();
}

var respuestas = new Map();
respuestas.set('pregunta1', 'R: No barema el tiempo como interino');
respuestas.set('pregunta2', 'R: Debes poner la documentacion');
respuestas.set('pregunta3', 'R: Debes complimentarlas adecuadamente');

function preguntasEventos(){
  var preguntas = document.getElementsByName('preguntas');
  preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', function(e){
      eliminarRespuestas(preguntas);
      var respuesta = document.createElement('p');
      respuesta.style.color = "black";
      respuesta.appendChild(document.createTextNode(respuestas.get(e.srcElement.id)));
      e.srcElement.appendChild(respuesta);
    })
  })
}

function eliminarRespuestas(arrayPreguntas){
  arrayPreguntas.forEach(pregunta => {
    if(pregunta.childNodes[1] != undefined){
      pregunta.removeChild(pregunta.childNodes[1]);
    }
  })
}
