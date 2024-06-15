const carruselContenedorYoga = document.getElementById("carrusel-voluntariado-espec6");

const totalImagenesYoga = 17;
let imagenActualYoga = 1;

function cambiarImagenYoga(yg) {
  if (imagenActualYoga < 1) {
    imagenActualYoga = totalImagenesYoga;
  } else if (imagenActualYoga > totalImagenesYoga) {
    imagenActualYoga = 1;
  }
  carruselContenedorYoga.style.transform = `translateX(-${(imagenActualYoga - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda-pase6").addEventListener("click", () => {
    imagenActualYoga--;
    cambiarImagenYoga(imagenActualYoga);
});

document.getElementById("flecha-derecha-pase6").addEventListener("click", () => {
    imagenActualYoga++;
    cambiarImagenYoga(imagenActualYoga);
});

for (let i = 1; i <= totalImagenesYoga; i++) {
  const imagenYoga = document.createElement("img");
  imagenYoga.src = `./assets/img/ibiza${i}.jpg`;
  carruselContenedorYoga.appendChild(imagenYoga);
}