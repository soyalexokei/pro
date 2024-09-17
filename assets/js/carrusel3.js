const pantalla3 = document.getElementById("pantalla-voluntariado-proweb-3");

const totalImagenes3 = 1;
let imagenActual3 = 1;

// Variables para gestionar el gesto táctil.
let empiezaToqueC3 = 0;
let acabaToqueC3 = 0;

function cambiarImagen3(n) {
  if (imagenActual3 < 1) {
    imagenActual3 = totalImagenes3;
  } else if (imagenActual3 > totalImagenes3) {
    imagenActual3 = 1;
  }
  pantalla3.style.transform = `translateX(-${(imagenActual3 - 1) * 100}%)`;
}

// Función para manejar el gesto de deslizamiento
function handleSwipeC3() {
  if (acabaToqueC3 < empiezaToqueC3) {
    imagenActual3++;
    cambiarImagen3(imagenActual3);  // Desliza hacia la izquierda, pasa a la siguiente imagen
  } else if (acabaToqueC3 > empiezaToqueC3) {
    imagenActual3--;
    cambiarImagen3(imagenActual3);  // Desliza hacia la derecha, pasa a la imagen anterior
  }
}

document.getElementById("flecha-izquierda-3").addEventListener("click", () => {
    imagenActual3--;
    cambiarImagen3(imagenActual3);
});

document.getElementById("flecha-derecha-3").addEventListener("click", () => {
    imagenActual3++;
    cambiarImagen3(imagenActual3);
});

// Eventos de teclado (flechas izquierda y derecha).
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    imagenActual3--;
    cambiarImagen3(imagenActual3);
  } else if (event.key === 'ArrowRight') {
    imagenActual3++;
    cambiarImagen3(imagenActual3);
  }
});

// Evento para detectar el inicio del toque
pantalla3.addEventListener('touchstart', function(event) {
  empiezaToqueC3 = event.changedTouches[0].screenX;
});

// Evento para detectar el final del toque
pantalla3.addEventListener('touchend', function(event) {
  acabaToqueC3 = event.changedTouches[0].screenX;
  handleSwipeC3();
});

for (let i = 1; i <= totalImagenes3; i++) {
  const imagen3 = document.createElement("img");
  imagen3.src = `./assets/img/voluntariados/Cuarto/${i}.jpg`;
  pantalla3.appendChild(imagen3);
}