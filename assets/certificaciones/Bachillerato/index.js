/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC6 = document.getElementById("mediaViewerC6");
const prevBtnC6 = document.getElementById("prevBtnC6");
const nextBtnC6 = document.getElementById("nextBtnC6");
const mediaIndexC6 = document.getElementById("mediaIndexC6");
const totalMediaC6 = document.getElementById("totalMediaC6");
const loaderC6 = document.getElementById("loader-c6");
let currentMediaC6 = 0;
let pendingImageC6 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC6 = {
  nombre: "Certificado: Bachillerato",
  medios: [
    {
      type: "text",
      content:`
        <h3>Bachillerato</h3>
        <p><b>Centro Educativo:</b> <a href="https://maps.app.goo.gl/gWNBuUwKEQbjnYfR7" target="_blank">IES Profesor Máximo Trueba, Santillana del Mar, 22, 28660 Boadilla del Monte, Madrid, España</a></p>
        <p><b>Modalidad:</b> Bachillerato Tecnológico</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Cursos alcanzados:</b></p>
        <p> - 1º de Bachillerato: 2013/14</p>
        <p> - 2º de Bachillerato: 2014/15</p>
        <p><b>Orla de Graduación (mayo 2015):</b> <i class="fa fa-globe"></i><a href="Graduacion_Bachillerato.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Diploma de Graduación:</b> <i class="fa fa-globe"></i><a href="DiplomaGraduadoBachillerato.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Examen de la PAU (Prueba de Acceso a la Universidad) de junio de 2015:</b> Aprobado con un 8 sobre 14</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del Instituto</h3>
        <img src="../ESO/logo_tuto.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Experiencia en mi Acto de Graduación (mayo 2015)</h3>
        <img src="https://i.postimg.cc/8CPjtQj7/1.png"/>
      `
    },
    {type: "image", src: "https://i.postimg.cc/K8bK3gbr/2.png"},
    {type: "image", src: "https://i.postimg.cc/pXzhdJwL/3.png"},
    {type: "image", src: "https://i.postimg.cc/RZTW7VVr/4.png"},
    {type: "image", src: "https://i.postimg.cc/G3ZTr5Sf/5.png"},
    {
      type: "text",
      content:`
        <h3>Datos de contacto del Instituto</h3>
        <p><b>Teléfono:</b> 91 632 15 12</p>
        <p><b>Correo electrónico:</b> secretaria.ies.maximotrueba.boadilla@educa.madrid.org</p>
      `
    }
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC6() {
  loaderC6.style.display = "block";
  viewerC6.style.display = "none";
}

function ocultarLoaderC6() {
  loaderC6.style.display = "none";
}

function cargarImagenC6(url) {
  if (!url) {
    viewerC6.innerHTML = "";
    viewerC6.style.display = "none";
    ocultarLoaderC6();
    return;
  }

  mostrarLoaderC6();

  const img = new Image();
  pendingImageC6 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC6 !== img) return;

    viewerC6.innerHTML = "";
    viewerC6.appendChild(img);

    viewerC6.style.display = "block";
    ocultarLoaderC6();

    pendingImageC6 = null;
  };

  img.onerror = () => {
    if (pendingImageC6 !== img) return;

    viewerC6.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC6.style.display = "block";
    ocultarLoaderC6();

    pendingImageC6 = null;
  };

  img.src = url;
}

function renderMediaC6() {
  const media = certificadoC6.medios[currentMediaC6];
  viewerC6.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC6(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC6();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC6.style.display = "block";
    viewerC6.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC6.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC6.value=currentMediaC6+1;
  totalMediaC6.textContent = certificadoC6.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC6.addEventListener("click", () => {
  currentMediaC6++;
  if(currentMediaC6 >= certificadoC6.medios.length) {
    currentMediaC6=0;
  }
  renderMediaC6();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC6.addEventListener("click",()=>{
  currentMediaC6--;
  if(currentMediaC6 < 0) {
    currentMediaC6 = certificadoC6.medios.length-1;
  }
  renderMediaC6();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC6.addEventListener("change", () => {
  const value=Number(mediaIndexC6.value);
  if(value>=1 && value<=certificadoC6.medios.length) {
    currentMediaC6=value-1;
    renderMediaC6();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC6.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC6.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC6();