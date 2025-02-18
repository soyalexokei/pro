//-- Variables.
var imagenesIDmonitorExp =
[
    "https://i.postimg.cc/jj1LZHkQ/1.jpg",
    "https://i.postimg.cc/XYQZySfP/2.jpg",
    "https://i.postimg.cc/hj7hwXkF/3.jpg",
    "https://i.postimg.cc/hGvXLyMt/4.jpg",
    "https://i.postimg.cc/jSmb1Mt5/5.png"
];
var primeraMonitorExp = 1;
var pantallaMonitorExp = document.getElementById("pantalla-monitorExp");
var imgMonitorExp = document.createElement("img");

//-- Ctes.
const totalMonitorExp = 5;

function mostrarMonitorExp(auxMonitorExp) {
  
  //-- Limpiar la pantalla.
  pantallaMonitorExp.innerHTML = "";

  imgMonitorExp.src = imagenesIDmonitorExp[auxMonitorExp-1];
  pantallaMonitorExp.appendChild(imgMonitorExp);
}

function imgAnteriorMonitorExp() {
  if(primeraMonitorExp > 1) {
    primeraMonitorExp--;
  }else {
    primeraMonitorExp = totalMonitorExp;
  }
  mostrarMonitorExp(primeraMonitorExp);
}

function imgSiguienteMonitorExp() {
  if(primeraMonitorExp < totalMonitorExp) {
    primeraMonitorExp++;
  }else {
    primeraMonitorExp = 1;
  }
  mostrarMonitorExp(primeraMonitorExp);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-monitorExp").addEventListener("click", imgAnteriorMonitorExp);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-monitorExp").addEventListener("click", imgSiguienteMonitorExp);

//-- Punto de inicio del programa.
mostrarMonitorExp(primeraMonitorExp);