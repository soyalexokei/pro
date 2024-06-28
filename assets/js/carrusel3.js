const carruselContenedor2 = document.getElementById("carrusel-voluntariado-espec5");
const totalImagenes2 = 1;
let imagenActual2 = 1;

function cambiarImagen2(n) {
  if (imagenActual2 < 1) {
    imagenActual2 = totalImagenes2;
  } else if (imagenActual2 > totalImagenes2) {
    imagenActual2 = 1;
  }
  carruselContenedor2.style.transform = `translateX(-${(imagenActual2 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda-pase5").addEventListener("click", () => {
    imagenActual2--;
    cambiarImagen2(imagenActual2);
});

document.getElementById("flecha-derecha-pase5").addEventListener("click", () => {
    imagenActual2++;
    cambiarImagen2(imagenActual2);
});

for (let i = 1; i <= totalImagenes2; i++) {
  const imagen2 = document.createElement("img");
  imagen2.src = `./assets/img/voluntariados/Cuarto/fundtelef${i}.jpg`;
  carruselContenedor2.appendChild(imagen2);
}