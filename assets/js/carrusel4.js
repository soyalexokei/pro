const pantalla4 = document.getElementById("pantalla-voluntariado-proweb-4");

const totalImagenesYoga = 17;
let imagenActualYoga = 1;

// Variables para gestionar el gesto táctil.
let empiezaToqueC4 = 0;
let acabaToqueC4 = 0;

function cambiarImagenYoga(yg) {
  if (imagenActualYoga < 1) {
    imagenActualYoga = totalImagenesYoga;
  } else if (imagenActualYoga > totalImagenesYoga) {
    imagenActualYoga = 1;
  }
  pantalla4.style.transform = `translateX(-${(imagenActualYoga - 1) * 100}%)`;
}

// Función para manejar el gesto de deslizamiento
function handleSwipeC4() {
  if (acabaToqueC4 < empiezaToqueC4) {
    imagenActualYoga++;
    cambiarImagenYoga(imagenActualYoga);  // Desliza hacia la izquierda, pasa a la siguiente imagen
  } else if (acabaToqueC4 > empiezaToqueC4) {
    imagenActualYoga--;
    cambiarImagenYoga(imagenActualYoga);  // Desliza hacia la derecha, pasa a la imagen anterior
  }
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

// Evento para detectar el inicio del toque
pantalla4.addEventListener('touchstart', function(event) {
  empiezaToqueC4 = event.changedTouches[0].screenX;
});

// Evento para detectar el final del toque
pantalla4.addEventListener('touchend', function(event) {
  acabaToqueC4 = event.changedTouches[0].screenX;
  handleSwipeC4();
});

for (let i = 1; i <= totalImagenesYoga; i++) {
  const imagen4 = document.createElement("img");
  imagen4.src = `./assets/img/voluntariados/Quinto/${i}.jpg`;
  pantalla4.appendChild(imagen4);
}