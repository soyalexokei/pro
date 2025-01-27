//-- Variables.
var videosIDgraduacionLicen =
[
    "","","","","",
    "https://www.youtube.com/embed/n2cz9mXnIys?autoplay=1&loop=1&playlist=n2cz9mXnIys&controls=0&rel=0","","",
    "https://www.youtube.com/embed/XD5Xt_QGMAA?autoplay=1&loop=1&playlist=XD5Xt_QGMAA&controls=0&rel=0","",
    "https://www.youtube.com/embed/Xhshg22fhsw?autoplay=1&loop=1&playlist=Xhshg22fhsw&controls=0&rel=0","","",""
];
var imagenesIDgraduacionLicen =
[
    "https://i.postimg.cc/jjM17tbv/01.jpg",  
    "https://i.postimg.cc/XYcmn91R/02.jpg",  
    "https://i.postimg.cc/qq3DSKCZ/03.jpg",  
    "https://i.postimg.cc/9XRkr6Nt/04.jpg",  
    "https://i.postimg.cc/pT71sCyF/05.jpg","",  
    "https://i.postimg.cc/nhZSSCV0/07.jpg",  
    "https://i.postimg.cc/SKS5RjwJ/08.jpg","",
    "https://i.postimg.cc/HLkZHRyM/10.jpg","",
    "https://i.postimg.cc/ZK6DLrmW/12.jpg",
    "https://i.postimg.cc/XNRzFsRM/13.jpg",  
    "https://i.postimg.cc/nzMPKgVx/14.jpg"
];
var indicegraduacionLicen = 1;
var pantallagraduacionLicen = document.getElementById('pantalla-graduacionLicen');
var imggraduacionLicen = document.createElement("img");
var iframegraduacionLicen = document.createElement("iframe");

//-- Ctes.
const totalgraduacionLicen = 14;

function mostrargraduacionLicen(auxgraduacionLicen) {
    
    //-- Limpiar la pantalla.
    pantallagraduacionLicen.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDgraduacionLicen[auxgraduacionLicen-1]) {
        imggraduacionLicen.src = imagenesIDgraduacionLicen[auxgraduacionLicen-1];
        pantallagraduacionLicen.appendChild(imggraduacionLicen);
    }else {
        iframegraduacionLicen.src =  videosIDgraduacionLicen[auxgraduacionLicen-1];
        iframegraduacionLicen.width = "400";
        iframegraduacionLicen.height = "533";
        iframegraduacionLicen.setAttribute("allow", "autoplay");
        iframegraduacionLicen.setAttribute("allowFullscreen", "false");
        pantallagraduacionLicen.appendChild(iframegraduacionLicen);
    }
}

function imgAnteriorgraduacionLicen() {
    if(indicegraduacionLicen > 1) {
        indicegraduacionLicen--;
    }else {
        indicegraduacionLicen = totalgraduacionLicen;
    }
    mostrargraduacionLicen(indicegraduacionLicen);
}

function imgSiguientegraduacionLicen() {
    if(indicegraduacionLicen < totalgraduacionLicen) {
        indicegraduacionLicen++;
    }else {
        indicegraduacionLicen = 1;
    }
    mostrargraduacionLicen(indicegraduacionLicen);
}

//-- Pulsar flecha izquierda.
document.getElementById("left-graduacionLicen").addEventListener("click", imgAnteriorgraduacionLicen);
//-- Pulsar flecha derecha.
document.getElementById("right-graduacionLicen").addEventListener("click", imgSiguientegraduacionLicen);

//-- Punto de inicio del programa.
mostrargraduacionLicen(indicegraduacionLicen);