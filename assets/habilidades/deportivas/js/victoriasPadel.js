//-- Variables.
var imagenesIDvictoriasPadel =
[
  "https://i.postimg.cc/Prrx9dsD/IMG-20250812-175004.jpg",
  "https://i.postimg.cc/441yWmMZ/IMG-20250812-175311.jpg",
  "https://i.postimg.cc/RhG0hDfq/IMG-20250812-175837.jpg",
  "https://i.postimg.cc/BbJ6q0jd/IMG-20250812-175901.jpg",
  "https://i.postimg.cc/3RXN5RxX/IMG-20250812-175930.jpg",
  "https://i.postimg.cc/k5tDswrh/IMG-20250812-180042.jpg",
  "https://i.postimg.cc/x1ZcLhZz/IMG-20250812-180102.jpg",
  "https://i.postimg.cc/8zc7JNZG/IMG-20250812-180554.jpg",
  "https://i.postimg.cc/c4sgWQYr/IMG-20250812-180827.jpg",
  "https://i.postimg.cc/BZ5LRhjr/IMG-20250812-181104.jpg",
  "https://i.postimg.cc/wMk1JvKq/IMG-20250812-181122.jpg",
  "https://i.postimg.cc/7h4CfzWt/IMG-20250812-181206.jpg",
  "https://i.postimg.cc/HxXcYzB7/IMG-20250812-181247.jpg",
  "https://i.postimg.cc/8Cqfg9BS/IMG-20250812-181424.jpg",
  "https://i.postimg.cc/0N6K3PSn/IMG-20250812-181441.jpg",
  "https://i.postimg.cc/Z5syVCW0/IMG-20250812-181536.jpg",
  "https://i.postimg.cc/K88MPnvd/IMG-20250812-181727.jpg",
  "https://i.postimg.cc/KvNT39FP/IMG-20250812-181808.jpg",
  "https://i.postimg.cc/J4mJnww7/IMG-20250812-182000.jpg",
  "https://i.postimg.cc/057DPkBH/IMG-20250812-182022.jpg",
  "https://i.postimg.cc/gjyZDshP/IMG-20250812-182518.jpg",
  "https://i.postimg.cc/4yRcVqm5/IMG-20250812-182633.jpg",
  "https://i.postimg.cc/0Qwm6P2j/IMG-20250812-182707.jpg",
  "https://i.postimg.cc/N0Vmf5tZ/IMG-20250812-182750.jpg",
  "https://i.postimg.cc/qv12S15J/IMG-20250812-183003.jpg",
  "https://i.postimg.cc/mrh7s7vQ/IMG-20250812-183030.jpg",
  "https://i.postimg.cc/VkfjKx4Z/IMG-20250812-183258.jpg",
  "https://i.postimg.cc/02dYdkGJ/IMG-20250812-183339.jpg",
  "https://i.postimg.cc/VLc9Crt8/IMG-20250812-183521.jpg",
  "https://i.postimg.cc/jqfQ2QLc/IMG-20250812-183601.jpg",
  "https://i.postimg.cc/fLGc5kgY/IMG-20250812-183732.jpg",
  "https://i.postimg.cc/2yn4tmPM/IMG-20250812-184027.jpg",
  "https://i.postimg.cc/N0P79d6J/IMG-20250812-184130.jpg",
  "https://i.postimg.cc/cJJBLpnt/IMG-20250812-184151.jpg",
  "https://i.postimg.cc/wj2kHq7d/IMG-20250812-184251.jpg",
  "https://i.postimg.cc/DwnctJfg/IMG-20250812-184511.jpg",
  "https://i.postimg.cc/tRnDPGmh/IMG-20250812-184645.jpg",
  "https://i.postimg.cc/NfhDkCWZ/IMG-20250812-184706.jpg",
  "https://i.postimg.cc/rs4JL5th/IMG-20250812-184804.jpg",
  "https://i.postimg.cc/Nf14J7tF/IMG-20250812-184820.jpg",
  "https://i.postimg.cc/Pf039H9p/IMG-20250908-183226.jpg"
];
var primeravictoriasPadel = 1;
var pantallavictoriasPadel = document.getElementById("pantalla-victoriasPadel");
var imgvictoriasPadel = document.createElement("img");

//-- Ctes.
const totalvictoriasPadel = 41;

function mostrarvictoriasPadel(auxvictoriasPadel) {
  
    //-- Limpiar la pantalla.
    pantallavictoriasPadel.innerHTML = "";

    imgvictoriasPadel.src = imagenesIDvictoriasPadel[auxvictoriasPadel-1];
    pantallavictoriasPadel.appendChild(imgvictoriasPadel);
}

function imgAnteriorvictoriasPadel() {
  if(primeravictoriasPadel > 1) {
    primeravictoriasPadel--;
  }else {
    primeravictoriasPadel = totalvictoriasPadel;
  }
  mostrarvictoriasPadel(primeravictoriasPadel);
}

function imgSiguientevictoriasPadel() {
  if(primeravictoriasPadel < totalvictoriasPadel) {
    primeravictoriasPadel++;
  }else {
    primeravictoriasPadel = 1;
  }
  mostrarvictoriasPadel(primeravictoriasPadel);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-victoriasPadel").addEventListener("click", imgAnteriorvictoriasPadel);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-victoriasPadel").addEventListener("click", imgSiguientevictoriasPadel);

//-- Punto de inicio del programa.
mostrarvictoriasPadel(primeravictoriasPadel);