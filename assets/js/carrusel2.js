//-- Variables.
var videosIDsammatz = ["","","PdxNRQczFw0","","","","","","","", //-- En cada fila hay 10.
"","ke9MInBdzH0","NH58gQWo9mM","qTxboYDAUlI","N6I4kwdrwJ8","m8u6yeTSMJY","","HUWCCp-Gm2w","gutpMrinsBY","Fp-ecbHzHes", //-- En cada fila hay 10.
"MbfkBCP5gNs","oGmZW0v1NwQ","_W3qHpUdrX0","clOJ8arr8p8","HaKFuO4M02s","","","","","", //-- En cada fila hay 10.
"","","oLlmVGI7TPE","","","","","","","", //-- En cada fila hay 10.
"2VpR7gxzvpw"];  //-- En cada fila hay 10.
var imagenesIDsammatz = ["ZYGkSPbq/1.jpg","T3xZyRWM/2.jpg","","28hs8qy7/4.jpg","3xZzmPgy/5.jpg","Xv7m8Q8s/6.jpg","fb2FgmqD/7.jpg","QtFPLCv5/8.jpg","tT8c9yHc/9.jpg","5yvR0G42/10.jpg",
"SQz5DX6b/11.jpg","","","","","","CLT2tF7B/17.jpg","","","",
"","","","","","vHrKwp2P/26.jpg","52fR4nZf/27.jpg","xdCpHqf7/28.jpg","qvQZz2Ty/29.jpg","R0DsT9q0/30.jpg",
"DZ4CjDbP/31.jpg","Gt0XZQFw/32.jpg","","wMhwHm2t/34.jpg","59v78hJx/35.jpg","3JTL1tr2/36.jpg","qMx152gS/37.jpg","529sdjC0/38.jpg","K89JZFP5/39.jpg","VNd4vT4P/40.jpg",
""];
var indiceSammatz = 1;
var pantallaSammatz = document.getElementById("pantalla-voluntariado-proweb-2");
var imgSammatz = document.createElement("img");
var iframeSammatz = document.createElement("iframe");
  
//-- Ctes.
const totalSammatz = 41;

function mostrarSammatz(auxSammatz) {
    
  //-- Limpiar la pantalla.
  pantallaSammatz.innerHTML = "";

  //-- Verificar si es una imagen o un vídeo.
  if(imagenesIDsammatz[auxSammatz-1]) {
    imgSammatz.src = "https://i.postimg.cc/" + imagenesIDsammatz[auxSammatz-1];
    pantallaSammatz.appendChild(imgSammatz);
  }else {
    iframeSammatz.src = "https://www.youtube.com/embed/" + videosIDsammatz[auxSammatz-1] + "?autoplay=1&loop=1&playlist=" + videosIDsammatz[auxSammatz-1] + "&controls=0&rel=0";
    iframeSammatz.width = "400";
    iframeSammatz.height = "533";
    iframeSammatz.setAttribute("allow", "autoplay");
    iframeSammatz.setAttribute("allowFullscreen", "false");
    pantallaSammatz.appendChild(iframeSammatz);
  }
}

function imgAnteriorSammatz() {
  if(indiceSammatz > 1) {
    indiceSammatz--;
  }else {
    indiceSammatz = totalSammatz;
  }
  mostrarSammatz(indiceSammatz);
}

function imgSiguienteSammatz() {
  if(indiceSammatz < totalSammatz) {
    indiceSammatz++;
  }else {
    indiceSammatz = 1;
  }
  mostrarSammatz(indiceSammatz);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-2").addEventListener("click", imgAnteriorSammatz);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-2").addEventListener("click", imgSiguienteSammatz);

//-- Punto de inicio del programa.
mostrarSammatz(indiceSammatz);