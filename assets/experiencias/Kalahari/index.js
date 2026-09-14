/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE0B = document.getElementById("mediaViewerE0B");
const prevBtnE0B = document.getElementById("prevBtnE0B");
const nextBtnE0B = document.getElementById("nextBtnE0B");
const mediaIndexE0B = document.getElementById("mediaIndexE0B");
const totalMediaE0B = document.getElementById("totalMediaE0B");
const loaderE0B = document.getElementById("loader-e0B");
let currentMediaE0B = 0;
let pendingImageE0B = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE0B = {
  nombre: "Experiencia de Work & Travel en EEUU",
  medios: [
    {
      type: "text",
      content:`
        <h3>Experiencia Work & Travel de 4 meses</h3>
        <p><b>Agencia de España:</b> <a href="https://yowork.es/" target="_blank">YoWork</a></p>
        <p><b>Agencia de EE.UU:</b> <a href="https://allianceabroad.com/es/" target="_blank">Alliance Abroad</a></p>
        <p><b>Empresa contratante de EE.UU:</b> <a href="https://www.kalahariresorts.com/wisconsin/" target="_blank">Kalahari Resorts & Conventions</a></p>
        <p><b>Mi alojamiento en EE.UU:</b> <a href="https://maps.app.goo.gl/PzG7fM8U1m9eHqiF6" target="_blank">Bunker Run</a></p>
        <h4><u>Junio y Julio 2019</u></h4>
        <ul>
          <p><b>Puesto:</b> Socorrista en un parque acuático indoor y outdoor</p>
          <p><b>Requisitos previos:</b> Aprobación de un curso teórico-práctico de una semana</p>
          <p><b>Sector:</b> Seguridad y salud</p>
          <p><b>Idioma:</b> Inglés</p>
          <p><b>Tipo de contrato:</b> Contrato por hora</p>
          <p><b>Remuneración:</b> 12$ brutos / h</p>
          <p><b>Funciones:</b></p>
          <p> - Vigilar que los bañistas del parque acuático cumplan<br>las normas</p>
          <p> - Vigilar que nadie se ahogue y evitarlo si sucediera</p>
          <p> - Seguir el protocolo de actuación cuando alguien se<br>está ahogando</p>
          <p> - Llevar un orden en la parte de arriba de una atracción,<br>dejando un margen de seguridad<br>entre bañistas</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <h4><u>Agosto y Septiembre 2019</u></h4>
        <ul>
          <p><b>Puesto:</b> Dependiente de las tiendas del Resort</p>
          <p><b>Requisitos previos:</b> Entrevista técnica y práctica en inglés con el Manager</p>
          <p><b>Sector:</b> Ventas</p>
          <p><b>Idioma:</b> Inglés</p>
          <p><b>Tipo de contrato:</b> Contrato por hora</p>
          <p><b>Remuneración:</b> 12$ brutos / h</p>
          <p><b>Tipos de tiendas:</b></p>
          <p> - Tienda de ropa y juguetes para niños/as</p>
          <p> - Tienda de ropa de adolescentes y adultos</p>
          <p> - Tienda de alimentación, snacks, souvenirs y parafarmacia (ultramarinos)</p>
          <p><b>Funciones (turnos rotatorios):</b></p>
          <p> - Conseguir el mayor porcentaje de ventas</p>
          <p> - Ordenar y reponer sus artículos</p>
          <p> - Mantenerla limpia</p>
          <p> - Cobrar a los clientes</p>
          <p> - Convencer, aconsejar y ayudar a los clientes</p>
          <p> - Conseguir que la experiencia de compra del cliente<br>sea lo más satisfactoria posible</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <h4><u>Motivo del cambio de trabajo</u></h4>
        <ul>
          <p>
            Cambié de ser socorrista a dependiente de tienda porque quería mejorar y hablar más en inglés.
            De socorrista casi no hablaba y éramos muchos hispanos trabajando. Al cambiar al departamento de
            ventas, cambié a un entorno más nativo (únicamente en inglés) y por ende, pude hablar con más fluidez
            en inglés y mejorar bastante más.
          </p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de la empresa contratante de EE.UU</h3>
        <p><b>Teléfono:</b> +1 608-254-5466</p>
        <p><b>Correo electrónico:</b> WIGroups@KalahariResorts.com</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/rVDf6wYUPEkmwfH88" target="_blank">1305 Kalahari Dr, Baraboo, Wisconsin 53913, United States of America</a></p>
      `
    },
    {type: "image", src: "https://i.postimg.cc/G2LCCfg0/IMG20250613194138714.png"},
    {type: "image", src: "https://i.postimg.cc/FKmtyq4f/IMG20250613194600699.png"},
    {type: "image", src: "https://i.postimg.cc/D0fyx03X/IMG20250613195750872.png"},
    {type: "image", src: "https://i.postimg.cc/5yP9TJfk/IMG20250618192312.png"},
    {type: "image", src: "https://i.postimg.cc/tgXqq77m/IMG20250618193921.png"},
    {type: "image", src: "https://i.postimg.cc/N040mmWc/IMG20250618192750096.png"},
    {type: "image", src: "https://i.postimg.cc/W3v4JS9S/IMG20250618194523377.png"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderE0B() {
  loaderE0B.style.display = "block";
  viewerE0B.style.display = "none";
}

function ocultarLoaderE0B() {
  loaderE0B.style.display = "none";
}

function cargarImagenE0B(url) {
  if (!url) {
    viewerE0B.innerHTML = "";
    viewerE0B.style.display = "none";
    ocultarLoaderE0B();
    return;
  }

  mostrarLoaderE0B();

  const img = new Image();
  pendingImageE0B = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE0B !== img) return;

    viewerE0B.innerHTML = "";
    viewerE0B.appendChild(img);

    viewerE0B.style.display = "block";
    ocultarLoaderE0B();

    pendingImageE0B = null;
  };

  img.onerror = () => {
    if (pendingImageE0B !== img) return;

    viewerE0B.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE0B.style.display = "block";
    ocultarLoaderE0B();

    pendingImageE0B = null;
  };

  img.src = url;
}

function renderMediaE0B() {
  const media = experiencia_proE0B.medios[currentMediaE0B];
  viewerE0B.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE0B(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE0B();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE0B.style.display = "block";
    viewerE0B.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE0B.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE0B.value=currentMediaE0B+1;
  totalMediaE0B.textContent = experiencia_proE0B.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE0B.addEventListener("click", () => {
  currentMediaE0B++;
  if(currentMediaE0B >= experiencia_proE0B.medios.length) {
    currentMediaE0B=0;
  }
  renderMediaE0B();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE0B.addEventListener("click",()=>{
  currentMediaE0B--;
  if(currentMediaE0B < 0) {
    currentMediaE0B = experiencia_proE0B.medios.length-1;
  }
  renderMediaE0B();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE0B.addEventListener("change", () => {
  const value=Number(mediaIndexE0B.value);
  if(value>=1 && value<=experiencia_proE0B.medios.length) {
    currentMediaE0B=value-1;
    renderMediaE0B();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE0B.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE0B.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE0B();