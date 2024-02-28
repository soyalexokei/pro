const flechaIzquierda4 = document.getElementById("flecha-izquierda-pase4");
const flechaDerecha4 = document.getElementById("flecha-derecha-pase4");

const totalVideos2 = 9;
var videoActual2 = 1;
var primerVideoId = 'ke9MInBdzH0';

function playerGo(ident) {
    new YT.Player('carrusel-voluntariado-espec4', {
        videoId: ident, // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
        playerVars: {
            'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
            'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
            'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
            'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
        }
    });
}

function reproduccionVideos(cont) {
    if(cont < 1) {
        cont = totalVideos2;
    }else if(cont > totalVideos2) {
        cont = 1;
    }

    var videoId;

    switch(cont) {
        case 1:
            videoId = 'ke9MInBdzH0';
            break;
        case 2:
            videoId = 'NH58gQWo9mM';
            break;
        case 3:
            videoId = 'qTxboYDAUlI';
            break;
        case 4:
            videoId = 'N6I4kwdrwJ8';
            break;
        case 5:
            videoId = 'm8u6yeTSMJY';
            break;
        case 6:
            videoId = 'HUWCCp-Gm2w';
            break;
        case 7:
            videoId = 'gutpMrinsBY';
            break;
        case 8:
            videoId = 'Fp-ecbHzHes';
            break;
        case 9:
            videoId = 'MbfkBCP5gNs';
            break;
    }

    playerGo(videoId);
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