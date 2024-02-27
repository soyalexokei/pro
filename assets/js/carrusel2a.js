window.onload = function() {
    var alemania = [
        {src: './assets/img/germany/germany1.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany2.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany3.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany4.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany5.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany6.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany7.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany8.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany9.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany10.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany11.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany12.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany13.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany14.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany15.mp4', type: 'video/mp4'},
        {src: './assets/img/germany/germany16.mp4', type: 'video/mp4'}
    ];

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
      
        //-- Crea video.
        var video2 = document.createElement("video");
        video2.src = alemania[videoActual2-1].src;
        video2.type = alemania[videoActual2-1].type;
        video2.controls = true;
        video2.autoplay = false;
        video2.width = 300;
        video2.height = 400;

        //-- Limpia el contenedor.
        videoContainer2.innerHTML = '';
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
};