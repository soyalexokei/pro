//-- Variables.
var videosIDpsstiexperience =
[
    "",
    "",
    "",
    "",
    "",
    ""
];
var imagenesIDpsstiexperience =
[
    "https://i.postimg.cc/7LGJdYwd/IMG-20250324-WA0004.png",
    "https://i.postimg.cc/P5F8S8s1/IMG-20250324-WA0009.png",
    "https://i.postimg.cc/02Pmjs0K/IMG-20250324-WA0015.jpg",
    "https://i.postimg.cc/Wb8ZJH5W/IMG-20250324-WA0017.jpg",
    "https://i.postimg.cc/g20ZyH5Y/IMG-20250327-WA0009.png",
    "https://i.postimg.cc/nVvBnzBt/IMG-20250327-WA0011.jpg",
];
var indicePsstiexperience = 1;
var pantallaPsstiexperience = document.getElementById('pantalla-psstiexperience');
var imgPsstiexperience = document.createElement("img");
var iframePsstiexperience = document.createElement("iframe");

//-- Ctes.
const totalPsstiexperience = 6;

function mostrarPsstiexperience(auxPsstiexperience) {
    
    //-- Limpiar la pantalla.
    pantallaPsstiexperience.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDpsstiexperience[auxPsstiexperience-1]) {
        imgPsstiexperience.src = imagenesIDpsstiexperience[auxPsstiexperience-1];
        pantallaPsstiexperience.appendChild(imgPsstiexperience);
    }else {
        iframePsstiexperience.src = videosIDpsstiexperience[auxPsstiexperience-1];
        iframePsstiexperience.width = "400";
        iframePsstiexperience.height = "533";
        iframePsstiexperience.setAttribute("allow", "autoplay");
        iframePsstiexperience.setAttribute("allowFullscreen", "false");
        pantallaPsstiexperience.appendChild(iframePsstiexperience);
    }
}

function imgAnteriorpsstiexperience() {
    if(indicePsstiexperience > 1) {
        indicePsstiexperience--;
    }else {
        indicePsstiexperience = totalPsstiexperience;
    }
    mostrarPsstiexperience(indicePsstiexperience);
}

function imgSiguientepsstiexperience() {
    if(indicePsstiexperience < totalPsstiexperience) {
        indicePsstiexperience++;
    }else {
        indicePsstiexperience = 1;
    }
    mostrarPsstiexperience(indicePsstiexperience);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-psstiexperience").addEventListener("click", imgAnteriorpsstiexperience);
//-- Pulsar flecha derecha.
document.getElementById("right-psstiexperience").addEventListener("click", imgSiguientepsstiexperience);

//-- Punto de inicio del programa.
mostrarPsstiexperience(indicePsstiexperience);