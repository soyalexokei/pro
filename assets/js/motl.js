const pantallaMOTL = document.getElementById("pantalla-MOTL");

const totalMOTL = 4;
let primeraMOTL = 1;

function cambiarImagenMOTL(auxMOTL) {
  if (primeraMOTL < 1) {
    primeraMOTL = totalMOTL;
  } else if (primeraMOTL > totalMOTL) {
    primeraMOTL = 1;
  }
  pantallaMOTL.style.transform = `translateX(-${(primeraMOTL - 1) * 100}%)`;
}

document.getElementById("left-MOTL").addEventListener("click", () => {
    primeraMOTL--;
    cambiarImagenMOTL(primeraMOTL);
});

document.getElementById("right-MOTL").addEventListener("click", () => {
    primeraMOTL++;
    cambiarImagenMOTL(primeraMOTL);
});

for (let i = 1; i <= totalMOTL; i++) {
  const imgMOTL = document.createElement("img");
  imgMOTL.src = `./assets/img/formacion/motl/${i}.jpg`;
  pantallaMOTL.appendChild(imgMOTL);
}