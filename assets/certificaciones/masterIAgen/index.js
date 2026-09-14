/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC1 = document.getElementById("mediaViewerC1");
const prevBtnC1 = document.getElementById("prevBtnC1");
const nextBtnC1 = document.getElementById("nextBtnC1");
const mediaIndexC1 = document.getElementById("mediaIndexC1");
const totalMediaC1 = document.getElementById("totalMediaC1");
const loaderC1 = document.getElementById("loader-c1");
let currentMediaC1 = 0;
let pendingImageC1 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC1 = {
  nombre: "Master: IA Generativa",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación IA Generativa</h3>
        <p><b>Organizado por:</b> <a href="https://maps.app.goo.gl/tEbeXXdMCEeExwJf8" target="_blank">EOI, Gregorio del Amo, 6, Moncloa - Aravaca, 28040 Madrid, España</a></p>
        <p><b>Lugar:</b> Online, a través de la plataforma <a href="https://campus.eoi.es/" target="_blank">Campus EOI</a></p>
        <p><b>Calendario:</b> Del miércoles 2 de octubre de 2024 al jueves 5 de diciembre de 2024</p>
        <p><b>Horario:</b> De lunes a viernes de 10:00 a 14:00</p>
        <p><b>Duración:</b> 220 h</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="IAgenerativaEOI.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo de la empresa</h3>
        <img src="logo_eoi.png"/>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Profesores:</b></p>
        <p>1. Raúl Ordóñez <a href="https://www.instagram.com/jaspeante/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://www.linkedin.com/in/raulordonez/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:hola@raulordonez.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://raulordonez.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.youtube.com/jasp" target="_blank"><i class="fa-brands fa-youtube"></i></a></p>
        <p>2. Javier Albelo <a href="https://www.linkedin.com/in/javier-albelo-45a89132/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="https://www.youtube.com/watch?v=us1CCu7eHis" target="_blank"><i class="fa-brands fa-youtube"></i></a></p>
        <p>3. Fran Bartolomé Valentín-Gamazo <a href="https://www.linkedin.com/in/franbvgamazo/?originalSubdomain=es" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:franbvg@proton.me" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://dayonerobot.com/" target="_blank"><i class="fa fa-globe"></i></a></p>
        <p>4. Yaye Cáceres <a href="https://www.linkedin.com/in/yayecaceres/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:yayecaceres@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://typeflowai.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.youtube.com/channel/UCwyCFDXrH-MbmUnN5myOwOA" target="_blank"><i class="fa-brands fa-youtube"></i></a></p>
        <p>5. Esperanza Noronha López <a href="https://www.linkedin.com/in/esperanzanoronhalopez/?originalSubdomain=es" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:espenoronha@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://esperanzanoronha.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.instagram.com/espenoronha/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://twitter.com/espenoronha" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15" height="15" fill="currentColor"><path d="M28.15 0H21.5l-3.9 7.5L13.6 0H7.35l6.7 12.3L6 24.25h6.65L18 17.5l5.35 6.75h6.85L22.95 12.3 28.15 0z"/></svg></a></p>
        <p>6. Efrén J. Rodríguez <a href="https://www.linkedin.com/in/efren-j-rodriguez/?trk=public_profile_samename-profile&originalSubdomain=es" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:efrenjrodriguez.edu@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://www.instagram.com/efrenjrodriguez/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://twitter.com/efrenjrodriguez" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15" height="15" fill="currentColor"><path d="M28.15 0H21.5l-3.9 7.5L13.6 0H7.35l6.7 12.3L6 24.25h6.65L18 17.5l5.35 6.75h6.85L22.95 12.3 28.15 0z"/></svg></a></p>
        <p>7. Pedro Martín Díaz <a href="https://www.linkedin.com/in/pedro-martin-diaz/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:pedromartindiaz@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://pedromartindiaz.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.instagram.com/pedromartindiaz/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://twitter.com/pedrovisualeo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15" height="15" fill="currentColor"><path d="M28.15 0H21.5l-3.9 7.5L13.6 0H7.35l6.7 12.3L6 24.25h6.65L18 17.5l5.35 6.75h6.85L22.95 12.3 28.15 0z"/></svg></a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Contenido del curso:</b></p>
        <p>Módulo 1: <a href="CursoIA/Módulo1-Fundamentos-IA.pdf" target="_blank">Fundamentos de inteligencia artificial</a></p>
        <p>Módulo 2: <a href="CursoIA/Módulo2-Chatbots-y-Tecnicas-Prompting.pdf" target="_blank">Chatbots y técnicas de prompting</a></p>
        <p>Módulo 3.1: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte1.pdf" target="_blank">Generación y edición de imagen (Parte 1)</a></p>
        <p>Módulo 3.2: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte2.pdf" target="_blank">Generación y edición de imagen (Parte 2)</a></p>
        <p>Módulo 3.3: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte3.pdf" target="_blank">Generación y edición de imagen (Parte 3)</a></p>
        <p>Módulo 3.4: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte4.pdf" target="_blank">Generación y edición de imagen (Parte 4)</a></p>
        <p>Módulo 4: <a href="CursoIA/Modulo4-Generacion-Edicion-Video.pdf" target="_blank">Generación y edición de vídeo</a></p>
        <p>Módulo 5: <a href="CursoIA/Modulo5-Generacion-Edición-Audio.pdf" target="_blank">Generación y edición de audio</a></p>
        <p>Módulo 6: <a href="CursoIA/Modulo6-Negocio-y-Marketing-con-IA.pdf" target="_blank">Negocio y marketing con IA</a></p>
        <p>Módulo 7.1: <a href="CursoIA/Modulo7-Productividad-IA-Parte1.pdf" target="_blank">Productividad con IA (Parte 1)</a></p>
        <p>Módulo 7.2: <a href="CursoIA/Modulo7-Productividad-IA-Parte2.pdf" target="_blank">Productividad con IA (Parte 2)</a></p>
        <p>Módulo 7.3: <a href="CursoIA/Modulo7-Productividad-IA-Parte3.pdf" target="_blank">Productividad con IA (Parte 3)</a></p>
        <p>Módulo 7.4: <a href="CursoIA/Modulo7-Productividad-IA-Parte4.pdf" target="_blank">Productividad con IA (Parte 4)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte1.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 1)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte2.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 2)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte3.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 3)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte4.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 4)</a></p>
        <p>Módulo 8.1: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte1.pdf" target="_blank">Ética y regulación de la IA (Parte 1)</a></p>
        <p>Módulo 8.2: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte2.pdf" target="_blank">Ética y regulación de la IA (Parte 2)</a></p>
        <p>Módulo 8.3: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte3.pdf" target="_blank">Ética y regulación de la IA (Parte 3)</a></p>
        <p>Módulo 8.4: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte4.pdf" target="_blank">Ética y regulación de la IA (Parte 4)</a></p>
        <p>Módulo 8.5: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte5.pdf" target="_blank">Ética y regulación de la IA (Parte 5)</a></p>
        <p>Módulo 9: <a href="CursoIA/Modulo9-Ecosistema-Copilot.pdf" target="_blank">Ecosistema Microsoft Copilot</a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Proyecto Final:</b> <i class="fa fa-globe"></i><a href="ProyectoIA-versionFinal.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Presentación del Proyecto Final:</b> <i class="fa fa-globe"></i><a href="Presentacion-PFIA.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>ZIP de la Interfaz Web:</b> <i class="fa fa-download"></i><a href="hackAlearning.zip" target="_blank">Descargar</a><i class="fa fa-download"></i></p>
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
function mostrarLoaderC1() {
  loaderC1.style.display = "block";
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
  const media = certificadoC1.medios[currentMediaV5];
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
  totalMediaV5.textContent = certificadoC1.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnV5.addEventListener("click", () => {
  currentMediaV5++;
  if(currentMediaV5 >= certificadoC1.medios.length) {
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
    currentMediaV5 = certificadoC1.medios.length-1;
  }
  renderMediaV5();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexV5.addEventListener("change", () => {
  const value=Number(mediaIndexV5.value);
  if(value>=1 && value<=certificadoC1.medios.length) {
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