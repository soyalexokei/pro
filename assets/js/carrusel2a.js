const flechaIzquierda4 = document.getElementById("flecha-izquierda-pase4");
const flechaDerecha4 = document.getElementById("flecha-derecha-pase4");

const totalVideos2 = 16;
var videoActual2 = 1;

function playerGo(cont) {
    switch(cont) {
        case 1:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'ke9MInBdzH0', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 2:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'NH58gQWo9mM', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 3:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'qTxboYDAUlI', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 4:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'N6I4kwdrwJ8', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 5:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'm8u6yeTSMJY', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 6:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'HUWCCp-Gm2w', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 7:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'gutpMrinsBY', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 8:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'Fp-ecbHzHes', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
        case 9:
            new YT.Player('carrusel-voluntariado-espec4', {
                videoId: 'MbfkBCP5gNs', // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
                playerVars: {
                    'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                    'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                    'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                    'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
                }
            });
            break;
    }
}

function reproduccionVideos(cont) {
    if(cont < 1) {
        cont = totalVideos2;
    }else if(cont > totalVideos2) {
        cont = 1;
    }

    playerGo(cont);
}

flechaIzquierda4.addEventListener('click', () => {
  videoActual2--;
  reproduccionVideos(videoActual2);
});
flechaDerecha4.addEventListener('click', () => {
    videoActual2++;
    reproduccionVideos(videoActual2);
});

playerGo(cont);