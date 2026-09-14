/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE2 = document.getElementById("mediaViewerE2");
const prevBtnE2 = document.getElementById("prevBtnE2");
const nextBtnE2 = document.getElementById("nextBtnE2");
const mediaIndexE2 = document.getElementById("mediaIndexE2");
const totalMediaE2 = document.getElementById("totalMediaE2");
const loaderE2 = document.getElementById("loader-e2");
let currentMediaE2 = 0;
let pendingImageE2 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE2 = {
  nombre: "Experiencia en LCRcom (Grupo Aire)",
  medios: [
    {
      type: "text",
      content:`
        <h3>Ingeniero NOC</h3>
        <p><b>Tipo de contrato:</b> Contrato de prácticas</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Acuerdo entre:</b> <a href="https://www.lcrcom.net/" target="_blank">LCRcom</a> - <a href="https://gestion2.urjc.es/practicas/home" target="_blank">URJC</a> - Yo</p>
        <p><b>Nota final de las Prácticas:</b> 9</p>
        <p><b>Campo:</b> Redes de Telecomunicación</p>
        <p><b>Idioma:</b> Español e Inglés</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p>- Comprensión práctica de los protocolos de red</p>
        <p>- Monitorización de las señales de audio</p>
        <p>- Soporte técnico y resolución de incidencias, incluyendo Centralita Virtual Meet IP</p>
        <p>- Supervisión en tiempo real de la infraestructura de red</p>
        <p>- Optimización de Servicios de Telecomunicación</p>
        <p>- Gestión de redes</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> 91 737 77 77</p>
        <p><b>Correo electrónico:</b> rgpd@airenetworks.es, rrhh@lcrcom.es, rrhh@lcrcom.net y rrhh.comunicados@lcrcom.es</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/1cRy69a1xHd3GRfP7" target="_blank">Fernando Rey, 8, 28223 Pozuelo de Alarcón, Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Fecha:</b> Febrero 2022</p>
        <p><b>Motivo:</b> Me ofrecieron continuar y un contrato de trabajo indefinido a jornada completa, pero
        debido a que tenía que irme de Erasmus+ a Novi Sad (Serbia), tuve que rechazarlo</p>
      `
    }
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderE2() {
  loaderE2.style.display = "block";
  viewerE2.style.display = "none";
}

function ocultarLoaderE2() {
  loaderE2.style.display = "none";
}

function cargarImagenE2(url) {
  if (!url) {
    viewerE2.innerHTML = "";
    viewerE2.style.display = "none";
    ocultarLoaderE2();
    return;
  }

  mostrarLoaderE2();

  const img = new Image();
  pendingImageE2 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE2 !== img) return;

    viewerE2.innerHTML = "";
    viewerE2.appendChild(img);

    viewerE2.style.display = "block";
    ocultarLoaderE2();

    pendingImageE2 = null;
  };

  img.onerror = () => {
    if (pendingImageE2 !== img) return;

    viewerE2.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE2.style.display = "block";
    ocultarLoaderE2();

    pendingImageE2 = null;
  };

  img.src = url;
}

function renderMediaE2() {
  const media = experiencia_proE2.medios[currentMediaE2];
  viewerE2.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE2(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE2();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE2.style.display = "block";
    viewerE2.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE2.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE2.value=currentMediaE2+1;
  totalMediaE2.textContent = experiencia_proE2.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE2.addEventListener("click", () => {
  currentMediaE2++;
  if(currentMediaE2 >= experiencia_proE2.medios.length) {
    currentMediaE2=0;
  }
  renderMediaE2();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE2.addEventListener("click",()=>{
  currentMediaE2--;
  if(currentMediaE2 < 0) {
    currentMediaE2 = experiencia_proE2.medios.length-1;
  }
  renderMediaE2();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE2.addEventListener("change", () => {
  const value=Number(mediaIndexE2.value);
  if(value>=1 && value<=experiencia_proE2.medios.length) {
    currentMediaE2=value-1;
    renderMediaE2();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE2.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE2.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE2();