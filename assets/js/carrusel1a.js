var videosIDvoluntariadoAustria = ["eyGhyAdtc30", "f0PHhWc2fb8", "Y38JfytAGp4"];
var indiceVoluntariadoAustria = 0;

// Función para agregar videos al carrusel
function empezarConAustria() {

    var videosVoluntariadoAustria = document.getElementById("pantalla-voluntariado-proweb-1a");
    videosVoluntariadoAustria.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDvoluntariadoAustria[indiceVoluntariadoAustria];
    iframe.allowFullscreen = true;
    videosVoluntariadoAustria.appendChild(iframe);
}

document.getElementById("flecha-izquierda-1a").addEventListener("click", () => {
  indiceVoluntariadoAustria = (indiceVoluntariadoAustria - 1 + videosIDvoluntariadoAustria.length) % videosIDvoluntariadoAustria.length;
  empezarConAustria();
});

document.getElementById("flecha-derecha-1a").addEventListener("click", () => {
  indiceVoluntariadoAustria = (indiceVoluntariadoAustria + 1) % videosIDvoluntariadoAustria.length;
  empezarConAustria();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#voluntariado1a').on('shown.bs.modal', function () {
  empezarConAustria();
});