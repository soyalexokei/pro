const pantalla2 = document.getElementById("pantalla-voluntariado-proweb-2");

const totalImagenes2 = 25;
let imagenActual2 = 1;

function cambiarImagen2(o) {
  if (imagenActual2 < 1) {
    imagenActual2 = totalImagenes2;
  } else if (imagenActual2 > totalImagenes2) {
    imagenActual2 = 1;
  }
  pantalla2.style.transform = `translateX(-${(imagenActual2 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda-2").addEventListener("click", () => {
    imagenActual2--;
    cambiarImagen2(imagenActual2);
});

document.getElementById("flecha-derecha-2").addEventListener("click", () => {
    imagenActual2++;
    cambiarImagen2(imagenActual2);
});

for (let i = 1; i <= totalImagenes2; i++) {
  const imagen2 = document.createElement("img");
  imagen2.src = `./assets/img/voluntariados/Tercero/germany${i}.jpg`;
  pantalla2.appendChild(imagen2);
}