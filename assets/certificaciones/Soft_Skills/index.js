/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC14 = document.getElementById("mediaViewerC14");
const prevBtnC14 = document.getElementById("prevBtnC14");
const nextBtnC14 = document.getElementById("nextBtnC14");
const mediaIndexC14 = document.getElementById("mediaIndexC14");
const totalMediaC14 = document.getElementById("totalMediaC14");
const loaderC14 = document.getElementById("loader-c14");
let currentMediaC14 = 0;
let pendingImageC14 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC14 = {
  nombre: "Certificado: Soft Skills",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación Soft Skills</h3>
        <p><b>Organizado por:</b> <a href="https://maps.app.goo.gl/L6GM2iBD8GmtNWK5A" target="_blank">Randstad, Vía de los Poblados, 9, Edif Trianón, bloque B, 4ª planta, Hortaleza, 28033 Madrid, España</a></p>
        <p><b>Modo del curso:</b> Remoto</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="soft_skills.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
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
function mostrarLoaderC14() {
  loaderC14.style.display = "block";
  viewerC14.style.display = "none";
}

function ocultarLoaderC14() {
  loaderC14.style.display = "none";
}

function cargarImagenC14(url) {
  if (!url) {
    viewerC14.innerHTML = "";
    viewerC14.style.display = "none";
    ocultarLoaderC14();
    return;
  }

  mostrarLoaderC14();

  const img = new Image();
  pendingImageC14 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC14 !== img) return;

    viewerC14.innerHTML = "";
    viewerC14.appendChild(img);

    viewerC14.style.display = "block";
    ocultarLoaderC14();

    pendingImageC14 = null;
  };

  img.onerror = () => {
    if (pendingImageC14 !== img) return;

    viewerC14.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC14.style.display = "block";
    ocultarLoaderC14();

    pendingImageC14 = null;
  };

  img.src = url;
}

function renderMediaC14() {
  const media = certificadoC14.medios[currentMediaC14];
  viewerC14.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC14(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC14();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC14.style.display = "block";
    viewerC14.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC14.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC14.value=currentMediaC14+1;
  totalMediaC14.textContent = certificadoC14.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC14.addEventListener("click", () => {
  currentMediaC14++;
  if(currentMediaC14 >= certificadoC14.medios.length) {
    currentMediaC14=0;
  }
  renderMediaC14();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC14.addEventListener("click",()=>{
  currentMediaC14--;
  if(currentMediaC14 < 0) {
    currentMediaC14 = certificadoC14.medios.length-1;
  }
  renderMediaC14();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC14.addEventListener("change", () => {
  const value=Number(mediaIndexC14.value);
  if(value>=1 && value<=certificadoC14.medios.length) {
    currentMediaC14=value-1;
    renderMediaC14();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC14.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC14.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC14();