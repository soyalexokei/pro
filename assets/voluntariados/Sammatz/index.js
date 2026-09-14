/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerV3 = document.getElementById("mediaViewerV3");
const prevBtnV3 = document.getElementById("prevBtnV3");
const nextBtnV3 = document.getElementById("nextBtnV3");
const mediaIndexV3 = document.getElementById("mediaIndexV3");
const totalMediaV3 = document.getElementById("totalMediaV3");
const loaderV3 = document.getElementById("loader-v3");
let currentMediaV3 = 0;
let pendingImageV3 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const voluntariadoV3 = {
  nombre: "Voluntariado de Michaelshof Sammatz",
  medios: [
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
        <p><b>Tipo de experiencia:</b> <a href="https://www.worldpackers.com/es/positions/51113" target="_blank">Worldpackers</a> - voluntario, viajero y mochilero</p>
        <p><b>Idioma empleado:</b> Inglés</p>
        <p><b>Funciones (lo que ofrezco):</b></p>
        <p> - Recogida de alimentos de la tierra y conocer técnicas de agricultura</p>
        <p> - Ser pinche de cocina: preparar y envasar pepinos pelados para conservar, pelar patatas y otras hortalizas, ayudar a preparar la comida del día, lavar la vajilla y limpiar la cocina</p>
        <p> - Ayudar en la elaboración de pan</p>
        <p> - Ayudar en la elaboración de quesos y en su envasado</p>
        <p> - Ayudar en la construcción de viviendas</p>
        <p> - Ayudar en el mantenimiento de los jardines</p>
        <p> - Ayudar al pastoreo de las ovejas y del cuidado y limpieza de todos los animales: vacas, un toro, cerdos, cabras, ovejas y caballos</p>
        <p> - Ayudar y ser reponedor en la tienda de alimentación</p>
        <p> - 5 días de trabajo a la semana (7h/día)</p>
        <p> - Hacer que la ecogranja de Sammatz sea un lugar mejor</p>
        <p><b>Funciones (lo que obtengo):</b></p>
        <p> - Alojamiento en habitación privada/compartida</p>
        <p> - Almuerzo diario servido por catering y voluntarios</p>
        <p> - Desayuno y cena servido por ti mismo, pero sin coste</p>
        <p> - Algunas veces, merienda con café y pastel, lo que se conoce como <i>Kuchen und Kaffee</i></p>
        <p> - Bicicletas a disposición, con reserva previa gratuita</p>
        <p> - Desplazamientos a la estación de tren más cercana</p>
        <p> - Frutas y hortalizas del día y de la tierra a disposición</p>
        <p> - Descuentos en viajes de tren y en restaurantes</p>
        <p> - 2 días libres a la semana</p>
      `
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Datos de la organización</h3>
        <p><b>Teléfono:</b> 05858 970 30</p>
        <p><b>Correo electrónico:</b> kontakt@sammatz.de</p>
        <p><b>Dirección:</b> <a href="https://maps.app.goo.gl/PMbvYfJ5BiBHcE2i8" target="_blank">Im Dorfe, 11, 29490, Sammatz, Niedersachsen, Deutschland</a></p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/ZYGkSPbq/1.jpg"},
    {type: "image", src: "https://i.postimg.cc/T3xZyRWM/2.jpg"},
    {type: "video", src: "https://streamable.com/e/srym5v"},
    {type: "image", src: "https://i.postimg.cc/28hs8qy7/4.jpg"},
    {type: "image", src: "https://i.postimg.cc/3xZzmPgy/5.jpg"}
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderV3() {
  loaderV3.style.display = "block";
  viewerV3.style.display = "none";
}

function ocultarLoaderV3() {
  loaderV3.style.display = "none";
}

function cargarImagenV3(url) {
  if (!url) {
    viewerV3.innerHTML = "";
    viewerV3.style.display = "none";
    ocultarLoaderV3();
    return;
  }

  mostrarLoaderV3();

  const img = new Image();
  pendingImageV3 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageV3 !== img) return;

    viewerV3.innerHTML = "";
    viewerV3.appendChild(img);

    viewerV3.style.display = "block";
    ocultarLoaderV3();

    pendingImageV3 = null;
  };

  img.onerror = () => {
    if (pendingImageV3 !== img) return;

    viewerV3.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerV3.style.display = "block";
    ocultarLoaderV3();

    pendingImageV3 = null;
  };

  img.src = url;
}

function renderMediaV3() {
  const media = voluntariadoV3.medios[currentMediaV3];
  viewerV3.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenV3(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderV3();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerV3.style.display = "block";
    viewerV3.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerV3.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexV3.value=currentMediaV3+1;
  totalMediaV3.textContent = voluntariadoV3.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnV3.addEventListener("click", () => {
  currentMediaV3++;
  if(currentMediaV3 >= voluntariadoV3.medios.length) {
    currentMediaV3=0;
  }
  renderMediaV3();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnV3.addEventListener("click",()=>{
  currentMediaV3--;
  if(currentMediaV3 < 0) {
    currentMediaV3 = voluntariadoV3.medios.length-1;
  }
  renderMediaV3();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexV3.addEventListener("change", () => {
  const value=Number(mediaIndexV3.value);
  if(value>=1 && value<=voluntariadoV3.medios.length) {
    currentMediaV3=value-1;
    renderMediaV3();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnV3.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnV3.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaV3();