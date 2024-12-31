//-- Variables.
var imagenesIDgraduacionBach =
[
    "https://i.postimg.cc/8CPjtQj7/1.png",
    "https://i.postimg.cc/K8bK3gbr/2.png",
    "https://i.postimg.cc/pXzhdJwL/3.png",
    "https://i.postimg.cc/RZTW7VVr/4.png",
    "https://i.postimg.cc/G3ZTr5Sf/5.png"
];
var primeragraduacionBach = 1;
var pantallagraduacionBach = document.getElementById("pantalla-graduacionBach");
var imggraduacionBach = document.createElement("img");

//-- Ctes.
const totalgraduacionBach = 5;

function mostrargraduacionBach(auxgraduacionBach) {
  
  //-- Limpiar la pantalla.
  pantallagraduacionBach.innerHTML = "";

  imggraduacionBach.src = imagenesIDgraduacionBach[auxgraduacionBach-1];
  pantallagraduacionBach.appendChild(imggraduacionBach);
}

function imgAnteriorgraduacionBach() {
  if(primeragraduacionBach > 1) {
    primeragraduacionBach--;
  }else {
    primeragraduacionBach = totalgraduacionBach;
  }
  mostrargraduacionBach(primeragraduacionBach);
}

function imgSiguientegraduacionBach() {
  if(primeragraduacionBach < totalgraduacionBach) {
    primeragraduacionBach++;
  }else {
    primeragraduacionBach = 1;
  }
  mostrargraduacionBach(primeragraduacionBach);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-graduacionBach").addEventListener("click", imgAnteriorgraduacionBach);
//-- Pulsar flecha derecha.
document.getElementById("right-graduacionBach").addEventListener("click", imgSiguientegraduacionBach);

//-- Punto de inicio del programa.
mostrargraduacionBach(primeragraduacionBach);