//-- Declaración de variables
/*************************************************************************************/
const modalLinksc1 = document.querySelectorAll("[data-modal-certificacion1]");
const modalLinksc2 = document.querySelectorAll("[data-modal-certificacion2]");
const modalLinksc3 = document.querySelectorAll("[data-modal-certificacion3]");
const modalLinksc4 = document.querySelectorAll("[data-modal-certificacion4]");
const modalLinksc5 = document.querySelectorAll("[data-modal-certificacion5]");
const modalLinksc6 = document.querySelectorAll("[data-modal-certificacion6]");
const modalLinksc7 = document.querySelectorAll("[data-modal-certificacion7]");
const modalLinksc8 = document.querySelectorAll("[data-modal-certificacion8]");
const modalLinksc9 = document.querySelectorAll("[data-modal-certificacion9]");
const modalLinksc10 = document.querySelectorAll("[data-modal-certificacion10]");

const modalTextc1 = document.querySelector("[data-modal-text-c1]");
const modalTextc2 = document.querySelector("[data-modal-text-c2]");
const modalTextc3 = document.querySelector("[data-modal-text-c3]");
const modalTextc4 = document.querySelector("[data-modal-text-c4]");
const modalTextc5 = document.querySelector("[data-modal-text-c5]");
const modalTextc6 = document.querySelector("[data-modal-text-c6]");
const modalTextc7 = document.querySelector("[data-modal-text-c7]");
const modalTextc8 = document.querySelector("[data-modal-text-c8]");
const modalTextc9 = document.querySelector("[data-modal-text-c9]");
const modalTextc10 = document.querySelector("[data-modal-text-c10]");

const modalClosec1 = document.querySelector("[data-modal-close-c1]");
const modalClosec2 = document.querySelector("[data-modal-close-c2]");
const modalClosec3 = document.querySelector("[data-modal-close-c3]");
const modalClosec4 = document.querySelector("[data-modal-close-c4]");
const modalClosec5 = document.querySelector("[data-modal-close-c5]");
const modalClosec6 = document.querySelector("[data-modal-close-c6]");
const modalClosec7 = document.querySelector("[data-modal-close-c7]");
const modalClosec8 = document.querySelector("[data-modal-close-c8]");
const modalClosec9 = document.querySelector("[data-modal-close-c9]");
const modalClosec10 = document.querySelector("[data-modal-close-c10]");

const modalCounterc1 = document.querySelector("[data-counter-c1]");
const modalCounterc2 = document.querySelector("[data-counter-c2]");
const modalCounterc3 = document.querySelector("[data-counter-c3]");
const modalCounterc4 = document.querySelector("[data-counter-c4]");
const modalCounterc5 = document.querySelector("[data-counter-c5]");
const modalCounterc6 = document.querySelector("[data-counter-c6]");
const modalCounterc7 = document.querySelector("[data-counter-c7]");
const modalCounterc8 = document.querySelector("[data-counter-c8]");
const modalCounterc9 = document.querySelector("[data-counter-c9]");
const modalCounterc10 = document.querySelector("[data-counter-c10]");

const modalPrevc1 = document.querySelector("[data-prev-c1]");
const modalPrevc2 = document.querySelector("[data-prev-c2]");
const modalPrevc3 = document.querySelector("[data-prev-c3]");
const modalPrevc4 = document.querySelector("[data-prev-c4]");
const modalPrevc5 = document.querySelector("[data-prev-c5]");
const modalPrevc6 = document.querySelector("[data-prev-c6]");
const modalPrevc7 = document.querySelector("[data-prev-c7]");
const modalPrevc8 = document.querySelector("[data-prev-c8]");
const modalPrevc9 = document.querySelector("[data-prev-c9]");
const modalPrevc10 = document.querySelector("[data-prev-c10]");

const modalNextc1 = document.querySelector("[data-next-c1]");
const modalNextc2 = document.querySelector("[data-next-c2]");
const modalNextc3 = document.querySelector("[data-next-c3]");
const modalNextc4 = document.querySelector("[data-next-c4]");
const modalNextc5 = document.querySelector("[data-next-c5]");
const modalNextc6 = document.querySelector("[data-next-c6]");
const modalNextc7 = document.querySelector("[data-next-c7]");
const modalNextc8 = document.querySelector("[data-next-c8]");
const modalNextc9 = document.querySelector("[data-next-c9]");
const modalNextc10 = document.querySelector("[data-next-c10]");

const modalImgc1 = document.querySelector("[data-modal-img-c1]");
const modalImgc2 = document.querySelector("[data-modal-img-c2]");
const modalImgc3 = document.querySelector("[data-modal-img-c3]");
const modalImgc4 = document.querySelector("[data-modal-img-c4]");
const modalImgc5 = document.querySelector("[data-modal-img-c5]");
const modalImgc6 = document.querySelector("[data-modal-img-c6]");
const modalImgc7 = document.querySelector("[data-modal-img-c7]");
const modalImgc8 = document.querySelector("[data-modal-img-c8]");
const modalImgc9 = document.querySelector("[data-modal-img-c9]");
const modalImgc10 = document.querySelector("[data-modal-img-c10]");

const modalVideoc1 = document.querySelector("[data-modal-video-c1]");
const modalVideoc2 = document.querySelector("[data-modal-video-c2]");
const modalVideoc3 = document.querySelector("[data-modal-video-c3]");
const modalVideoc4 = document.querySelector("[data-modal-video-c4]");
const modalVideoc5 = document.querySelector("[data-modal-video-c5]");
const modalVideoc6 = document.querySelector("[data-modal-video-c6]");
const modalVideoc7 = document.querySelector("[data-modal-video-c7]");
const modalVideoc8 = document.querySelector("[data-modal-video-c8]");
const modalVideoc9 = document.querySelector("[data-modal-video-c9]");
const modalVideoc10 = document.querySelector("[data-modal-video-c10]");
/*************************************************************************************/


/* Modals Elements */
/*************************************************************************************/
const modalElementsC = [
  {
    modal: document.getElementById("certificacion1"),
    links: modalLinksc1,
    close: modalClosec1,
    text: modalTextc1,
    img: modalImgc1,
    video: modalVideoc1,
    counter: modalCounterc1,
    prev: modalPrevc1,
    next: modalNextc1
  },
  {
    modal: document.getElementById("experiencia2"),
    links: modalLinkse2,
    close: modalClosee2,
    text: modalTexte2,
    img: modalImge2,
    video: modalVideoe2,
    counter: modalCountere2,
    prev: modalPreve2,
    next: modalNexte2
  },
  {
    modal: document.getElementById("experiencia3"),
    links: modalLinkse3,
    close: modalClosee3,
    text: modalTexte3,
    img: modalImge3,
    video: modalVideoe3,
    counter: modalCountere3,
    prev: modalPreve3,
    next: modalNexte3
  },
  {
    modal: document.getElementById("experiencia4"),
    links: modalLinkse4,
    close: modalClosee4,
    text: modalTexte4,
    img: modalImge4,
    video: modalVideoe4,
    counter: modalCountere4,
    prev: modalPreve4,
    next: modalNexte4
  },
  {
    modal: document.getElementById("experiencia5"),
    links: modalLinkse5,
    close: modalClosee5,
    text: modalTexte5,
    img: modalImge5,
    video: modalVideoe5,
    counter: modalCountere5,
    prev: modalPreve5,
    next: modalNexte5
  },
  {
    modal: document.getElementById("experiencia6"),
    links: modalLinkse6,
    close: modalClosee6,
    text: modalTexte6,
    img: modalImge6,
    video: modalVideoe6,
    counter: modalCountere6,
    prev: modalPreve6,
    next: modalNexte6
  },
  {
    modal: document.getElementById("experiencia7"),
    links: modalLinkse7,
    close: modalClosee7,
    text: modalTexte7,
    img: modalImge7,
    video: modalVideoe7,
    counter: modalCountere7,
    prev: modalPreve7,
    next: modalNexte7
  },
  {
    modal: document.getElementById("experiencia8"),
    links: modalLinkse8,
    close: modalClosee8,
    text: modalTexte8,
    img: modalImge8,
    video: modalVideoe8,
    counter: modalCountere8,
    prev: modalPreve8,
    next: modalNexte8
  },
  {
    modal: document.getElementById("experiencia9"),
    links: modalLinkse9,
    close: modalClosee9,
    text: modalTexte9,
    img: modalImge9,
    video: modalVideoe9,
    counter: modalCountere9,
    prev: modalPreve9,
    next: modalNexte9
  },
  {
    modal: document.getElementById("experiencia10"),
    links: modalLinkse10,
    close: modalClosee10,
    text: modalTexte10,
    img: modalImge10,
    video: modalVideoe10,
    counter: modalCountere10,
    prev: modalPreve10,
    next: modalNexte10
  }
];
/*************************************************************************************/


/* Datos de los voluntariados */
/*************************************************************************************/
const certificaciones = [
  //-- Certificación 1
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Mi permiso de conducir en España y la Unión Europea</h3>
          <p><b>Tipo de permiso:</b> B</p>
          <p><b>Permisos extras incluidos:</b> AM y A1</p>
          <p><b>Fecha de expedición:</b> 26/01/2016</p>
          <p><b>Fecha de expiración:</b> 26/01/2036</p>
          <p><b>Ver permiso:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        `
      },
      {
        text: `
          <h3>Con mi primer coche:</h3>
          <p><b>Tipo de vehículo:</b> Volkswagen Golf IV (manual y diesel)</p>
          <p><b>Tipo de adquisición:</b> Compra por 3000€ (2º mano)</p>
        `,
        img: "https://i.postimg.cc/pV4dj5hX/Primer-coche.png"
      },
      {
        text: `
          <h3>Mi segundo coche:</h3>
          <p><b>Tipo de vehículo:</b> Volkswagen Polo 2021 (automático y gasolina)</p>
          <p><b>Tipo de adquisición:</b> Renting de 200€/mes (opción a compra y todo incluido)</p>
          <p><b>Resolución final:</b> No compra - Quería el nuevo Volkswagen Golf</p>
        `,
        img: "https://i.postimg.cc/nVSJ5Xvh/Segundo-coche.png"
      },
      {
        text: `
          <h3>Mi coche actual:</h3>
          <p><b>Tipo de vehículo:</b> Volkswagen Golf 2025 (manual y diesel)</p>
          <p><b>Tipo de adquisición:</b> Renting de 385€/mes (opción a compra y todo incluido)</p>
        `,
        img: "https://i.postimg.cc/ZnPZXHZ9/Tercer-coche.png"
      },
    ]
  }
];
/*************************************************************************************/


/* Renderizar modales */
/*************************************************************************************/
function renderModalE(indexC) {
  const datos = certificaciones[indexC];
  const ui = modalElementsC[indexC];
  const pageC = datos.pagesC[datos.pageC];
  ui.counter.textContent = `${datos.pageC+1} / ${datos.pagesC.length}`;

  if(pageC.text){
    ui.text.innerHTML = pageC.text;
  }else{
    ui.text.innerHTML = "";
  }

  if(pageC.img){
    ui.img.src = pageC.img;
    ui.img.width = "500";
    ui.img.style.display = "block";
  }else{
    ui.img.removeAttribute("src");
    ui.img.style.display = "none";
  }

  if(pageC.video){
    ui.video.src = pageC.video;
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
modalElementsC.forEach( (ui,indexC) => {
  ui.links.forEach(link=>{
    link.addEventListener("click", (eventC) => {
      eventC.preventDefault();
      experiencias[indexC].pageC=0;
      renderModalE(indexC);
      ui.modal.classList.add("active");
    });
  });
});
/*************************************************************************************/

//-- Cerrar modales
/*************************************************************************************/
modalElementsC.forEach(ui=>{
  ui.close.addEventListener("click",()=>{
    ui.modal.classList.remove("active");
  });
  ui.modal.addEventListener("click",(eventC)=>{
    if(eventC.target===ui.modal){
      ui.modal.classList.remove("active");
    }
  });
});
/*************************************************************************************/

// Botón siguiente
/*************************************************************************************/
modalElementsC.forEach((ui,indexC)=>{
  ui.next.addEventListener("click",()=>{
    const datos = certificaciones[indexC];
    datos.pageC++;
    if(datos.pageC>=datos.pagesC.length){
      datos.pageC=0;
    }
    renderModalE(indexC);
  });
});
/*************************************************************************************/

//-- Botón anterior
/*************************************************************************************/
modalElementsC.forEach((ui,indexC)=>{
  ui.prev.addEventListener("click",()=>{
    const datos = certificaciones[indexC];
    datos.pageC--;
    if(datos.pageC<0){
        datos.pageC=datos.pagesC.length-1;
    }
    renderModalE(indexC);
  });
});
/*************************************************************************************/