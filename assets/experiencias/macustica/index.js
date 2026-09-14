/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE5 = document.getElementById("mediaViewerE5");
const prevBtnE5 = document.getElementById("prevBtnE5");
const nextBtnE5 = document.getElementById("nextBtnE5");
const mediaIndexE5 = document.getElementById("mediaIndexE5");
const totalMediaE5 = document.getElementById("totalMediaE5");
const loaderE5 = document.getElementById("loader-e5");
let currentMediaE5 = 0;
let pendingImageE5 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE5 = {
  nombre: "Experiencia en Macústica",
  medios: [
    {
      type: "text",
      content:`
        <h3>Proyecto acústico en Mallorca</h3>
        <p><b>Tipo de contrato:</b> Jornada completa</p>
        <p><b>Por medio de:</b> Proyectos Empresariales Talento Futuro de <a href="https://www.urjc.es/todas-las-noticias-de-actualidad/9119-la-urjc-presenta-una-veintena-de-proyectos-empresariales-incubados-en-explorer-24" target="_blank">URJC</a> y <a href="https://www.bancosantander.es/universidades/emprendimiento" target="_blank">Banco Santander</a></p>
        <p><b>Remuneración:</b> Sí</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Idioma:</b> Español e Inglés</p>
        <p><b>Estudio acústico de ejemplo:</b> <i class="fa fa-globe"></i><a href="Estudio-Acustico.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p>
          - Estudios acústicos con Immi <br>
          - Mediciones sonométricas in situ <br>
          - Realización de informes acústicos en Word <br>
          - Programación de gráficas y mediciones en Excel <br>
          - Entender Reales Decretos acústicos
        </p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> +34 692 31 97 67</p>
        <p><b>Correos electrónicos:</b> info@macustica.com</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/pvzJzhVh5py8qydy6" target="_blank">Pérez Galdós, 3, 07300 Inca, Islas Baleares, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Motivo:</b> Proyecto acústico de duración finita</p>
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
function mostrarLoaderE5() {
  loaderE5.style.display = "block";
  viewerE5.style.display = "none";
}

function ocultarLoaderE5() {
  loaderE5.style.display = "none";
}

function cargarImagenE5(url) {
  if (!url) {
    viewerE5.innerHTML = "";
    viewerE5.style.display = "none";
    ocultarLoaderE5();
    return;
  }

  mostrarLoaderE5();

  const img = new Image();
  pendingImageE5 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE5 !== img) return;

    viewerE5.innerHTML = "";
    viewerE5.appendChild(img);

    viewerE5.style.display = "block";
    ocultarLoaderE5();

    pendingImageE5 = null;
  };

  img.onerror = () => {
    if (pendingImageE5 !== img) return;

    viewerE5.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE5.style.display = "block";
    ocultarLoaderE5();

    pendingImageE5 = null;
  };

  img.src = url;
}

function renderMediaE5() {
  const media = experiencia_proE5.medios[currentMediaE5];
  viewerE5.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE5(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE5();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE5.style.display = "block";
    viewerE5.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE5.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE5.value=currentMediaE5+1;
  totalMediaE5.textContent = experiencia_proE5.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE5.addEventListener("click", () => {
  currentMediaE5++;
  if(currentMediaE5 >= experiencia_proE5.medios.length) {
    currentMediaE5=0;
  }
  renderMediaE5();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE5.addEventListener("click",()=>{
  currentMediaE5--;
  if(currentMediaE5 < 0) {
    currentMediaE5 = experiencia_proE5.medios.length-1;
  }
  renderMediaE5();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE5.addEventListener("change", () => {
  const value=Number(mediaIndexE5.value);
  if(value>=1 && value<=experiencia_proE5.medios.length) {
    currentMediaE5=value-1;
    renderMediaE5();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE5.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE5.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE5();