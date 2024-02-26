const carruselContenedor0 = document.getElementById("carrusel-voluntariado-espec0");
const flechaIzquierda0 = document.getElementById("flecha-izquierda-pase0");
const flechaDerecha0 = document.getElementById("flecha-derecha-pase0");

const totalImagenes0 = 6;
let imagenActual0 = 1;

function cambiarImagen0(n) {
  if (imagenActual0 < 1) {
    imagenActual0 = totalImagenes0;
  } else if (imagenActual0 > totalImagenes0) {
    imagenActual0 = 1;
  }
  carruselContenedor0.style.transform = `translateX(-${(imagenActual0 - 1) * 100}%)`;
}

flechaIzquierda0.addEventListener("click", () => {
  imagenActual0--;
  cambiarImagen0(imagenActual0);
});

flechaDerecha0.addEventListener("click", () => {
  imagenActual0++;
  cambiarImagen0(imagenActual0);
});

for (let i = 1; i <= totalImagenes0; i++) {
  const imagen0 = document.createElement("img");
  imagen0.src = `./assets/img/BAM${i}.jpg`;
  carruselContenedor0.appendChild(imagen0);
}