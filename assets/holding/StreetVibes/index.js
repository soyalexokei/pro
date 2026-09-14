/****************************************************/
/* ELEMENTOS DEL HOLDING */
/****************************************************/
const viewerH2 = document.getElementById("mediaViewerH2");
const prevBtnH2 = document.getElementById("prevBtnH2");
const nextBtnH2 = document.getElementById("nextBtnH2");
const mediaIndexH2 = document.getElementById("mediaIndexH2");
const totalMediaH2 = document.getElementById("totalMediaH2");
const loaderH2 = document.getElementById("loader-h2");
let currentMediaH2 = 0;
let pendingImageH2 = null;

/****************************************************/
/* DATOS DEL HOLDING */
/****************************************************/
const holdingH2 = {
  nombre: "Holding de Street Vibes",
  medios: [
    {
      type: "text",
      content:`
        <p><b>Descripción:</b> Eventos sociales que conectan personas, culturas y aventuras</p><br>
        <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/oi9XKHWX9ETs3JTS6" target="_blank">Locales por la Provincia de Madrid (España)</a></p>
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
function mostrarLoaderH2() {
  loaderH2.style.display = "block";
  viewerH2.style.display = "none";
}

function ocultarLoaderH2() {
  loaderH2.style.display = "none";
}

function cargarImagenH2(url) {
  if (!url) {
    viewerH2.innerHTML = "";
    viewerH2.style.display = "none";
    ocultarLoaderH2();
    return;
  }

  mostrarLoaderH2();

  const img = new Image();
  pendingImageH2 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageH2 !== img) return;

    viewerH2.innerHTML = "";
    viewerH2.appendChild(img);

    viewerH2.style.display = "block";
    ocultarLoaderH2();

    pendingImageH2 = null;
  };

  img.onerror = () => {
    if (pendingImageH2 !== img) return;

    viewerH2.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerH2.style.display = "block";
    ocultarLoaderH2();

    pendingImageH2 = null;
  };

  img.src = url;
}

function renderMediaH2() {
  const media = holdingH2.medios[currentMediaH2];
  viewerH2.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenH2(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderH2();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerH2.style.display = "block";
    viewerH2.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerH2.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexH2.value=currentMediaH2+1;
  totalMediaH2.textContent = holdingH2.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnH2.addEventListener("click", () => {
  currentMediaH2++;
  if(currentMediaH2 >= holdingH2.medios.length) {
    currentMediaH2=0;
  }
  renderMediaH2();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnH2.addEventListener("click",()=>{
  currentMediaH2--;
  if(currentMediaH2 < 0) {
    currentMediaH2 = holdingH2.medios.length-1;
  }
  renderMediaH2();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexH2.addEventListener("change", () => {
  const value=Number(mediaIndexH2.value);
  if(value>=1 && value<=holdingH2.medios.length) {
    currentMediaH2=value-1;
    renderMediaH2();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnH2.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnH2.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaH2();