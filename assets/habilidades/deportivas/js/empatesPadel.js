//-- Variables.
var imagenesIDempatesPadel =
[
  "https://i.postimg.cc/DZ3vfTW7/IMG-20250812-175422.jpg",
  "https://i.postimg.cc/bvtYjJw6/IMG-20250812-180733.jpg",
  "https://i.postimg.cc/kgZMZ8q6/IMG-20250812-181552.jpg",
  "https://i.postimg.cc/MpXKdt2J/IMG-20250812-181750.jpg",
  "https://i.postimg.cc/gkg2VQ7K/IMG-20250812-183319.jpg",
  "https://i.postimg.cc/pVYTTpY4/IMG-20250812-183751.jpg",
  "https://i.postimg.cc/15mzNsvt/IMG-20250812-184006.jpg",
  "https://i.postimg.cc/C5NL6QxS/IMG-20250812-184338.jpg",
  "https://i.postimg.cc/tJy4kjyB/IMG-20250812-184452.jpg",
  "https://i.postimg.cc/T3gcZWmB/IMG-20250908-183202.jpg",
  "https://i.postimg.cc/gc7qjKHf/IMG-20250908-183243.jpg"
];
var primeraempatesPadel = 1;
var pantallaempatesPadel = document.getElementById("pantalla-empatesPadel");
var imgempatesPadel = document.createElement("img");

//-- Ctes.
const totalempatesPadel = 11;

function mostrarempatesPadel(auxempatesPadel) {
  
    //-- Limpiar la pantalla.
    pantallaempatesPadel.innerHTML = "";

    imgempatesPadel.src = imagenesIDempatesPadel[auxempatesPadel-1];
    pantallaempatesPadel.appendChild(imgempatesPadel);
}

function imgAnteriorempatesPadel() {
  if(primeraempatesPadel > 1) {
    primeraempatesPadel--;
  }else {
    primeraempatesPadel = totalempatesPadel;
  }
  mostrarempatesPadel(primeraempatesPadel);
}

function imgSiguienteempatesPadel() {
  if(primeraempatesPadel < totalempatesPadel) {
    primeraempatesPadel++;
  }else {
    primeraempatesPadel = 1;
  }
  mostrarempatesPadel(primeraempatesPadel);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-empatesPadel").addEventListener("click", imgAnteriorempatesPadel);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-empatesPadel").addEventListener("click", imgSiguienteempatesPadel);

//-- Punto de inicio del programa.
mostrarempatesPadel(primeraempatesPadel);