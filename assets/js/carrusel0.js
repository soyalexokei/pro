//-- Variables.
var imagenesIDbancoAlimentos = ["jSXDzqd0/1","Wb0F16B4/2","vZM1gxyt/3","MZCfwrr4/4","mrgtVxtc/5","DzpmMCXx/6"];
var primeraBancoAlimentos = 1;
var pantallaBancoAlimentos = document.getElementById("pantalla-voluntariado-proweb-0");
var imgBancoAlimentos = document.createElement("img");

//-- Ctes.
const totalBancoAlimentos = 6;

function mostrarBancoAlimentos(auxBancoAlimentos) {
  
  //-- Limpiar la pantalla.
  pantallaBancoAlimentos.innerHTML = "";

  imgBancoAlimentos.src = "https://i.postimg.cc/" + imagenesIDbancoAlimentos[auxBancoAlimentos-1] + ".jpg";
  pantallaBancoAlimentos.appendChild(imgBancoAlimentos);
}

function imgAnteriorBancoAlimentos() {
  if(primeraBancoAlimentos > 1) {
    primeraBancoAlimentos--;
  }else {
    primeraBancoAlimentos = totalBancoAlimentos;
  }
  mostrarBancoAlimentos(primeraBancoAlimentos);
}

function imgSiguienteBancoAlimentos() {
  if(primeraBancoAlimentos < totalBancoAlimentos) {
    primeraBancoAlimentos++;
  }else {
    primeraBancoAlimentos = 1;
  }
  mostrarBancoAlimentos(primeraBancoAlimentos);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-0").addEventListener("click", imgAnteriorBancoAlimentos);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-0").addEventListener("click", imgSiguienteBancoAlimentos);

//-- Punto de inicio del programa.
mostrarBancoAlimentos(primeraBancoAlimentos);