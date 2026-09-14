/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC11 = document.getElementById("mediaViewerC11");
const prevBtnC11 = document.getElementById("prevBtnC11");
const nextBtnC11 = document.getElementById("nextBtnC11");
const mediaIndexC11 = document.getElementById("mediaIndexC11");
const totalMediaC11 = document.getElementById("totalMediaC11");
const loaderC11 = document.getElementById("loader-c11");
let currentMediaC11 = 0;
let pendingImageC11 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC11 = {
  nombre: "Certificado: Dante Audinate",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación Dante Audinate N1</h3>
        <p><b>Modo del curso:</b> Remoto</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Certificacion-Dante-Audinate-1.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Certificación Dante Audinate N2</h3>
        <p><b>Modo del curso:</b> Remoto</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Certificacion-Dante-Audinate-2.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Certificación Dante Audinate N3</h3>
        <p><b>Modo del curso:</b> Remoto</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Certificacion-Dante-Audinate-3.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Certificación Dante Audinate AV</h3>
        <p><b>Modo del curso:</b> Remoto</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Certificacion-Dante-Audinate-4.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
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
function mostrarLoaderC11() {
  loaderC11.style.display = "block";
  viewerC11.style.display = "none";
}

function ocultarLoaderC11() {
  loaderC11.style.display = "none";
}

function cargarImagenC11(url) {
  if (!url) {
    viewerC11.innerHTML = "";
    viewerC11.style.display = "none";
    ocultarLoaderC11();
    return;
  }

  mostrarLoaderC11();

  const img = new Image();
  pendingImageC11 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC11 !== img) return;

    viewerC11.innerHTML = "";
    viewerC11.appendChild(img);

    viewerC11.style.display = "block";
    ocultarLoaderC11();

    pendingImageC11 = null;
  };

  img.onerror = () => {
    if (pendingImageC11 !== img) return;

    viewerC11.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC11.style.display = "block";
    ocultarLoaderC11();

    pendingImageC11 = null;
  };

  img.src = url;
}

function renderMediaC11() {
  const media = certificadoC11.medios[currentMediaC11];
  viewerC11.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC11(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC11();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC11.style.display = "block";
    viewerC11.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC11.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC11.value=currentMediaC11+1;
  totalMediaC11.textContent = certificadoC11.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC11.addEventListener("click", () => {
  currentMediaC11++;
  if(currentMediaC11 >= certificadoC11.medios.length) {
    currentMediaC11=0;
  }
  renderMediaC11();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC11.addEventListener("click",()=>{
  currentMediaC11--;
  if(currentMediaC11 < 0) {
    currentMediaC11 = certificadoC11.medios.length-1;
  }
  renderMediaC11();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC11.addEventListener("change", () => {
  const value=Number(mediaIndexC11.value);
  if(value>=1 && value<=certificadoC11.medios.length) {
    currentMediaC11=value-1;
    renderMediaC11();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC11.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC11.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC11();