/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE7 = document.getElementById("mediaViewerE7");
const prevBtnE7 = document.getElementById("prevBtnE7");
const nextBtnE7 = document.getElementById("nextBtnE7");
const mediaIndexE7 = document.getElementById("mediaIndexE7");
const totalMediaE7 = document.getElementById("totalMediaE7");
const loaderE7 = document.getElementById("loader-e7");
let currentMediaE7 = 0;
let pendingImageE7 = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE7 = {
  nombre: "Experiencia en Accenture",
  medios: [
    {
      type: "text",
      content:`
        <h3>IT Engineer Trainee</h3>
        <p><b>Tipo de contrato:</b> Contrato de formación</p>
        <p><b>Modo de trabajo:</b> Híbrido (Presencial + Remoto)</p>
        <p><b>Idioma:</b> Inglés y Español</p>
        <p><b>Calendario del Programa:</b> <i class="fa fa-globe"></i><a href="./Calendario_PSS_TI.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Funciones y Desarrollo:</b></p>
        <p> - Arquitectura Mainframe y z/OS</p>
        <p> - JCL y Utilidades del z/OS</p>
        <p> - MQ</p>
        <p> - DB2</p>
        <p> - CICS</p>
        <p> - Arquitectura z16 y z17 en <a class="otros-enlaces" href="https://www.ibm.com/es-es" target="_blank">IBM</a></p>
        <p> - z/OSMF y ZOWE</p>
        <p> - z/CX</p>
        <p> - z/OS Comm Server</p>
        <p> - Lenguaje de Programación REXX</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Mi experiencia en PSS TI:</b></p>
      `,
      type: "image",
      src: "https://i.postimg.cc/7LGJdYwd/IMG-20250324-WA0004.png"
    },
    {type: "image", src: "https://i.postimg.cc/P5F8S8s1/IMG-20250324-WA0009.png"},
    {type: "image", src: "https://i.postimg.cc/02Pmjs0K/IMG-20250324-WA0015.jpg"},
    {type: "image", src: "https://i.postimg.cc/Wb8ZJH5W/IMG-20250324-WA0017.jpg"},
    {type: "image", src: "https://i.postimg.cc/g20ZyH5Y/IMG-20250327-WA0009.png"},
    {type: "image", src: "https://i.postimg.cc/nVvBnzBt/IMG-20250327-WA0011.jpg"},
    {type: "image", src: "https://i.postimg.cc/YSMjq48C/Config-Mainframe1.png"},
    {type: "image", src: "https://i.postimg.cc/xd58k0Fy/Config-Mainframe2.png"},
    {type: "image", src: "https://i.postimg.cc/GmkHCPFf/Config-Mainframe3.png"},
    {type: "image", src: "https://i.postimg.cc/fb2J19Pc/IMG-20250429-WA0005.png"},
    {type: "image", src: "https://i.postimg.cc/fRv3jFjg/IMG-20250429-WA0006.png"},
    {type: "image", src: "https://i.postimg.cc/DzySCgxf/IMG-20250429-WA0008.png"},
    {type: "image", src: "https://i.postimg.cc/v8jFpWSq/IMG-20250520-WA0008.png"},
    {type: "image", src: "https://i.postimg.cc/TwPw2WzN/1.png"},
    {type: "image", src: "https://i.postimg.cc/mD6rPgRL/2.png"},
    {
      type: "text",
      content:`
        <p><b>Presentación del Proyecto Final:</b> <i class="fa fa-globe"></i><a href="./Presentacion_PSS_TI.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Notas del Talent Campus:</b> <i class="fa fa-globe"></i><a href="./Notas_Talent_Campus.png" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Diploma del Talent Campus de PSS TI:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i> - Apto</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de la empresa</h3>
        <p><b>Teléfono:</b> +34 91 345 10 27</p>
        <p><b>Correo electrónico:</b> peopleandtalent@pss-ti.com</p>
        <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/QBa63tFWuWXorY6SA" target="_blank">Spaces Madrid - Edificio E - 3º planta, Vía de los Poblados, 1, Hortaleza, 28033 Madrid, España</a></p>
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
function mostrarLoaderE7() {
  loaderE7.style.display = "block";
  viewerE7.style.display = "none";
}

function ocultarLoaderE7() {
  loaderE7.style.display = "none";
}

function cargarImagenE7(url) {
  if (!url) {
    viewerE7.innerHTML = "";
    viewerE7.style.display = "none";
    ocultarLoaderE7();
    return;
  }

  mostrarLoaderE7();

  const img = new Image();
  pendingImageE7 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE7 !== img) return;

    viewerE7.innerHTML = "";
    viewerE7.appendChild(img);

    viewerE7.style.display = "block";
    ocultarLoaderE7();

    pendingImageE7 = null;
  };

  img.onerror = () => {
    if (pendingImageE7 !== img) return;

    viewerE7.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE7.style.display = "block";
    ocultarLoaderE7();

    pendingImageE7 = null;
  };

  img.src = url;
}

function renderMediaE7() {
  const media = experiencia_proE7.medios[currentMediaE7];
  viewerE7.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE7(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE7();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE7.style.display = "block";
    viewerE7.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE7.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE7.value=currentMediaE7+1;
  totalMediaE7.textContent = experiencia_proE7.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE7.addEventListener("click", () => {
  currentMediaE7++;
  if(currentMediaE7 >= experiencia_proE7.medios.length) {
    currentMediaE7=0;
  }
  renderMediaE7();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE7.addEventListener("click",()=>{
  currentMediaE7--;
  if(currentMediaE7 < 0) {
    currentMediaE7 = experiencia_proE7.medios.length-1;
  }
  renderMediaE7();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE7.addEventListener("change", () => {
  const value=Number(mediaIndexE7.value);
  if(value>=1 && value<=experiencia_proE7.medios.length) {
    currentMediaE7=value-1;
    renderMediaE7();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE7.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE7.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE7();