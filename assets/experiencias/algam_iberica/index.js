/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE6 = document.getElementById("mediaViewerE6");
const prevBtnE6 = document.getElementById("prevBtnE6");
const nextBtnE6 = document.getElementById("nextBtnE6");
const mediaIndexE6 = document.getElementById("mediaIndexE6");
const totalMediaE6 = document.getElementById("totalMediaE6");
const loaderE6 = document.getElementById("loader-e6");
let currentMediaE6 = 0;
let pendingImageE6 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE6 = {
  nombre: "Experiencia en Algam Ibérica",
  medios: [
    {
      type: "text",
      content:`
        <h3>Proyecto de Sistemas de Videoconferencia</h3>
        <p><b>Tipo de contrato:</b> Jornada completa</p>
        <p><b>Por medio de:</b> Proyectos Empresariales Talento Futuro de <a href="https://www.urjc.es/todas-las-noticias-de-actualidad/9119-la-urjc-presenta-una-veintena-de-proyectos-empresariales-incubados-en-explorer-24" target="_blank">URJC</a> y <a href="https://www.bancosantander.es/universidades/emprendimiento" target="_blank">Banco Santander</a></p>
        <p><b>Remuneración:</b> Sí</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Idioma:</b> Español e Inglés</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p>
          - Programación audiovisual de salas de control y videoconferencia con Muse Automator de AMX, basado en JS y Python <br>
          - Configuración del sistema de sonido de las salas a través de Audio Architect y DSPs <br>
          - Realización de diagramas a través de Draw.IO <br>
          - Estudio acústico de salas a través del software DDA JBL <br>
          - Entender el funcionamiento de proyectos acústicos y de salas de control audiovisual
        </p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Carta profesional de mi puesto:</b></p>
        <img src="https://i.postimg.cc/4y6t9wDp/me-at-algam.png"/>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Viaje de formación de 4 días a Harman Pro (Apsley, Reino Unido):</b></p>
        <p>
          - <a href="https://pro.harman.com/" target="_blank">Harman Pro</a> es una empresa líder en la fabricación de equipos de sonido profesional.
          Trabaja con marcas como JBL, Soundcraft, entre otras.<br>
          - El viaje de formación se centró en aprender a configurar y programar sistemas de videoconferencia y control audiovisual, utilizando DSPs y el
          software de programación AMX Muse Automator.<br>
          - A continuación os mostraré momentos del viaje en imágenes y vídeos.
        </p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/dtHkCkk8/1.png"},
    {type: "image", src: "https://i.postimg.cc/PrrvNzxX/2.png"},
    {type: "video", src: "https://streamable.com/e/9zty5h"},
    {type: "video", src: "https://streamable.com/e/1y0fpi"},
    {type: "image", src: "https://i.postimg.cc/9QsDx6B0/5.png"},
    {type: "video", src: "https://streamable.com/e/fk8cpg"},
    {type: "video", src: "https://streamable.com/e/y1ndly"},
    {type: "video", src: "https://streamable.com/e/nflqqz"},
    {type: "image", src: "https://i.postimg.cc/138grmwb/9.png"},
    {type: "image", src: "https://i.postimg.cc/d3Q3kwJH/10.png"},
    {type: "image", src: "https://i.postimg.cc/pTJyLpM5/11.png"},
    {type: "image", src: "https://i.postimg.cc/k4mBCWzd/12.png"},
    {type: "image", src: "https://i.postimg.cc/5tv6DsP3/13.png"},
    {type: "image", src: "https://i.postimg.cc/tJrTFwTX/14.png"},
    {type: "image", src: "https://i.postimg.cc/dt1DJsHD/15.png"},
    {type: "image", src: "https://i.postimg.cc/hP5vjk6s/16.png"},
    {type: "image", src: "https://i.postimg.cc/Y28hcGxJ/17.png"},
    {type: "image", src: "https://i.postimg.cc/nh9zQdtJ/18.png"},
    {type: "image", src: "https://i.postimg.cc/DzVzQq2b/19.png"},
    {type: "image", src: "https://i.postimg.cc/8ChzZj5X/20.png"},
    {type: "video", src: "https://streamable.com/e/bu8vna"},
    {type: "image", src: "https://i.postimg.cc/TwfYFf5d/22.png"},
    {type: "video", src: "https://streamable.com/e/arfrhm"},
    {type: "video", src: "https://streamable.com/e/wr0x6s"},
    {type: "image", src: "https://i.postimg.cc/Tw0YXFnr/25.png"},
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono de Algam Ibérica:</b> +34 934 221 811</p>
        <p><b>Teléfono de Harman Pro:</b> +44 1 904 343 142</p>
        <p><b>Correo electrónico de Algam Ibérica:</b> mpunti@algamiberica.com (CEO)</p>
        <p><b>Correo electrónico de Harman Pro:</b> adam.findlay@harman.com (Director de Ingeniería de Ventas EMEA)</p>
        <p><b>Sede de Algam Ibérica:</b> <a href="https://maps.app.goo.gl/tpjyxcLFqDoqf9Wm6" target="_blank">Garcilaso, 11, Sant Andreu, 08027 Barcelona, España</a></p>
        <p><b>Sede de Harman Pro:</b> <a href="https://maps.app.goo.gl/uFuiPw5o9useeTax8" target="_blank">HARMAN, Westside, London Road, Hemel Hempstead HP3 9TD, Reino Unido</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Motivo:</b> Proyecto de Sistemas de Videoconferencia de duración finita</p>
      `
    },
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderE6() {
  loaderE6.style.display = "block";
  viewerE6.style.display = "none";
}

function ocultarLoaderE6() {
  loaderE6.style.display = "none";
}

function cargarImagenE6(url) {
  if (!url) {
    viewerE6.innerHTML = "";
    viewerE6.style.display = "none";
    ocultarLoaderE6();
    return;
  }

  mostrarLoaderE6();

  const img = new Image();
  pendingImageE6 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE6 !== img) return;

    viewerE6.innerHTML = "";
    viewerE6.appendChild(img);

    viewerE6.style.display = "block";
    ocultarLoaderE6();

    pendingImageE6 = null;
  };

  img.onerror = () => {
    if (pendingImageE6 !== img) return;

    viewerE6.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE6.style.display = "block";
    ocultarLoaderE6();

    pendingImageE6 = null;
  };

  img.src = url;
}

function renderMediaE6() {
  const media = experiencia_proE6.medios[currentMediaE6];
  viewerE6.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE6(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE6();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE6.style.display = "block";
    viewerE6.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE6.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE6.value=currentMediaE6+1;
  totalMediaE6.textContent = experiencia_proE6.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE6.addEventListener("click", () => {
  currentMediaE6++;
  if(currentMediaE6 >= experiencia_proE6.medios.length) {
    currentMediaE6=0;
  }
  renderMediaE6();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE6.addEventListener("click",()=>{
  currentMediaE6--;
  if(currentMediaE6 < 0) {
    currentMediaE6 = experiencia_proE6.medios.length-1;
  }
  renderMediaE6();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE6.addEventListener("change", () => {
  const value=Number(mediaIndexE6.value);
  if(value>=1 && value<=experiencia_proE6.medios.length) {
    currentMediaE6=value-1;
    renderMediaE6();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE6.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE6.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE6();