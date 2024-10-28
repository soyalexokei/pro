//-- Variables.
var videosIDfalkenCamp = ["","","","","","","","","","", //-- En cada fila hay 10.
"","eyGhyAdtc30","","","f0PHhWc2fb8","","","","","", //-- En cada fila hay 10.
"","","Y38JfytAGp4","","","","","","","", //-- En cada fila hay 10.
"","","","","","","","","","", //-- En cada fila hay 10.
""];  //-- En cada fila hay 10.
var imagenesIDfalkenCamp = ["rF6Gj9x1/1","h4QbVYz4/2","QdhQGx6V/3","ZKr8Myx1/4","XYLwVShL/5","xddL8pV2/6","N0PmH8Qr/7","ydg9XJNp/8","vBJnPQgY/9","QCcTwR1p/10",
"wxNL1sZ7/11","","BQGDHnfN/13","KvrTNhZb/14","","XYjC11JC/16","vZ06J7gS/17","vmD6b158/18","3w60RKZX/19","SsM2YwZw/20",
"4yRK6Bqn/21","Hn0rBb1z/22","","tRFnqGn6/24","65w2TbCm/25","tC516d5C/26","fRRVf327/27","7ZtfsxdF/28","GpB96W1H/29","TPZhxtRQ/30",
"mDCkg7k4/31","7h46GbJ2/32","wMkBhHDb/33","bY0dX04H/34","CLF5wBgy/35","3JnRN88k/36","y8xNSMxv/37","W1y1m5Jj/38","rptFf5S4/39","vBF8kDzN/40",
"763PkDtY/41"];
var indiceFalkenCamp = 1;
var pantallaFalkenCamp = document.getElementById("pantalla-voluntariado-proweb-1");
var imgFalkenCamp = document.createElement("img");
var iframeFalkenCamp = document.createElement("iframe");

//-- Ctes.
const totalFalkenCamp = 41;

function mostrarFalkenCamp(auxFalkenCamp) {
    
  //-- Carga de preloader.
  pantallaFalkenCamp.innerHTML = "";

  //-- Verificar si es una imagen o un vídeo.
  if(imagenesIDfalkenCamp[auxFalkenCamp-1]) {
    imgFalkenCamp.src = "https://i.postimg.cc/" + imagenesIDfalkenCamp[auxFalkenCamp-1] + ".jpg";
    pantallaFalkenCamp.appendChild(imgFalkenCamp);
  }else {
    iframeFalkenCamp.src = "https://www.youtube.com/embed/" + videosIDfalkenCamp[auxFalkenCamp-1] + "?autoplay=1&loop=1&playlist=" + videosIDfalkenCamp[auxFalkenCamp-1];
    iframeFalkenCamp.allow = "autoplay";
    iframeFalkenCamp.width = "400";
    iframeFalkenCamp.height = "533";
    iframeFalkenCamp.allowFullscreen = false;
    iframeFalkenCamp.rel = 0;
    iframeFalkenCamp.controls = 0;
    pantallaFalkenCamp.appendChild(iframeFalkenCamp);
  }
}

function imgAnteriorFalkenCamp() {
  if(indiceFalkenCamp > 1) {
    indiceFalkenCamp--;
  }else {
    indiceFalkenCamp = totalFalkenCamp;
  }
  mostrarFalkenCamp(indiceFalkenCamp);
}

function imgSiguienteFalkenCamp() {
  if(indiceFalkenCamp < totalFalkenCamp) {
    indiceFalkenCamp++;
  }else {
    indiceFalkenCamp = 1;
  }
  mostrarFalkenCamp(indiceFalkenCamp);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-1").addEventListener("click", imgAnteriorFalkenCamp);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-1").addEventListener("click", imgSiguienteFalkenCamp);

//-- Punto de inicio del programa.
mostrarFalkenCamp(indiceFalkenCamp);