//-- Variables.
var videosIDtelefonicaexperience =
[
    "","","",
    "https://www.youtube.com/embed/XQUsgzujU7A?autoplay=1&loop=1&playlist=XQUsgzujU7A&controls=0&rel=0"
];
var imagenesIDtelefonicaexperience =
[
    "https://i.postimg.cc/3x0M3jpy/1.jpg",
    "https://i.postimg.cc/ncPb8Ssb/3.jpg",
    "https://i.postimg.cc/cHC1Mg2f/2.jpg",
    ""
];
var indicetelefonicaexperience = 1;
var pantallatelefonicaexperience = document.getElementById('pantalla-telefonicaexperience');
var imgtelefonicaexperience = document.createElement("img");
var iframetelefonicaexperience = document.createElement("iframe");

//-- Ctes.
const totaltelefonicaexperience = 4;

function mostrartelefonicaexperience(auxtelefonicaexperience) {
    
    //-- Limpiar la pantalla.
    pantallatelefonicaexperience.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDtelefonicaexperience[auxtelefonicaexperience-1]) {
        imgtelefonicaexperience.src = imagenesIDtelefonicaexperience[auxtelefonicaexperience-1];
        pantallatelefonicaexperience.appendChild(imgtelefonicaexperience);
    }else {
        iframetelefonicaexperience.src = videosIDtelefonicaexperience[auxtelefonicaexperience-1];
        iframetelefonicaexperience.width = "400";
        iframetelefonicaexperience.height = "533";
        iframetelefonicaexperience.setAttribute("allow", "autoplay");
        iframetelefonicaexperience.setAttribute("allowFullscreen", "false");
        pantallatelefonicaexperience.appendChild(iframetelefonicaexperience);
    }
}

function imgAnteriortelefonicaexperience() {
    if(indicetelefonicaexperience > 1) {
        indicetelefonicaexperience--;
    }else {
        indicetelefonicaexperience = totaltelefonicaexperience;
    }
    mostrartelefonicaexperience(indicetelefonicaexperience);
}

function imgSiguientetelefonicaexperience() {
    if(indicetelefonicaexperience < totaltelefonicaexperience) {
        indicetelefonicaexperience++;
    }else {
        indicetelefonicaexperience = 1;
    }
    mostrartelefonicaexperience(indicetelefonicaexperience);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-telefonicaexperience").addEventListener("click", imgAnteriortelefonicaexperience);
//-- Pulsar flecha derecha.
document.getElementById("right-telefonicaexperience").addEventListener("click", imgSiguientetelefonicaexperience);

//-- Punto de inicio del programa.
mostrartelefonicaexperience(indicetelefonicaexperience);