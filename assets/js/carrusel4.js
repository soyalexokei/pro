//-- Variables.
var imagenesIDibizaYoga = ["05m6Z18Q/1.png","Y0cvkbxM/2.png","tTnsLLWB/3.png","prDpdz08/4.png","yYyD4h3C/5.png","GpMcbBtm/6.png","pXHm6cTB/7.png","SxZjjyGZ/8.png","DzHZdBHL/9.png","kMx4KNcR/10.png",
"s2vxht63/11.png","tJH487Xg/12.png","V6tN7XPT/13.png","MKqGDcPP/14.png","vTLZyMBt/15.jpg","cJpx86tc/16.png","Gp832vt2/17.jpg"];
var primeraIbizaYoga = 1;
var pantallaIbizaYoga = document.getElementById("pantalla-voluntariado-proweb-4");
var imgIbizaYoga = document.createElement("img");

//-- Ctes.
const totalIbizaYoga = 17;

function mostrarIbizaYoga(auxIbizaYoga) {
  
  //-- Limpiar la pantalla.
  pantallaIbizaYoga.innerHTML = "";

  imgIbizaYoga.src = "https://i.postimg.cc/" + imagenesIDibizaYoga[auxIbizaYoga-1];
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