//-- Variables.
var imagenesIDmotl = ["W4RMDFC5/1","3RYm1MKp/2","C17D6v12/3","43zpp4Ts/4"];
var primeraMOTL = 1;
var pantallaMOTL = document.getElementById("pantalla-MOTL");
var imgMOTL = document.createElement("img");

//-- Ctes.
const totalMOTL = 4;

function mostrarMOTL(auxMOTL) {
  
  //-- Limpiar la pantalla.
  pantallaMOTL.innerHTML = "";

  imgMOTL.src = "https://i.postimg.cc/" + imagenesIDmotl[auxMOTL-1] + ".jpg";
  pantallaMOTL.appendChild(imgMOTL);
}

function imgAnteriorMOTL() {
  if(primeraMOTL > 1) {
    primeraMOTL--;
  }else {
    primeraMOTL = totalMOTL;
  }
  mostrarMOTL(primeraMOTL);
}

function imgSiguienteMOTL() {
  if(primeraMOTL < totalMOTL) {
    primeraMOTL++;
  }else {
    primeraMOTL = 1;
  }
  mostrarMOTL(primeraMOTL);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-MOTL").addEventListener("click", imgAnteriorMOTL);
//-- Pulsar flecha derecha.
document.getElementById("right-MOTL").addEventListener("click", imgSiguienteMOTL);

//-- Punto de inicio del programa.
mostrarMOTL(primeraMOTL);