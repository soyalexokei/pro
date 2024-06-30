var videosIDvoluntariadoAlemania = ["PdxNRQczFw0", "ke9MInBdzH0", "NH58gQWo9mM", "qTxboYDAUlI", "N6I4kwdrwJ8", "m8u6yeTSMJY", "HUWCCp-Gm2w", "gutpMrinsBY", "Fp-ecbHzHes", "MbfkBCP5gNs", "oGmZW0v1NwQ", "_W3qHpUdrX0", "clOJ8arr8p8", "HaKFuO4M02s", "oLlmVGI7TPE", "2VpR7gxzvpw"];
var indiceVoluntariadoAlemania = 0;

// Función para agregar videos al carrusel
function empezarConAlemania() {

    var videosVoluntariadoAlemania = document.getElementById("pantalla-voluntariado-proweb-2a");
    videosVoluntariadoAlemania.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDvoluntariadoAlemania[indiceVoluntariadoAlemania];
    iframe.allowFullscreen = true;
    videosVoluntariadoAlemania.appendChild(iframe);
}

document.getElementById("flecha-izquierda-2a").addEventListener("click", () => {
    indiceVoluntariadoAlemania = (indiceVoluntariadoAlemania - 1 + videosIDvoluntariadoAlemania.length) % videosIDvoluntariadoAlemania.length;
    empezarConAlemania();
});

document.getElementById("flecha-derecha-2a").addEventListener("click", () => {
    indiceVoluntariadoAlemania = (indiceVoluntariadoAlemania + 1) % videosIDvoluntariadoAlemania.length;
    empezarConAlemania();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#voluntariado2a').on('shown.bs.modal', function () {
    empezarConAlemania();
});