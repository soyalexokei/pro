const pantalla3 = document.getElementById("pantalla-voluntariado-proweb-3");

const totalImagenes3 = 1;
let imagenActual3 = 1;

function cambiarImagen3(n) {
  if (imagenActual3 < 1) {
    imagenActual3 = totalImagenes3;
  } else if (imagenActual3 > totalImagenes3) {
    imagenActual3 = 1;
  }
  pantalla3.style.transform = `translateX(-${(imagenActual3 - 1) * 100}%)`;
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

for (let i = 1; i <= totalImagenes3; i++) {
  const imagen3 = document.createElement("img");
  imagen3.src = `./assets/img/voluntariados/Cuarto/${i}.jpg`;
  pantalla3.appendChild(imagen3);
}