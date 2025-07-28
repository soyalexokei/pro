//-- Variables.
var imagenesIDibizaYoga =
[
  "https://i.postimg.cc/d0N8kqJp/1.png",
  "https://i.postimg.cc/bvwxwGf1/2.png",
  "https://i.postimg.cc/fRK7scpw/3.png",
  "https://i.postimg.cc/7ZD1jsBs/4.png",
  "https://i.postimg.cc/MZCmmK18/5.png",
  "https://i.postimg.cc/Fs0gW5xk/6.png",
  "https://i.postimg.cc/0Q3d393D/7.png",
  "https://i.postimg.cc/kGbFPk3Z/8.png",
  "https://i.postimg.cc/wxykNsyV/9.png",
  "https://i.postimg.cc/vBDt34PG/10.png",
  "https://i.postimg.cc/Hk4zxDc1/11.png",
  "https://i.postimg.cc/HLY28ZXc/12.png",
  "https://i.postimg.cc/59TnKmdT/13.png",
  "https://i.postimg.cc/66yMhmSC/14.png",
  "https://i.postimg.cc/mhWrK9VC/15.jpg",
  "https://i.postimg.cc/y8znsYNT/16.png",
  "https://i.postimg.cc/hPmMk7Kj/17.png",
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