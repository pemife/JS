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

function preguntasEventos(){
  var preguntas = document.getElementsByName('preguntas');
  preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', function(e){
      eliminarRespuestas(preguntas);
      e.srcElement.childNodes[1].style.display = "block";
    })
  })
}

function eliminarRespuestas(arrayPreguntas){
  arrayPreguntas.forEach(pregunta => {
    pregunta.childNodes[1].style.display = "none";
  })
}
