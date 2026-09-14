/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerV1 = document.getElementById("mediaViewerV1");
const prevBtnV1 = document.getElementById("prevBtnV1");
const nextBtnV1 = document.getElementById("nextBtnV1");
const mediaIndexV1 = document.getElementById("mediaIndexV1");
const totalMediaV1 = document.getElementById("totalMediaV1");
const loaderV1 = document.getElementById("loader-v1");
let currentMediaV1 = 0;
let pendingImageV1 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const voluntariadoV1 = {
  nombre: "Voluntariado de Banco de Alimentos",
  medios: [
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
        <p><b>Descripción del puesto:</b> Recolección de alimentos no perecederos de clientes voluntarios del supermercado</p>
        <p><b>Idioma empleado:</b> Español</p>
        <p><b>Supermercado del voluntariado:</b> <a href="https://maps.app.goo.gl/mWPpN1VKG3GLubEw8" target="_blank">Mercadona</a></p>
        <p><b>Funciones:</b></p>
        <p> - Recoger comida no perecedera para gente desfavorecida.</p>
        <p> - Clasificar la comida según el tipo.</p>
        <p> - Organizar y planificar el proceso por el que se lleva a cabo.</p>
        <p> - Cooperar y colaborar con todo el equipo de voluntarios.</p>
      `
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Datos de la organización</h3>
        <p><b>Teléfono:</b> +34 91 734 63 83</p>
        <p><b>Correo electrónico:</b> administracion@bamadrid.org</p>
        <p><b>Dirección:</b> <a href="https://maps.app.goo.gl/X6eesE1DmDtji6d76" target="_blank">M-607, Colegio San Fernando, Vía de servicio, Km 13, 600, Fuencarral-El Pardo, 28049 Madrid, España</a></p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/jSXDzqd0/1.jpg"},
    {type: "image", src: "https://i.postimg.cc/Wb0F16B4/2.jpg"},
    {type: "image", src: "https://i.postimg.cc/vZM1gxyt/3.jpg"},
    {type: "image", src: "https://i.postimg.cc/MZCfwrr4/4.jpg"},
    {type: "image", src: "https://i.postimg.cc/mrgtVxtc/5.jpg"},
    {type: "image", src: "https://i.postimg.cc/DzpmMCXx/6.jpg"}
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderV1() {
  loaderV1.style.display = "block";
  viewerV1.style.display = "none";
}

function ocultarLoaderV1() {
  loaderV1.style.display = "none";
}

function cargarImagenV1(url) {
  if (!url) {
    viewerV1.innerHTML = "";
    viewerV1.style.display = "none";
    ocultarLoaderV1();
    return;
  }

  mostrarLoaderV1();

  const img = new Image();
  pendingImageV1 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageV1 !== img) return;

    viewerV1.innerHTML = "";
    viewerV1.appendChild(img);

    viewerV1.style.display = "block";
    ocultarLoaderV1();

    pendingImageV1 = null;
  };

  img.onerror = () => {
    if (pendingImageV1 !== img) return;

    viewerV1.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerV1.style.display = "block";
    ocultarLoaderV1();

    pendingImageV1 = null;
  };

  img.src = url;
}

function renderMediaV1() {
  const media = voluntariadoV1.medios[currentMediaV1];
  viewerV1.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenV1(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderV1();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerV1.style.display = "block";
    viewerV1.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerV1.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexV1.value=currentMediaV1+1;
  totalMediaV1.textContent = voluntariadoV1.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnV1.addEventListener("click", () => {
  currentMediaV1++;
  if(currentMediaV1 >= voluntariadoV1.medios.length) {
    currentMediaV1=0;
  }
  renderMediaV1();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnV1.addEventListener("click",()=>{
  currentMediaV1--;
  if(currentMediaV1 < 0) {
    currentMediaV1 = voluntariadoV1.medios.length-1;
  }
  renderMediaV1();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexV1.addEventListener("change", () => {
  const value=Number(mediaIndexV1.value);
  if(value>=1 && value<=voluntariadoV1.medios.length) {
    currentMediaV1=value-1;
    renderMediaV1();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnV1.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnV1.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaV1();