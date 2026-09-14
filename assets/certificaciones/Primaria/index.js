/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC8 = document.getElementById("mediaViewerC8");
const prevBtnC8 = document.getElementById("prevBtnC8");
const nextBtnC8 = document.getElementById("nextBtnC8");
const mediaIndexC8 = document.getElementById("mediaIndexC8");
const totalMediaC8 = document.getElementById("totalMediaC8");
const loaderC8 = document.getElementById("loader-c8");
let currentMediaC8 = 0;
let pendingImageC8 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC8 = {
  nombre: "Certificado: Primaria",
  medios: [
    {
      type: "text",
      content:`
        <h3>Educación Primaria Básica (EPB)</h3>
        <p><b>Centro Educativo:</b> <a href="https://maps.app.goo.gl/C33NUr3LMaqS5E6B8" target="_blank">CEIP Príncipe Don Felipe, Juan Carlos I, 40, 28660 Boadilla del Monte, Madrid, España</a></p>
        <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Cursos alcanzados:</b></p>
        <p> - 1º de Educación Infantil: 2000/01</p>
        <p> - <a href="Segundo-Ed-Infantil.pdf" target="_blank">2º de Educación Infantil: 2001/02</a></p>
        <p> - 3º de Educación Infantil: 2002/03</p>
        <p> - Orla de Graduación de Ed. Infantil (junio 2003): <i class="fa fa-globe"></i><a href="Graduacion-Ed-Infantil.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p> - <a href="Primero-Ed-Primaria.pdf" target="_blank">1º de Educación Primaria: 2003/04</a></p>
        <p> - <a href="Segundo-Ed-Primaria.pdf" target="_blank">2º de Educación Primaria: 2004/05</a></p>
        <p> - <a href="Tercero-Ed-Primaria.pdf" target="_blank">3º de Educación Primaria: 2005/06</a></p>
        <p> - 4º de Educación Primaria: 2006/07</p>
        <p> - 5º de Educación Primaria: 2007/08</p>
        <p> - <a href="Sexto-Ed-Primaria.pdf" target="_blank">6º de Educación Primaria: 2008/09</a></p>
        <p> - Orla de Graduación de Ed. Primaria (junio 2009): <i class="fa fa-globe"></i><a href="Graduacion-Ed-Primaria.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del Colegio durante mi presencia</h3>
        <img src="logo_anterior.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del Colegio actual</h3>
        <img src="logo_posterior.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Obra de teatro por el final de Ed. Primaria (junio 2009)</h3>
        <img src="https://i.postimg.cc/x1DvdMDP/01.jpg"/>
      `
    },
    {type: "image", src: "https://i.postimg.cc/Y9Mk2Xbw/02.jpg"},
    {type: "image", src: "https://i.postimg.cc/7YT1DXc6/03.jpg"},  
    {type: "image", src: "https://i.postimg.cc/J0sNsQzp/04.jpg"},  
    {type: "image", src: "https://i.postimg.cc/fy1xm03D/05.jpg"},  
    {type: "image", src: "https://i.postimg.cc/nVWK6N3g/06.jpg"},  
    {type: "image", src: "https://i.postimg.cc/8zfTZfjx/07.jpg"},  
    {type: "image", src: "https://i.postimg.cc/KYXxwcTj/08.jpg"},  
    {type: "image", src: "https://i.postimg.cc/FKjN4tbZ/09.jpg"},  
    {type: "image", src: "https://i.postimg.cc/tTkbshMn/10.jpg"},  
    {type: "image", src: "https://i.postimg.cc/qqZdLp0k/11.jpg"},  
    {type: "image", src: "https://i.postimg.cc/prdHzpwG/12.jpg"},  
    {type: "image", src: "https://i.postimg.cc/59P11SzZ/13.jpg"},
    {
      type: "text",
      content:`
        <h3>Experiencia en mi Acto de Graduación de Primaria (junio 2009)</h3>
        <img src="https://i.postimg.cc/s2S7C20N/01.jpg"/>
      `
    },
    {type: "image", src: "https://i.postimg.cc/MpgVLBtB/02.jpg"},  
    {type: "image", src: "https://i.postimg.cc/ry9GpKF6/03.jpg"},  
    {type: "image", src: "https://i.postimg.cc/hPy996dp/04.jpg"},  
    {type: "image", src: "https://i.postimg.cc/8PPRfNj7/05.jpg"},  
    {type: "image", src: "https://i.postimg.cc/0yz7ZnGx/06.jpg"},
    {
      type: "text",
      content:`
        <h3>Datos de contacto del Colegio</h3>
        <p><b>Teléfono:</b> 91 633 16 26</p>
        <p><b>Correo electrónico:</b> secretaria.cp.principedonfelipe.boadilla@educa.madrid.org</p>
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
function mostrarLoaderC8() {
  loaderC8.style.display = "block";
  viewerC8.style.display = "none";
}

function ocultarLoaderC8() {
  loaderC8.style.display = "none";
}

function cargarImagenC8(url) {
  if (!url) {
    viewerC8.innerHTML = "";
    viewerC8.style.display = "none";
    ocultarLoaderC8();
    return;
  }

  mostrarLoaderC8();

  const img = new Image();
  pendingImageC8 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC8 !== img) return;

    viewerC8.innerHTML = "";
    viewerC8.appendChild(img);

    viewerC8.style.display = "block";
    ocultarLoaderC8();

    pendingImageC8 = null;
  };

  img.onerror = () => {
    if (pendingImageC8 !== img) return;

    viewerC8.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC8.style.display = "block";
    ocultarLoaderC8();

    pendingImageC8 = null;
  };

  img.src = url;
}

function renderMediaC8() {
  const media = certificadoC8.medios[currentMediaC8];
  viewerC8.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC8(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC8();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC8.style.display = "block";
    viewerC8.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC8.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC8.value=currentMediaC8+1;
  totalMediaC8.textContent = certificadoC8.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC8.addEventListener("click", () => {
  currentMediaC8++;
  if(currentMediaC8 >= certificadoC8.medios.length) {
    currentMediaC8=0;
  }
  renderMediaC8();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC8.addEventListener("click",()=>{
  currentMediaC8--;
  if(currentMediaC8 < 0) {
    currentMediaC8 = certificadoC8.medios.length-1;
  }
  renderMediaC8();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC8.addEventListener("change", () => {
  const value=Number(mediaIndexC8.value);
  if(value>=1 && value<=certificadoC8.medios.length) {
    currentMediaC8=value-1;
    renderMediaC8();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC8.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC8.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC8();