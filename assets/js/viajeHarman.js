//-- Variables.
var videosIDviajeHarman = ["","","tedzX0xufsM","s3GpWv21uVM","","GiRyIoHuMxY","7jihgkFH99s","fxJ11BakWaA","","", //-- En cada fila hay 10.
    "","","","","","","","","","", //-- En cada fila hay 10.
    "tLiUptwA3E4","","2yKlY0AHPMk","vTACcj9CGSg",""] //-- En cada fila hay 10.
var indiceViajeHarman = 1;
var pantallaViajeHarman = document.getElementById('pantalla-viajeHarman');
var imgViajeHarman = document.createElement("img");
var iframeViajeHarman = document.createElement("iframe");
let auxImg = new Image();

//-- Ctes.
const totalViajeHarman = 25;

function mostrarViajeHarman(auxViajeHarman) {
    
    //-- Limpiar la pantalla.
    pantallaViajeHarman.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    auxImg.src = `./assets/img/pasantias/viajeUK/${auxViajeHarman}.png`;
    auxImg.onload = function() {
        imgViajeHarman.src = auxImg.src;
        pantallaViajeHarman.appendChild(imgViajeHarman);
    }
    auxImg.onerror = function() {
        iframeViajeHarman.src = "https://www.youtube.com/embed/" + videosIDviajeHarman[auxViajeHarman-1] + "?autoplay=1&loop=1&playlist=" + videosIDviajeHarman[auxViajeHarman-1];
        iframeViajeHarman.allow = "autoplay";
        iframeViajeHarman.width = "400";
        iframeViajeHarman.height = "533";
        iframeViajeHarman.allowFullscreen = false;
        iframeViajeHarman.rel = 0;
        iframeViajeHarman.controls = 0;
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

//-- Cargar inicialmente las imágenes.
for(i=1; i<=totalViajeHarman; i++) {
    imgViajeHarman.src = `./assets/img/pasantias/viajeUK/${i}.png`;
    pantallaViajeHarman.appendChild(imgViajeHarman);
}

//-- Punto de inicio del programa.
mostrarViajeHarman(indiceViajeHarman);