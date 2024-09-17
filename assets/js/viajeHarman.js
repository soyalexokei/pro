//-- Variables.
var videosIDviajeHarman = ["","","tedzX0xufsM","s3GpWv21uVM","","GiRyIoHuMxY","7jihgkFH99s","fxJ11BakWaA","","", //-- En cada fila hay 10.
    "","","","","","","","","","", //-- En cada fila hay 10.
    "tLiUptwA3E4","","2yKlY0AHPMk","vTACcj9CGSg",""] //-- En cada fila hay 10.
var indiceViajeHarman = 1;
var pantallaViajeHarman = document.getElementById('pantalla-viajeHarman');
var imgViajeHarman = document.createElement("img");
var iframeViajeHarman = document.createElement("iframe");
let auxImg = new Image();
// Variables para gestionar el gesto táctil.
let empiezaToque = 0;
let acabaToque = 0;

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

// Función para manejar el gesto de deslizamiento
function handleSwipe() {
    if (acabaToque < empiezaToque) {
        imgSiguienteViajeHarman();  // Desliza hacia la izquierda, pasa a la siguiente imagen
    } else if (acabaToque > empiezaToque) {
        imgAnteriorViajeHarman();  // Desliza hacia la derecha, pasa a la imagen anterior
    }
}

//-- Pulsar flecha izquierda.
document.getElementById("left-viajeHarman").addEventListener("click", imgAnteriorViajeHarman);
//-- Pulsar flecha derecha.
document.getElementById("right-viajeHarman").addEventListener("click", imgSiguienteViajeHarman);

// Eventos de teclado (flechas izquierda y derecha).
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        imgAnteriorViajeHarman();
    } else if (event.key === 'ArrowRight') {
        imgSiguienteViajeHarman();
    }
});

// Evento para detectar el inicio del toque
pantallaViajeHarman.addEventListener('touchstart', function(event) {
    empiezaToque = event.changedTouches[0].screenX;
});

// Evento para detectar el final del toque
pantallaViajeHarman.addEventListener('touchend', function(event) {
    acabaToque = event.changedTouches[0].screenX;
    handleSwipe();
});

//-- Punto de inicio del programa.
mostrarViajeHarman(indiceViajeHarman);

//-- Cargar de inicio las imágenes, para que se visualicen de forma más fluida.
for (let i = 1; i <= totalViajeHarman; i++) {
    imgViajeHarman.src = `./assets/img/pasantias/viajeUK/${i}.png`;
    pantallaViajeHarman.appendChild(imgViajeHarman);
}