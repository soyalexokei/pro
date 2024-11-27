//-- Variables.
var cabeceraImagen = document.getElementById("btnModGenImg");
var contenidoImagen = document.getElementById("contenidoGenImg");

var cabeceraEtica = document.getElementById("btnModEtica");
var contenidoEtica = document.getElementById("contenidoEtica");

//-- Ocultarlo inicialmente.
contenidoImagen.classList.add("oculto");
contenidoEtica.classList.add("oculto");

//-- Acción de ocultar/desplegar contenido.
function despliegCursoIA(contenido) {
    contenido.classList.toggle("oculto");
}

//-- Acción de darle click al módulo en específico.
cabeceraImagen.addEventListener("click", () => {
    despliegCursoIA(contenidoImagen);
});
cabeceraEtica.addEventListener("click", () => {
    despliegCursoIA(contenidoEtica);
});