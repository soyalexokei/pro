//-- Declaración de variables
/*************************************************************************************/
const modalLinksv5 = document.querySelectorAll("[data-modal-voluntariado5]");
const modalLinksv4 = document.querySelectorAll("[data-modal-voluntariado4]");
const modalLinksv3 = document.querySelectorAll("[data-modal-voluntariado3]");
const modalLinksv2 = document.querySelectorAll("[data-modal-voluntariado2]");
const modalLinksv1 = document.querySelectorAll("[data-modal-voluntariado1]");

const modalText1 = document.querySelector("[data-modal-text-v1]");
const modalText2 = document.querySelector("[data-modal-text-v2]");
const modalText3 = document.querySelector("[data-modal-text-v3]");
const modalText4 = document.querySelector("[data-modal-text-v4]");
const modalText5 = document.querySelector("[data-modal-text-v5]");

const modalClose1 = document.querySelector("[data-modal-close-v1]");
const modalClose2 = document.querySelector("[data-modal-close-v2]");
const modalClose3 = document.querySelector("[data-modal-close-v3]");
const modalClose4 = document.querySelector("[data-modal-close-v4]");
const modalClose5 = document.querySelector("[data-modal-close-v5]");

const modalCounter1 = document.querySelector("[data-counter-v1]");
const modalCounter2 = document.querySelector("[data-counter-v2]");
const modalCounter3 = document.querySelector("[data-counter-v3]");
const modalCounter4 = document.querySelector("[data-counter-v4]");
const modalCounter5 = document.querySelector("[data-counter-v5]");

const modalPrev1 = document.querySelector("[data-prev-v1]");
const modalPrev2 = document.querySelector("[data-prev-v2]");
const modalPrev3 = document.querySelector("[data-prev-v3]");
const modalPrev4 = document.querySelector("[data-prev-v4]");
const modalPrev5 = document.querySelector("[data-prev-v5]");

const modalNext1 = document.querySelector("[data-next-v1]");
const modalNext2 = document.querySelector("[data-next-v2]");
const modalNext3 = document.querySelector("[data-next-v3]");
const modalNext4 = document.querySelector("[data-next-v4]");
const modalNext5 = document.querySelector("[data-next-v5]");

const modalImg1 = document.querySelector("[data-modal-img-v1]");
const modalImg2 = document.querySelector("[data-modal-img-v2]");
const modalImg3 = document.querySelector("[data-modal-img-v3]");
const modalImg4 = document.querySelector("[data-modal-img-v4]");
const modalImg5 = document.querySelector("[data-modal-img-v5]");

const modalVideo1 = document.querySelector("[data-modal-video-v1]");
const modalVideo2 = document.querySelector("[data-modal-video-v2]");
const modalVideo3 = document.querySelector("[data-modal-video-v3]");
const modalVideo4 = document.querySelector("[data-modal-video-v4]");
const modalVideo5 = document.querySelector("[data-modal-video-v5]");
/*************************************************************************************/

/* Modals Elements */
/*************************************************************************************/
const modalElements = [
  {
    modal: document.getElementById("voluntariado1"),
    links: modalLinksv1,
    close: modalClose1,
    text: modalText1,
    img: modalImg1,
    video: modalVideo1,
    counter: modalCounter1,
    prev: modalPrev1,
    next: modalNext1
  },
  {
    modal: document.getElementById("voluntariado2"),
    links: modalLinksv2,
    close: modalClose2,
    text: modalText2,
    img: modalImg2,
    video: modalVideo2,
    counter: modalCounter2,
    prev: modalPrev2,
    next: modalNext2
  },
  {
    modal: document.getElementById("voluntariado3"),
    links: modalLinksv3,
    close: modalClose3,
    text: modalText3,
    img: modalImg3,
    video: modalVideo3,
    counter: modalCounter3,
    prev: modalPrev3,
    next: modalNext3
  },
  {
    modal: document.getElementById("voluntariado4"),
    links: modalLinksv4,
    close: modalClose4,
    text: modalText4,
    img: modalImg4,
    video: modalVideo4,
    counter: modalCounter4,
    prev: modalPrev4,
    next: modalNext4
  },
  {
    modal: document.getElementById("voluntariado5"),
    links: modalLinksv5,
    close: modalClose5,
    text: modalText5,
    img: modalImg5,
    video: modalVideo5,
    counter: modalCounter5,
    prev: modalPrev5,
    next: modalNext5
  }
];
/*************************************************************************************/

/* Datos de los voluntariados */
//-- {img: "https://i.postimg.cc/"},
//-- {video: "https://www.youtube.com/embed/"},
/*************************************************************************************/
const voluntariados = [
  //-- Voluntariado 1
  {
    page:0,
    pages: [
      {
        text:`
          <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
          <p><b>Descripción del puesto:</b> Recolección de alimentos no perecederos de clientes voluntarios del supermercado</p>
          <p><b>Idioma empleado:</b> Español</p>
          <p><b>Supermercado del voluntariado:</b> Mercadona</p>
          <p><b>Funciones:</b></p>
          <p> - Recoger comida no perecedera para gente desfavorecida.</p>
          <p> - Clasificar la comida según el tipo.</p>
          <p> - Organizar y planificar el proceso por el que se lleva a cabo.</p>
          <p> - Cooperar y colaborar con todo el equipo de voluntarios.</p>
        `
      },
      {
        text:`
          <h3 style="text-align: center;">Datos de la organización</h3>
          <p><b>Teléfono:</b> +34 91 734 63 83</p>
          <p><b>Correo electrónico:</b> administracion@bamadrid.org</p>
          <p><b>Dirección:</b> Carretera de Colmenar Viejo, Km. 13, 600 (Vía de servicio), Madrid 28049, Madrid, España</p>
        `
      },{img: "https://i.postimg.cc/jSXDzqd0/1.jpg"},{img: "https://i.postimg.cc/Wb0F16B4/2.jpg"},{img: "https://i.postimg.cc/vZM1gxyt/3.jpg"},
      {img: "https://i.postimg.cc/MZCfwrr4/4.jpg"},{img: "https://i.postimg.cc/mrgtVxtc/5.jpg"},{img: "https://i.postimg.cc/DzpmMCXx/6.jpg"}
    ]
  },
  //-- Voluntariado 2
  {
    page:0,
    pages:[
      {
        text:`
          <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
          <p><b>Tipo de experiencia:</b> <a href="https://www.worldpackers.com/positions/39045" target="_blank">Worldpackers</a> - voluntario, viajero y mochilero</p>
          <p><b>Idioma empleado:</b> Inglés</p>
          <p><b>Funciones (lo que ofrezco):</b></p>
          <p> - Controlar y alquilar las bicicletas a los huéspedes</p>
          <p> - Controlar y alquilar los kayaks (canoas) y los SUPs (tablas de paddle surf) a los huéspedes, utilizados en el lago Millstätter</p>
          <p> - Ser bartender en el bar del camping: Heko nights</p>
          <p> - Montar, desmontar y limpiar las tiendas de campaña para huéspedes de Falkencamp</p>
          <p> - Arreglar y moldear las picas metálicas que sujetan las tiendas de campaña</p>
          <p> - Organizar y limpiar el almacén</p>
          <p> - Atender en la tienda de bebidas y snacks de la playa del lago</p>
          <p> - 5 días de trabajo a la semana (7h/día)</p>
          <p> - Hacer que Falkencamp sea un lugar mejor</p>
          <p><b>Funciones (lo que obtengo):</b></p>
          <p> - Alojamiento en habitación privada/compartida</p>
          <p> - 3 comidas al día, servido por catering</p>
          <p> - Bicicletas a disposición, con reserva previa gratuita</p>
          <p> - Consumo de productos del bar gratis</p>
          <p> - Desplazamientos a la estación de tren más cercana</p>
          <p> - Elección de una prenda/souvenir gratis</p>
          <p> - Descuentos en viajes de tren y en restaurantes</p>
          <p> - 2 días libres a la semana</p>
        `
      },
      {
        text:`
          <h3 style="text-align: center;">Datos de la organización</h3>
          <p><b>Teléfono:</b> 04246 / 7704</p>
          <p><b>Correo electrónico:</b> office@feriencamp-doebriach.at</p>
          <p><b>Dirección:</b> Glanzer Straße, 66, 9873 , Carintia, Austria</p>
        `
      },{img: "https://i.postimg.cc/rF6Gj9x1/1.jpg"},{img: "https://i.postimg.cc/h4QbVYz4/2.jpg"},{img: "https://i.postimg.cc/QdhQGx6V/3.jpg"},
      {img: "https://i.postimg.cc/ZKr8Myx1/4.jpg"},{img: "https://i.postimg.cc/XYLwVShL/5.jpg"},{img: "https://i.postimg.cc/xddL8pV2/6.jpg"},
      {img: "https://i.postimg.cc/N0PmH8Qr/7.jpg"},{img: "https://i.postimg.cc/ydg9XJNp/8.jpg"},{img: "https://i.postimg.cc/vBJnPQgY/9.jpg"},
      {img: "https://i.postimg.cc/QCcTwR1p/10.jpg"},{img: "https://i.postimg.cc/wxNL1sZ7/11.jpg"},{video: "https://www.youtube.com/embed/eyGhyAdtc30"},
      {img: "https://i.postimg.cc/BQGDHnfN/13.jpg"},{img: "https://i.postimg.cc/KvrTNhZb/14.jpg"},{video: "https://www.youtube.com/embed/f0PHhWc2fb8"},
      {img: "https://i.postimg.cc/XYjC11JC/16.jpg"},{img: "https://i.postimg.cc/vZ06J7gS/17.jpg"},{img: "https://i.postimg.cc/vmD6b158/18.jpg"},
      {img: "https://i.postimg.cc/3w60RKZX/19.jpg"},{img: "https://i.postimg.cc/SsM2YwZw/20.jpg"},{img: "https://i.postimg.cc/4yRK6Bqn/21.jpg"},
      {img: "https://i.postimg.cc/Hn0rBb1z/22.jpg"},{video: "https://www.youtube.com/embed/Y38JfytAGp4"},{img: "https://i.postimg.cc/tRFnqGn6/24.jpg"},
      {img: "https://i.postimg.cc/65w2TbCm/25.jpg"},{img: "https://i.postimg.cc/tC516d5C/26.jpg"},{img: "https://i.postimg.cc/fRRVf327/27.jpg"},
      {img: "https://i.postimg.cc/7ZtfsxdF/28.jpg"},{img: "https://i.postimg.cc/GpB96W1H/29.jpg"},{img: "https://i.postimg.cc/TPZhxtRQ/30.jpg"},
      {img: "https://i.postimg.cc/mDCkg7k4/31.jpg"},{img: "https://i.postimg.cc/7h46GbJ2/32.jpg"},{img: "https://i.postimg.cc/wMkBhHDb/33.jpg"},
      {img: "https://i.postimg.cc/bY0dX04H/34.jpg"},{img: "https://i.postimg.cc/CLF5wBgy/35.jpg"},{img: "https://i.postimg.cc/3JnRN88k/36.jpg"},
      {img: "https://i.postimg.cc/y8xNSMxv/37.jpg"},{img: "https://i.postimg.cc/W1y1m5Jj/38.jpg"},{img: "https://i.postimg.cc/rptFf5S4/39.jpg"},
      {img: "https://i.postimg.cc/vBF8kDzN/40.jpg"},{img: "https://i.postimg.cc/763PkDtY/41.jpg"},
    ]
  },
  //-- Voluntariado 3
  {
    page:0,
    pages:[
      {
        text:`
          <p>Página 1</p>
        `
      },
      {
        text:`
          <p>Página 2</p>
        `
      }
    ]
  },
  //-- Voluntariado 4
  {
    page:0,
    pages:[
      {
        text:`
          <p>Página 1</p>
        `
      },
      {
        text:`
          <p>Página 2</p>
        `
      }
    ]
  },
  //-- Voluntariado 5
  {
    page:0,
    pages:[
      {
        text:`
          <p>Página 1</p>
        `
      },
      {
        text:`
          <p>Página 2</p>
        `
      }
    ]
  },
];
/*************************************************************************************/

/* Renderizar modales */
/*************************************************************************************/
function renderModal(index) {
  const datos = voluntariados[index];
  const ui = modalElements[index];
  const page = datos.pages[datos.page];
  ui.counter.textContent = `${datos.page+1} / ${datos.pages.length}`;

  if(page.text){
    ui.text.innerHTML = page.text;
  }else{
    ui.text.innerHTML = "";
  }

  if(page.img){
    ui.img.src = page.img;
    ui.img.width = "450";
    ui.img.style.display = "block";
  }else{
    ui.img.removeAttribute("src");
    ui.img.style.display = "none";
  }

  if(page.video){
    ui.video.src = page.video;
    ui.video.width = "400";
    ui.video.height = "533";
    ui.video.setAttribute("allow", "autoplay");
    ui.video.setAttribute("allowFullscreen", "false");
    ui.video.style.display = "block";
  }else{
    ui.video.removeAttribute("src");
    ui.video.style.display = "none";
  }
}
/*************************************************************************************/

//-- Abrir modales
/*************************************************************************************/
modalElements.forEach( (ui,index) => {
  ui.links.forEach(link=>{
    link.addEventListener("click", (e) => {
      e.preventDefault();
      voluntariados[index].page=0;
      renderModal(index);
      ui.modal.classList.add("active");
    });
  });
});
/*************************************************************************************/

//-- Cerrar modales
/*************************************************************************************/
modalElements.forEach(ui=>{
  ui.close.addEventListener("click",()=>{
    ui.modal.classList.remove("active");
  });
  ui.modal.addEventListener("click",(e)=>{
    if(e.target===ui.modal){
      ui.modal.classList.remove("active");
    }
  });
});
/*************************************************************************************/

// Botón siguiente
/*************************************************************************************/
modalElements.forEach((ui,index)=>{
  ui.next.addEventListener("click",()=>{
    const datos = voluntariados[index];
    datos.page++;
    if(datos.page>=datos.pages.length){
      datos.page=0;
    }
    renderModal(index);
  });
});
/*************************************************************************************/

//-- Botón anterior
/*************************************************************************************/
modalElements.forEach((ui,index)=>{
  ui.prev.addEventListener("click",()=>{
    const datos = voluntariados[index];
    datos.page--;
    if(datos.page<0){
        datos.page=datos.pages.length-1;
    }
    renderModal(index);
  });
});
/*************************************************************************************/