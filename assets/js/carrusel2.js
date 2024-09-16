//-- Variables.
  var videosIDvoluntariado2 = ["","","PdxNRQczFw0","","","","","","","", //-- En cada fila hay 10.
  "","ke9MInBdzH0","NH58gQWo9mM","qTxboYDAUlI","N6I4kwdrwJ8","m8u6yeTSMJY","","HUWCCp-Gm2w","gutpMrinsBY","Fp-ecbHzHes", //-- En cada fila hay 10.
  "MbfkBCP5gNs","oGmZW0v1NwQ","_W3qHpUdrX0","clOJ8arr8p8","HaKFuO4M02s","","","","","", //-- En cada fila hay 10.
  "","","oLlmVGI7TPE","","","","","","","", //-- En cada fila hay 10.
  "2VpR7gxzvpw"];
  var indiceVoluntariado2 = 1;
  var pantallaVoluntariado2 = document.getElementById("pantalla-voluntariado-proweb-2");
  var imgVoluntariado2 = document.createElement("img");
  var iframeVoluntariado2 = document.createElement("iframe");
  let auxImgVoluntariado2 = new Image();
  
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
  
  //-- Pulsar flecha izquierda.
  document.getElementById("flecha-izquierda-2").addEventListener("click", imgAnteriorVoluntariado2);
  //-- Pulsar flecha derecha.
  document.getElementById("flecha-derecha-2").addEventListener("click", imgSiguienteVoluntariado2);
  
  //-- Punto de inicio del programa.
  mostrarVoluntariado2(indiceVoluntariado2);