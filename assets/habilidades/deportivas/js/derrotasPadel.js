//-- Variables.
var imagenesIDderrotasPadel =
[
  "https://i.postimg.cc/rp3JKhcV/IMG-20250812-174853.jpg",
  "https://i.postimg.cc/k5BsJ00Y/IMG-20250812-174910.jpg",
  "https://i.postimg.cc/x1sgSf4b/IMG-20250812-175022.jpg",
  "https://i.postimg.cc/0y5Z3Mcs/IMG-20250812-175218.jpg",
  "https://i.postimg.cc/qMxjjXcw/IMG-20250812-175240.jpg",
  "https://i.postimg.cc/RVBg7btq/IMG-20250812-175329.jpg",
  "https://i.postimg.cc/XNF2y0pT/IMG-20250812-175354.jpg",
  "https://i.postimg.cc/C1ncN3Jn/IMG-20250812-175439.jpg",
  "https://i.postimg.cc/4yzBCpDJ/IMG-20250812-175949.jpg",
  "https://i.postimg.cc/zvm0PxPt/IMG-20250812-180225.jpg",
  "https://i.postimg.cc/bvB61y0j/IMG-20250812-180242.jpg",
  "https://i.postimg.cc/HLxZJcy2/IMG-20250812-180405.jpg",
  "https://i.postimg.cc/fRMgNgW1/IMG-20250812-180426.jpg",
  "https://i.postimg.cc/Hk3vs4Vn/IMG-20250812-180616.jpg",
  "https://i.postimg.cc/c4R5PNWQ/IMG-20250812-180633.jpg",
  "https://i.postimg.cc/DfbNdXYp/IMG-20250812-180752.jpg",
  "https://i.postimg.cc/QtvyZ8Vq/IMG-20250812-181044.jpg",
  "https://i.postimg.cc/qMV5mvPJ/IMG-20250812-181228.jpg",
  "https://i.postimg.cc/BbDwqrKf/IMG-20250812-181402.jpg",
  "https://i.postimg.cc/gJxT7XcJ/IMG-20250812-181611.jpg",
  "https://i.postimg.cc/s26LK9rq/IMG-20250812-182055.jpg",
  "https://i.postimg.cc/7LYcgtpS/IMG-20250812-182540.jpg",
  "https://i.postimg.cc/W17Cqcf2/IMG-20250812-182602.jpg",
  "https://i.postimg.cc/nhxNLh2R/IMG-20250812-182856.jpg",
  "https://i.postimg.cc/dtrzvy2Z/IMG-20250812-182915.jpg",
  "https://i.postimg.cc/NGWWW4Hw/IMG-20250812-182934.jpg",
  "https://i.postimg.cc/mZcvXqhw/IMG-20250812-183444.jpg",
  "https://i.postimg.cc/tTJ5gL8m/IMG-20250812-183503.jpg",
  "https://i.postimg.cc/J0B5NjrN/IMG-20250812-183809.jpg",
  "https://i.postimg.cc/RFYTJgBC/IMG-20250812-183945.jpg",
  "https://i.postimg.cc/14hcJ4XL/IMG-20250812-184355.jpg",
];
var primeraderrotasPadel = 1;
var pantalladerrotasPadel = document.getElementById("pantalla-derrotasPadel");
var imgderrotasPadel = document.createElement("img");

//-- Ctes.
const totalderrotasPadel = 31;

function mostrarderrotasPadel(auxderrotasPadel) {
  
    //-- Limpiar la pantalla.
    pantalladerrotasPadel.innerHTML = "";

    imgderrotasPadel.src = imagenesIDderrotasPadel[auxderrotasPadel-1];
    pantalladerrotasPadel.appendChild(imgderrotasPadel);
}

function imgAnteriorderrotasPadel() {
  if(primeraderrotasPadel > 1) {
    primeraderrotasPadel--;
  }else {
    primeraderrotasPadel = totalderrotasPadel;
  }
  mostrarderrotasPadel(primeraderrotasPadel);
}

function imgSiguientederrotasPadel() {
  if(primeraderrotasPadel < totalderrotasPadel) {
    primeraderrotasPadel++;
  }else {
    primeraderrotasPadel = 1;
  }
  mostrarderrotasPadel(primeraderrotasPadel);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-derrotasPadel").addEventListener("click", imgAnteriorderrotasPadel);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-derrotasPadel").addEventListener("click", imgSiguientederrotasPadel);

//-- Punto de inicio del programa.
mostrarderrotasPadel(primeraderrotasPadel);