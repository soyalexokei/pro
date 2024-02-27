const videoContainer5 = document.getElementById('carrusel-voluntariado-espec7');
const flechaIzquierda7 = document.getElementById("flecha-izquierda-pase7");
const flechaDerecha7 = document.getElementById("flecha-derecha-pase7");

const totalVideos5 = 16;
var videoActual5 = 13;

function playNextVideo5(s) {
  if(videoActual5 < 13) {
    videoActual5 = totalVideos5;
  }else if(videoActual5 > totalVideos5) {
    videoActual5 = 13;
  }
  
  //-- Limpia el contenedor.
  videoContainer5.innerHTML = '';

  //-- Crea video.
  const video5 = document.createElement("video");
  video5.src = `./assets/img/germany/germany${videoActual5}.mp4`;
  video5.type = 'video/mp4';
  video5.controls = true;
  video5.autoplay = false;
  video5.width = 300;
  video5.height = 400;
  videoContainer5.appendChild(video5);
}

flechaIzquierda7.addEventListener('click', () => {
  videoActual5--;
  playNextVideo5(videoActual5);
});
flechaDerecha7.addEventListener('click', () => {
  videoActual5++;
  playNextVideo5(videoActual5);
});

//-- Primera entrada.
playNextVideo5(videoActual5);