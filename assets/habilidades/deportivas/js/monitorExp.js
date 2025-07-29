//-- Variables.
var imagenesIDmonitorExp =
[
  "",
  "https://i.postimg.cc/jj1LZHkQ/1.jpg",
  "https://i.postimg.cc/XYQZySfP/2.jpg",
  "https://i.postimg.cc/hj7hwXkF/3.jpg",
  "https://i.postimg.cc/hGvXLyMt/4.jpg",
  "https://i.postimg.cc/jSmb1Mt5/5.png",
  "",
  "https://i.postimg.cc/2y1bS0CD/2132kfjkfjdkf.jpg",
  "https://i.postimg.cc/BbR8L2v1/3434kjkjvf.jpg",
  "https://i.postimg.cc/TYW58Nkj/8767jkdfhkdf.jpg",
  "https://i.postimg.cc/ryHRP29F/987hjdfhkjdkdjfd.jpg",
  "https://i.postimg.cc/vZsr0dQx/IMG-20180705-114728.jpg"
];
var primeraMonitorExp = 1;
var pantallaMonitorExp = document.getElementById("pantalla-monitorExp");
var imgMonitorExp = document.createElement("img");

//-- Ctes.
const totalMonitorExp = 12;

function mostrarMonitorExp(auxMonitorExp) {
  
  //-- Limpiar la pantalla.
  pantallaMonitorExp.innerHTML = "";

  if(auxMonitorExp === 1) {
    //-- Experiencia de trabajo como Monitor de OTL 1.
    pantallaMonitorExp.innerHTML =
    `<div>
        <br>
        <h7>Desde mediados de Junio 2017 hasta finales<br>de Julio 2017</h7>
        <br>
        <h5>Empiezo a trabajar para Dinamo 8</h5>
        <a href="https://www.dnmo.es/" target="_blank"><img src="img/motl1.png" alt="Monitor OTL 1" style="width: 200px; display: block; margin: 2px auto;"/></a>
        <p><b>Puesto:</b> Monitor de Ocio y Tiempo Libre</p>
        <p><b>Lugar:</b> <a class="otros-enlaces" href="https://site.educa.madrid.org/cp.angelgonzalez.leganes/" target="_blank">CEIP Ángel González</a> de Leganés,<br>Madrid, España</p>
        <p><b>Sector:</b> Educación y tiempo libre</p>
        <p><b>Tipo:</b> Campamento urbano de verano (sin<br>pernocta) para<br>niños/as entre 4 años y 12 años</p>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Funciones:</b></p>
        <p> - Organización y puesta en marcha de<br>actividades lúdico-educativas, deportivas<br>y cooperativas</p>
        <p> - Monitor de desayuno, piscolabis y comidas<br>para controlar al grupo de menores</p>
        <p> - Resolución de conflictos que surjan</p>
        <p> - Proactividad durante la duración de la<br>jornada laboral</p>
        <p> - Entretenimiento y organización del tiempo<br>libre del grupo</p>
        <p> - Enseñanza de valores al grupo</p>
        <p> - Liderar el grupo</p>
        <p><b>Teléfono:</b> 91 591 49 54</p>
        <p><b>Correo electrónico:</b> info@dnmo.es</p>
        <p><b>Sede de la empresa:</b> Calle de Mercedes<br>Rodríguez, 11, Madrid 28044,<br>Madrid, España</p>
        <p><b>Horario de atención al público:</b> de Lunes a<br>Viernes de 09:00 a 17:00</p>
      </div>
    `;
  }else if(auxMonitorExp === 7) {
    //-- Experiencia de trabajo como Monitor de OTL 2.
    pantallaMonitorExp.innerHTML =
    `<div>
        <br>
        <h7>Durante todo el mes de Julio 2018</h7>
        <br>
        <h5>Empiezo a trabajar para Encantaria</h5>
        <a href="https://www.encantaria.com/" target="_blank"><img src="img/motl2.png" alt="Monitor OTL 2" style="width: 200px; display: block; margin: 2px auto;"/></a>
        <p><b>Puesto:</b> Monitor de Ocio y Tiempo Libre</p>
        <p><b>Lugar:</b> <a class="otros-enlaces" href="https://www.instagram.com/bordafelices/" target="_blank">Broto, Huesca, Aragón, España</a></p>
        <p><b>Sector:</b> Educación y tiempo libre</p>
        <p><b>Tipo:</b> Campamento de verano con pernocta<br>para chavales/as entre 12 años y 17 años</p>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Funciones:</b></p>
        <p> - Organización y puesta en marcha de<br>actividades lúdico-educativas, deportivas,<br>y cooperativas</p>
        <p> - Organización y puesta en marcha de las<br>actividades a realizar cada día</p>
        <p> - Resolución de conflictos que surjan</p>
        <p> - Trabajo diario con los participantes del<br>campamento, incluso control durante la noche</p>
        <p> - Organización y puesta en marcha de<br>excursiones por las cercanías de Broto:<br>Monte Perdido y el Valle de Ordesa</p>
        <p> - Enseñanza de valores a los participantes del<br>campamento</p>
        <p> - Coliderar todos los grupos, junto a<br>compañeros monitores</p>
        <p><b>Teléfono:</b> +34 618 46 01 64</p>
        <p><b>Email:</b> encantaria@encantaria.com</p>
        <p><b>Sede central de la empresa:</b> Calle de<br>Cabañera Real, 7, Fraga 22520, Huesca,<br>Aragón, España</p>
      </div>
    `;
  }else {
    imgMonitorExp.src = imagenesIDmonitorExp[auxMonitorExp-1];
    pantallaMonitorExp.appendChild(imgMonitorExp);
  }
}

function imgAnteriorMonitorExp() {
  if(primeraMonitorExp > 1) {
    primeraMonitorExp--;
  }else {
    primeraMonitorExp = totalMonitorExp;
  }
  mostrarMonitorExp(primeraMonitorExp);
}

function imgSiguienteMonitorExp() {
  if(primeraMonitorExp < totalMonitorExp) {
    primeraMonitorExp++;
  }else {
    primeraMonitorExp = 1;
  }
  mostrarMonitorExp(primeraMonitorExp);
}

//-- Pulsar flecha izquierda.
document.getElementById("flecha-izquierda-monitorExp").addEventListener("click", imgAnteriorMonitorExp);
//-- Pulsar flecha derecha.
document.getElementById("flecha-derecha-monitorExp").addEventListener("click", imgSiguienteMonitorExp);

//-- Punto de inicio del programa.
mostrarMonitorExp(primeraMonitorExp);