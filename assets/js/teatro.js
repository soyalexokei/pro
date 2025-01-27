//-- Variables.
var imagenesIDteatroPrimaria =
[
    "https://i.postimg.cc/x1DvdMDP/01.jpg",  
    "https://i.postimg.cc/Y9Mk2Xbw/02.jpg",  
    "https://i.postimg.cc/7YT1DXc6/03.jpg",  
    "https://i.postimg.cc/J0sNsQzp/04.jpg",  
    "https://i.postimg.cc/fy1xm03D/05.jpg",  
    "https://i.postimg.cc/nVWK6N3g/06.jpg",  
    "https://i.postimg.cc/8zfTZfjx/07.jpg",  
    "https://i.postimg.cc/KYXxwcTj/08.jpg",  
    "https://i.postimg.cc/FKjN4tbZ/09.jpg",  
    "https://i.postimg.cc/tTkbshMn/10.jpg",  
    "https://i.postimg.cc/qqZdLp0k/11.jpg",  
    "https://i.postimg.cc/prdHzpwG/12.jpg",  
    "https://i.postimg.cc/59P11SzZ/13.jpg"
];
var primerateatroPrimaria = 1;
var pantallateatroPrimaria = document.getElementById("pantalla-teatroPrimaria");
var imgteatroPrimaria = document.createElement("img");

//-- Ctes.
const totalteatroPrimaria = 13;

function mostrarteatroPrimaria(auxteatroPrimaria) {
  
  //-- Limpiar la pantalla.
  pantallateatroPrimaria.innerHTML = "";

  imgteatroPrimaria.src = imagenesIDteatroPrimaria[auxteatroPrimaria-1];
  pantallateatroPrimaria.appendChild(imgteatroPrimaria);
}

function imgAnteriorteatroPrimaria() {
  if(primerateatroPrimaria > 1) {
    primerateatroPrimaria--;
  }else {
    primerateatroPrimaria = totalteatroPrimaria;
  }
  mostrarteatroPrimaria(primerateatroPrimaria);
}

function imgSiguienteteatroPrimaria() {
  if(primerateatroPrimaria < totalteatroPrimaria) {
    primerateatroPrimaria++;
  }else {
    primerateatroPrimaria = 1;
  }
  mostrarteatroPrimaria(primerateatroPrimaria);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-teatroPrimaria").addEventListener("click", imgAnteriorteatroPrimaria);
//-- Pulsar flecha derecha.
document.getElementById("right-teatroPrimaria").addEventListener("click", imgSiguienteteatroPrimaria);

//-- Punto de inicio del programa.
mostrarteatroPrimaria(primerateatroPrimaria);