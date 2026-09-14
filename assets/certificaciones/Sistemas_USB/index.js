/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC12 = document.getElementById("mediaViewerC12");
const prevBtnC12 = document.getElementById("prevBtnC12");
const nextBtnC12 = document.getElementById("nextBtnC12");
const mediaIndexC12 = document.getElementById("mediaIndexC12");
const totalMediaC12 = document.getElementById("totalMediaC12");
const loaderC12 = document.getElementById("loader-c12");
let currentMediaC12 = 0;
let pendingImageC12 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC12 = {
  nombre: "Certificado: Sistemas USB",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación Sistemas USB</h3>
        <p><b>Organizado por:</b> <a href="https://maps.app.goo.gl/b1HdfeXqyRMeVLz6A" target="_blank">Crestron, Santa Leonor, 65, Edif A, Planta 4, San Blas-Canillejas, 28037 Madrid, España</a></p>
        <p><b>Modo del curso:</b> Presencial</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Certificado-USB-Crestron.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Contenidos de la certificación:</b> <i class="fa fa-globe"></i><a href="SistemasUSB-Crestron.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    }
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC12() {
  loaderC12.style.display = "block";
  viewerC12.style.display = "none";
}

function ocultarLoaderC12() {
  loaderC12.style.display = "none";
}

function cargarImagenC12(url) {
  if (!url) {
    viewerC12.innerHTML = "";
    viewerC12.style.display = "none";
    ocultarLoaderC12();
    return;
  }

  mostrarLoaderC12();

  const img = new Image();
  pendingImageC12 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC12 !== img) return;

    viewerC12.innerHTML = "";
    viewerC12.appendChild(img);

    viewerC12.style.display = "block";
    ocultarLoaderC12();

    pendingImageC12 = null;
  };

  img.onerror = () => {
    if (pendingImageC12 !== img) return;

    viewerC12.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC12.style.display = "block";
    ocultarLoaderC12();

    pendingImageC12 = null;
  };

  img.src = url;
}

function renderMediaC12() {
  const media = certificadoC12.medios[currentMediaC12];
  viewerC12.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC12(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC12();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC12.style.display = "block";
    viewerC12.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC12.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC12.value=currentMediaC12+1;
  totalMediaC12.textContent = certificadoC12.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC12.addEventListener("click", () => {
  currentMediaC12++;
  if(currentMediaC12 >= certificadoC12.medios.length) {
    currentMediaC12=0;
  }
  renderMediaC12();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC12.addEventListener("click",()=>{
  currentMediaC12--;
  if(currentMediaC12 < 0) {
    currentMediaC12 = certificadoC12.medios.length-1;
  }
  renderMediaC12();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC12.addEventListener("change", () => {
  const value=Number(mediaIndexC12.value);
  if(value>=1 && value<=certificadoC12.medios.length) {
    currentMediaC12=value-1;
    renderMediaC12();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC12.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC12.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC12();