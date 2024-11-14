//-- Variables.
var imagenesIDmallorca =
[
    "v8qzQVZX/1.jpg",
    "sDMJ1gBz/2.jpg",
    "mk5NV05K/3.jpg",
    "43kPDRxg/4.jpg",
    "JnKQHycr/5.jpg",
    "PJxQWt2m/6.jpg",
    "KzmNY7Tp/7.jpg",
    "wBX2H41s/8.jpg"
];
    var primeraMallorca = 1;
    var pantallaMallorca = document.getElementById("pantalla-voluntariado-proweb-3");
    var imgMallorca = document.createElement("img");
    
    //-- Ctes.
    const totalMallorca = 8;
    
    function mostrarMallorca(auxMallorca) {
      
      //-- Limpiar la pantalla.
      pantallaMallorca.innerHTML = "";
    
      imgMallorca.src = "https://i.postimg.cc/" + imagenesIDmallorca[auxMallorca-1];
      pantallaMallorca.appendChild(imgMallorca);
    }
    
    function imgAnteriorMallorca() {
      if(primeraMallorca > 1) {
        primeraMallorca--;
      }else {
        primeraMallorca = totalMallorca;
      }
      mostrarMallorca(primeraMallorca);
    }
    
    function imgSiguienteMallorca() {
      if(primeraMallorca < totalMallorca) {
        primeraMallorca++;
      }else {
        primeraMallorca = 1;
      }
      mostrarMallorca(primeraMallorca);
    }
    
    //-- Pulsar flecha izquierda.
    document.getElementById("flecha-izquierda-3").addEventListener("click", imgAnteriorMallorca);
    //-- Pulsar flecha derecha.
    document.getElementById("flecha-derecha-3").addEventListener("click", imgSiguienteMallorca);
    
    //-- Punto de inicio del programa.
    mostrarMallorca(primeraMallorca);