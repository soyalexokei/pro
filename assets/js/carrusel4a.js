var videosIDyoga = ["", ""];
var indiceYoga = 0;

// Función para agregar videos al carrusel
function playYoga() {

    var videosYoga = document.getElementById("carrusel-voluntariado-espec7");
    videosYoga.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDyoga[indiceYoga];
    iframe.allowFullscreen = true;
    videosYoga.appendChild(iframe);
}

document.getElementById("flecha-izquierda-pase7").addEventListener("click", () => {
    indiceYoga = (indiceYoga - 1 + videosIDyoga.length) % videosIDyoga.length;
    playYoga();
});

document.getElementById("flecha-derecha-pase7").addEventListener("click", () => {
    indiceYoga = (indiceYoga + 1) % videosIDyoga.length;
    playYoga();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#voluntariado6a').on('shown.bs.modal', function () {
    playYoga();
});