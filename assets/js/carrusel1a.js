var videosIDvoluntariado2 = ["", "", ""];
var indiceVoluntariado2 = 0;

// Función para agregar videos al carrusel
function cargarVideos2() {

    var videosVoluntariado2 = document.getElementById("carrusel-voluntariado-espec2");
    videosVoluntariado2.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDvoluntariado2[indiceVoluntariado2];
    iframe.allowFullscreen = true;
    videosVoluntariado2.appendChild(iframe);
}

document.getElementById("flecha-izquierda-pase2").addEventListener("click", () => {
  indiceVoluntariado2 = (indiceVoluntariado2 - 1 + videosIDvoluntariado2.length) % videosIDvoluntariado2.length;
    cargarVideos2();
});

document.getElementById("flecha-derecha-pase2").addEventListener("click", () => {
  indiceVoluntariado2 = (indiceVoluntariado2 + 1) % videosIDvoluntariado2.length;
    cargarVideos2();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#voluntariado4a').on('shown.bs.modal', function () {
    cargarVideos2();
});