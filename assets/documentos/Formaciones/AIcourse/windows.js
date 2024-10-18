//-- Variables.
var btnModulo1 = document.getElementById("btnMod1");
var btnModulo2 = document.getElementById("btnMod2");
var btnModulo3 = document.getElementById("btnMod3");
var btnEjerModulo3 = document.getElementById("btnEjerMod3");
var contenidoModulo1 = document.getElementById("contenidoModulo1");
var contenidoModulo2 = document.getElementById("contenidoModulo2");
var contenidoModulo3 = document.getElementById("contenidoModulo3");
var contenidoEjerModulo3 = document.getElementById("contenidoEjerModulo3");

//-- Ocultarlo inicialmente.
contenidoModulo1.classList.add("oculto");
contenidoModulo2.classList.add("oculto");
contenidoModulo3.classList.add("oculto");
contenidoEjerModulo3.classList.add("oculto");

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
btnModulo3.addEventListener("click", () => {
    actionIA(contenidoModulo3);
});
btnEjerModulo3.addEventListener("click", () => {
    actionIA(contenidoEjerModulo3);
});