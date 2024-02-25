window.onload = function() {
  var videos = [
      { src: './assets/img/austria1.mp4', type: 'video/mp4' },
      { src: './assets/img/austria2.mp4', type: 'video/mp4' },
      { src: './assets/img/austria3.mp4', type: 'video/mp4' }
  ];

  var videoIndex = 0;
  var videoContainer = document.getElementById('carrusel-voluntariado-espec2');

  function playNextVideo(n) {
      // Crear elemento de video
      var video = document.createElement('video');
      video.src = videos[videoIndex].src;
      video.type = videos[videoIndex].type;
      video.controls = true;
      video.autoplay = true;
      video.width = 300;
      video.height = 400;

      // Limpiar el contenedor antes de agregar el nuevo video
      videoContainer.innerHTML = '';
      videoContainer.appendChild(video);

      // Incrementar el índice para el próximo video
      videoIndex = (videoIndex + 1) % videos.length;
  }

  // Reproducir el primer video al cargar la página
  playNextVideo(videoIndex);

  // Asociar la función playNextVideo con el clic en las flechas
  document.getElementById('flecha-izquierda-pase2').addEventListener('click', () => {
    videoIndex--;
    playNextVideo(videoIndex);
  });
  document.getElementById('flecha-derecha-pase2').addEventListener('click', () => {
    videoIndex++;
    playNextVideo(videoIndex);
  });
};