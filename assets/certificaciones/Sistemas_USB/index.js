/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC7 = document.getElementById("mediaViewerC7");
const prevBtnC7 = document.getElementById("prevBtnC7");
const nextBtnC7 = document.getElementById("nextBtnC7");
const mediaIndexC7 = document.getElementById("mediaIndexC7");
const totalMediaC7 = document.getElementById("totalMediaC7");
const loaderC7 = document.getElementById("loader-c7");
let currentMediaC7 = 0;
let pendingImageC7 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC7 = {
  nombre: "Certificado: Sistemas USB",
  medios: [
    {
      type: "text",
      content:`
        <h3>Educación Secundaria Obligatoria (ESO)</h3>
        <p><b>Centro Educativo:</b> <a href="https://maps.app.goo.gl/gWNBuUwKEQbjnYfR7" target="_blank">IES Profesor Máximo Trueba, Santillana del Mar, 22, 28660 Boadilla del Monte, Madrid, España</a></p>
        <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Cursos alcanzados:</b></p>
        <p> - <a href="PrimeroESO.pdf" target="_blank">1º de la E.S.O: 2009/10</a></p>
        <p> - 2º de la E.S.O: 2010/11</p>
        <p> - 3º de la E.S.O: 2011/12</p>
        <p> - <a href="CuartoESO.pdf" target="_blank">4º de la E.S.O: 2012/13</a></p>
        <p><b>Orla de Graduación de la E.S.O (junio 2013):</b> <i class="fa fa-globe"></i><a href="Graduacion_ESO.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Diploma de Aprovechamiento:</b> <i class="fa fa-globe"></i><a href="DiplomaAprovechamientoESO.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del Instituto</h3>
        <img src="logo_tuto.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de contacto del Instituto</h3>
        <p><b>Teléfono:</b> 91 632 15 12</p>
        <p><b>Correo electrónico:</b> secretaria.ies.maximotrueba.boadilla@educa.madrid.org</p>
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
function mostrarLoaderC7() {
  loaderC7.style.display = "block";
  viewerC7.style.display = "none";
}

function ocultarLoaderC7() {
  loaderC7.style.display = "none";
}

function cargarImagenC7(url) {
  if (!url) {
    viewerC7.innerHTML = "";
    viewerC7.style.display = "none";
    ocultarLoaderC7();
    return;
  }

  mostrarLoaderC7();

  const img = new Image();
  pendingImageC7 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC7 !== img) return;

    viewerC7.innerHTML = "";
    viewerC7.appendChild(img);

    viewerC7.style.display = "block";
    ocultarLoaderC7();

    pendingImageC7 = null;
  };

  img.onerror = () => {
    if (pendingImageC7 !== img) return;

    viewerC7.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC7.style.display = "block";
    ocultarLoaderC7();

    pendingImageC7 = null;
  };

  img.src = url;
}

function renderMediaC7() {
  const media = certificadoC7.medios[currentMediaC7];
  viewerC7.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC7(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC7();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC7.style.display = "block";
    viewerC7.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC7.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC7.value=currentMediaC7+1;
  totalMediaC7.textContent = certificadoC7.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC7.addEventListener("click", () => {
  currentMediaC7++;
  if(currentMediaC7 >= certificadoC7.medios.length) {
    currentMediaC7=0;
  }
  renderMediaC7();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC7.addEventListener("click",()=>{
  currentMediaC7--;
  if(currentMediaC7 < 0) {
    currentMediaC7 = certificadoC7.medios.length-1;
  }
  renderMediaC7();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC7.addEventListener("change", () => {
  const value=Number(mediaIndexC7.value);
  if(value>=1 && value<=certificadoC7.medios.length) {
    currentMediaC7=value-1;
    renderMediaC7();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC7.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC7.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC7();