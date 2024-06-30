const pantalla1 = document.getElementById("pantalla-voluntariado-proweb-1");

const totalImagenes1 = 38;
let imagenActual1 = 1;

function cambiarImagen1(m) {
  if (imagenActual1 < 1) {
    imagenActual1 = totalImagenes1;
  } else if (imagenActual1 > totalImagenes1) {
    imagenActual1 = 1;
  }
  pantalla1.style.transform = `translateX(-${(imagenActual1 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda-1").addEventListener("click", () => {
  imagenActual1--;
  cambiarImagen1(imagenActual1);
});

document.getElementById("flecha-derecha-1").addEventListener("click", () => {
  imagenActual1++;
  cambiarImagen1(imagenActual1);
});

for (let i = 1; i <= totalImagenes1; i++) {
  const imagen1 = document.createElement("img");
  imagen1.src = `./assets/img/voluntariados/Segundo/austria${i}.jpg`;
  pantalla1.appendChild(imagen1);
}