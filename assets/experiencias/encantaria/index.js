/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewer = document.getElementById("mediaViewerexp-encantaria");
const prevBtn = document.getElementById("prevBtnexp-encantaria");
const nextBtn = document.getElementById("nextBtnexp-encantaria");
const mediaIndex = document.getElementById("mediaIndexexp-encantaria");
const totalMedia = document.getElementById("totalMediaexp-encantaria");
const loader = document.getElementById("loader-exp-encantaria");
let currentMedia = 0;
let pendingImage = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_pro = {
  nombre: "Experiencia en Encantaria",
  medios: [
    {
      type: "text",
      content:`
        <h3>Monitor de campamento con pernocta</h3>
        <p><b>Tipo de campamento:</b> Con pernocta de verano para chavales/as entre 12 años y 17 años</p>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Idioma:</b> Español</p>
        <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/aeKDyFfZmWuHVaAE6" target="_blank">Avenida Ordesa, 5, 22370 Broto, Huesca, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p> - Organización y puesta en marcha de actividades lúdico-educativas, deportivas y cooperativas</p>
        <p> - Organización y puesta en marcha de las actividades a realizar cada día</p>
        <p> - Resolución de conflictos que surjan</p>
        <p> - Trabajo diario con los participantes del campamento, incluso control durante la noche</p>
        <p> - Organización y puesta en marcha de excursiones por las cercanías de Broto: Monte Perdido y el Valle de Ordesa</p>
        <p> - Enseñanza de valores a los participantes del campamento</p>
        <p> - Coliderar todos los grupos, junto a compañeros monitores</p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/8P03mjwR/IMG-20250730-173041.png"},
    {type: "image", src: "https://i.postimg.cc/wTvZNh5x/IMG-20250730-173321.png"},
    {type: "image", src: "https://i.postimg.cc/44wjn89F/IMG-20250730-173514.png"},
    {type: "image", src: "https://i.postimg.cc/zBz0rr0D/IMG-20250730-173851.png"},
    {type: "image", src: "https://i.postimg.cc/CKHmX1C6/IMG-20250730-174135.png"},
    {type: "image", src: "https://i.postimg.cc/dQWSJLbb/IMG-20250730-175717.png"},
    {type: "image", src: "https://i.postimg.cc/nhmdKTXx/IMG-20250730-175423.png"},
    {type: "image", src: "https://i.postimg.cc/DzKxxsGX/IMG-20250730-180402.png"},
    {type: "image", src: "https://i.postimg.cc/ZK27yXKj/IMG-20250730-181857.png"},
    {type: "image", src: "https://i.postimg.cc/k5Xv2v37/IMG-20250731-120746.png"},
    {type: "image", src: "https://i.postimg.cc/SNPhTDdv/IMG-20250731-120719-860.webp"},
    {type: "image", src: "https://i.postimg.cc/hGLRGgBk/IMG-20250731-121208.png"},
    {type: "image", src: "https://i.postimg.cc/YCmwJYyq/IMG-20250731-121410-875.webp"},
    {type: "image", src: "https://i.postimg.cc/k56FNX4H/IMG-20250731-121447-738.webp"},
    {type: "image", src: "https://i.postimg.cc/NjPkrrgT/IMG-20250731-122003.png"},
    {type: "image", src: "https://i.postimg.cc/x1dPCPSn/IMG-20250731-122020.png"},
    {type: "image", src: "https://i.postimg.cc/rFjJMP3f/IMG-20250731-122801.png"},
    {type: "image", src: "https://i.postimg.cc/X74LMbHZ/IMG-20250731-122812.png"},
    {type: "image", src: "https://i.postimg.cc/MZy5rTD2/IMG-20250731-123452.png"},
    {type: "image", src: "https://i.postimg.cc/BbGgn9JV/IMG-20250731-124645.png"},
    {type: "image", src: "https://i.postimg.cc/Wz67DW3b/IMG-20250731-125047.png"},
    {type: "image", src: "https://i.postimg.cc/G2DKRhnD/IMG-20250731-125928.png"},
    {type: "image", src: "https://i.postimg.cc/nLCTdGd0/IMG-20250731-130913.png"},
    {type: "image", src: "https://i.postimg.cc/bvWg4SW8/IMG-20250731-130846-074.webp"},
    {type: "image", src: "https://i.postimg.cc/g2cghW39/IMG-20250731-131258.png"},
    {type: "image", src: "https://i.postimg.cc/2SH2FKx1/IMG-20250731-131247.png"},
    {type: "image", src: "https://i.postimg.cc/RVLPqF6Q/IMG-20250731-131316.png"},
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> +34 618 46 01 64</p>
        <p><b>Correo electrónico:</b> encantaria@encantaria.com</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/kpBck7CMbPtu5bwg9" target="_blank">Cabañera Real, 7, 22520 Fraga, Huesca, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Fecha:</b> Agosto 2018</p>
        <p><b>Motivo:</b> Contrato de verano finito</p>
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
function mostrarLoader() {
  loader.style.display = "block";
  viewer.style.display = "none";
}

function ocultarLoader() {
  loader.style.display = "none";
}

function cargarImagen(url) {
  if (!url) {
    viewer.innerHTML = "";
    viewer.style.display = "none";
    ocultarLoader();
    return;
  }

  mostrarLoader();

  const img = new Image();
  pendingImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImage !== img) return;

    viewer.innerHTML = "";
    viewer.appendChild(img);

    viewer.style.display = "block";
    ocultarLoader();

    pendingImage = null;
  };

  img.onerror = () => {
    if (pendingImage !== img) return;

    viewer.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewer.style.display = "block";
    ocultarLoader();

    pendingImage = null;
  };

  img.src = url;
}

function renderMedia() {
  const media = experiencia_pro.medios[currentMedia];
  viewer.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagen(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoader();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewer.style.display = "block";
    viewer.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewer.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndex.value=currentMedia+1;
  totalMedia.textContent = experiencia_pro.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtn.addEventListener("click", () => {
  currentMedia++;
  if(currentMedia >= experiencia_pro.medios.length) {
    currentMedia=0;
  }
  renderMedia();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtn.addEventListener("click",() => {
  currentMedia--;
  if(currentMedia < 0) {
    currentMedia = experiencia_pro.medios.length-1;
  }
  renderMedia();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndex.addEventListener("change", () => {
  const value=Number(mediaIndex.value);
  if(value>=1 && value<=experiencia_pro.medios.length) {
    currentMedia=value-1;
    renderMedia();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtn.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtn.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMedia();