const flechaIzquierda4 = document.getElementById("flecha-izquierda-pase4");
const flechaDerecha4 = document.getElementById("flecha-derecha-pase4");

const totalVideos2 = 16;
var videoActual2 = 1;
var primerVideoId = 'PdxNRQczFw0';
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
            return 'PdxNRQczFw0';
        case 2:
            return 'ke9MInBdzH0';
        case 3:
            return 'NH58gQWo9mM';
        case 4:
            return 'qTxboYDAUlI';
        case 5:
            return 'N6I4kwdrwJ8';
        case 6:
            return 'm8u6yeTSMJY';
        case 7:
            return 'HUWCCp-Gm2w';
        case 8:
            return 'gutpMrinsBY';
        case 9:
            return 'Fp-ecbHzHes';
        case 10:
            return 'MbfkBCP5gNs';
        case 11:
            return 'oGmZW0v1NwQ';
        case 12:
            return '_W3qHpUdrX0';
        case 13:
            return 'clOJ8arr8p8';
        case 14:
            return 'HaKFuO4M02s';
        case 15:
            return 'oLlmVGI7TPE';
        case 16:
            return '2VpR7gxzvpw';
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