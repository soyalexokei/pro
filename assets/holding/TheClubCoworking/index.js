/****************************************************/
/* ELEMENTOS DEL HOLDING */
/****************************************************/
const viewerH1 = document.getElementById("mediaViewerH1");
const prevBtnH1 = document.getElementById("prevBtnH1");
const nextBtnH1 = document.getElementById("nextBtnH1");
const mediaIndexH1 = document.getElementById("mediaIndexH1");
const totalMediaH1 = document.getElementById("totalMediaH1");
const loaderH1 = document.getElementById("loader-h1");
let currentMediaH1 = 0;
let pendingImageH1 = null;

/****************************************************/
/* DATOS DEL HOLDING */
/****************************************************/
const holdingH1 = {
  nombre: "Holding de The Club Coworking",
  medios: [
    {
      type: "text",
      content:`
        <p><b>Descripción:</b> Espacios de trabajo flexibles, con oficinas, despachos y salas de reuniones, para profesionales, autónomos y empresas</p><br>
        <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/GCkMH4kBiGiShaJr7" target="_blank">The Club Coworking, Comunidad de Madrid 41, C.C. BURGOCENTRO I, Locales 98 y 110, 28231 Las Rozas de Madrid, Madrid, España</a></p>
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
function mostrarLoaderH1() {
  loaderH1.style.display = "block";
  viewerH1.style.display = "none";
}

function ocultarLoaderH1() {
  loaderH1.style.display = "none";
}

function cargarImagenH1(url) {
  if (!url) {
    viewerH1.innerHTML = "";
    viewerH1.style.display = "none";
    ocultarLoaderH1();
    return;
  }

  mostrarLoaderH1();

  const img = new Image();
  pendingImageH1 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageH1 !== img) return;

    viewerH1.innerHTML = "";
    viewerH1.appendChild(img);

    viewerH1.style.display = "block";
    ocultarLoaderH1();

    pendingImageH1 = null;
  };

  img.onerror = () => {
    if (pendingImageH1 !== img) return;

    viewerH1.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerH1.style.display = "block";
    ocultarLoaderH1();

    pendingImageH1 = null;
  };

  img.src = url;
}

function renderMediaH1() {
  const media = holdingH1.medios[currentMediaH1];
  viewerH1.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenH1(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderH1();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerH1.style.display = "block";
    viewerH1.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerH1.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexH1.value=currentMediaH1+1;
  totalMediaH1.textContent = holdingH1.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnH1.addEventListener("click", () => {
  currentMediaH1++;
  if(currentMediaH1 >= holdingH1.medios.length) {
    currentMediaH1=0;
  }
  renderMediaH1();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnH1.addEventListener("click",()=>{
  currentMediaH1--;
  if(currentMediaH1 < 0) {
    currentMediaH1 = holdingH1.medios.length-1;
  }
  renderMediaH1();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexH1.addEventListener("change", () => {
  const value=Number(mediaIndexH1.value);
  if(value>=1 && value<=holdingH1.medios.length) {
    currentMediaH1=value-1;
    renderMediaH1();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnH1.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnH1.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaH1();