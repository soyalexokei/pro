//-- Variables.
var btnModulo1 = document.getElementById("btnMod1");
var btnModulo2 = document.getElementById("btnMod2");
var btnModulo3 = document.getElementById("btnMod3");
var btnModulo4 = document.getElementById("btnMod4");
var btnModulo5 = document.getElementById("btnMod5");
var btnModulo6 = document.getElementById("btnMod6");
var btnModulo7 = document.getElementById("btnMod7");
var btnModuloTransversal = document.getElementById("btnModTrans");
var btnModulo8 = document.getElementById("btnMod8");
var btnModulo9 = document.getElementById("btnMod9");
var contenidoModulo1 = document.getElementById("contenidoModulo1");
var contenidoModulo2 = document.getElementById("contenidoModulo2");
var contenidoModulo3 = document.getElementById("contenidoModulo3");
var contenidoModulo4 = document.getElementById("contenidoModulo4");
var contenidoModulo5 = document.getElementById("contenidoModulo5");
var contenidoModulo6 = document.getElementById("contenidoModulo6");
var contenidoModulo7 = document.getElementById("contenidoModulo7");
var contenidoModuloTransversal = document.getElementById("contenidoModuloTrans");
var contenidoModulo8 = document.getElementById("contenidoModulo8");
var contenidoModulo9 = document.getElementById("contenidoModulo9");

//-- Ocultarlo inicialmente.
contenidoModulo1.classList.add("oculto");
contenidoModulo2.classList.add("oculto");
contenidoModulo3.classList.add("oculto");
contenidoModulo4.classList.add("oculto");
contenidoModulo5.classList.add("oculto");
contenidoModulo6.classList.add("oculto");
contenidoModulo7.classList.add("oculto");
contenidoModuloTransversal.classList.add("oculto");
contenidoModulo8.classList.add("oculto");
contenidoModulo9.classList.add("oculto");

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
btnModulo4.addEventListener("click", () => {
    actionIA(contenidoModulo4);
});
btnModulo5.addEventListener("click", () => {
    actionIA(contenidoModulo5);
});
btnModulo6.addEventListener("click", () => {
    actionIA(contenidoModulo6);
});
btnModulo7.addEventListener("click", () => {
    actionIA(contenidoModulo7);
});
btnModuloTransversal.addEventListener("click", () => {
    actionIA(contenidoModuloTransversal);
});
btnModulo8.addEventListener("click", () => {
    actionIA(contenidoModulo8);
});
btnModulo9.addEventListener("click", () => {
    actionIA(contenidoModulo9);
});