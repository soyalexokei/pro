//-- Variables.
var btnModulo1 = document.getElementById("btnMod1");
var btnModulo2 = document.getElementById("btnMod2");
var contenidoModulo1 = document.getElementById("contenidoModulo1");
var contenidoModulo2 = document.getElementById("contenidoModulo2");

//-- Ocultarlo inicialmente.
contenidoModulo1.classList.add("oculto");
contenidoModulo2.classList.add("oculto");

//-- Acción de ocultar/desplegar contenido.
function actionIA(contenido) {
    contenido.classList.toggle("oculto");
}

//-- Acción de darle click al módulo en específico.
btnModulo1.addEventListener("click", () => {
    actionIA(contenidoModulo1);
});
btnModulo2.addEventListener("click", () => {
    actionIA(contenidoModulo2);
});