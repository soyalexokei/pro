//-- Variables.
var btnModGenImg = document.getElementById("btnModGenImg");
var contenidoGenImg = document.getElementById("contenidoGenImg");

//-- Ocultarlo inicialmente.
contenidoGenImg.classList.add("oculto");

//-- Acción de ocultar/desplegar contenido.
function despliegCursoIA(contenido) {
    contenido.classList.toggle("oculto");
}

//-- Acción de darle click al módulo en específico.
btnModGenImg.addEventListener("click", () => {
    despliegCursoIA(contenidoGenImg);
});