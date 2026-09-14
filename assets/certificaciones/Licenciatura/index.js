/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC5 = document.getElementById("mediaViewerC5");
const prevBtnC5 = document.getElementById("prevBtnC5");
const nextBtnC5 = document.getElementById("nextBtnC5");
const mediaIndexC5 = document.getElementById("mediaIndexC5");
const totalMediaC5 = document.getElementById("totalMediaC5");
const loaderC5 = document.getElementById("loader-c5");
let currentMediaC5 = 0;
let pendingImageC5 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC5 = {
  nombre: "Licenciatura: Ing. Telecomunicaciones",
  medios: [
    {
      type: "text",
      content:`
        <h3>Mi Licenciatura o Carrera Universitaria</h3>
        <p><b>Licenciatura:</b> <a href="https://www.urjc.es/estudios/grado/637-ingenieria-en-sistemas-audiovisuales-y-multimedia" target="_blank">Ingeniería en Sistemas Audiovisuales y Multimedia</a></p>
        <p><b>Rama de la Licenciatura:</b> Telecomunicaciones</p>
        <p><b>Campus universitario:</b> <a href="https://maps.app.goo.gl/FLMAsusBbyKdD83J7" target="_blank">URJC Fuenlabrada, Camino del Molino, 5, 28942 Fuenlabrada, Madrid, España</a></p>
        <p><b>Ver título oficial en español:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Ver título oficial en inglés:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Ver el historial académico:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Ver el libro de la Licenciatura:</b> <i class="fa fa-globe"></i><a href="Libro-Licenciatura.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo de la Universidad</h3>
        <img src="logo_uni.png"/>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Mi periodo universitario se llevo a cabo en 4 etapas:</b></p>
        <p> 1. Periodo de Asignaturas: desde septiembre/2016 a junio/2021</p>
        <p> 2. Periodo de Prácticas Curriculares en Empresa: desde septiembre/2021 a Febrero/2022</p>
        <p> 3. Periodo de Experiencia Erasmus+ fuera de España (en inglés): desde Febrero/2022 a julio/2022</p>
        <p> 4. Periodo de desarrollo y presentación del Trabajo de Fin de Grado (TFG): desde septiembre/2022 a julio/2023</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Trabajo de Fin de Grado - TFG:</b> <i class="fa fa-globe"></i><a href="TFGAlejandroFernandezPerez.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Presentación del TFG (en español):</b> <i class="fa fa-globe"></i><a href="PresentacionTFGAlejandroFernandezPerez.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Presentación del TFG (en inglés):</b> <i class="fa fa-globe"></i><a href="BA-FinalProject-Presentation.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Mi tutor de TFG:</b> <i class="fa fa-globe"></i><a href="Mi-Tutor-TFG.png" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Nota de mis Prácticas Curriculares en Empresa:</b> 9</p>
        <p><b>Nota de mi Trabajo de Fin de Grado:</b> 9.3</p>
        <p><b>Nota media final:</b> 7</p>
        <p><b>Orla de Graduación:</b> <i class="fa fa-globe"></i><a href="Graduacion.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Foto mía graduado 1</h3>
        <img src="graduado1.jpg"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Foto mía graduado 2</h3>
        <img src="graduado2.jpg"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Mi Vida Universitaria</h3>
        <iframe width="100%" height="100%" src="https://streamable.com/e/snd0v3"></iframe>
      `
    },
    {
      type: "text",
      content:`
        <h3>Experiencia en mi Acto de Graduación (octubre 2023)</h3>
        <img src="https://i.postimg.cc/jjM17tbv/01.jpg"/>
      `
    },
    {type: "image", src: "https://i.postimg.cc/XYcmn91R/02.jpg"},   
    {type: "image", src: "https://i.postimg.cc/qq3DSKCZ/03.jpg"},  
    {type: "image", src: "https://i.postimg.cc/9XRkr6Nt/04.jpg"},  
    {type: "image", src: "https://i.postimg.cc/pT71sCyF/05.jpg"},
    {type: "video", src: "https://streamable.com/e/4eybtc"},
    {type: "image", src: "https://i.postimg.cc/nhZSSCV0/07.jpg"},  
    {type: "image", src: "https://i.postimg.cc/SKS5RjwJ/08.jpg"},
    {type: "video", src: "https://streamable.com/e/vna4cl"},
    {type: "image", src: "https://i.postimg.cc/HLkZHRyM/10.jpg"},
    {type: "video", src: "https://streamable.com/e/mpmsrf"},
    {type: "image", src: "https://i.postimg.cc/ZK6DLrmW/12.jpg"},
    {type: "image", src: "https://i.postimg.cc/XNRzFsRM/13.jpg"},  
    {type: "image", src: "https://i.postimg.cc/nzMPKgVx/14.jpg"},
    {
      type: "text",
      content:`
        <h3>Datos de contacto de la URJC</h3>
        <p><b>Teléfono:</b> 91 665 50 60</p>
        <p><b>Correos electrónicos:</b> fuenlabrada.secretariadealumnos@urjc.es, fuenlabrada.gerencia@urjc.es y grado.ingenieriasam@urjc.es</p>
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
function mostrarLoaderC5() {
  loaderC5.style.display = "block";
  viewerC5.style.display = "none";
}

function ocultarLoaderC5() {
  loaderC5.style.display = "none";
}

function cargarImagenC5(url) {
  if (!url) {
    viewerC5.innerHTML = "";
    viewerC5.style.display = "none";
    ocultarLoaderC5();
    return;
  }

  mostrarLoaderC5();

  const img = new Image();
  pendingImageC5 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC5 !== img) return;

    viewerC5.innerHTML = "";
    viewerC5.appendChild(img);

    viewerC5.style.display = "block";
    ocultarLoaderC5();

    pendingImageC5 = null;
  };

  img.onerror = () => {
    if (pendingImageC5 !== img) return;

    viewerC5.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC5.style.display = "block";
    ocultarLoaderC5();

    pendingImageC5 = null;
  };

  img.src = url;
}

function renderMediaC5() {
  const media = certificadoC5.medios[currentMediaC5];
  viewerC5.innerHTML="";

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

    viewerC5.style.display = "block";
    viewerC5.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC5.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC5.value=currentMediaC5+1;
  totalMediaC5.textContent = certificadoC5.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC5.addEventListener("click", () => {
  currentMediaC5++;
  if(currentMediaC5 >= certificadoC5.medios.length) {
    currentMediaC5=0;
  }
  renderMediaC5();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC5.addEventListener("click",()=>{
  currentMediaC5--;
  if(currentMediaC5 < 0) {
    currentMediaC5 = certificadoC5.medios.length-1;
  }
  renderMediaC5();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC5.addEventListener("change", () => {
  const value=Number(mediaIndexC5.value);
  if(value>=1 && value<=certificadoC5.medios.length) {
    currentMediaC5=value-1;
    renderMediaC5();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC5.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC5.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC5();