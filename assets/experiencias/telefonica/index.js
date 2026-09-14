/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE4 = document.getElementById("mediaViewerE4");
const prevBtnE4 = document.getElementById("prevBtnE4");
const nextBtnE4 = document.getElementById("nextBtnE4");
const mediaIndexE4 = document.getElementById("mediaIndexE4");
const totalMediaE4 = document.getElementById("totalMediaE4");
const loaderE4 = document.getElementById("loader-e4");
let currentMediaE4 = 0;
let pendingImageE4 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE4 = {
  nombre: "Experiencia en Telefónica Tech",
  medios: [
    {
      type: "text",
      content:`
        <h3>Ingeniero Preventa IoT & Big Data Junior</h3>
        <p><b>Tipo de contrato:</b> Jornada completa</p>
        <p><b>Modo de trabajo:</b> Híbrido (Presencial + Remoto)</p>
        <p><b>Idioma:</b> Español e Inglés</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p>- Diseño de soluciones tecnológicas</p>
        <p>- Elaboración de propuestas técnicas y económicas</p>
        <p>- Trato con clientes</p>
        <p>- Soporte técnico en la fase de preventa para proyectos de IoT y Big Data en el área corporativa</p>
        <p>- Soluciones de integración AV</p>
        <p>- Preparación de documentación técnica</p>
        <p>- Investigación y actualización de tecnologías IoT & Big Data</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Ferias de empresa</h3>
        <p>1. <a href="https://www.bitamshow.com/" target="_blank">Bitam</a> - Noviembre 2023 - Madrid (España)</p>
        <p>2. <a href="https://www.iseurope.org/" target="_blank">ISE</a> - Enero 2024 - Barcelona (España)</p>
        <p>- A continuación se mostrarán experiencias mías en Telefónica Tech</p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/3x0M3jpy/1.jpg"},
    {type: "image", src: "https://i.postimg.cc/ncPb8Ssb/3.jpg"},
    {type: "image", src: "https://i.postimg.cc/cHC1Mg2f/2.jpg"},
    {type: "video", src: "https://streamable.com/e/al0ysf"},
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> 91 592 05 09</p>
        <p><b>Correos electrónicos:</b> telefonicaiot@telefonica.com, cristina.velazquezurenda@telefonica.com, cristina.patinogarcia@telefonica.com y preguntanos_peopleiotbd@telefonica.com</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/unhMBQeq11aKVz2y7" target="_blank">Distrito Telefónica Edificio Oeste 1, Ronda de la Comunicación, S/N, Fuencarral-El Pardo, 28050 Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Fecha:</b> Enero 2024</p>
        <p><b>Motivo:</b> Acabo contrato porque me ofrecieron realizar proyectos de ingeniería acústica arquitectónica y ambiental en Mallorca
        y de programación de sistemas de videoconferencia en Barcelona, viéndolos como una gran oportunidad para no estancarme,
        salir de mi zona de confort, aprender nuevas habilidades, tener nuevas experiencias profesionales y viajar
        por todo el territorio español</p>
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
function mostrarLoaderE4() {
  loaderE4.style.display = "block";
  viewerE4.style.display = "none";
}

function ocultarLoaderE4() {
  loaderE4.style.display = "none";
}

function cargarImagenE4(url) {
  if (!url) {
    viewerE4.innerHTML = "";
    viewerE4.style.display = "none";
    ocultarLoaderE4();
    return;
  }

  mostrarLoaderE4();

  const img = new Image();
  pendingImageE4 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE4 !== img) return;

    viewerE4.innerHTML = "";
    viewerE4.appendChild(img);

    viewerE4.style.display = "block";
    ocultarLoaderE4();

    pendingImageE4 = null;
  };

  img.onerror = () => {
    if (pendingImageE4 !== img) return;

    viewerE4.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE4.style.display = "block";
    ocultarLoaderE4();

    pendingImageE4 = null;
  };

  img.src = url;
}

function renderMediaE4() {
  const media = experiencia_proE4.medios[currentMediaE4];
  viewerE4.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE4(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE4();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE4.style.display = "block";
    viewerE4.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE4.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE4.value=currentMediaE4+1;
  totalMediaE4.textContent = experiencia_proE4.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE4.addEventListener("click", () => {
  currentMediaE4++;
  if(currentMediaE4 >= experiencia_proE4.medios.length) {
    currentMediaE4=0;
  }
  renderMediaE4();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE4.addEventListener("click",()=>{
  currentMediaE4--;
  if(currentMediaE4 < 0) {
    currentMediaE4 = experiencia_proE4.medios.length-1;
  }
  renderMediaE4();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE4.addEventListener("change", () => {
  const value=Number(mediaIndexE4.value);
  if(value>=1 && value<=experiencia_proE4.medios.length) {
    currentMediaE4=value-1;
    renderMediaE4();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE4.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE4.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE4();