/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC9 = document.getElementById("mediaViewerC9");
const prevBtnC9 = document.getElementById("prevBtnC9");
const nextBtnC9 = document.getElementById("nextBtnC9");
const mediaIndexC9 = document.getElementById("mediaIndexC9");
const totalMediaC9 = document.getElementById("totalMediaC9");
const loaderC9 = document.getElementById("loader-c9");
let currentMediaC9 = 0;
let pendingImageC9 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC9 = {
  nombre: "Certificado: Monitor de Ocio y Tiempo Libre",
  medios: [
    {
      type: "text",
      content:`
        <h3>Curso de Monitor de Ocio y Tiempo Libre</h3>
        <p><b>Organiza:</b> <a href="https://maps.app.goo.gl/QnbAnTh6U4i8aN2K7" target="_blank">ISADIA Aventura, María Teresa, 11, Salamanca, 28028 Madrid, España</a></p>
        <p><b>Lugar del curso:</b> <a href="https://maps.app.goo.gl/31KWtftYKaKv5CdZA" target="_blank">Universidad Europea de Madrid, Tajo, s/n, 28670 Villaviciosa de Odón, Madrid, España</a></p>
        <p><b>Periodo del Curso:</b> Todos los fines de semana de febrero, marzo y abril de 2017</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Certificado.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Memoria/Proyecto Final del Curso:</b> <i class="fa fa-globe"></i><a href="ProyectoFinal-MonitorOTL.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Web de la empresa organizadora:</b> <i class="fa fa-globe"></i><a href="https://isadia-aventura.com/actividades/curso-de-monitor-de-ocio-y-tiempo-libre/" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Teléfono de la empresa organizadora:</b> +34 657 51 00 87</p>
        <p><b>Correo electrónico de la empresa organizadora:</b> info@isadia-aventura.com</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Vídeo del Curso</h3>
        <iframe width="100%" height="100%" src="https://streamable.com/e/9teayc"></iframe>
      `
    },
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC9() {
  loaderC9.style.display = "block";
  viewerC9.style.display = "none";
}

function ocultarLoaderC9() {
  loaderC9.style.display = "none";
}

function cargarImagenC9(url) {
  if (!url) {
    viewerC9.innerHTML = "";
    viewerC9.style.display = "none";
    ocultarLoaderC9();
    return;
  }

  mostrarLoaderC9();

  const img = new Image();
  pendingImageC9 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC9 !== img) return;

    viewerC9.innerHTML = "";
    viewerC9.appendChild(img);

    viewerC9.style.display = "block";
    ocultarLoaderC9();

    pendingImageC9 = null;
  };

  img.onerror = () => {
    if (pendingImageC9 !== img) return;

    viewerC9.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC9.style.display = "block";
    ocultarLoaderC9();

    pendingImageC9 = null;
  };

  img.src = url;
}

function renderMediaC9() {
  const media = certificadoC9.medios[currentMediaC9];
  viewerC9.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC9(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC9();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC9.style.display = "block";
    viewerC9.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC9.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC9.value=currentMediaC9+1;
  totalMediaC9.textContent = certificadoC9.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC9.addEventListener("click", () => {
  currentMediaC9++;
  if(currentMediaC9 >= certificadoC9.medios.length) {
    currentMediaC9=0;
  }
  renderMediaC9();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC9.addEventListener("click",()=>{
  currentMediaC9--;
  if(currentMediaC9 < 0) {
    currentMediaC9 = certificadoC9.medios.length-1;
  }
  renderMediaC9();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC9.addEventListener("change", () => {
  const value=Number(mediaIndexC9.value);
  if(value>=1 && value<=certificadoC9.medios.length) {
    currentMediaC9=value-1;
    renderMediaC9();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC9.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC9.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC9();