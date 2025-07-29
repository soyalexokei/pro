//-- Variables.
var primeraJobsWT = 1;
var pantallaJobsWT = document.getElementById("pantalla-jobsWT2019");

//-- Ctes.
const totalJobsWT = 2;

function mostrarJobsWT(auxJobsWT) {
  
  //-- Limpiar la pantalla.
  pantallaJobsWT.innerHTML = "";

  if(auxJobsWT === 1) {
    //-- Experiencia de trabajo como Monitor de OTL 1.
    pantallaJobsWT.innerHTML =
    `<div>
        <br>
        <h7>Desde Junio 2019 hasta Octubre 2019</h7>
        <br>
        <h5>Estuve trabajando en Kalahari Resorts & Conventions</h5>
        <a href="https://www.kalahariresorts.com/wisconsin/" target="_blank"><img src="img/wt2019.png" alt="WT2019-Jobs" style="width: 200px;"/></a>
        <p><b>Programa de trabajo:</b>
          <a  class="otros-enlaces"
              href="https://allianceabroad.es/nuestros-programas-2/estados-unidos/trabaja-viaja-verano/estados-unidos-trabaja-y-viaja-formulario-de-aplicacion/"
              target="_blank">Summer Work & Travel
          </a>
        </p>
        <p>En primer lugar, desde Junio 2019 hasta Agosto 2019</p>
        <p><b>Puesto:</b> Socorrista en<br>un parque acuático indoor y outdoor<br>(Tuve que aprobar un curso teórico-práctico de<br>una semana para poder trabajar)</p>
        <p><b>Lugar:</b> Wisconsin Dells, Wisconsin, Estados Unidos de América</p>
        <p><b>Sector:</b> Seguridad y salud</p>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Funciones:</b></p>
        <p> - Vigilar que los bañistas del parque acuático cumplan las normas</p>
        <p> - Vigilar que nadie se ahogue y evitarlo si sucediera</p>
        <p> - Seguir el protocolo de actuación cuando alguien se está ahogando</p>
        <p> - Llevar un orden en la parte de arriba de una atracción, dejando un<br>margen de seguridad entre bañistas</p>
        <p><b>Teléfono:</b> +1 608-254-5466</p>
        <p><b>Correo electrónico:</b> WIGroups@KalahariResorts.com</p>
        <p><b>Dirección:</b> Kalahari Drive, 1305, Wisconsin Dells 53965, Wisconsin,<br>Estados Unidos de América</p>
      </div>
    `;
  }else if(auxJobsWT === 2) {
    //-- Experiencia de trabajo como Monitor de OTL 2.
    pantallaJobsWT.innerHTML =
    `<div>
        <br>
        <p>Y después, desde Agosto 2019 hasta Octubre 2019</p>
        <br>
        <p><b>Puesto:</b> Dependiente de tienda (con entrevista previa en inglés)</p>
        <p><b>Lugar:</b> Wisconsin Dells, Wisconsin, Estados Unidos de América</p>
        <p><b>Sector:</b> Ventas</p>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Tipos de tiendas:</b></p>
        <p> - Tienda de ropa y juguetes para niños/as</p>
        <p> - Tienda de ropa de adolescentes y adultos</p>
        <p> - Tienda de alimentación, snacks, souvenirs<br>y parafarmacia (ultramarinos)</p>
        <p><b>Funciones (turnos rotatorios):</b></p>
        <p> - Conseguir el mayor porcentaje de ventas</p>
        <p> - Ordenar y reponer sus artículos</p>
        <p> - Mantenerla limpia</p>
        <p> - Cobrar a los clientes</p>
        <p> - Convencer, aconsejar y ayudar a los clientes</p>
        <p> - Conseguir que la experiencia de compra del cliente<br>sea lo más satisfactoria posible</p>
        <p><b>Teléfono:</b> +1 608-254-5466</p>
        <p><b>Correo electrónico:</b> WIGroups@KalahariResorts.com</p>
        <p><b>Dirección:</b> Kalahari Drive, 1305, Wisconsin Dells 53965, Wisconsin,<br>Estados Unidos de América</p>
      </div>
    `;
  }
}

function imgAnteriorJobsWT() {
  if(primeraJobsWT > 1) {
    primeraJobsWT--;
  }else {
    primeraJobsWT = totalJobsWT;
  }
  mostrarJobsWT(primeraJobsWT);
}

function imgSiguienteJobsWT() {
  if(primeraJobsWT < totalJobsWT) {
    primeraJobsWT++;
  }else {
    primeraJobsWT = 1;
  }
  mostrarJobsWT(primeraJobsWT);
}

//-- Pulsar flecha izquierda.
document.getElementById("flechaizq-jobsWT2019").addEventListener("click", imgAnteriorJobsWT);
//-- Pulsar flecha derecha.
document.getElementById("flechader-jobsWT2019").addEventListener("click", imgSiguienteJobsWT);

//-- Punto de inicio del programa.
mostrarJobsWT(primeraJobsWT);