//-- Variables.
var videosIDviajeHarman = ["","","","","JdPg_ERK6GQ", "uR2VUOp18zY"];
var indiceViajeHarman = 1;
var pantallaViajeHarman = document.getElementById("pantalla-viajeHarman");
var imgViajeHarman = document.createElement("img");
var iframeViajeHarman = document.createElement("iframe");
let auxImg = new Image();

//-- Ctes.
const totalViajeHarman = 6;

function mostrarViajeHarman(auxViajeHarman) {
    
    //-- Limpiar la pantalla.
    pantallaViajeHarman.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    auxImg.src = `./assets/img/formacion/motl/${auxViajeHarman}.jpg`;
    auxImg.onload = function() {
        imgViajeHarman.src = auxImg.src;
        pantallaViajeHarman.appendChild(imgViajeHarman);
    }
    auxImg.onerror = function() {
        iframeViajeHarman.src = "https://www.youtube.com/embed/" + videosIDviajeHarman[auxViajeHarman-1];
        iframeViajeHarman.allowFullscreen = true;
        pantallaViajeHarman.appendChild(iframeViajeHarman);
    }
}

function imgAnteriorViajeHarman() {
    if(indiceViajeHarman > 1) {
        indiceViajeHarman--;
    }else {
        indiceViajeHarman = totalViajeHarman;
    }
    mostrarViajeHarman(indiceViajeHarman);
}

function imgSiguienteViajeHarman() {
    if(indiceViajeHarman < totalViajeHarman) {
        indiceViajeHarman++;
    }else {
        indiceViajeHarman = 1;
    }
    mostrarViajeHarman(indiceViajeHarman);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-viajeHarman").addEventListener("click", imgAnteriorViajeHarman);
//-- Pulsar flecha derecha.
document.getElementById("right-viajeHarman").addEventListener("click", imgSiguienteViajeHarman);

//-- Punto de inicio del programa.
mostrarViajeHarman(indiceViajeHarman);