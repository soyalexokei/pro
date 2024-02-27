window.onload = function() {
    var videos1 = [
        { src: './assets/img/germany/germany1.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany2.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany3.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany4.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany5.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany6.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany7.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany8.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany9.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany10.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany11.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany12.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany13.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany14.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany15.mp4', type: 'video/mp4' },
        { src: './assets/img/germany/germany16.mp4', type: 'video/mp4' }
    ];
  
    var videoActual1 = 1;
    const totalVideos1 = 16;
    var videoContainer1 = document.getElementById('carrusel-voluntariado-espec4');
  
    function playNextVideo(n) {
      if(videoActual1 < 1) {
        videoActual1 = totalVideos1;
      }else if(videoActual1 > totalVideos1) {
        videoActual1 = 1;
      }
        // Crear elemento de video
        var video1 = document.createElement('video');
        video1.src = videos1[videoActual1-1].src;
        video1.type = videos1[videoActual1-1].type;
        video1.controls = true;
        video1.autoplay = false;
        video1.width = 300;
        video1.height = 400;
        // Limpiar el contenedor antes de agregar el nuevo video
        videoContainer1.innerHTML = '';
        videoContainer1.appendChild(video1);
    }
  
    // Asociar la función playNextVideo con el clic en las flechas
    document.getElementById('flecha-izquierda-pase4').addEventListener('click', () => {
        videoActual1--;
        playNextVideo(videoActual1);
    });
    document.getElementById('flecha-derecha-pase4').addEventListener('click', () => {
        videoActual1++;
        playNextVideo(videoActual1);
    });
  
    // Reproducir el primer video al cargar la página
    playNextVideo(videoActual1);
  };