//-- Variables.
var imagenesIDgraduacionPrimaria =
[
    "https://i.postimg.cc/s2S7C20N/01.jpg",  
    "https://i.postimg.cc/MpgVLBtB/02.jpg",  
    "https://i.postimg.cc/ry9GpKF6/03.jpg",  
    "https://i.postimg.cc/hPy996dp/04.jpg",  
    "https://i.postimg.cc/8PPRfNj7/05.jpg",  
    "https://i.postimg.cc/0yz7ZnGx/06.jpg"
];
var primeragraduacionPrimaria = 1;
var pantallagraduacionPrimaria = document.getElementById("pantalla-graduacionPrimaria");
var imggraduacionPrimaria = document.createElement("img");

//-- Ctes.
const totalgraduacionPrimaria = 6;

function mostrargraduacionPrimaria(auxgraduacionPrimaria) {
  
  //-- Limpiar la pantalla.
  pantallagraduacionPrimaria.innerHTML = "";

  imggraduacionPrimaria.src = imagenesIDgraduacionPrimaria[auxgraduacionPrimaria-1];
  pantallagraduacionPrimaria.appendChild(imggraduacionPrimaria);
}

function imgAnteriorgraduacionPrimaria() {
  if(primeragraduacionPrimaria > 1) {
    primeragraduacionPrimaria--;
  }else {
    primeragraduacionPrimaria = totalgraduacionPrimaria;
  }
  mostrargraduacionPrimaria(primeragraduacionPrimaria);
}

function imgSiguientegraduacionPrimaria() {
  if(primeragraduacionPrimaria < totalgraduacionPrimaria) {
    primeragraduacionPrimaria++;
  }else {
    primeragraduacionPrimaria = 1;
  }
  mostrargraduacionPrimaria(primeragraduacionPrimaria);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-graduacionPrimaria").addEventListener("click", imgAnteriorgraduacionPrimaria);
//-- Pulsar flecha derecha.
document.getElementById("right-graduacionPrimaria").addEventListener("click", imgSiguientegraduacionPrimaria);

//-- Punto de inicio del programa.
mostrargraduacionPrimaria(primeragraduacionPrimaria);