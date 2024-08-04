const pantalla5 = document.getElementById("pantalla-voluntariado-proweb-5");

const totalImagenesYoga = 18;
let imagenActualYoga = 1;

function cambiarImagenYoga(yg) {
  if (imagenActualYoga < 1) {
    imagenActualYoga = totalImagenesYoga;
  } else if (imagenActualYoga > totalImagenesYoga) {
    imagenActualYoga = 1;
  }
  pantalla5.style.transform = `translateX(-${(imagenActualYoga - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda-5").addEventListener("click", () => {
    imagenActualYoga--;
    cambiarImagenYoga(imagenActualYoga);
});

document.getElementById("flecha-derecha-5").addEventListener("click", () => {
    imagenActualYoga++;
    cambiarImagenYoga(imagenActualYoga);
});

for (let i = 1; i <= totalImagenesYoga; i++) {
  const imagen5 = document.createElement("img");
  imagen5.src = `./assets/img/voluntariados/Quinto/ibiza${i}.jpg`;
  pantalla5.appendChild(imagen5);
}