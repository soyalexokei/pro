//-- Variables.
var videosIDvoluntariado1 = ["","","","","","","","","","", //-- En cada fila hay 10.
"","eyGhyAdtc30","","","f0PHhWc2fb8","","","","","", //-- En cada fila hay 10.
"","","Y38JfytAGp4","","","","","","","", //-- En cada fila hay 10.
"","","","","","","","","","", //-- En cada fila hay 10.
""];
var indiceVoluntariado1 = 1;
var pantallaVoluntariado1 = document.getElementById("pantalla-voluntariado-proweb-1");
var imgVoluntariado1 = document.createElement("img");
var iframeVoluntariado1 = document.createElement("iframe");
let auxImgVoluntariado1 = new Image();

//-- Ctes.
const totalVoluntariado1 = 41;

function mostrarVoluntariado1(auxVoluntariado1) {
    
    //-- Limpiar la pantalla.
    pantallaVoluntariado1.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    auxImgVoluntariado1.src = `./assets/img/voluntariados/Segundo/${auxVoluntariado1}.jpg`;
    auxImgVoluntariado1.onload = function() {
      imgVoluntariado1.src = auxImgVoluntariado1.src;
        pantallaVoluntariado1.appendChild(imgVoluntariado1);
    }
    auxImgVoluntariado1.onerror = function() {
      iframeVoluntariado1.src = "https://www.youtube.com/embed/" + videosIDvoluntariado1[auxVoluntariado1-1] + "?autoplay=1&loop=1&playlist=" + videosIDvoluntariado1[auxVoluntariado1-1];
      iframeVoluntariado1.allow = "autoplay";
      iframeVoluntariado1.width = "400";
      iframeVoluntariado1.height = "533";
      iframeVoluntariado1.allowFullscreen = false;
      iframeVoluntariado1.rel = 0;
      iframeVoluntariado1.controls = 0;
      pantallaVoluntariado1.appendChild(iframeVoluntariado1);
    }
}

function imgAnteriorVoluntariado1() {
    if(indiceVoluntariado1 > 1) {
      indiceVoluntariado1--;
    }else {
      indiceVoluntariado1 = totalVoluntariado1;
    }
    mostrarVoluntariado1(indiceVoluntariado1);
}

function imgSiguienteVoluntariado1() {
    if(indiceVoluntariado1 < totalVoluntariado1) {
      indiceVoluntariado1++;
    }else {
      indiceVoluntariado1 = 1;
    }
    mostrarVoluntariado1(indiceVoluntariado1);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-1").addEventListener("click", imgAnteriorVoluntariado1);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-1").addEventListener("click", imgSiguienteVoluntariado1);

//-- Punto de inicio del programa.
mostrarVoluntariado1(indiceVoluntariado1);