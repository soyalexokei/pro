//-- Variables.
var imagenesIDreconectados = ["https://i.postimg.cc/63TKhxFD/prueba.jpg"];
var primeraReconectados = 1;
var pantallaReconectados = document.getElementById("pantalla-voluntariado-proweb-3");
var imgReconectados = document.createElement("img");

//-- Ctes.
const totalReconectados = 1;

function mostrarReconectados(auxReconectados) {
  
  //-- Limpiar la pantalla.
  pantallaReconectados.innerHTML = "";

  imgReconectados.src = imagenesIDreconectados[auxReconectados-1];
  pantallaReconectados.appendChild(imgReconectados);
}

function imgAnteriorReconectados() {
  if(primeraReconectados > 1) {
    primeraReconectados--;
  }else {
    primeraReconectados = totalReconectados;
  }
  mostrarReconectados(primeraReconectados);
}

function imgSiguienteReconectados() {
  if(primeraReconectados < totalReconectados) {
    primeraReconectados++;
  }else {
    primeraReconectados = 1;
  }
  mostrarReconectados(primeraReconectados);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-3").addEventListener("click", imgAnteriorReconectados);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-3").addEventListener("click", imgSiguienteReconectados);

//-- Punto de inicio del programa.
mostrarReconectados(primeraReconectados);