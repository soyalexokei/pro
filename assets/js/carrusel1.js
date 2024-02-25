const carruselContenedor = document.getElementById("carrusel-voluntariado-espec1");
const flechaIzquierda = document.getElementById("flecha-izquierda-pase1");
const flechaDerecha = document.getElementById("flecha-derecha-pase1");

const totalImagenes = 38;
let imagenActual = 1;

function cambiarImagen(n) {
  if (imagenActual < 1) {
    imagenActual = totalImagenes;
  } else if (imagenActual > totalImagenes) {
    imagenActual = 1;
  }
  carruselContenedor.style.transform = `translateX(-${(imagenActual - 1) * 100}%)`;
}

flechaIzquierda.addEventListener("click", () => {
  imagenActual--;
  cambiarImagen(imagenActual);
});

flechaDerecha.addEventListener("click", () => {
  imagenActual++;
  cambiarImagen(imagenActual);
});

for (let i = 1; i <= totalImagenes; i++) {
  const imagen = document.createElement("img");
  imagen.src = `./assets/img/austria${i}.jpg`;
  carruselContenedor.appendChild(imagen);
}