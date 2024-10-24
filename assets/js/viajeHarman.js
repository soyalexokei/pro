//-- Variables.
var videosIDviajeHarman = ["","","tedzX0xufsM","s3GpWv21uVM","","GiRyIoHuMxY","7jihgkFH99s","fxJ11BakWaA","","", //-- En cada fila hay 10.
    "","","","","","","","","","", //-- En cada fila hay 10.
    "tLiUptwA3E4","","2yKlY0AHPMk","vTACcj9CGSg",""]; //-- En cada fila hay 10.
var imagenesIDviajeHarman = ["dtHkCkk8/1","PrrvNzxX/2","","","9QsDx6B0/5","","","","138grmwb/9","d3Q3kwJH/10",
    "pTJyLpM5/11","k4mBCWzd/12","5tv6DsP3/13","tJrTFwTX/14","dt1DJsHD/15","hP5vjk6s/16","Y28hcGxJ/17","nh9zQdtJ/18","DzVzQq2b/19","8ChzZj5X/20",
    "","TwfYFf5d/22","","","Tw0YXFnr/25"];
var indiceViajeHarman = 1;
var pantallaViajeHarman = document.getElementById('pantalla-viajeHarman');
var imgViajeHarman = document.createElement("img");
var iframeViajeHarman = document.createElement("iframe");

//-- Ctes.
const totalViajeHarman = 25;

function mostrarViajeHarman(auxViajeHarman) {
    
    //-- Limpiar la pantalla.
    pantallaViajeHarman.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDviajeHarman[auxViajeHarman-1]) {
        imgViajeHarman.src = "https://i.postimg.cc/" + imagenesIDviajeHarman[auxViajeHarman-1] + ".png";
        pantallaViajeHarman.appendChild(imgViajeHarman);
    }else {
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

//-- Punto de inicio del programa.
mostrarViajeHarman(indiceViajeHarman);