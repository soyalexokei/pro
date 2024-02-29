const flechaIzquierda4 = document.getElementById("flecha-izquierda-pase4");
const flechaDerecha4 = document.getElementById("flecha-derecha-pase4");

const totalVideos2 = 9;
var videoActual2 = 1;
var primerVideoId = 'ke9MInBdzH0';
var player;

function playerGo(ident) {
    if(player) {
        player.loadVideoById(ident);
    }else {
        player = new YT.Player('carrusel-voluntariado-espec4', {
            videoId: ident, // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
            playerVars: {
                'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
            }
        });
    }
}

function obtenerVideoId(index) {
    switch(index) {
        case 1:
            return 'ke9MInBdzH0';
        case 2:
            return 'NH58gQWo9mM';
        case 3:
            return 'qTxboYDAUlI';
        case 4:
            return 'N6I4kwdrwJ8';
        case 5:
            return 'm8u6yeTSMJY';
        case 6:
            return 'HUWCCp-Gm2w';
        case 7:
            return 'gutpMrinsBY';
        case 8:
            return 'Fp-ecbHzHes';
        case 9:
            return 'MbfkBCP5gNs';
    }
}

function reproduccionVideos(cont) {
    if(cont < 1) {
        cont = totalVideos2;
    }else if(cont > totalVideos2) {
        cont = 1;
    }

    var videoId = obtenerVideoId(cont);
    playerGo(videoId);
    videoActual2 = cont;
}

flechaIzquierda4.addEventListener('click', () => {
  videoActual2--;
  reproduccionVideos(videoActual2);
});
flechaDerecha4.addEventListener('click', () => {
    videoActual2++;
    reproduccionVideos(videoActual2);
});

playerGo(primerVideoId);