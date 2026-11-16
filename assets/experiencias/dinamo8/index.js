/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewer = document.getElementById("mediaViewerexp-dnmo8");
const prevBtn = document.getElementById("prevBtnexp-dnmo8");
const nextBtn = document.getElementById("nextBtnexp-dnmo8");
const mediaIndex = document.getElementById("mediaIndexexp-dnmo8");
const totalMedia = document.getElementById("totalMediaexp-dnmo8");
const loader = document.getElementById("loader-exp-dnmo8");
let currentMedia = 0;
let pendingImage = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_pro = {
  nombre: "Experiencia en Dinamo 8 Educación, Cultura y Deportes",
  medios: [
    {
      type: "text",
      content:`
        <h3>Monitor de campamento urbano</h3>
        <p><b>Tipo de campamento:</b> Urbano de verano, sin pernocta y para niños/as entre 4 años y 12 años</p>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Idioma:</b> Español</p>
        <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/DDPAQ33WULPz9K3v8" target="_blank">CEIP Ángel González, Humanes de Madrid, 12, 28914 Leganés, Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones:</b></p>
        <p> - Organización y puesta en marcha de actividades lúdico-educativas, deportivas y cooperativas</p>
        <p> - Monitor de desayuno, piscolabis y comidas para controlar al grupo de menores</p>
        <p> - Resolución de conflictos que surjan</p>
        <p> - Proactividad durante la duración de la jornada laboral</p>
        <p> - Entretenimiento y organización del tiempo libre del grupo</p>
        <p> - Enseñanza de valores al grupo</p>
        <p> - Liderar el grupo</p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/jj1LZHkQ/1.jpg"},
    {type: "image", src: "https://i.postimg.cc/XYQZySfP/2.jpg"},
    {type: "image", src: "https://i.postimg.cc/hj7hwXkF/3.jpg"},
    {type: "image", src: "https://i.postimg.cc/hGvXLyMt/4.jpg"},
    {type: "image", src: "https://i.postimg.cc/jSmb1Mt5/5.png"},
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> 91 591 49 54</p>
        <p><b>Correo electrónico:</b> info@dnmo.es</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/DJ4MAzkqbHteYiZd9" target="_blank">Mercedes Rodríguez, 11, Carabanchel, 28044 Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Fecha:</b> Julio 2017</p>
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