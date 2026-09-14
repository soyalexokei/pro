/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerV4 = document.getElementById("mediaViewerV4");
const prevBtnV4 = document.getElementById("prevBtnV4");
const nextBtnV4 = document.getElementById("nextBtnV4");
const mediaIndexV4 = document.getElementById("mediaIndexV4");
const totalMediaV4 = document.getElementById("totalMediaV4");
const loaderV4 = document.getElementById("loader-v4");
let currentMediaV4 = 0;
let pendingImageV4 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const voluntariadoV4 = {
  nombre: "Voluntariado de Fundación Telefónica",
  medios: [
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
        <p><b>Nombre del programa:</b> <a href="https://www.fundaciontelefonica.com/voluntarios/reconectados/" target="_blank">Reconectados</a></p>
        <p><b>Descripción del programa:</b> Ayudar a la tercera edad a usar sus dispositivos móviles y las nuevas tecnologías de forma más ágil y eficaz</p>
        <p><b>Lugar del programa:</b> Edificio de la Fundación Telefónica de Madrid, Madrid, España</p>
        <p><b>Contenidos del programa:</b> <i class="fa fa-globe"></i><a href="Contenidos_Reconectados.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Presentación del programa:</b> <i class="fa fa-globe"></i><a href="Experiencia_Practica_Digital.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Idioma empleado:</b> Español</p>
        <p><b>Mis funciones en el programa:</b></p>
        <p> - Resolución de dudas</p>
        <p> - Enseñar dinámicamente y con mucha práctica</p>
        <p> - Tener paciencia y repetir la explicación múltiples veces</p>
      `
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Datos de la organización</h3>
        <p><b>Teléfono:</b> +34 91 498 42 73</p>
        <p><b>Teléfono de visitas guiadas:</b> +34 659 15 80 11</p>
        <p><b>Dirección:</b> <a href="https://maps.app.goo.gl/Q97euJRGrbybDDHG7" target="_blank">Gran Vía, 28, Centro, 28013 Madrid, España</a></p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/X7g3j1pM/prueba.jpg"}
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderV4() {
  loaderV4.style.display = "block";
  viewerV4.style.display = "none";
}

function ocultarLoaderV4() {
  loaderV4.style.display = "none";
}

function cargarImagenV4(url) {
  if (!url) {
    viewerV4.innerHTML = "";
    viewerV4.style.display = "none";
    ocultarLoaderV4();
    return;
  }

  mostrarLoaderV4();

  const img = new Image();
  pendingImageV4 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageV4 !== img) return;

    viewerV4.innerHTML = "";
    viewerV4.appendChild(img);

    viewerV4.style.display = "block";
    ocultarLoaderV4();

    pendingImageV4 = null;
  };

  img.onerror = () => {
    if (pendingImageV4 !== img) return;

    viewerV4.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerV4.style.display = "block";
    ocultarLoaderV4();

    pendingImageV4 = null;
  };

  img.src = url;
}

function renderMediaV4() {
  const media = voluntariadoV4.medios[currentMediaV4];
  viewerV4.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenV4(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderV4();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerV4.style.display = "block";
    viewerV4.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerV4.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexV4.value=currentMediaV4+1;
  totalMediaV4.textContent = voluntariadoV4.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnV4.addEventListener("click", () => {
  currentMediaV4++;
  if(currentMediaV4 >= voluntariadoV4.medios.length) {
    currentMediaV4=0;
  }
  renderMediaV4();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnV4.addEventListener("click",()=>{
  currentMediaV4--;
  if(currentMediaV4 < 0) {
    currentMediaV4 = voluntariadoV4.medios.length-1;
  }
  renderMediaV4();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexV4.addEventListener("change", () => {
  const value=Number(mediaIndexV4.value);
  if(value>=1 && value<=voluntariadoV4.medios.length) {
    currentMediaV4=value-1;
    renderMediaV4();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnV4.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnV4.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaV4();