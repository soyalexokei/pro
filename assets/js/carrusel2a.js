var videosIDvoluntariado = ["PdxNRQczFw0", "ke9MInBdzH0", "NH58gQWo9mM", "qTxboYDAUlI", "N6I4kwdrwJ8", "m8u6yeTSMJY", "HUWCCp-Gm2w", "gutpMrinsBY", "Fp-ecbHzHes", "MbfkBCP5gNs", "oGmZW0v1NwQ", "_W3qHpUdrX0", "clOJ8arr8p8", "HaKFuO4M02s", "oLlmVGI7TPE", "2VpR7gxzvpw"];
var indiceVoluntariado = 0;

// Función para agregar videos al carrusel
function cargarVideos() {

    var videosVoluntariado = document.getElementById("carrusel-voluntariado-espec4");
    videosVoluntariado.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDvoluntariado[indiceVoluntariado];
    iframe.allowFullscreen = true;
    videosVoluntariado.appendChild(iframe);
}

document.getElementById("flecha-izquierda-pase4").addEventListener("click", () => {
    indiceVoluntariado = (indiceVoluntariado - 1 + videosIDvoluntariado.length) % videosIDvoluntariado.length;
    cargarVideos();
});

document.getElementById("flecha-derecha-pase4").addEventListener("click", () => {
    indiceVoluntariado = (indiceVoluntariado + 1) % videosIDvoluntariado.length;
    cargarVideos();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#voluntariado4a').on('shown.bs.modal', function () {
    cargarVideos();
});