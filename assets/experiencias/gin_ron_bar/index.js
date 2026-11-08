/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE9 = document.getElementById("mediaViewerE9");
const prevBtnE9 = document.getElementById("prevBtnE9");
const nextBtnE9 = document.getElementById("nextBtnE9");
const mediaIndexE9 = document.getElementById("mediaIndexE9");
const totalMediaE9 = document.getElementById("totalMediaE9");
const loaderE9 = document.getElementById("loader-e9");
let currentMediaE9 = 0;
let pendingImageE9 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE9 = {
  nombre: "Experiencia en Estudio Internacional Ritmo y Movimiento",
  medios: [
    {
      type: "text",
      content:`
        <h3>Shisha & Bar Tender</h3>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Idioma:</b> Español</p>
        <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/qCN9bGrgjBVt6YZ66" target="_blank">Av. Príncipe de Asturias, 43 y 45, 28670 Villaviciosa de Odón, Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p>- Servir copas</p>
        <p>- Limpieza del local</p>
        <p>- Preparación de cachimbas</p>
        <p>- Cobro a clientes</p>
        <p>- Atención al público</p>
      `
    },
    { type: "image", src: "https://i.postimg.cc/VkwmkyXT/Bar-X-fuera.jpg"},
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Fecha:</b> Julio 2016</p>
        <p><b>Motivo:</b> Para descansar en verano y prepararme para ir a la Universidad</p>
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
function mostrarLoaderE9() {
  loaderE9.style.display = "block";
  viewerE9.style.display = "none";
}

function ocultarLoaderE9() {
  loaderE9.style.display = "none";
}

function cargarImagenE9(url) {
  if (!url) {
    viewerE9.innerHTML = "";
    viewerE9.style.display = "none";
    ocultarLoaderE9();
    return;
  }

  mostrarLoaderE9();

  const img = new Image();
  pendingImageE9 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE9 !== img) return;

    viewerE9.innerHTML = "";
    viewerE9.appendChild(img);

    viewerE9.style.display = "block";
    ocultarLoaderE9();

    pendingImageE9 = null;
  };

  img.onerror = () => {
    if (pendingImageE9 !== img) return;

    viewerE9.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE9.style.display = "block";
    ocultarLoaderE9();

    pendingImageE9 = null;
  };

  img.src = url;
}

function renderMediaE9() {
  const media = experiencia_proE9.medios[currentMediaE9];
  viewerE9.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE9(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE9();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE9.style.display = "block";
    viewerE9.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE9.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE9.value=currentMediaE9+1;
  totalMediaE9.textContent = experiencia_proE9.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE9.addEventListener("click", () => {
  currentMediaE9++;
  if(currentMediaE9 >= experiencia_proE9.medios.length) {
    currentMediaE9=0;
  }
  renderMediaE9();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE9.addEventListener("click",()=>{
  currentMediaE9--;
  if(currentMediaE9 < 0) {
    currentMediaE9 = experiencia_proE9.medios.length-1;
  }
  renderMediaE9();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE9.addEventListener("change", () => {
  const value=Number(mediaIndexE9.value);
  if(value>=1 && value<=experiencia_proE9.medios.length) {
    currentMediaE9=value-1;
    renderMediaE9();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE9.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE9.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE9();