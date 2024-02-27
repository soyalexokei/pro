const videoContainer1 = document.getElementById('carrusel-voluntariado-espec2');
const flechaIzquierda2 = document.getElementById("flecha-izquierda-pase2");
const flechaDerecha2 = document.getElementById("flecha-derecha-pase2");

const totalVideos1 = 3;
var videoActual1 = 1;

function playNextVideo1(n) {
  if(videoActual1 < 1) {
    videoActual1 = totalVideos1;
  }else if(videoActual1 > totalVideos1) {
    videoActual1 = 1;
  }
  
  //-- Crea video.
  var video1 = document.createElement("video");
  video1.src = `./assets/img/austria${videoActual1}.mp4`;
  video1.type = 'video/mp4';
  video1.controls = true;
  video1.autoplay = false;
  video1.width = 300;
  video1.height = 400;

  //-- Limpia el contenedor.
  videoContainer1.innerHTML = '';
  videoContainer1.appendChild(video1);
}

flechaIzquierda2.addEventListener('click', () => {
  videoActual1--;
  playNextVideo1(videoActual1);
});
flechaDerecha2.addEventListener('click', () => {
    videoActual1++;
    playNextVideo1(videoActual1);
});

// Reproducir el primer video al cargar la página
playNextVideo1(videoActual1);