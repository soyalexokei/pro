const carruselContenedor3 = document.getElementById("carrusel-voluntariado-espec3");
const flechaIzquierda3 = document.getElementById("flecha-izquierda-pase3");
const flechaDerecha3 = document.getElementById("flecha-derecha-pase3");

const totalImagenes3 = 25;
let imagenActual3 = 1;

function cambiarImagen3(o) {
  if (imagenActual3 < 1) {
    imagenActual3 = totalImagenes3;
  } else if (imagenActual3 > totalImagenes3) {
    imagenActual3 = 1;
  }
  carruselContenedor3.style.transform = `translateX(-${(imagenActual3 - 1) * 100}%)`;
}

flechaIzquierda3.addEventListener("click", () => {
    imagenActual3--;
    cambiarImagen3(imagenActual3);
});

flechaDerecha3.addEventListener("click", () => {
    imagenActual3++;
    cambiarImagen3(imagenActual3);
});

for (let i = 1; i <= totalImagenes3; i++) {
  const imagen3 = document.createElement("img");
  imagen3.src = `./assets/img/germany${i}.jpg`;
  carruselContenedor3.appendChild(imagen3);
}