const videoContainer2 = document.getElementById('carrusel-voluntariado-espec4');
const flechaIzquierda4 = document.getElementById("flecha-izquierda-pase4");
const flechaDerecha4 = document.getElementById("flecha-derecha-pase4");

const totalVideos2 = 16;
var videoActual2 = 1;

function playNextVideo2(p) {
  if(videoActual2 < 1) {
    videoActual2 = totalVideos2;
  }else if(videoActual2 > totalVideos2) {
    videoActual2 = 1;
  }
  
  //-- Limpia el contenedor.
  videoContainer2.innerHTML = '';

  //-- Crea video.
  const video2 = document.createElement("video");
  video2.src = `./assets/img/germany/germany${videoActual2}.mp4`;
  video2.type = 'video/mp4';
  video2.controls = true;
  video2.autoplay = false;
  video2.width = 300;
  video2.height = 400;
  videoContainer2.appendChild(video2);
}

flechaIzquierda4.addEventListener('click', () => {
  videoActual2--;
  playNextVideo2(videoActual2);
});
flechaDerecha4.addEventListener('click', () => {
  videoActual2++;
  playNextVideo2(videoActual2);
});

//-- Primera entrada.
playNextVideo2(videoActual2);