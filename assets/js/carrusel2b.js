const videoContainer3 = document.getElementById('carrusel-voluntariado-espec5');
const flechaIzquierda5 = document.getElementById("flecha-izquierda-pase5");
const flechaDerecha5 = document.getElementById("flecha-derecha-pase5");

const totalVideos3 = 16;
var videoActual3 = 9;

function playNextVideo3(p) {
  if(videoActual3 < 9) {
    videoActual3 = totalVideos3;
  }else if(videoActual3 > totalVideos3) {
    videoActual3 = 9;
  }
  
  //-- Limpia el contenedor.
  videoContainer3.innerHTML = '';

  //-- Crea video.
  const video3 = document.createElement("video");
  video3.src = `./assets/img/germany/germany${videoActual3}.mp4`;
  video3.type = 'video/mp4';
  video3.controls = true;
  video3.autoplay = false;
  video3.width = 300;
  video3.height = 400;
  videoContainer3.appendChild(video3);
}

flechaIzquierda5.addEventListener('click', () => {
  videoActual3--;
  playNextVideo3(videoActual3);
});
flechaDerecha5.addEventListener('click', () => {
  videoActual3++;
  playNextVideo3(videoActual3);
});

//-- Primera entrada.
playNextVideo3(videoActual3);