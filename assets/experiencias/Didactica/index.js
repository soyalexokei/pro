/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE1 = document.getElementById("mediaViewerE1");
const prevBtnE1 = document.getElementById("prevBtnE1");
const nextBtnE1 = document.getElementById("nextBtnE1");
const mediaIndexE1 = document.getElementById("mediaIndexE1");
const totalMediaE1 = document.getElementById("totalMediaE1");
const loaderE1 = document.getElementById("loader-e1");
let currentMediaE1 = 0;
let pendingImageE1 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE1 = {
  nombre: "Experiencia en Grupo Didactia",
  medios: [
    {
      type: "text",
      content:`
        <h3>Profesor particular a domicilio</h3>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Idioma:</b> Español</p>
        <p><b>Estudiantes totales:</b> 15</p>
        <p><b>Lugar de las clases:</b> Domicilio particular de cada estudiante</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Asignaturas a impartir:</b></p>
        <p>- Matemáticas de la ESO y Bachillerato</p>
        <p>- Física de la ESO y Bachillerato</p>
        <p>- Tecnología de la ESO y Bachillerato</p>
        <p>- Informática y programación de la ESO y Bachillerato</p>
        <p>- Electrotecnia de 4º de la ESO y 1º Bachillerato</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> 91 591 75 90</p>
        <p><b>Correo electrónico:</b> info@grupodidactia.com</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/UFSKJctZkS7jTfCk7" target="_blank">Paseo de la Castellana, 194, Chamartín, 28046 Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Fecha:</b> Junio 2023</p>
        <p><b>Motivo:</b> Me desvinculo de la empresa y dejo de impartir clases a domicilio</p>
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
function mostrarLoaderE1() {
  loaderE1.style.display = "block";
  viewerE1.style.display = "none";
}

function ocultarLoaderE1() {
  loaderE1.style.display = "none";
}

function cargarImagenE1(url) {
  if (!url) {
    viewerE1.innerHTML = "";
    viewerE1.style.display = "none";
    ocultarLoaderE1();
    return;
  }

  mostrarLoaderE1();

  const img = new Image();
  pendingImageE1 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE1 !== img) return;

    viewerE1.innerHTML = "";
    viewerE1.appendChild(img);

    viewerE1.style.display = "block";
    ocultarLoaderE1();

    pendingImageE1 = null;
  };

  img.onerror = () => {
    if (pendingImageE1 !== img) return;

    viewerE1.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE1.style.display = "block";
    ocultarLoaderE1();

    pendingImageE1 = null;
  };

  img.src = url;
}

function renderMediaE1() {
  const media = experiencia_proE1.medios[currentMediaE1];
  viewerE1.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE1(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE1();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE1.style.display = "block";
    viewerE1.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE1.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE1.value=currentMediaE1+1;
  totalMediaE1.textContent = experiencia_proE1.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE1.addEventListener("click", () => {
  currentMediaE1++;
  if(currentMediaE1 >= experiencia_proE1.medios.length) {
    currentMediaE1=0;
  }
  renderMediaE1();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE1.addEventListener("click",()=>{
  currentMediaE1--;
  if(currentMediaE1 < 0) {
    currentMediaE1 = experiencia_proE1.medios.length-1;
  }
  renderMediaE1();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE1.addEventListener("change", () => {
  const value=Number(mediaIndexE1.value);
  if(value>=1 && value<=experiencia_proE1.medios.length) {
    currentMediaE1=value-1;
    renderMediaE1();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE1.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE1.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE1();