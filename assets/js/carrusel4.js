const pantalla4 = document.getElementById("pantalla-voluntariado-proweb-4");

const totalImagenesYoga = 17;
let imagenActualYoga = 1;

function cambiarImagenYoga(yg) {
  if (imagenActualYoga < 1) {
    imagenActualYoga = totalImagenesYoga;
  } else if (imagenActualYoga > totalImagenesYoga) {
    imagenActualYoga = 1;
  }
  pantalla4.style.transform = `translateX(-${(imagenActualYoga - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda-4").addEventListener("click", () => {
    imagenActualYoga--;
    cambiarImagenYoga(imagenActualYoga);
});

document.getElementById("flecha-derecha-4").addEventListener("click", () => {
    imagenActualYoga++;
    cambiarImagenYoga(imagenActualYoga);
});

// Eventos de teclado (flechas izquierda y derecha).
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    imagenActualYoga--;
    cambiarImagenYoga(imagenActualYoga);
  } else if (event.key === 'ArrowRight') {
    imagenActualYoga++;
    cambiarImagenYoga(imagenActualYoga);
  }
});

for (let i = 1; i <= totalImagenesYoga; i++) {
  const imagen4 = document.createElement("img");
  imagen4.src = `./assets/img/voluntariados/Quinto/${i}.jpg`;
  pantalla4.appendChild(imagen4);
}