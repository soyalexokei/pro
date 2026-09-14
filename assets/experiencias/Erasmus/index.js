/****************************************************/
/* ELEMENTOS DE LA EXPERIENCIA */
/****************************************************/
const viewerE0A = document.getElementById("mediaViewerE0A");
const prevBtnE0A = document.getElementById("prevBtnE0A");
const nextBtnE0A = document.getElementById("nextBtnE0A");
const mediaIndexE0A = document.getElementById("mediaIndexE0A");
const totalMediaE0A = document.getElementById("totalMediaE0A");
const loaderE0A = document.getElementById("loader-e0A");
let currentMediaE0A = 0;
let pendingImageE0A = null;

/****************************************************/
/* DATOS DE LA EXPERIENCIA */
/****************************************************/
const experiencia_proE0A = {
  nombre: "Experiencia de Erasmus en Serbia",
  medios: [
    {
      type: "text",
      content:`
        <h3>Semestre de Erasmus+</h3>
        <p><b>Institución (siglas en español):</b> <a href="https://www.course-catalogue.uns.ac.rs/course-catalogue/faculty-of-technical-sciences" target="_blank">Facultad de Ciencias Técnicas (FTN)</a> - <a href="https://www.course-catalogue.uns.ac.rs/course-catalogue/university-of-novi-sad" target="_blank">Universidad de Novi Sad (UNS)</a></p>
        <p><b>Institución (siglas en serbio):</b> <a href="https://www.course-catalogue.uns.ac.rs/course-catalogue/faculty-of-technical-sciences" target="_blank">Fakultet Tehničkih Nauka (FTN)</a> - <a href="https://www.course-catalogue.uns.ac.rs/course-catalogue/university-of-novi-sad" target="_blank">Univerzitet u Novom Sadu (UNS)</a></p>
        <p><b>Duración:</b> 1 semestre (6 meses)</p>
        <p><b>Idioma:</b> Inglés</p>
        <p><b>Remuneración:</b> 200 € netos / mes</p>
        <p><b>Experiencia realizada gracias a:</b> <a href="https://www.course-catalogue.uns.ac.rs/course-catalogue/university-of-novi-sad" target="_blank">UNS</a> y <a href="https://www.urjc.es/internacional/erasmus-y-movilidad" target="_blank">URJC</a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Asignaturas (30 ECTS):</b></p>
        <p> - Informática II <=> Fundamentals in Programming ==> Nota: 8.5</p>
        <p> - Protocolos para la Transmisión de Audio y Vídeo en Internet <=> XML & WEB Services ==> Nota: 6.5</p>
        <p> - Tratamiento Digital de la Imagen <=> Digital Image Processing ==> Nota: 5.5</p>
        <p> - Gráficos y Visualización en 3D <=> Energy & Renewable Energy Sources in Rural Areas ==> Nota: 9.5</p>
        <p> - Laboratorio de Tecnologías Audiovisuales en la Web <=> Strategic Planning in Postal Traffic & Telecommunications ==> Nota: 9.5</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Proyecto Web de la asignatura de Fundamentals in Programming:</b></p>
        <ul>
          <p><b>Descripción:</b> Asignatura de programación en C</p>
          <p><b>Guía docente:</b> <i class="fa fa-globe"></i><a href="https://www.course-catalogue.uns.ac.rs/component/jdownloads/send/4-fakultet-tehnickih-nauka/1712-fundamentals-in-programming" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Acceso a la web:</b> <i class="fa fa-globe"></i><a href="programmingC.html">Ver online</a><i class="fa fa-globe"></i></p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos del Erasmus+</h3>
        <p><b>Libro del Erasmus+:</b> <i class="fa fa-globe"></i><a href="Libro.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Tarjeta ESN Oficial:</b> <i class="fa fa-globe"></i><a href="ESN.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>                            
        <p><b>Tarjeta de Transporte de Novi Sad:</b> <i class="fa fa-globe"></i><a href="TransporteNoviSad.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de la institución universitaria</h3>
        <p><b>Teléfonos:</b> +381 21 485 2056 y +34 91 665 50 60</p>
        <p><b>Correos electrónicos:</b> darkoste@uns.ac.rs, iro.ftn@uns.ac.rs y ana.arboleya@urjc.es</p>
        <p><b>Sede:</b> <a href="https://maps.app.goo.gl/nWr1PJDAnpiyfQQj8" target="_blank">Zorana Đinđića 1, Novi Sad 21000, Serbia</a></p>
      `
    }
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderE0A() {
  loaderE0A.style.display = "block";
  viewerE0A.style.display = "none";
}

function ocultarLoaderE0A() {
  loaderE0A.style.display = "none";
}

function cargarImagenE0A(url) {
  if (!url) {
    viewerE0A.innerHTML = "";
    viewerE0A.style.display = "none";
    ocultarLoaderE0A();
    return;
  }

  mostrarLoaderE0A();

  const img = new Image();
  pendingImageE0A = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageE0A !== img) return;

    viewerE0A.innerHTML = "";
    viewerE0A.appendChild(img);

    viewerE0A.style.display = "block";
    ocultarLoaderE0A();

    pendingImageE0A = null;
  };

  img.onerror = () => {
    if (pendingImageE0A !== img) return;

    viewerE0A.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerE0A.style.display = "block";
    ocultarLoaderE0A();

    pendingImageE0A = null;
  };

  img.src = url;
}

function renderMediaE0A() {
  const media = experiencia_proE0A.medios[currentMediaE0A];
  viewerE0A.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenE0A(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderE0A();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerE0A.style.display = "block";
    viewerE0A.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerE0A.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexE0A.value=currentMediaE0A+1;
  totalMediaE0A.textContent = experiencia_proE0A.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnE0A.addEventListener("click", () => {
  currentMediaE0A++;
  if(currentMediaE0A >= experiencia_proE0A.medios.length) {
    currentMediaE0A=0;
  }
  renderMediaE0A();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnE0A.addEventListener("click",()=>{
  currentMediaE0A--;
  if(currentMediaE0A < 0) {
    currentMediaE0A = experiencia_proE0A.medios.length-1;
  }
  renderMediaE0A();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexE0A.addEventListener("change", () => {
  const value=Number(mediaIndexE0A.value);
  if(value>=1 && value<=experiencia_proE0A.medios.length) {
    currentMediaE0A=value-1;
    renderMediaE0A();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnE0A.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnE0A.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaE0A();