window.onload = function() {
  var videos = [
      { src: './assets/img/austria1.mp4', type: 'video/mp4' },
      { src: './assets/img/austria2.mp4', type: 'video/mp4' },
      { src: './assets/img/austria3.mp4', type: 'video/mp4' }
  ];

  var videoActual = 1;
  const totalVideos = 3;
  var videoContainer = document.getElementById('carrusel-voluntariado-espec2');

  function playNextVideo(n) {
    if(videoActual < 1) {
      videoActual = totalVideos;
    }else if(videoActual > totalVideos) {
      videoActual = 1;
    }
      // Crear elemento de video
      var video = document.createElement('video');
      video.src = videos[videoActual-1].src;
      video.type = videos[videoActual-1].type;
      video.controls = true;
      video.autoplay = false;
      video.width = 300;
      video.height = 400;
      // Limpiar el contenedor antes de agregar el nuevo video
      videoContainer.innerHTML = '';
      videoContainer.appendChild(video);
  }

  // Asociar la función playNextVideo con el clic en las flechas
  document.getElementById('flecha-izquierda-pase2').addEventListener('click', () => {
    videoActual--;
    playNextVideo(videoActual);
  });
  document.getElementById('flecha-derecha-pase2').addEventListener('click', () => {
    videoActual++;
    playNextVideo(videoActual);
  });

  // Reproducir el primer video al cargar la página
  playNextVideo(videoActual);
};