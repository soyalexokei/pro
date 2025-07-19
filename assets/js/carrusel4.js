//-- Variables.
var imagenesIDibizaYoga =
[
  "https://i.postimg.cc/05m6Z18Q/1.png",
  "https://i.postimg.cc/Y0cvkbxM/2.png",
  "https://i.postimg.cc/tTnsLLWB/3.png",
  "https://i.postimg.cc/prDpdz08/4.png",
  "https://i.postimg.cc/yYyD4h3C/5.png",
  "https://i.postimg.cc/GpMcbBtm/6.png",
  "https://i.postimg.cc/pXHm6cTB/7.png",
  "https://i.postimg.cc/SxZjjyGZ/8.png",
  "https://i.postimg.cc/DzHZdBHL/9.png",
  "https://i.postimg.cc/kMx4KNcR/10.png",
  "https://i.postimg.cc/s2vxht63/11.png",
  "https://i.postimg.cc/tJH487Xg/12.png",
  "https://i.postimg.cc/V6tN7XPT/13.png",
  "https://i.postimg.cc/MKqGDcPP/14.png",
  "https://i.postimg.cc/vTLZyMBt/15.jpg",
  "https://i.postimg.cc/cJpx86tc/16.png",
  "https://i.postimg.cc/qv2N7vQY/17.png"
];
var primeraIbizaYoga = 1;
var pantallaIbizaYoga = document.getElementById("pantalla-voluntariado-proweb-4");
var imgIbizaYoga = document.createElement("img");

//-- Ctes.
const totalIbizaYoga = 17;

function mostrarIbizaYoga(auxIbizaYoga) {
  
  //-- Limpiar la pantalla.
  pantallaIbizaYoga.innerHTML = "";

  imgIbizaYoga.src = imagenesIDibizaYoga[auxIbizaYoga-1];
  pantallaIbizaYoga.appendChild(imgIbizaYoga);
}

function imgAnteriorIbizaYoga() {
  if(primeraIbizaYoga > 1) {
    primeraIbizaYoga--;
  }else {
    primeraIbizaYoga = totalIbizaYoga;
  }
  mostrarIbizaYoga(primeraIbizaYoga);
}

function imgSiguienteIbizaYoga() {
  if(primeraIbizaYoga < totalIbizaYoga) {
    primeraIbizaYoga++;
  }else {
    primeraIbizaYoga = 1;
  }
  mostrarIbizaYoga(primeraIbizaYoga);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-4").addEventListener("click", imgAnteriorIbizaYoga);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-4").addEventListener("click", imgSiguienteIbizaYoga);

//-- Punto de inicio del programa.
mostrarIbizaYoga(primeraIbizaYoga);