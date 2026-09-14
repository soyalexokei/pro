/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE3 = document.getElementById("mediaViewerE3");
const prevBtnE3 = document.getElementById("prevBtnE3");
const nextBtnE3 = document.getElementById("nextBtnE3");
const mediaIndexE3 = document.getElementById("mediaIndexE3");
const totalMediaE3 = document.getElementById("totalMediaE3");
const loaderE3 = document.getElementById("loader-e3");
let currentMediaE3 = 0;
let pendingImageE3 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE3 = {
  nombre: "Experiencia en Estudio Internacional Ritmo y Movimiento",
  medios: [
    {
      type: "text",
      content:`
        <h3>Profesor de informática para adultos</h3>
        <p><b>Tipo de contrato:</b> Contrato por hora</p>
        <p><b>Modo de trabajo:</b> Presencial</p>
        <p><b>Idioma:</b> Español</p>
        <p><b>Lugar de las clases:</b> <a href="https://maps.app.goo.gl/tHZr84kPyW75KAmz5" target="_blank">Centro Cultural Miguel Delibes, Torrelaguna, 2, 28670 Villaviciosa de Odón, Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Grupos de estudiantes</h3>
        <p><b>Grupo 1 =></b> De 10 personas de más de 65 años => Martes de 10:00 a 12:00</p>
        <p><b>Grupo 2 =></b> De 12 personas de más de 65 años => Jueves de 10:00 a 12:00</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Temario impartido:</b></p>
        <p>1. Uso del ratón</p>
        <p>2. Uso del teclado</p>
        <p>3. Uso del explorador de archivos</p>
        <p>4. Uso del escritorio de Windows</p>
        <p>5. Uso del correo electrónico de Gmail</p>
        <p>6. Uso del software Paint</p>
        <p>7. Uso de las herramientas de ofimática de Microsoft: Word y PowerPoint</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Propietaria de la empresa:</b> Pilar Sánchez Núñez</p>
        <p><b>Teléfono:</b> 91 616 42 45</p>
        <p><b>Correo electrónico:</b> ritmopilar@hotmail.com</p>
        <p><b>Sede:</b> Sede: <a href="https://maps.app.goo.gl/zgWfcwgWARd6aRSSA" target="_blank">Juan de Borbón, 19, 28670 Villaviciosa de Odón, Madrid, España</a></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Fin del contrato</h3>
        <p><b>Fecha:</b> Diciembre 2021</p>
        <p><b>Motivo:</b> Quería seguir dando las clases hasta Junio 2022, pero me
        tenía que ir de Erasmus+ a Novi Sad (Serbia) y tuve que poner fin al contrato</p>
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
function mostrarLoaderE3() {
  loaderE3.style.display = "block";
  viewerE3.style.display = "none";
}

function ocultarLoaderE3() {
  loaderE3.style.display = "none";
}

function cargarImagenE3(url) {
  if (!url) {
    viewerE3.innerHTML = "";
    viewerE3.style.display = "none";
    ocultarLoaderE3();
    return;
  }

  mostrarLoaderE3();

  const img = new Image();
  pendingImageE3 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE3 !== img) return;

    viewerE3.innerHTML = "";
    viewerE3.appendChild(img);

    viewerE3.style.display = "block";
    ocultarLoaderE3();

    pendingImageE3 = null;
  };

  img.onerror = () => {
    if (pendingImageE3 !== img) return;

    viewerE3.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE3.style.display = "block";
    ocultarLoaderE3();

    pendingImageE3 = null;
  };

  img.src = url;
}

function renderMediaE3() {
  const media = experiencia_proE3.medios[currentMediaE3];
  viewerE3.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE3(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE3();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE3.style.display = "block";
    viewerE3.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE3.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE3.value=currentMediaE3+1;
  totalMediaE3.textContent = experiencia_proE3.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE3.addEventListener("click", () => {
  currentMediaE3++;
  if(currentMediaE3 >= experiencia_proE3.medios.length) {
    currentMediaE3=0;
  }
  renderMediaE3();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE3.addEventListener("click",()=>{
  currentMediaE3--;
  if(currentMediaE3 < 0) {
    currentMediaE3 = experiencia_proE3.medios.length-1;
  }
  renderMediaE3();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE3.addEventListener("change", () => {
  const value=Number(mediaIndexE3.value);
  if(value>=1 && value<=experiencia_proE3.medios.length) {
    currentMediaE3=value-1;
    renderMediaE3();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE3.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE3.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE3();