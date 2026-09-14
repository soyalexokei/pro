/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC13 = document.getElementById("mediaViewerC13");
const prevBtnC13 = document.getElementById("prevBtnC13");
const nextBtnC13 = document.getElementById("nextBtnC13");
const mediaIndexC13 = document.getElementById("mediaIndexC13");
const totalMediaC13 = document.getElementById("totalMediaC13");
const loaderC13 = document.getElementById("loader-c13");
let currentMediaC13 = 0;
let pendingImageC13 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC13 = {
  nombre: "Certificado: Adobe After Effects",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación Adobe After Effects</h3>
        <p><b>Organizado por:</b> <a href="https://share.google/b2EtrJ6jZuuxrszqd" target="_blank">CUESA-URJC</a></p>
        <p><b>Lugar del curso:</b> <a href="https://maps.app.goo.gl/Jasttnmqg2LKnVxy8" target="_blank">Camino del Molino, 5, 28942 Fuenlabrada, Madrid, España</a></p>
        <p><b>Modo del curso:</b> Presencial</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Certificacion-Ae.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
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
function mostrarLoaderC13() {
  loaderC13.style.display = "block";
  viewerC13.style.display = "none";
}

function ocultarLoaderC13() {
  loaderC13.style.display = "none";
}

function cargarImagenC13(url) {
  if (!url) {
    viewerC13.innerHTML = "";
    viewerC13.style.display = "none";
    ocultarLoaderC13();
    return;
  }

  mostrarLoaderC13();

  const img = new Image();
  pendingImageC13 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC13 !== img) return;

    viewerC13.innerHTML = "";
    viewerC13.appendChild(img);

    viewerC13.style.display = "block";
    ocultarLoaderC13();

    pendingImageC13 = null;
  };

  img.onerror = () => {
    if (pendingImageC13 !== img) return;

    viewerC13.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC13.style.display = "block";
    ocultarLoaderC13();

    pendingImageC13 = null;
  };

  img.src = url;
}

function renderMediaC13() {
  const media = certificadoC13.medios[currentMediaC13];
  viewerC13.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC13(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC13();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC13.style.display = "block";
    viewerC13.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC13.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC13.value=currentMediaC13+1;
  totalMediaC13.textContent = certificadoC13.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC13.addEventListener("click", () => {
  currentMediaC13++;
  if(currentMediaC13 >= certificadoC13.medios.length) {
    currentMediaC13=0;
  }
  renderMediaC13();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC13.addEventListener("click",()=>{
  currentMediaC13--;
  if(currentMediaC13 < 0) {
    currentMediaC13 = certificadoC13.medios.length-1;
  }
  renderMediaC13();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC13.addEventListener("change", () => {
  const value=Number(mediaIndexC13.value);
  if(value>=1 && value<=certificadoC13.medios.length) {
    currentMediaC13=value-1;
    renderMediaC13();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC13.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC13.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC13();