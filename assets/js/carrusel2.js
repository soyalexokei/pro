//-- Variables.
  var videosIDvoluntariado2 = ["","","PdxNRQczFw0","","","","","","","", //-- En cada fila hay 10.
  "","ke9MInBdzH0","NH58gQWo9mM","qTxboYDAUlI","N6I4kwdrwJ8","m8u6yeTSMJY","","HUWCCp-Gm2w","gutpMrinsBY","Fp-ecbHzHes", //-- En cada fila hay 10.
  "MbfkBCP5gNs","oGmZW0v1NwQ","_W3qHpUdrX0","clOJ8arr8p8","HaKFuO4M02s","","","","","", //-- En cada fila hay 10.
  "","","oLlmVGI7TPE","","","","","","","", //-- En cada fila hay 10.
  "2VpR7gxzvpw"];  //-- En cada fila hay 10.
  var indiceVoluntariado2 = 1;
  var pantallaVoluntariado2 = document.getElementById("pantalla-voluntariado-proweb-2");
  var imgVoluntariado2 = document.createElement("img");
  var iframeVoluntariado2 = document.createElement("iframe");
  let auxImgVoluntariado2 = new Image();

  // Variables para gestionar el gesto táctil.
let empiezaToqueC2 = 0;
let acabaToqueC2 = 0;
  
  //-- Ctes.
  const totalVoluntariado2 = 41;
  
  function mostrarVoluntariado2(auxVoluntariado2) {
      
      //-- Limpiar la pantalla.
      pantallaVoluntariado2.innerHTML = "";
  
      //-- Verificar si es una imagen o un vídeo.
      auxImgVoluntariado2.src = `./assets/img/voluntariados/Tercero/${auxVoluntariado2}.jpg`;
      auxImgVoluntariado2.onload = function() {
        imgVoluntariado2.src = auxImgVoluntariado2.src;
        pantallaVoluntariado2.appendChild(imgVoluntariado2);
      }
      auxImgVoluntariado2.onerror = function() {
        iframeVoluntariado2.src = "https://www.youtube.com/embed/" + videosIDvoluntariado2[auxVoluntariado2-1] + "?autoplay=1&loop=1&playlist=" + videosIDvoluntariado2[auxVoluntariado2-1];
        iframeVoluntariado2.allow = "autoplay";
        iframeVoluntariado2.width = "400";
        iframeVoluntariado2.height = "533";
        iframeVoluntariado2.allowFullscreen = false;
        iframeVoluntariado2.rel = 0;
        iframeVoluntariado2.controls = 0;
        pantallaVoluntariado2.appendChild(iframeVoluntariado2);
      }
  }
  
  function imgAnteriorVoluntariado2() {
      if(indiceVoluntariado2 > 1) {
        indiceVoluntariado2--;
      }else {
        indiceVoluntariado2 = totalVoluntariado2;
      }
      mostrarVoluntariado2(indiceVoluntariado2);
  }
  
  function imgSiguienteVoluntariado2() {
      if(indiceVoluntariado2 < totalVoluntariado2) {
        indiceVoluntariado2++;
      }else {
        indiceVoluntariado2 = 1;
      }
      mostrarVoluntariado2(indiceVoluntariado2);
  }

  // Función para manejar el gesto de deslizamiento
  function handleSwipeC2() {
    if (acabaToqueC2 < empiezaToqueC2) {
      imgSiguienteVoluntariado2();  // Desliza hacia la izquierda, pasa a la siguiente imagen
    } else if (acabaToqueC2 > empiezaToqueC2) {
      imgAnteriorVoluntariado2();  // Desliza hacia la derecha, pasa a la imagen anterior
    }
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("flecha-izquierda-2").addEventListener("click", imgAnteriorVoluntariado2);
  //-- Pulsar flecha derecha.
  document.getElementById("flecha-derecha-2").addEventListener("click", imgSiguienteVoluntariado2);

  // Eventos de teclado (flechas izquierda y derecha).
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {imgAnteriorVoluntariado2();}
    else if (event.key === 'ArrowRight') {imgSiguienteVoluntariado2();}
  });

  // Evento para detectar el inicio del toque
  pantallaVoluntariado2.addEventListener('touchstart', function(event) {
    empiezaToqueC2 = event.changedTouches[0].screenX;
  });

  // Evento para detectar el final del toque
  pantallaVoluntariado2.addEventListener('touchend', function(event) {
    acabaToqueC2 = event.changedTouches[0].screenX;
    handleSwipeC2();
  });
  
  //-- Punto de inicio del programa.
  mostrarVoluntariado2(indiceVoluntariado2);

  //-- Cargar de inicio las imágenes, para que se visualicen de forma más fluida.
  for (let i = 1; i <= totalVoluntariado2; i++) {
    imgVoluntariado2.src = `./assets/img/voluntariados/Tercero/${i}.jpg`;
    pantallaVoluntariado2.appendChild(imgVoluntariado2);
  }