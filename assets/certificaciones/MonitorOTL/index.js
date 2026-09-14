/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC9 = document.getElementById("mediaViewerC9");
const prevBtnC9 = document.getElementById("prevBtnC9");
const nextBtnC9 = document.getElementById("nextBtnC9");
const mediaIndexC9 = document.getElementById("mediaIndexC9");
const totalMediaC9 = document.getElementById("totalMediaC9");
const loaderC9 = document.getElementById("loader-c9");
let currentMediaC9 = 0;
let pendingImageC9 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC9 = {
  nombre: "Certificado: Monitor de Ocio y Tiempo Libre",
  medios: [
    {
      type: "text",
      content:`
        <h3>Curso de Monitor de Ocio y Tiempo Libre</h3>
        <p><b>Organiza:</b> <a href="https://maps.app.goo.gl/QnbAnTh6U4i8aN2K7" target="_blank">ISADIA Aventura, María Teresa, 11, Salamanca, 28028 Madrid, España</a></p>
        <p><b>Lugar del curso:</b> <a href="https://maps.app.goo.gl/31KWtftYKaKv5CdZA" target="_blank">Universidad Europea de Madrid, Tajo, s/n, 28670 Villaviciosa de Odón, Madrid, España</a></p>
        <p><b>Periodo del Curso:</b> Todos los fines de semana de febrero, marzo y abril de 2017</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Memoria/Proyecto Final del Curso:</b> <i class="fa fa-globe"></i><a href="ProyectoFinal-MonitorOTL.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Teléfono de la empresa organizadora:</b> +34 657 51 00 87</p>
        <p><b>Correo electrónico de la empresa organizadora:</b> info@isadia-aventura.com</p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del Curso</h3>
        <img src="logo_motl.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Vídeo del Curso</h3>
        <iframe width="100%" height="100%" src="https://streamable.com/e/9teayc"></iframe>
      `
    },
    {
      type: "text",
      content:`
        <h3>Mis experiencias laborales como Monitor de OTL</h3>
        <h4><u>1º Experiencia</u></h4>
        <ul>
          <p><b>Periodo:</b> Desde mediados de junio 2017 hasta finales de julio 2017</p>
          <p><b>Puesto:</b> Monitor de campamento urbano</p>
          <p><b>Empresa contratante:</b> <a href="https://www.dnmo.es/" target="_blank">Dinamo 8 Educación, Cultura y Deportes</a></p>
          <p><b>Lugar de trabajo:</b> <a href="https://maps.app.goo.gl/DDPAQ33WULPz9K3v8" target="_blank">CEIP Ángel González, Humanes de Madrid, 12, 28914 Leganés, Madrid, España</a></p>
          <p><b>Sector:</b> Educación y tiempo libre</p>
          <p><b>Tipo de campamento:</b> Urbano de verano, sin pernocta y para niños/as entre 4 años y 12 años</p>
          <p><b>Tipo de contrato:</b> Contrato por hora</p>
          <p><b>Funciones:</b></p>
          <p> - Organización y puesta en marcha de<br>actividades lúdico-educativas, deportivas<br>y cooperativas</p>
          <p> - Monitor de desayuno, piscolabis y comidas<br>para controlar al grupo de menores</p>
          <p> - Resolución de conflictos que surjan</p>
          <p> - Proactividad durante la duración de la<br>jornada laboral</p>
          <p> - Entretenimiento y organización del tiempo<br>libre del grupo</p>
          <p> - Enseñanza de valores al grupo</p>
          <p> - Liderar el grupo</p>
          <p><b>Teléfono de la empresa:</b> 91 591 49 54</p>
          <p><b>Correo electrónico de la empresa:</b> info@dnmo.es</p>
          <p><b>Sede de la empresa:</b> <a href="https://maps.app.goo.gl/DJ4MAzkqbHteYiZd9" target="_blank">Mercedes Rodríguez, 11, Carabanchel, 28044 Madrid, España</a></p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo de la 1º Experiencia</h3>
        <img src="motl_exp1.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Sobre la 1º Experiencia</h3>
        <img src="https://i.postimg.cc/jj1LZHkQ/1.jpg"/>
      `
    },
    {type: "image", src: "https://i.postimg.cc/XYQZySfP/2.jpg"},
    {type: "image", src: "https://i.postimg.cc/hj7hwXkF/3.jpg"},
    {type: "image", src: "https://i.postimg.cc/hGvXLyMt/4.jpg"},
    {type: "image", src: "https://i.postimg.cc/jSmb1Mt5/5.png"},
    {
      type: "text",
      content:`
        <h4><u>2º Experiencia</u></h4>
        <ul>
          <p><b>Periodo:</b> Durante todo el mes de julio 2018</p>
          <p><b>Puesto:</b> Monitor de campamento con pernocta</p>
          <p><b>Empresa contratante:</b> <a href="https://www.encantaria.com/" target="_blank">Encantaria</a></p>
          <p><b>Lugar de trabajo:</b> <a href="https://maps.app.goo.gl/aeKDyFfZmWuHVaAE6" target="_blank">Avenida Ordesa, 5, 22370 Broto, Huesca, España</a></p>
          <p><b>Sector:</b> Educación y tiempo libre</p>
          <p><b>Tipo de campamento:</b> Con pernocta de verano para chavales/as entre 12 años y 17 años</p>
          <p><b>Tipo de contrato:</b> Contrato por hora</p>
          <p><b>Funciones:</b></p>
          <p> - Organización y puesta en marcha de<br>actividades lúdico-educativas, deportivas,<br>y cooperativas</p>
          <p> - Organización y puesta en marcha de las<br>actividades a realizar cada día</p>
          <p> - Resolución de conflictos que surjan</p>
          <p> - Trabajo diario con los participantes del<br>campamento, incluso control durante la noche</p>
          <p> - Organización y puesta en marcha de<br>excursiones por las cercanías de Broto:<br>Monte Perdido y el Valle de Ordesa</p>
          <p> - Enseñanza de valores a los participantes del<br>campamento</p>
          <p> - Coliderar todos los grupos, junto a<br>compañeros monitores</p>
          <p><b>Teléfono de la empresa:</b> +34 618 46 01 64</p>
          <p><b>Correo electrónico de la empresa:</b> encantaria@encantaria.com</p>
          <p><b>Sede de la empresa:</b> <a href="https://maps.app.goo.gl/kpBck7CMbPtu5bwg9" target="_blank">Cabañera Real, 7, 22520 Fraga, Huesca, España</a></p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo de la 2º Experiencia</h3>
        <img src="motl_exp2.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Sobre la 2º Experiencia</h3>
        <img src="https://i.postimg.cc/8P03mjwR/IMG-20250730-173041.png"/>
      `
    },
    {type: "image", src: "https://i.postimg.cc/wTvZNh5x/IMG-20250730-173321.png"},
    {type: "image", src: "https://i.postimg.cc/44wjn89F/IMG-20250730-173514.png"},
    {type: "image", src: "https://i.postimg.cc/zBz0rr0D/IMG-20250730-173851.png"},
    {type: "image", src: "https://i.postimg.cc/CKHmX1C6/IMG-20250730-174135.png"},
    {type: "image", src: "https://i.postimg.cc/dQWSJLbb/IMG-20250730-175717.png"},
    {type: "image", src: "https://i.postimg.cc/nhmdKTXx/IMG-20250730-175423.png"},
    {type: "image", src: "https://i.postimg.cc/DzKxxsGX/IMG-20250730-180402.png"},
    {type: "image", src: "https://i.postimg.cc/ZK27yXKj/IMG-20250730-181857.png"},
    {type: "image", src: "https://i.postimg.cc/k5Xv2v37/IMG-20250731-120746.png"},
    {type: "image", src: "https://i.postimg.cc/SNPhTDdv/IMG-20250731-120719-860.webp"},
    {type: "image", src: "https://i.postimg.cc/hGLRGgBk/IMG-20250731-121208.png"},
    {type: "image", src: "https://i.postimg.cc/YCmwJYyq/IMG-20250731-121410-875.webp"},
    {type: "image", src: "https://i.postimg.cc/k56FNX4H/IMG-20250731-121447-738.webp"},
    {type: "image", src: "https://i.postimg.cc/NjPkrrgT/IMG-20250731-122003.png"},
    {type: "image", src: "https://i.postimg.cc/x1dPCPSn/IMG-20250731-122020.png"},
    {type: "image", src: "https://i.postimg.cc/rFjJMP3f/IMG-20250731-122801.png"},
    {type: "image", src: "https://i.postimg.cc/X74LMbHZ/IMG-20250731-122812.png"},
    {type: "image", src: "https://i.postimg.cc/MZy5rTD2/IMG-20250731-123452.png"},
    {type: "image", src: "https://i.postimg.cc/BbGgn9JV/IMG-20250731-124645.png"},
    {type: "image", src: "https://i.postimg.cc/Wz67DW3b/IMG-20250731-125047.png"},
    {type: "image", src: "https://i.postimg.cc/G2DKRhnD/IMG-20250731-125928.png"},
    {type: "image", src: "https://i.postimg.cc/nLCTdGd0/IMG-20250731-130913.png"},
    {type: "image", src: "https://i.postimg.cc/bvWg4SW8/IMG-20250731-130846-074.webp"},
    {type: "image", src: "https://i.postimg.cc/g2cghW39/IMG-20250731-131258.png"},
    {type: "image", src: "https://i.postimg.cc/2SH2FKx1/IMG-20250731-131247.png"},
    {type: "image", src: "https://i.postimg.cc/RVLPqF6Q/IMG-20250731-131316.png"}
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC9() {
  loaderC9.style.display = "block";
  viewerC9.style.display = "none";
}

function ocultarLoaderC9() {
  loaderC9.style.display = "none";
}

function cargarImagenC9(url) {
  if (!url) {
    viewerC9.innerHTML = "";
    viewerC9.style.display = "none";
    ocultarLoaderC9();
    return;
  }

  mostrarLoaderC9();

  const img = new Image();
  pendingImageC9 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC9 !== img) return;

    viewerC9.innerHTML = "";
    viewerC9.appendChild(img);

    viewerC9.style.display = "block";
    ocultarLoaderC9();

    pendingImageC9 = null;
  };

  img.onerror = () => {
    if (pendingImageC9 !== img) return;

    viewerC9.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC9.style.display = "block";
    ocultarLoaderC9();

    pendingImageC9 = null;
  };

  img.src = url;
}

function renderMediaC9() {
  const media = certificadoC9.medios[currentMediaC9];
  viewerC9.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC9(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC9();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC9.style.display = "block";
    viewerC9.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC9.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC9.value=currentMediaC9+1;
  totalMediaC9.textContent = certificadoC9.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC9.addEventListener("click", () => {
  currentMediaC9++;
  if(currentMediaC9 >= certificadoC9.medios.length) {
    currentMediaC9=0;
  }
  renderMediaC9();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC9.addEventListener("click",()=>{
  currentMediaC9--;
  if(currentMediaC9 < 0) {
    currentMediaC9 = certificadoC9.medios.length-1;
  }
  renderMediaC9();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC9.addEventListener("change", () => {
  const value=Number(mediaIndexC9.value);
  if(value>=1 && value<=certificadoC9.medios.length) {
    currentMediaC9=value-1;
    renderMediaC9();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC9.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC9.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC9();