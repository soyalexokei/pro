/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerjshtmlcss = document.getElementById("mediaViewerjshtmlcss");
const prevBtnjshtmlcss = document.getElementById("prevBtnjshtmlcss");
const nextBtnjshtmlcss = document.getElementById("nextBtnjshtmlcss");
const mediaIndexjshtmlcss = document.getElementById("mediaIndexjshtmlcss");
const totalMediajshtmlcss = document.getElementById("totalMediajshtmlcss");
const loaderjshtmlcss = document.getElementById("loader-jshtmlcss");
let currentMediajshtmlcss = 0;
let pendingImagejshtmlcss = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadojshtmlcss = {
  nombre: "Certificación",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación Oficial de JavaScript, HTML y CSS</h3>
        <p><b>Documentación JS:</b> <i class="fa fa-globe"></i><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Documentación HTML:</b> <i class="fa fa-globe"></i><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Documentación CSS:</b> <i class="fa fa-globe"></i><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="certificado.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Proyecto 1:</b> <i class="fa fa-globe"></i><a href="proyecto1/index.html">Calculadora Web</a><i class="fa fa-globe"></i></p>
        <p><b>Proyecto 2:</b> <i class="fa fa-globe"></i><a href="proyecto2/index.html">Kick Blocks Game</a><i class="fa fa-globe"></i></p>
      `
    },
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC5() {
  loaderjshtmlcss.style.display = "block";
  viewerjshtmlcss.style.display = "none";
}

function ocultarLoaderC5() {
  loaderjshtmlcss.style.display = "none";
}

function cargarImagenC5(url) {
  if (!url) {
    viewerjshtmlcss.innerHTML = "";
    viewerjshtmlcss.style.display = "none";
    ocultarLoaderC5();
    return;
  }

  mostrarLoaderC5();

  const img = new Image();
  pendingImagejshtmlcss = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImagejshtmlcss !== img) return;

    viewerjshtmlcss.innerHTML = "";
    viewerjshtmlcss.appendChild(img);

    viewerjshtmlcss.style.display = "block";
    ocultarLoaderC5();

    pendingImagejshtmlcss = null;
  };

  img.onerror = () => {
    if (pendingImagejshtmlcss !== img) return;

    viewerjshtmlcss.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerjshtmlcss.style.display = "block";
    ocultarLoaderC5();

    pendingImagejshtmlcss = null;
  };

  img.src = url;
}

function renderMediaC5() {
  const media = certificadojshtmlcss.medios[currentMediajshtmlcss];
  viewerjshtmlcss.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC5(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC5();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerjshtmlcss.style.display = "block";
    viewerjshtmlcss.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerjshtmlcss.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexjshtmlcss.value=currentMediajshtmlcss+1;
  totalMediajshtmlcss.textContent = certificadojshtmlcss.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnjshtmlcss.addEventListener("click", () => {
  currentMediajshtmlcss++;
  if(currentMediajshtmlcss >= certificadojshtmlcss.medios.length) {
    currentMediajshtmlcss=0;
  }
  renderMediaC5();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnjshtmlcss.addEventListener("click",()=>{
  currentMediajshtmlcss--;
  if(currentMediajshtmlcss < 0) {
    currentMediajshtmlcss = certificadojshtmlcss.medios.length-1;
  }
  renderMediaC5();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexjshtmlcss.addEventListener("change", () => {
  const value=Number(mediaIndexjshtmlcss.value);
  if(value>=1 && value<=certificadojshtmlcss.medios.length) {
    currentMediajshtmlcss=value-1;
    renderMediaC5();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnjshtmlcss.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnjshtmlcss.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC5();