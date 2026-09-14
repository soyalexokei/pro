/****************************************************/
/* ELEMENTOS DEL HOLDING */
/****************************************************/
const viewerH3 = document.getElementById("mediaViewerH3");
const prevBtnH3 = document.getElementById("prevBtnH3");
const nextBtnH3 = document.getElementById("nextBtnH3");
const mediaIndexH3 = document.getElementById("mediaIndexH3");
const totalMediaH3 = document.getElementById("totalMediaH3");
const loaderH3 = document.getElementById("loader-h3");
let currentMediaH3 = 0;
let pendingImageH3 = null;

/****************************************************/
/* DATOS DEL HOLDING */
/****************************************************/
const holdingH3 = {
  nombre: "Holding de The Club Lab",
  medios: [
    {
      type: "text",
      content:`
        <p><b>Descripción:</b> Laboratorio tecnológico dedicado a la automatización de empresas con IA</p><br>
        <p><b>Ubicación:</b> Online</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Proyectos Web</h3>
        <p><b>Descripción:</b> Consisten en proyectos de programación web en JavaScript, HTML y CSS</p>
        <p><b>Listado de proyectos:</b></p>
        <ul>
          <p><b>1. Calculadora Web:</b> <a href="proyecto1/index.html">Acceder</a></p>
          <p><b>2. Kick Blocks Game:</b> <a href="proyecto2/index.html">Acceder</a></p>
          <img src="logo_KickBlocks.png"/>
        </ul>
      `
    }
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL HOLDING */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderH3() {
  loaderH3.style.display = "block";
  viewerH3.style.display = "none";
}

function ocultarLoaderH3() {
  loaderH3.style.display = "none";
}

function cargarImagenH3(url) {
  if (!url) {
    viewerH3.innerHTML = "";
    viewerH3.style.display = "none";
    ocultarLoaderH3();
    return;
  }

  mostrarLoaderH3();

  const img = new Image();
  pendingImageH3 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageH3 !== img) return;

    viewerH3.innerHTML = "";
    viewerH3.appendChild(img);

    viewerH3.style.display = "block";
    ocultarLoaderH3();

    pendingImageH3 = null;
  };

  img.onerror = () => {
    if (pendingImageH3 !== img) return;

    viewerH3.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerH3.style.display = "block";
    ocultarLoaderH3();

    pendingImageH3 = null;
  };

  img.src = url;
}

function renderMediaH3() {
  const media = holdingH3.medios[currentMediaH3];
  viewerH3.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenH3(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderH3();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerH3.style.display = "block";
    viewerH3.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerH3.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexH3.value=currentMediaH3+1;
  totalMediaH3.textContent = holdingH3.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnH3.addEventListener("click", () => {
  currentMediaH3++;
  if(currentMediaH3 >= holdingH3.medios.length) {
    currentMediaH3=0;
  }
  renderMediaH3();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnH3.addEventListener("click",()=>{
  currentMediaH3--;
  if(currentMediaH3 < 0) {
    currentMediaH3 = holdingH3.medios.length-1;
  }
  renderMediaH3();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexH3.addEventListener("change", () => {
  const value=Number(mediaIndexH3.value);
  if(value>=1 && value<=holdingH3.medios.length) {
    currentMediaH3=value-1;
    renderMediaH3();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnH3.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnH3.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaH3();