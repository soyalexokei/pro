//-- Declaración de variables
/*************************************************************************************/
const modalLinksh1 = document.querySelectorAll("[data-modal-holding1]");
const modalTexth1 = document.querySelector("[data-modal-text-h1]");
const modalCloseh1 = document.querySelector("[data-modal-close-h1]");
const modalCounterh1 = document.querySelector("[data-counter-h1]");
const modalPrevh1 = document.querySelector("[data-prev-h1]");
const modalNexth1 = document.querySelector("[data-next-h1]");
const modalImgh1 = document.querySelector("[data-modal-img-h1]");
const modalVideoh1 = document.querySelector("[data-modal-video-h1]");

const modalLinksh2 = document.querySelectorAll("[data-modal-holding2]");
const modalTexth2 = document.querySelector("[data-modal-text-h2]");
const modalCloseh2 = document.querySelector("[data-modal-close-h2]");
const modalCounterh2 = document.querySelector("[data-counter-h2]");
const modalPrevh2 = document.querySelector("[data-prev-h2]");
const modalNexth2 = document.querySelector("[data-next-h2]");
const modalImgh2 = document.querySelector("[data-modal-img-h2]");
const modalVideoh2 = document.querySelector("[data-modal-video-h2]");

const modalLinksh3 = document.querySelectorAll("[data-modal-holding3]");
const modalTexth3 = document.querySelector("[data-modal-text-h3]");
const modalCloseh3 = document.querySelector("[data-modal-close-h3]");
const modalCounterh3 = document.querySelector("[data-counter-h3]");
const modalPrevh3 = document.querySelector("[data-prev-h3]");
const modalNexth3 = document.querySelector("[data-next-h3]");
const modalImgh3 = document.querySelector("[data-modal-img-h3]");
const modalVideoh3 = document.querySelector("[data-modal-video-h3]");
/*************************************************************************************/

/* Modals Elements */
/*************************************************************************************/
const modalElementsHold = [
  {
    modal: document.getElementById("holding1"),
    links: modalLinksh1,
    close: modalCloseh1,
    text: modalTexth1,
    img: modalImgh1,
    video: modalVideoh1,
    counter: modalCounterh1,
    prev: modalPrevh1,
    next: modalNexth1
  },
  {
    modal: document.getElementById("holding2"),
    links: modalLinksh2,
    close: modalCloseh2,
    text: modalTexth2,
    img: modalImgh2,
    video: modalVideoh2,
    counter: modalCounterh2,
    prev: modalPrevh2,
    next: modalNexth2
  },
  {
    modal: document.getElementById("holding3"),
    links: modalLinksh3,
    close: modalCloseh3,
    text: modalTexth3,
    img: modalImgh3,
    video: modalVideoh3,
    counter: modalCounterh3,
    prev: modalPrevh3,
    next: modalNexth3
  }
]
/*************************************************************************************/

/* Datos de los voluntariados */
/*************************************************************************************/
const holdings = [
  //-- Holding 1
  {
    pageH:0,
    pagesH: [
      {
          text: `
              <p><b>Descripción:</b> Espacios de trabajo flexibles, con oficinas, despachos y salas de reuniones, para profesionales, autónomos y empresas</p><br>
              <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/GCkMH4kBiGiShaJr7" target="_blank">The Club Coworking, Comunidad de Madrid 41, C.C. BURGOCENTRO I, Locales 98 y 110, 28231 Las Rozas de Madrid, Madrid, España</a></p>
          `
      }
    ]
  },
  //-- Holding 2
  {
    pageH:0,
    pagesH: [
      {
        text: `
          <p><b>Descripción:</b> Eventos sociales que conectan personas, culturas y aventuras</p><br>
          <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/oi9XKHWX9ETs3JTS6" target="_blank">Locales por la Provincia de Madrid (España)</a></p>
        `
      }
    ]
  },
  //-- Holding 3
  {
    pageH:0,
    pagesH: [
      {
        text: `
          <p><b>Descripción:</b> Laboratorio tecnológico dedicado a la automatización de empresas con IA</p><br>
          <p><b>Ubicación:</b> Online</p>
        `
      },
      {
        text: `
          <h3>Proyectos Web</h3>
          <p><b>Descripción:</b> Consisten en proyectos de programación web en JavaScript, HTML y CSS</p>
          <p><b>Listado de proyectos:</b></p>
          <ul>
            <p><b>1. Calculadora Web:</b> <a href="./assets/holding/proyecto1/index.html">Acceder</a></p>
            <p><b>2. Kick Blocks Game:</b> <a href="./assets/holding/proyecto2/index.html">Acceder</a></p>
            <img src="./assets/holding/logo_KickBlocks.png"/>
          </ul>
        `
      }
    ]
  }
]
/*************************************************************************************/

/* Renderizar modales */
/*************************************************************************************/
function renderModalHold(indexH) {
  const datos = holdings[indexH];
  const ui = modalElementsHold[indexH];
  const pageH = datos.pagesH[datos.pageH];
  ui.counter.textContent = `${datos.pageH+1} / ${datos.pagesH.length}`;

  if(pageH.text){
    ui.text.innerHTML = pageH.text;
  }else{
    ui.text.innerHTML = "";
  }

  if(pageH.img){
    ui.img.src = pageH.img;
    ui.img.width = "500";
    ui.img.style.display = "block";
  }else{
    ui.img.removeAttribute("src");
    ui.img.style.display = "none";
  }

  if(pageH.video){
    ui.video.src = pageH.video;
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
modalElementsHold.forEach( (ui,indexH) => {
  ui.links.forEach(link=>{
    link.addEventListener("click", (eventH) => {
      eventH.preventDefault();
      holdings[indexH].pageH=0;
      renderModalHold(indexH);
      ui.modal.classList.add("active");
    });
  });
});
/*************************************************************************************/

//-- Cerrar modales
/*************************************************************************************/
modalElementsHold.forEach(ui=>{
  ui.close.addEventListener("click",()=>{
    ui.modal.classList.remove("active");
  });
  ui.modal.addEventListener("click",(eventH)=>{
    if(eventH.target===ui.modal){
      ui.modal.classList.remove("active");
    }
  });
});
/*************************************************************************************/

// Botón siguiente
/*************************************************************************************/
modalElementsHold.forEach((ui,indexH)=>{
  ui.next.addEventListener("click",()=>{
    const datos = holdings[indexH];
    datos.pageH++;
    if(datos.pageH>=datos.pagesH.length) {
      datos.pageH=0;
    }
    renderModalHold(indexH);
  });
});
/*************************************************************************************/

//-- Botón anterior
/*************************************************************************************/
modalElementsHold.forEach((ui,indexH)=>{
  ui.prev.addEventListener("click",()=>{
    const datos = holdings[indexH];
    datos.pageH--;
    if(datos.pageH < 0){
        datos.pageH=datos.pagesH.length-1;
    }
    renderModalHold(indexH);
  });
});
/*************************************************************************************/