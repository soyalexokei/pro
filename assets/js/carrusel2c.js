const videoContainer4 = document.getElementById('carrusel-voluntariado-espec6');
const flechaIzquierda6 = document.getElementById("flecha-izquierda-pase6");
const flechaDerecha6 = document.getElementById("flecha-derecha-pase6");

const totalVideos4 = 12;
var videoActual4 = 9;

function playNextVideo4(r) {
  if(videoActual4 < 9) {
    videoActual4 = totalVideos4;
  }else if(videoActual4 > totalVideos4) {
    videoActual4 = 9;
  }
  
  //-- Limpia el contenedor.
  videoContainer4.innerHTML = '';

  //-- Crea video.
  const video4 = document.createElement("video");
  video4.src = `./assets/img/germany/germany${videoActual4}.mp4`;
  video4.type = 'video/mp4';
  video4.controls = true;
  video4.autoplay = false;
  video4.width = 300;
  video4.height = 400;
  videoContainer4.appendChild(video4);
}

flechaIzquierda6.addEventListener('click', () => {
  videoActual4--;
  playNextVideo4(videoActual4);
});
flechaDerecha6.addEventListener('click', () => {
  videoActual4++;
  playNextVideo4(videoActual4);
});

//-- Primera entrada.
playNextVideo4(videoActual4);