var pantalla0 = document.getElementById("pantalla-voluntariado-proweb-0");

const totalImagenes0 = 6;
let imagenActual0 = 1;

// Variables para gestionar el gesto táctil.
let empiezaToqueC0 = 0;
let acabaToqueC0 = 0;

function cambiarImagen0(l) {
  if (imagenActual0 < 1) {
    imagenActual0 = totalImagenes0;
  } else if (imagenActual0 > totalImagenes0) {
    imagenActual0 = 1;
  }
  pantalla0.style.transform = `translateX(-${(imagenActual0 - 1) * 100}%)`;
}

// Función para manejar el gesto de deslizamiento
function handleSwipeC0() {
  if (acabaToqueC0 < empiezaToqueC0) {
    imagenActual0++;
    cambiarImagen0(imagenActual0);  // Desliza hacia la izquierda, pasa a la siguiente imagen
  } else if (acabaToqueC0 > empiezaToqueC0) {
    imagenActual0--;
    cambiarImagen0(imagenActual0);  // Desliza hacia la derecha, pasa a la imagen anterior
  }
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

// Evento para detectar el inicio del toque
pantalla0.addEventListener('touchstart', function(event) {
  empiezaToqueC0 = event.changedTouches[0].screenX;
});

// Evento para detectar el final del toque
pantalla0.addEventListener('touchend', function(event) {
  acabaToqueC0 = event.changedTouches[0].screenX;
  handleSwipeC0();
});

for (let i = 1; i <= totalImagenes0; i++) {
  const imagen0 = document.createElement("img");
  imagen0.src = `./assets/img/voluntariados/Primero/${i}.jpg`;
  pantalla0.appendChild(imagen0);
}