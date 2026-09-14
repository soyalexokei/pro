//-- Declaración de variables
/*************************************************************************************/
const modalLinksv5 = document.querySelectorAll("[data-modal-voluntariado5]");
const modalLinksv4 = document.querySelectorAll("[data-modal-voluntariado4]");
const modalLinksv3 = document.querySelectorAll("[data-modal-voluntariado3]");
const modalLinksv2 = document.querySelectorAll("[data-modal-voluntariado2]");
const modalLinksv1 = document.querySelectorAll("[data-modal-voluntariado1]");

const modalTextv1 = document.querySelector("[data-modal-text-v1]");
const modalTextv2 = document.querySelector("[data-modal-text-v2]");
const modalTextv3 = document.querySelector("[data-modal-text-v3]");
const modalTextv4 = document.querySelector("[data-modal-text-v4]");
const modalTextv5 = document.querySelector("[data-modal-text-v5]");

const modalClosev1 = document.querySelector("[data-modal-close-v1]");
const modalClosev2 = document.querySelector("[data-modal-close-v2]");
const modalClosev3 = document.querySelector("[data-modal-close-v3]");
const modalClosev4 = document.querySelector("[data-modal-close-v4]");
const modalClosev5 = document.querySelector("[data-modal-close-v5]");

const modalCounterv1 = document.querySelector("[data-counter-v1]");
const modalCounterv2 = document.querySelector("[data-counter-v2]");
const modalCounterv3 = document.querySelector("[data-counter-v3]");
const modalCounterv4 = document.querySelector("[data-counter-v4]");
const modalCounterv5 = document.querySelector("[data-counter-v5]");

const modalPrevv1 = document.querySelector("[data-prev-v1]");
const modalPrevv2 = document.querySelector("[data-prev-v2]");
const modalPrevv3 = document.querySelector("[data-prev-v3]");
const modalPrevv4 = document.querySelector("[data-prev-v4]");
const modalPrevv5 = document.querySelector("[data-prev-v5]");

const modalNextv1 = document.querySelector("[data-next-v1]");
const modalNextv2 = document.querySelector("[data-next-v2]");
const modalNextv3 = document.querySelector("[data-next-v3]");
const modalNextv4 = document.querySelector("[data-next-v4]");
const modalNextv5 = document.querySelector("[data-next-v5]");

const modalImgv1 = document.querySelector("[data-modal-img-v1]");
const modalImgv2 = document.querySelector("[data-modal-img-v2]");
const modalImgv3 = document.querySelector("[data-modal-img-v3]");
const modalImgv4 = document.querySelector("[data-modal-img-v4]");
const modalImgv5 = document.querySelector("[data-modal-img-v5]");

const modalVideov1 = document.querySelector("[data-modal-video-v1]");
const modalVideov2 = document.querySelector("[data-modal-video-v2]");
const modalVideov3 = document.querySelector("[data-modal-video-v3]");
const modalVideov4 = document.querySelector("[data-modal-video-v4]");
const modalVideov5 = document.querySelector("[data-modal-video-v5]");
/*************************************************************************************/

/* Modals Elements */
/*************************************************************************************/
const modalElementsV = [
  {
    modal: document.getElementById("voluntariado1"),
    links: modalLinksv1,
    close: modalClosev1,
    text: modalTextv1,
    img: modalImgv1,
    video: modalVideov1,
    counter: modalCounterv1,
    prev: modalPrevv1,
    next: modalNextv1
  },
  {
    modal: document.getElementById("voluntariado2"),
    links: modalLinksv2,
    close: modalClosev2,
    text: modalTextv2,
    img: modalImgv2,
    video: modalVideov2,
    counter: modalCounterv2,
    prev: modalPrevv2,
    next: modalNextv2
  },
  {
    modal: document.getElementById("voluntariado3"),
    links: modalLinksv3,
    close: modalClosev3,
    text: modalTextv3,
    img: modalImgv3,
    video: modalVideov3,
    counter: modalCounterv3,
    prev: modalPrevv3,
    next: modalNextv3
  },
  {
    modal: document.getElementById("voluntariado4"),
    links: modalLinksv4,
    close: modalClosev4,
    text: modalTextv4,
    img: modalImgv4,
    video: modalVideov4,
    counter: modalCounterv4,
    prev: modalPrevv4,
    next: modalNextv4
  },
  {
    modal: document.getElementById("voluntariado5"),
    links: modalLinksv5,
    close: modalClosev5,
    text: modalTextv5,
    img: modalImgv5,
    video: modalVideov5,
    counter: modalCounterv5,
    prev: modalPrevv5,
    next: modalNextv5
  }
];
/*************************************************************************************/

/* Datos de los voluntariados */
/*************************************************************************************/
const voluntariados = [
  //-- Voluntariado 3
  {
    pageV:0,
    pagesV:[
      {img: "https://i.postimg.cc/Xv7m8Q8s/6.jpg"},
      {img: "https://i.postimg.cc/fb2FgmqD/7.jpg"},
      {img: "https://i.postimg.cc/QtFPLCv5/8.jpg"},
      {img: "https://i.postimg.cc/tT8c9yHc/9.jpg"},
      {img: "https://i.postimg.cc/5yvR0G42/10.jpg"},
      {img: "https://i.postimg.cc/SQz5DX6b/11.jpg"},
      {video: "https://streamable.com/e/33hp9n"},
      {video: "https://streamable.com/e/399ss1"},
      {video: "https://streamable.com/e/7iouba"},
      {video: "https://streamable.com/e/nhtj1p"},
      {video: "https://streamable.com/e/8lm9xq"},
      {img: "https://i.postimg.cc/CLT2tF7B/17.jpg"},
      {video: "https://streamable.com/e/97r4c1"},
      {video: "https://streamable.com/e/6d33fe"},
      {video: "https://streamable.com/e/nx4s9f"},
      {video: "https://streamable.com/e/mcgtbb"},
      {video: "https://streamable.com/e/whkrj6"},
      {video: "https://streamable.com/e/pi8ah7"},
      {video: "https://streamable.com/e/q68fh3"},
      {video: "https://streamable.com/e/butyzy"},
      {img: "https://i.postimg.cc/vHrKwp2P/26.jpg"},
      {img: "https://i.postimg.cc/52fR4nZf/27.jpg"},
      {img: "https://i.postimg.cc/xdCpHqf7/28.jpg"},
      {img: "https://i.postimg.cc/qvQZz2Ty/29.jpg"},
      {img: "https://i.postimg.cc/R0DsT9q0/30.jpg"},
      {img: "https://i.postimg.cc/DZ4CjDbP/31.jpg"},
      {img: "https://i.postimg.cc/Gt0XZQFw/32.jpg"},
      {video: "https://streamable.com/e/oas1fa"},
      {img: "https://i.postimg.cc/wMhwHm2t/34.jpg"},
      {img: "https://i.postimg.cc/59v78hJx/35.jpg"},
      {img: "https://i.postimg.cc/3JTL1tr2/36.jpg"},
      {img: "https://i.postimg.cc/qMx152gS/37.jpg"},
      {img: "https://i.postimg.cc/529sdjC0/38.jpg"},
      {img: "https://i.postimg.cc/K89JZFP5/39.jpg"},
      {img: "https://i.postimg.cc/VNd4vT4P/40.jpg"},
      {video: "https://streamable.com/e/yitban"},
    ]
  },
  //-- Voluntariado 4
  {
    pageV:0,
    pagesV:[
      {
        text:`
          <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
          <p><b>Nombre del programa:</b> <a href="https://www.fundaciontelefonica.com/voluntarios/reconectados/" target="_blank">Reconectados</a></p>
          <p><b>Descripción del programa:</b> Ayudar a la tercera edad a usar sus dispositivos móviles y las nuevas tecnologías de forma más ágil y eficaz</p>
          <p><b>Lugar del programa:</b> Edificio de la Fundación Telefónica de Madrid, Madrid, España</p>
          <p><b>Contenidos del programa:</b> <i class="fa fa-globe"></i><a href="./assets/voluntariados/Contenidos_Reconectados.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Presentación del programa:</b> <i class="fa fa-globe"></i><a href="./assets/voluntariados/Experiencia_Practica_Digital.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Idioma empleado:</b> Español</p>
          <p><b>Mis funciones en el programa:</b></p>
          <p> - Resolución de dudas</p>
          <p> - Enseñar dinámicamente y con mucha práctica</p>
          <p> - Tener paciencia y repetir la explicación múltiples veces</p>
        `
      },
      {
        text:`
          <h3 style="text-align: center;">Datos de la organización</h3>
          <p><b>Teléfono:</b> +34 91 498 42 73</p>
          <p><b>Teléfono de visitas guiadas:</b> +34 659 15 80 11</p>
          <p><b>Dirección:</b> <a href="https://maps.app.goo.gl/Q97euJRGrbybDDHG7" target="_blank">Gran Vía, 28, Centro, 28013 Madrid, España</a></p>
        `
      },
      {img: "https://i.postimg.cc/X7g3j1pM/prueba.jpg"},
    ]
  },
  //-- Voluntariado 5
  {
    pageV:0,
    pagesV:[
      {
        text:`
          <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
          <p><b>Tipo de experiencia:</b> <a href="https://www.worldpackers.com/positions/64681" target="_blank">Worldpackers</a> - voluntario, viajero y mochilero</p>
          <p><b>Idioma empleado:</b> Inglés y Español</p>
          <p><b>Funciones (lo que ofrezco):</b></p>
          <p> - Ayudar al Chef a preparar el almuerzo</p>
          <p> - Encargarse de los Check-In y los Check-Out de los nuevos huéspedes</p>
          <p> - Encargarse de la limpieza del Hotel Rural</p>
          <p> - Encargarse de la limpieza, orden y adecuación de las habitaciones de los huéspedes</p>
          <p> - Hacer la colada del Hotel Rural</p>
          <p><b>Funciones (lo que obtengo):</b></p>
          <p> - Alojamiento en habitación compartida con separación (estilo hippie)</p>
          <p> - Almuerzo diario, servido por el equipo de cocina</p>
          <p> - Desayuno y cena por cuenta propia</p>
          <p> - Consumo de productos del Hotel Rural gratis</p>
          <p> - Wi-Fi gratuito</p>
          <p> - Clases de Yoga a 5€ (para huéspedes son 25€)</p>
          <p> - Uso gratuito de la lavandería y de la cocina</p>
          <p> - 2 días libres a la semana</p>
        `
      },
      {
        text:`
          <h3 style="text-align: center;">Datos de la organización</h3>
          <p><b>Teléfono:</b> +39 351 7126972</p>
          <p><b>Correo electrónico:</b> info@ibizayoga.com & ibizayoga@me.com</p>
          <p><b>Dirección:</b> <a href="https://maps.app.goo.gl/evEuG5BhMhRDvDoH6" target="_blank">Benirràs D, 51, 07810 Sant Joan de Labritja, Illes Balears, España</a></p>
        `
      },{img: "https://i.postimg.cc/d0N8kqJp/1.png"},{img: "https://i.postimg.cc/bvwxwGf1/2.png"},
      {img: "https://i.postimg.cc/fRK7scpw/3.png"},{img: "https://i.postimg.cc/7ZD1jsBs/4.png"},{img: "https://i.postimg.cc/MZCmmK18/5.png"},
      {img: "https://i.postimg.cc/Fs0gW5xk/6.png"},{img: "https://i.postimg.cc/0Q3d393D/7.png"},{img: "https://i.postimg.cc/kGbFPk3Z/8.png"},
      {img: "https://i.postimg.cc/wxykNsyV/9.png"},{img: "https://i.postimg.cc/vBDt34PG/10.png"},{img: "https://i.postimg.cc/Hk4zxDc1/11.png"},
      {img: "https://i.postimg.cc/HLY28ZXc/12.png"},{img: "https://i.postimg.cc/59TnKmdT/13.png"},{img: "https://i.postimg.cc/66yMhmSC/14.png"},
      {img: "https://i.postimg.cc/mhWrK9VC/15.jpg"},{img: "https://i.postimg.cc/y8znsYNT/16.png"},{img: "https://i.postimg.cc/hPmMk7Kj/17.png"},
    ]
  },
];
/*************************************************************************************/


/* Renderizar modales */
/*************************************************************************************/
function renderModalV(indexV) {
  const datos = voluntariados[indexV];
  const ui = modalElementsV[indexV];
  const pageV = datos.pagesV[datos.pageV];
  ui.counter.textContent = `${datos.pageV+1} / ${datos.pagesV.length}`;

  if(pageV.text){
    ui.text.innerHTML = pageV.text;
  }else{
    ui.text.innerHTML = "";
  }

  if(pageV.img){
    ui.img.src = pageV.img;
    ui.img.width = "500";
    ui.img.style.display = "block";
  }else{
    ui.img.removeAttribute("src");
    ui.img.style.display = "none";
  }

  if(pageV.video){
    ui.video.src = pageV.video;
    ui.video.width = "420";
    ui.video.height = "640";
    ui.video.style.display = "block";
  }else{
    ui.video.removeAttribute("src");
    ui.video.style.display = "none";
  }
}
/*************************************************************************************/

//-- Abrir modales
/*************************************************************************************/
modalElementsV.forEach( (ui,indexV) => {
  ui.links.forEach(link=>{
    link.addEventListener("click", (eventV) => {
      eventV.preventDefault();
      voluntariados[indexV].pageV=0;
      renderModalV(indexV);
      ui.modal.classList.add("active");
    });
  });
});
/*************************************************************************************/

//-- Cerrar modales
/*************************************************************************************/
modalElementsV.forEach(ui=>{
  ui.close.addEventListener("click",()=>{
    ui.modal.classList.remove("active");
  });
  ui.modal.addEventListener("click",(eventV)=>{
    if(eventV.target===ui.modal){
      ui.modal.classList.remove("active");
    }
  });
});
/*************************************************************************************/

// Botón siguiente
/*************************************************************************************/
modalElementsV.forEach((ui,indexV)=>{
  ui.next.addEventListener("click",()=>{
    const datos = voluntariados[indexV];
    datos.pageV++;
    if(datos.pageV>=datos.pagesV.length){
      datos.pageV=0;
    }
    renderModalV(indexV);
  });
});
/*************************************************************************************/

//-- Botón anterior
/*************************************************************************************/
modalElementsV.forEach((ui,indexV)=>{
  ui.prev.addEventListener("click",()=>{
    const datos = voluntariados[indexV];
    datos.pageV--;
    if(datos.pageV<0){
        datos.pageV=datos.pagesV.length-1;
    }
    renderModalV(indexV);
  });
});
/*************************************************************************************/