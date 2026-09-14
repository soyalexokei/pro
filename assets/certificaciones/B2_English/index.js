/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC3 = document.getElementById("mediaViewerC3");
const prevBtnC3 = document.getElementById("prevBtnC3");
const nextBtnC3 = document.getElementById("nextBtnC3");
const mediaIndexC3 = document.getElementById("mediaIndexC3");
const totalMediaC3 = document.getElementById("totalMediaC3");
const loaderC3 = document.getElementById("loader-c3");
let currentMediaC3 = 0;
let pendingImageC3 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC3 = {
  nombre: "Certificado: B2 de inglés",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación B2 de inglés</h3>
        <p><b>Por medio de:</b> <a href="https://www.britishcouncil.es/en/exam/aptis" target="_blank">British Council - Aptis</a></p>
        <p>
          <b>Historial de la obtención del Nivel B2:</b> Estuve estudiando inglés en el <a class="otros-enlaces" href="https://www.britishcouncil.es/" target="_blank">British Council</a> de
          Villaviciosa de Odón (Madrid, España), donde cursé y aprobé los siguientes niveles: Nivel Pink (2003/04), Nivel Yellow (2004/05),
          Nivel Red (2005/06), Nivel Junior 1 (2006/07), Nivel Junior 2 (2007/08), Nivel Junior 3 (2008/09), Nivel Junior 4 (2009/10),
          Nivel Senior 1 (2010/11) y Nivel Senior 2 (2011/12). En total estuve 9 años. Aunque la obtención del nivel B2 oficial lo obtuve en octubre de 2020, después de haber ido a trabajar a Wisconsin Dells
          (Wisconsin, Estados Unidos) en 2019.
        </p>
        <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Certificado enfocado a negocio:</b> <i class="fa fa-globe"></i><a href="English-for-Companies-Certified.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Certificado obtenido por Capgemini Engineering:</b> <i class="fa fa-globe"></i><a href="Certificado-Ingles-Capgemini.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del certificado</h3>
        <img src="logo_B2.png"/>
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
function mostrarLoaderC3() {
  loaderC3.style.display = "block";
  viewerC3.style.display = "none";
}

function ocultarLoaderC3() {
  loaderC3.style.display = "none";
}

function cargarImagenC3(url) {
  if (!url) {
    viewerC3.innerHTML = "";
    viewerC3.style.display = "none";
    ocultarLoaderC3();
    return;
  }

  mostrarLoaderC3();

  const img = new Image();
  pendingImageC3 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC3 !== img) return;

    viewerC3.innerHTML = "";
    viewerC3.appendChild(img);

    viewerC3.style.display = "block";
    ocultarLoaderC3();

    pendingImageC3 = null;
  };

  img.onerror = () => {
    if (pendingImageC3 !== img) return;

    viewerC3.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC3.style.display = "block";
    ocultarLoaderC3();

    pendingImageC3 = null;
  };

  img.src = url;
}

function renderMediaC3() {
  const media = certificadoC3.medios[currentMediaC3];
  viewerC3.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC3(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC3();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC3.style.display = "block";
    viewerC3.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC3.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC3.value=currentMediaC3+1;
  totalMediaC3.textContent = certificadoC3.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC3.addEventListener("click", () => {
  currentMediaC3++;
  if(currentMediaC3 >= certificadoC3.medios.length) {
    currentMediaC3=0;
  }
  renderMediaC3();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC3.addEventListener("click",()=>{
  currentMediaC3--;
  if(currentMediaC3 < 0) {
    currentMediaC3 = certificadoC3.medios.length-1;
  }
  renderMediaC3();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC3.addEventListener("change", () => {
  const value=Number(mediaIndexC3.value);
  if(value>=1 && value<=certificadoC3.medios.length) {
    currentMediaC3=value-1;
    renderMediaC3();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC3.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC3.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC3();