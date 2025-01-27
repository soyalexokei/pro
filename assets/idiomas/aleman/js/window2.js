//-- Variables.
var btnUd1 = document.getElementById("btnUd1");
var contenidoUd1 = document.getElementById("contenidoUd1");

//-- Ocultarlo inicialmente.
contenidoUd1.classList.add("oculto");

//-- Acción de ocultar/desplegar contenido.
function despliegueIA(contenido) {
    contenido.classList.toggle("oculto");
}

//-- Acción de darle click al módulo en específico.
btnUd1.addEventListener("click", () => {despliegueIA(contenidoUd1);});