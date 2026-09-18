/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE8 = document.getElementById("mediaViewerE8");
const prevBtnE8 = document.getElementById("prevBtnE8");
const nextBtnE8 = document.getElementById("nextBtnE8");
const mediaIndexE8 = document.getElementById("mediaIndexE8");
const totalMediaE8 = document.getElementById("totalMediaE8");
const loaderE8 = document.getElementById("loader-e8");
let currentMediaE8 = 0;
let pendingImageE8 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE8 = {
  nombre: "Experiencia en Accenture",
  medios: [
    {
      type: "text",
      content:`
        <h3>ALM Engineer</h3>
        <p><b>Tipo de contrato:</b> Jornada completa</p>
        <p><b>Modo de trabajo:</b> Remoto</p>
        <p><b>Idioma:</b> Inglés y Español</p>
        <p><b>Proyecto/Cliente:</b> Allianz Italia</p>
        <p><b>Departamento:</b> Migration & Mainframe Modernization</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p> - Integración en el equipo de modernización de sistemas Mainframe</p>
        <p> - Diseñar y desarrollar componentes dentro del nuevo ecosistema distribuido</p>
        <p> - Soporte técnico a nivel scripting, automatización y procesos asociados a la transición tecnológica</p>
        <p> - Colaborar con arquitectos hardware y software para definir la estructura del nuevo entorno</p>
        <p> - Interactuar con un equipo multidisciplinar distribuido en varios proyectos de desarrollo</p>
      `
    },
    {
      type: "image",
      src: "https://i.postimg.cc/5yqmqzxf/IMG-20260803-171106-708.webp"
    },
    {
      type: "image",
      src: "https://i.postimg.cc/wMckcN66/IMG-20260511-154753.jpg"
    },
    {
      type: "video",
      src: "https://streamable.com/e/60gr5n"
    },
    {
      type: "image",
      src: "https://i.postimg.cc/50RtySjF/IMG-20260918-151158-559.webp"
    },
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> +34 91 596 60 00</p>
        <p><b>Correo electrónico:</b> a.fernandez.perez@accenture.com</p>
        <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/iv9Lcj7Sapg59diG7" target="_blank">Paseo de la Castellana, 85, Tetuán, 28046, Madrid, España</a></p>
      `
    }
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderE8() {
  loaderE8.style.display = "block";
  viewerE8.style.display = "none";
}

function ocultarLoaderE8() {
  loaderE8.style.display = "none";
}

function cargarImagenE8(url) {
  if (!url) {
    viewerE8.innerHTML = "";
    viewerE8.style.display = "none";
    ocultarLoaderE8();
    return;
  }

  mostrarLoaderE8();

  const img = new Image();
  pendingImageE8 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE8 !== img) return;

    viewerE8.innerHTML = "";
    viewerE8.appendChild(img);

    viewerE8.style.display = "block";
    ocultarLoaderE8();

    pendingImageE8 = null;
  };

  img.onerror = () => {
    if (pendingImageE8 !== img) return;

    viewerE8.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE8.style.display = "block";
    ocultarLoaderE8();

    pendingImageE8 = null;
  };

  img.src = url;
}

function renderMediaE8() {
  const media = experiencia_proE8.medios[currentMediaE8];
  viewerE8.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE8(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE8();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE8.style.display = "block";
    viewerE8.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE8.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE8.value=currentMediaE8+1;
  totalMediaE8.textContent = experiencia_proE8.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE8.addEventListener("click", () => {
  currentMediaE8++;
  if(currentMediaE8 >= experiencia_proE8.medios.length) {
    currentMediaE8=0;
  }
  renderMediaE8();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE8.addEventListener("click",()=>{
  currentMediaE8--;
  if(currentMediaE8 < 0) {
    currentMediaE8 = experiencia_proE8.medios.length-1;
  }
  renderMediaE8();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE8.addEventListener("change", () => {
  const value=Number(mediaIndexE8.value);
  if(value>=1 && value<=experiencia_proE8.medios.length) {
    currentMediaE8=value-1;
    renderMediaE8();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE8.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE8.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE8();
