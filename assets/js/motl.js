const pantallaMOTL = document.getElementById("pantalla-MOTL");

const totalMOTL = 4;
let primeraMOTL = 1;

// Variables para gestionar el gesto táctil.
let empiezaToqueMOTL = 0;
let acabaToqueMOTL = 0;

function cambiarImagenMOTL(auxMOTL) {
  if (primeraMOTL < 1) {
    primeraMOTL = totalMOTL;
  } else if (primeraMOTL > totalMOTL) {
    primeraMOTL = 1;
  }
  pantallaMOTL.style.transform = `translateX(-${(primeraMOTL - 1) * 100}%)`;
}

// Función para manejar el gesto de deslizamiento
function handleSwipeMOTL() {
  if (acabaToqueMOTL < empiezaToqueMOTL) {
    primeraMOTL++;
    cambiarImagenMOTL(primeraMOTL);  // Desliza hacia la izquierda, pasa a la siguiente imagen
  } else if (acabaToqueMOTL > empiezaToqueMOTL) {
    primeraMOTL--;
    cambiarImagenMOTL(primeraMOTL);  // Desliza hacia la derecha, pasa a la imagen anterior
  }
}

document.getElementById("left-MOTL").addEventListener("click", () => {
  primeraMOTL--;
  cambiarImagenMOTL(primeraMOTL);
});

document.getElementById("right-MOTL").addEventListener("click", () => {
  primeraMOTL++;
  cambiarImagenMOTL(primeraMOTL);
});

// Eventos de teclado (flechas izquierda y derecha).
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    primeraMOTL--;
    cambiarImagenMOTL(primeraMOTL);
  } else if (event.key === 'ArrowRight') {
    primeraMOTL++;
    cambiarImagenMOTL(primeraMOTL);
  }
});

// Evento para detectar el inicio del toque
pantallaMOTL.addEventListener('touchstart', function(event) {
  empiezaToqueMOTL = event.changedTouches[0].screenX;
});

// Evento para detectar el final del toque
pantallaMOTL.addEventListener('touchend', function(event) {
  acabaToqueMOTL = event.changedTouches[0].screenX;
  handleSwipeMOTL();
});

for (let i = 1; i <= totalMOTL; i++) {
  const imgMOTL = document.createElement("img");
  imgMOTL.src = `./assets/img/formacion/motl/${i}.jpg`;
  pantallaMOTL.appendChild(imgMOTL);
}