window.onload = function(){
  document.getElementsByTagName('select')[0].onchange = suceso;
}

function suceso(){
  switch (selector.value) {
    case "enlaces":
      cambiarElementos("xx-large", "medium", "black");
      break;
    case "parrafos":
      cambiarElementos("medium", "small", "black");
      break;

    case "titulo":
      cambiarElementos("medium", "medium", "red");
      break;
    default:
      console.log("algo pasa");

  }
}

function cambiarElementos(tamLink, tamParr, colorTit){
  var arrEnlaces = document.getElementsByTagName('a');
  var arrParrafos = document.getElementsByTagName('p');
  for (var i = 0; i < arrEnlaces.length; i++) {
    arrEnlaces[i].style.fontSize = tamLink;
  }
  for (var i = 0; i < arrParrafos.length; i++) {
    arrParrafos[i].style.fontSize = tamParr;
  }
  document.getElementsByTagName('h3')[0].style.color = colorTit;
}


// for (var i = 0; i < nodosHijos.length; i++) {
//   if(nodosHijos[i].nodeType == 1){
//     var valor = nodosHijos[i].value;
//     switch (valor) {
//       case "enlaces":
//       console.log("ejecutando enlaces");
//       nodosHijos[i].addEventListener("change", function(){alert();});
//       break;
//       case "parrafos":
//       console.log("ejecutando parrafos");
//       break;
//       case "cuerpo":
//       console.log("ejecutando cuerpo");
//       break;
//       default:
//       console.log("algo pasa");
//
//     }
//   }
// }
