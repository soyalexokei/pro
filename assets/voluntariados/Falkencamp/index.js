/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerV2 = document.getElementById("mediaViewerV2");
const prevBtnV2 = document.getElementById("prevBtnV2");
const nextBtnV2 = document.getElementById("nextBtnV2");
const mediaIndexV2 = document.getElementById("mediaIndexV2");
const totalMediaV2 = document.getElementById("totalMediaV2");
const loaderV2 = document.getElementById("loader-v2");
let currentMediaV2 = 0;
let pendingImageV2 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const voluntariadoV2 = {
  nombre: "Voluntariado de Falkencamp",
  medios: [
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
        <p><b>Tipo de experiencia:</b> <a href="https://www.worldpackers.com/positions/39045" target="_blank">Worldpackers</a> - voluntario, viajero y mochilero</p>
        <p><b>Idioma empleado:</b> Inglés</p>
        <p><b>Funciones (lo que ofrezco):</b></p>
        <p> - Controlar y alquilar las bicicletas a los huéspedes</p>
        <p> - Controlar y alquilar los kayaks (canoas) y los SUPs (tablas de paddle surf) a los huéspedes, utilizados en el lago Millstätter</p>
        <p> - Ser bartender en el bar del camping: Heko nights</p>
        <p> - Montar, desmontar y limpiar las tiendas de campaña para huéspedes de Falkencamp</p>
        <p> - Arreglar y moldear las picas metálicas que sujetan las tiendas de campaña</p>
        <p> - Organizar y limpiar el almacén</p>
        <p> - Atender en la tienda de bebidas y snacks de la playa del lago</p>
        <p> - 5 días de trabajo a la semana (7h/día)</p>
        <p> - Hacer que Falkencamp sea un lugar mejor</p>
        <p><b>Funciones (lo que obtengo):</b></p>
        <p> - Alojamiento en habitación privada/compartida</p>
        <p> - 3 comidas al día, servido por catering</p>
        <p> - Bicicletas a disposición, con reserva previa gratuita</p>
        <p> - Consumo de productos del bar gratis</p>
        <p> - Desplazamientos a la estación de tren más cercana</p>
        <p> - Elección de una prenda/souvenir gratis</p>
        <p> - Descuentos en viajes de tren y en restaurantes</p>
        <p> - 2 días libres a la semana</p>
      `
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Datos de la organización</h3>
        <p><b>Teléfono:</b> 04246 / 7704</p>
        <p><b>Correo electrónico:</b> office@feriencamp-doebriach.at</p>
        <p><b>Dirección:</b> <a href="https://maps.app.goo.gl/4gY6SUDMpPEB9E9u7" target="_blank">Glanzer Straße, 66, 9873 , Kärnten, Österreich</a></p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/rF6Gj9x1/1.jpg"},
    {type: "image", src: "https://i.postimg.cc/h4QbVYz4/2.jpg"},
    {type: "image", src: "https://i.postimg.cc/QdhQGx6V/3.jpg"},
    {type: "image", src: "https://i.postimg.cc/ZKr8Myx1/4.jpg"},
    {type: "image", src: "https://i.postimg.cc/XYLwVShL/5.jpg"},
    {type: "image", src: "https://i.postimg.cc/xddL8pV2/6.jpg"},
    {type: "image", src: "https://i.postimg.cc/N0PmH8Qr/7.jpg"},
    {type: "image", src: "https://i.postimg.cc/ydg9XJNp/8.jpg"},
    {type: "image", src: "https://i.postimg.cc/vBJnPQgY/9.jpg"},
    {type: "image", src: "https://i.postimg.cc/QCcTwR1p/10.jpg"},
    {type: "image", src: "https://i.postimg.cc/wxNL1sZ7/11.jpg"},
    {type: "video", src: "https://streamable.com/e/vbl2lf"},
    {type: "image", src: "https://i.postimg.cc/BQGDHnfN/13.jpg"},
    {type: "image", src: "https://i.postimg.cc/KvrTNhZb/14.jpg"},
    {type: "video", src: "https://streamable.com/e/xdao8u"},
    {type: "image", src: "https://i.postimg.cc/XYjC11JC/16.jpg"},
    {type: "image", src: "https://i.postimg.cc/vZ06J7gS/17.jpg"},
    {type: "image", src: "https://i.postimg.cc/vmD6b158/18.jpg"},
    {type: "image", src: "https://i.postimg.cc/3w60RKZX/19.jpg"},
    {type: "image", src: "https://i.postimg.cc/SsM2YwZw/20.jpg"},
    {type: "image", src: "https://i.postimg.cc/4yRK6Bqn/21.jpg"},
    {type: "image", src: "https://i.postimg.cc/Hn0rBb1z/22.jpg"},
    {type: "video", src: "https://streamable.com/e/ahn74h"},
    {type: "image", src: "https://i.postimg.cc/tRFnqGn6/24.jpg"},
    {type: "image", src: "https://i.postimg.cc/65w2TbCm/25.jpg"},
    {type: "image", src: "https://i.postimg.cc/tC516d5C/26.jpg"},
    {type: "image", src: "https://i.postimg.cc/fRRVf327/27.jpg"},
    {type: "image", src: "https://i.postimg.cc/7ZtfsxdF/28.jpg"},
    {type: "image", src: "https://i.postimg.cc/GpB96W1H/29.jpg"},
    {type: "image", src: "https://i.postimg.cc/TPZhxtRQ/30.jpg"},
    {type: "image", src: "https://i.postimg.cc/mDCkg7k4/31.jpg"},
    {type: "image", src: "https://i.postimg.cc/7h46GbJ2/32.jpg"},
    {type: "image", src: "https://i.postimg.cc/wMkBhHDb/33.jpg"},
    {type: "image", src: "https://i.postimg.cc/bY0dX04H/34.jpg"},
    {type: "image", src: "https://i.postimg.cc/CLF5wBgy/35.jpg"},
    {type: "image", src: "https://i.postimg.cc/3JnRN88k/36.jpg"},
    {type: "image", src: "https://i.postimg.cc/y8xNSMxv/37.jpg"},
    {type: "image", src: "https://i.postimg.cc/W1y1m5Jj/38.jpg"},
    {type: "image", src: "https://i.postimg.cc/rptFf5S4/39.jpg"},
    {type: "image", src: "https://i.postimg.cc/vBF8kDzN/40.jpg"},
    {type: "image", src: "https://i.postimg.cc/763PkDtY/41.jpg"}
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderV2() {
  loaderV2.style.display = "block";
  viewerV2.style.display = "none";
}

function ocultarLoaderV2() {
  loaderV2.style.display = "none";
}

function cargarImagenV2(url) {
  if (!url) {
    viewerV2.innerHTML = "";
    viewerV2.style.display = "none";
    ocultarLoaderV2();
    return;
  }

  mostrarLoaderV2();

  const img = new Image();
  pendingImageV2 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageV2 !== img) return;

    viewerV2.innerHTML = "";
    viewerV2.appendChild(img);

    viewerV2.style.display = "block";
    ocultarLoaderV2();

    pendingImageV2 = null;
  };

  img.onerror = () => {
    if (pendingImageV2 !== img) return;

    viewerV2.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerV2.style.display = "block";
    ocultarLoaderV2();

    pendingImageV2 = null;
  };

  img.src = url;
}

function renderMediaV2() {
  const media = voluntariadoV2.medios[currentMediaV2];
  viewerV2.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenV2(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderV2();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerV2.style.display = "block";
    viewerV2.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerV2.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexV2.value=currentMediaV2+1;
  totalMediaV2.textContent = voluntariadoV2.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnV2.addEventListener("click", () => {
  currentMediaV2++;
  if(currentMediaV2 >= voluntariadoV2.medios.length) {
    currentMediaV2=0;
  }
  renderMediaV2();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnV2.addEventListener("click",()=>{
  currentMediaV2--;
  if(currentMediaV2 < 0) {
    currentMediaV2 = voluntariadoV2.medios.length-1;
  }
  renderMediaV2();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexV2.addEventListener("change", () => {
  const value=Number(mediaIndexV2.value);
  if(value>=1 && value<=voluntariadoV2.medios.length) {
    currentMediaV2=value-1;
    renderMediaV2();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnV2.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnV2.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaV2();