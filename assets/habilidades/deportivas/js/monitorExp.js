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
  "https://i.postimg.cc/8P03mjwR/IMG-20250730-173041.png",
  "https://i.postimg.cc/wTvZNh5x/IMG-20250730-173321.png",
  "https://i.postimg.cc/44wjn89F/IMG-20250730-173514.png",
  "https://i.postimg.cc/zBz0rr0D/IMG-20250730-173851.png",
  "https://i.postimg.cc/CKHmX1C6/IMG-20250730-174135.png",
  "https://i.postimg.cc/dQWSJLbb/IMG-20250730-175717.png",
  "https://i.postimg.cc/nhmdKTXx/IMG-20250730-175423.png",
  "https://i.postimg.cc/DzKxxsGX/IMG-20250730-180402.png",
  "https://i.postimg.cc/ZK27yXKj/IMG-20250730-181857.png",
  "https://i.postimg.cc/k5Xv2v37/IMG-20250731-120746.png",
  "https://i.postimg.cc/SNPhTDdv/IMG-20250731-120719-860.webp",
  "https://i.postimg.cc/hGLRGgBk/IMG-20250731-121208.png",
  "https://i.postimg.cc/YCmwJYyq/IMG-20250731-121410-875.webp",
  "https://i.postimg.cc/k56FNX4H/IMG-20250731-121447-738.webp",
  "https://i.postimg.cc/NjPkrrgT/IMG-20250731-122003.png",
  "https://i.postimg.cc/x1dPCPSn/IMG-20250731-122020.png",
  "https://i.postimg.cc/rFjJMP3f/IMG-20250731-122801.png",
  "https://i.postimg.cc/X74LMbHZ/IMG-20250731-122812.png",
  "https://i.postimg.cc/MZy5rTD2/IMG-20250731-123452.png",
  "https://i.postimg.cc/BbGgn9JV/IMG-20250731-124645.png",
  "https://i.postimg.cc/Wz67DW3b/IMG-20250731-125047.png",
  "https://i.postimg.cc/G2DKRhnD/IMG-20250731-125928.png",
  "https://i.postimg.cc/nLCTdGd0/IMG-20250731-130913.png",
  "https://i.postimg.cc/bvWg4SW8/IMG-20250731-130846-074.webp",
  "https://i.postimg.cc/g2cghW39/IMG-20250731-131258.png",
  "https://i.postimg.cc/2SH2FKx1/IMG-20250731-131247.png",
  "https://i.postimg.cc/RVLPqF6Q/IMG-20250731-131316.png"
];
var primeraMonitorExp = 1;
var pantallaMonitorExp = document.getElementById("pantalla-monitorExp");
var imgMonitorExp = document.createElement("img");

//-- Ctes.
const totalMonitorExp = 34;

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