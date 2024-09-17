var pantalla0 = document.getElementById("pantalla-voluntariado-proweb-0");

const totalImagenes0 = 6;
let imagenActual0 = 1;

function cambiarImagen0(l) {
  if (imagenActual0 < 1) {
    imagenActual0 = totalImagenes0;
  } else if (imagenActual0 > totalImagenes0) {
    imagenActual0 = 1;
  }
  pantalla0.style.transform = `translateX(-${(imagenActual0 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda-0").addEventListener("click", () => {
  imagenActual0--;
  cambiarImagen0(imagenActual0);
});

document.getElementById("flecha-derecha-0").addEventListener("click", () => {
  imagenActual0++;
  cambiarImagen0(imagenActual0);
});

// Eventos de teclado (flechas izquierda y derecha).
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      imagenActual0--;
      cambiarImagen0(imagenActual0);
    } else if (event.key === 'ArrowRight') {
      imagenActual0++;
      cambiarImagen0(imagenActual0);
    }
});

for (let i = 1; i <= totalImagenes0; i++) {
  const imagen0 = document.createElement("img");
  imagen0.src = `./assets/img/voluntariados/Primero/${i}.jpg`;
  pantalla0.appendChild(imagen0);
}