/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC10 = document.getElementById("mediaViewerC10");
const prevBtnC10 = document.getElementById("prevBtnC10");
const nextBtnC10 = document.getElementById("nextBtnC10");
const mediaIndexC10 = document.getElementById("mediaIndexC10");
const totalMediaC10 = document.getElementById("totalMediaC10");
const loaderC10 = document.getElementById("loader-c10");
let currentMediaC10 = 0;
let pendingImageC10 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC10 = {
  nombre: "Certificado: Monitor de Kayak y SUP",
  medios: [
    {
      type: "text",
      content:`
        <h3>Curso de Monitor de Kayak y SUP</h3>
        <p><b>Organiza:</b> <a href="https://maps.app.goo.gl/Xb8g5Df2ik8XSJR27" target="_blank">Asdon Aventura, Las Eras, 8, Poveda de la Sierra, 19463 Guadalajara, España</a></p>
        <p><b>Lugar del curso:</b> <a href="https://maps.app.goo.gl/sBaoNStF6Yingjhf7" target="_blank">Río Alberche, s/n, 28696 Pelayos de la Presa, Madrid, España</a></p>
        <p><b>Periodo del Curso:</b> Dos fines de semana de mayo 2021</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="titulo_kayak_sup.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Teléfonos de la empresa organizadora:</b> +34 667 759 645 y +34 616 250 495</p>
        <p><b>Correo electrónico de la empresa organizadora:</b> info@asdonaventura.com</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo de la empresa + Background del curso</h3>
        <img src="kayak-y-padelSurf.png"/>
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
function mostrarLoaderC10() {
  loaderC10.style.display = "block";
  viewerC10.style.display = "none";
}

function ocultarLoaderC10() {
  loaderC10.style.display = "none";
}

function cargarImagenC10(url) {
  if (!url) {
    viewerC10.innerHTML = "";
    viewerC10.style.display = "none";
    ocultarLoaderC10();
    return;
  }

  mostrarLoaderC10();

  const img = new Image();
  pendingImageC10 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC10 !== img) return;

    viewerC10.innerHTML = "";
    viewerC10.appendChild(img);

    viewerC10.style.display = "block";
    ocultarLoaderC10();

    pendingImageC10 = null;
  };

  img.onerror = () => {
    if (pendingImageC10 !== img) return;

    viewerC10.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC10.style.display = "block";
    ocultarLoaderC10();

    pendingImageC10 = null;
  };

  img.src = url;
}

function renderMediaC10() {
  const media = certificadoC10.medios[currentMediaC10];
  viewerC10.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC10(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC10();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC10.style.display = "block";
    viewerC10.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC10.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC10.value=currentMediaC10+1;
  totalMediaC10.textContent = certificadoC10.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC10.addEventListener("click", () => {
  currentMediaC10++;
  if(currentMediaC10 >= certificadoC10.medios.length) {
    currentMediaC10=0;
  }
  renderMediaC10();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC10.addEventListener("click",()=>{
  currentMediaC10--;
  if(currentMediaC10 < 0) {
    currentMediaC10 = certificadoC10.medios.length-1;
  }
  renderMediaC10();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC10.addEventListener("change", () => {
  const value=Number(mediaIndexC10.value);
  if(value>=1 && value<=certificadoC10.medios.length) {
    currentMediaC10=value-1;
    renderMediaC10();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC10.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC10.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC10();