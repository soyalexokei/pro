var pantallaViajeHarman = document.getElementById("pantalla-viajeHarman");
var imgViajeHarman = document.createElement("img");
var iframeViajeHarman = document.createElement("iframe");

var videosIDviajeHarman = [""];
var indiceViajeHarman = 1;
const totalViajeHarman = 50;

function cambiarViajeHarman() {
    
    //-- Limpiar la pantalla.
    pantallaViajeHarman.innerHTML = "";

    //-- Elección de primera foto o última.
    if (indiceViajeHarman < 1) {
        indiceViajeHarman = totalViajeHarman;
    } else if (indiceViajeHarman > totalViajeHarman) {
    indiceViajeHarman = 1;
    }

    //-- Elección de img o vídeo.
    if(imgViajeHarman.src = `./assets/img/formacion/motl/${i}.jpg`) {

    }
    iframeViajeHarman.src = "https://www.youtube.com/embed/" + videosIDviajeHarman[indiceViajeHarman];
    iframeViajeHarman.allowFullscreen = true;
    pantallaViajeHarman.appendChild(iframeViajeHarman);
}

document.getElementById("left-viajeHarman").addEventListener("click", () => {
    indiceViajeHarman = (indiceViajeHarman - 1 + videosIDviajeHarman.length) % videosIDviajeHarman.length;
    cambiarViajeHarman();
});

document.getElementById("right-viajeHarman").addEventListener("click", () => {
    indiceViajeHarman = (indiceViajeHarman + 1) % videosIDviajeHarman.length;
    cambiarViajeHarman();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#viajeHarman').on('shown.bs.modal', function () {
    cambiarViajeHarman();
});

function cambiarImagenViajeHarman(auxViajeHarman) {
  pantallaViajeHarman.style.transform = `translateX(-${(indiceViajeHarman - 1) * 100}%)`;
}

document.getElementById("left-viajeHarman").addEventListener("click", () => {
    indiceViajeHarman--;
    cambiarImagenViajeHarman(indiceViajeHarman);
});

document.getElementById("right-viajeHarman").addEventListener("click", () => {
    indiceViajeHarman++;
    cambiarImagenViajeHarman(indiceViajeHarman);
});

for (let i = 1; i <= totalViajeHarman; i++) {
    if(imgViajeHarman.src = `./assets/img/formacion/motl/${i}.jpg`) {
        imgViajeHarman.src = `./assets/img/formacion/motl/${i}.jpg`;
        pantallaViajeHarman.appendChild(imgViajeHarman);
    }else {
        
    }
}