/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerV5 = document.getElementById("mediaViewerV5");
const prevBtnV5 = document.getElementById("prevBtnV5");
const nextBtnV5 = document.getElementById("nextBtnV5");
const mediaIndexV5 = document.getElementById("mediaIndexV5");
const totalMediaV5 = document.getElementById("totalMediaV5");
const loaderV5 = document.getElementById("loader-v5");
let currentMediaV5 = 0;
let pendingImageV5 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const voluntariadoV5 = {
  nombre: "Voluntariado de Ibiza Yoga",
  medios: [
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
        <p><b>Tipo de experiencia:</b> <a href="https://www.worldpackers.com/positions/64681" target="_blank">Worldpackers</a> - voluntario, viajero y mochilero</p>
        <p><b>Idioma empleado:</b> Inglés y Español</p>
        <p><b>Funciones (lo que ofrezco):</b></p>
        <p> - Ayudar al Chef a preparar el almuerzo</p>
        <p> - Encargarse de los Check-In y los Check-Out de los nuevos huéspedes</p>
        <p> - Encargarse de la limpieza del Hotel Rural</p>
        <p> - Encargarse de la limpieza, orden y adecuación de las habitaciones de los huéspedes</p>
        <p> - Hacer la colada del Hotel Rural</p>
        <p><b>Funciones (lo que obtengo):</b></p>
        <p> - Alojamiento en habitación compartida con separación (estilo hippie)</p>
        <p> - Almuerzo diario, servido por el equipo de cocina</p>
        <p> - Desayuno y cena por cuenta propia</p>
        <p> - Consumo de productos del Hotel Rural gratis</p>
        <p> - Wi-Fi gratuito</p>
        <p> - Clases de Yoga a 5€ (para huéspedes son 25€)</p>
        <p> - Uso gratuito de la lavandería y de la cocina</p>
        <p> - 2 días libres a la semana</p>
      `
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Datos de la organización</h3>
        <p><b>Teléfono:</b> +39 351 7126972</p>
        <p><b>Correo electrónico:</b> info@ibizayoga.com & ibizayoga@me.com</p>
        <p><b>Dirección:</b> <a href="https://maps.app.goo.gl/evEuG5BhMhRDvDoH6" target="_blank">Benirràs D, 51, 07810 Sant Joan de Labritja, Illes Balears, España</a></p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/d0N8kqJp/1.png"},
    {type: "image", src: "https://i.postimg.cc/bvwxwGf1/2.png"},
    {type: "image", src: "https://i.postimg.cc/fRK7scpw/3.png"},
    {type: "image", src: "https://i.postimg.cc/7ZD1jsBs/4.png"},
    {type: "image", src: "https://i.postimg.cc/MZCmmK18/5.png"},
    {type: "image", src: "https://i.postimg.cc/Fs0gW5xk/6.png"},
    {type: "image", src: "https://i.postimg.cc/0Q3d393D/7.png"},
    {type: "image", src: "https://i.postimg.cc/kGbFPk3Z/8.png"},
    {type: "image", src: "https://i.postimg.cc/wxykNsyV/9.png"},
    {type: "image", src: "https://i.postimg.cc/vBDt34PG/10.png"},
    {type: "image", src: "https://i.postimg.cc/Hk4zxDc1/11.png"},
    {type: "image", src: "https://i.postimg.cc/HLY28ZXc/12.png"},
    {type: "image", src: "https://i.postimg.cc/59TnKmdT/13.png"},
    {type: "image", src: "https://i.postimg.cc/66yMhmSC/14.png"},
    {type: "image", src: "https://i.postimg.cc/mhWrK9VC/15.jpg"},
    {type: "image", src: "https://i.postimg.cc/y8znsYNT/16.png"},
    {type: "image", src: "https://i.postimg.cc/hPmMk7Kj/17.png"}
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderV5() {
  loaderV5.style.display = "block";
  viewerV5.style.display = "none";
}

function ocultarLoaderV5() {
  loaderV5.style.display = "none";
}

function cargarImagenV5(url) {
  if (!url) {
    viewerV5.innerHTML = "";
    viewerV5.style.display = "none";
    ocultarLoaderV5();
    return;
  }

  mostrarLoaderV5();

  const img = new Image();
  pendingImageV5 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageV5 !== img) return;

    viewerV5.innerHTML = "";
    viewerV5.appendChild(img);

    viewerV5.style.display = "block";
    ocultarLoaderV5();

    pendingImageV5 = null;
  };

  img.onerror = () => {
    if (pendingImageV5 !== img) return;

    viewerV5.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerV5.style.display = "block";
    ocultarLoaderV5();

    pendingImageV5 = null;
  };

  img.src = url;
}

function renderMediaV5() {
  const media = voluntariadoV5.medios[currentMediaV5];
  viewerV5.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenV5(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderV5();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerV5.style.display = "block";
    viewerV5.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerV5.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexV5.value=currentMediaV5+1;
  totalMediaV5.textContent = voluntariadoV5.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnV5.addEventListener("click", () => {
  currentMediaV5++;
  if(currentMediaV5 >= voluntariadoV5.medios.length) {
    currentMediaV5=0;
  }
  renderMediaV5();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnV5.addEventListener("click",()=>{
  currentMediaV5--;
  if(currentMediaV5 < 0) {
    currentMediaV5 = voluntariadoV5.medios.length-1;
  }
  renderMediaV5();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexV5.addEventListener("change", () => {
  const value=Number(mediaIndexV5.value);
  if(value>=1 && value<=voluntariadoV5.medios.length) {
    currentMediaV5=value-1;
    renderMediaV5();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnV5.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnV5.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaV5();