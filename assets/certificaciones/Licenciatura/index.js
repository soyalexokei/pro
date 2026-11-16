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
  nombre: "Carrera Universitaria",
  medios: [
    {
      type: "text",
      content:`
        <h3>Título Oficial de mi Carrera Universitaria o Licenciatura</h3>
        <p><b>Licenciatura:</b> <a href="https://www.urjc.es/estudios/grado/637-ingenieria-en-sistemas-audiovisuales-y-multimedia" target="_blank">Ingeniería en Sistemas Audiovisuales y Multimedia</a></p>
        <p><b>Rama de la Licenciatura:</b> Telecomunicaciones</p>
        <p><b>Campus universitario:</b> <a href="https://maps.app.goo.gl/FLMAsusBbyKdD83J7" target="_blank">URJC Fuenlabrada, Camino del Molino, 5, 28942 Fuenlabrada, Madrid, España</a></p>
        <p><b>Web de la Universidad:</b> <a href="https://www.urjc.es/" target="_blank">Universidad Rey Juan Carlos</a></p>
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
        <p><b>Correo electrónico 1:</b> fuenlabrada.secretariadealumnos@urjc.es</p>
        <p><b>Correo electrónico 2:</b> fuenlabrada.gerencia@urjc.es</p>
        <p><b>Correo electrónico 3:</b> grado.ingenieriasam@urjc.es</p>
      `
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">Mi Carrera Universitaria o Licenciatura</h3>
        <h3 style="text-align: center;">no fue posible</h3>
        <h3 style="text-align: center;">sin la obtención del</h3>
        <h3 style="text-align: center;">Bachillerato</h3>
      `
    },
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
        <img src="logo_tuto.png"/>
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
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">La obtención del Bachillerato</h3>
        <h3 style="text-align: center;">no fue posible</h3>
        <h3 style="text-align: center;">sin la obtención de la ESO</h3>
      `
    },
    {
      type: "text",
      content:`
        <h3>Educación Secundaria Obligatoria (ESO)</h3>
        <p><b>Centro Educativo:</b> <a href="https://maps.app.goo.gl/gWNBuUwKEQbjnYfR7" target="_blank">IES Profesor Máximo Trueba, Santillana del Mar, 22, 28660 Boadilla del Monte, Madrid, España</a></p>
        <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Cursos alcanzados:</b></p>
        <p> - <a href="PrimeroESO.pdf" target="_blank">1º de la E.S.O: 2009/10</a></p>
        <p> - 2º de la E.S.O: 2010/11</p>
        <p> - 3º de la E.S.O: 2011/12</p>
        <p> - <a href="CuartoESO.pdf" target="_blank">4º de la E.S.O: 2012/13</a></p>
        <p><b>Orla de Graduación de la E.S.O (junio 2013):</b> <i class="fa fa-globe"></i><a href="Graduacion_ESO.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Diploma de Aprovechamiento:</b> <i class="fa fa-globe"></i><a href="DiplomaAprovechamientoESO.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del Instituto</h3>
        <img src="logo_tuto.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Datos de contacto del Instituto</h3>
        <p><b>Teléfono:</b> 91 632 15 12</p>
        <p><b>Correo electrónico:</b> secretaria.ies.maximotrueba.boadilla@educa.madrid.org</p>
      `
    },
    {
      type: "text",
      content:`
        <h3 style="text-align: center;">La obtención de la ESO</h3>
        <h3 style="text-align: center;">no fue posible</h3>
        <h3 style="text-align: center;">sin la obtención de</h3>
        <h3 style="text-align: center;">la Educación Primaria e Infantil</h3>
      `
    },
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