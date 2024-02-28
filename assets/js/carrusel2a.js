const videos = [
    "./assets/img/germany/germany1.mp4",
    "./assets/img/germany/germany2.mp4",
    "./assets/img/germany/germany3.mp4",
    "./assets/img/germany/germany4.mp4"
];
const videosContainer = document.getElementById('videos-container');
let contador = 1;

// Función para crear y agregar un elemento video al contenedor
function createVideoElement(source) {
    const video = document.createElement('video');
    video.setAttribute('width', '300');
    video.setAttribute('height', '400');
    video.setAttribute('class', 'video');
    video.setAttribute('controls', 'true');
    video.setAttribute('autoplay', 'false');
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', source);
    sourceElement.setAttribute('type', 'video/mp4');
    video.appendChild(sourceElement);
    videosContainer.innerHTML = '';
    videosContainer.appendChild(video);
}

function cargarVideoActual() {
    createVideoElement(videos[contador]);
}

document.getElementById('flecha-derecha-pase4').addEventListener('click', function() {
    contador = (contador + 1) % videos.length;
    cargarVideoActual();
});
document.getElementById('flecha-izquierda-pase4').addEventListener('click', function() {
    contador = (contador - 1 + videos.length) % videos.length;
    cargarVideoActual();
});

// Cargar todos los videos
cargarVideoActual();