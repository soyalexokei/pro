//-- Variables.
var cabeceraImagen = document.getElementById("btnModGenImg");
var contenidoImagen = document.getElementById("contenidoGenImg");

var cabeceraEtica = document.getElementById("btnModEtica");
var contenidoEtica = document.getElementById("contenidoEtica");

var cabeceraProducvidad = document.getElementById("btnModProducvidad");
var contenidoProducvidad = document.getElementById("contenidoProducvidad");

var cabeceraEmpleabilidad = document.getElementById("btnModEmpleabilidad");
var contenidoEmpleabilidad = document.getElementById("contenidoEmpleabilidad");

//-- Ocultarlo inicialmente.
contenidoImagen.classList.add("oculto");
contenidoEtica.classList.add("oculto");
contenidoProducvidad.classList.add("oculto");
contenidoEmpleabilidad.classList.add("oculto");

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
cabeceraProducvidad.addEventListener("click", () => {
    despliegCursoIA(contenidoProducvidad);
});
cabeceraEmpleabilidad.addEventListener("click", () => {
    despliegCursoIA(contenidoEmpleabilidad);
});