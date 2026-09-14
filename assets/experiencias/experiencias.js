//-- Declaración de variables
/*************************************************************************************/
const modalLinkse10 = document.querySelectorAll("[data-modal-experiencia10]");
const modalLinkse9 = document.querySelectorAll("[data-modal-experiencia9]");
const modalLinkse8 = document.querySelectorAll("[data-modal-experiencia8]");
const modalLinkse7 = document.querySelectorAll("[data-modal-experiencia7]");
const modalLinkse6 = document.querySelectorAll("[data-modal-experiencia6]");
const modalLinkse5 = document.querySelectorAll("[data-modal-experiencia5]");
const modalLinkse4 = document.querySelectorAll("[data-modal-experiencia4]");
const modalLinkse3 = document.querySelectorAll("[data-modal-experiencia3]");
const modalLinkse2 = document.querySelectorAll("[data-modal-experiencia2]");
const modalLinkse1 = document.querySelectorAll("[data-modal-experiencia1]");

const modalTexte1 = document.querySelector("[data-modal-text-e1]");
const modalTexte2 = document.querySelector("[data-modal-text-e2]");
const modalTexte3 = document.querySelector("[data-modal-text-e3]");
const modalTexte4 = document.querySelector("[data-modal-text-e4]");
const modalTexte5 = document.querySelector("[data-modal-text-e5]");
const modalTexte6 = document.querySelector("[data-modal-text-e6]");
const modalTexte7 = document.querySelector("[data-modal-text-e7]");
const modalTexte8 = document.querySelector("[data-modal-text-e8]");
const modalTexte9 = document.querySelector("[data-modal-text-e9]");
const modalTexte10 = document.querySelector("[data-modal-text-e10]");

const modalClosee1 = document.querySelector("[data-modal-close-e1]");
const modalClosee2 = document.querySelector("[data-modal-close-e2]");
const modalClosee3 = document.querySelector("[data-modal-close-e3]");
const modalClosee4 = document.querySelector("[data-modal-close-e4]");
const modalClosee5 = document.querySelector("[data-modal-close-e5]");
const modalClosee6 = document.querySelector("[data-modal-close-e6]");
const modalClosee7 = document.querySelector("[data-modal-close-e7]");
const modalClosee8 = document.querySelector("[data-modal-close-e8]");
const modalClosee9 = document.querySelector("[data-modal-close-e9]");
const modalClosee10 = document.querySelector("[data-modal-close-e10]");

const modalCountere1 = document.querySelector("[data-counter-e1]");
const modalCountere2 = document.querySelector("[data-counter-e2]");
const modalCountere3 = document.querySelector("[data-counter-e3]");
const modalCountere4 = document.querySelector("[data-counter-e4]");
const modalCountere5 = document.querySelector("[data-counter-e5]");
const modalCountere6 = document.querySelector("[data-counter-e6]");
const modalCountere7 = document.querySelector("[data-counter-e7]");
const modalCountere8 = document.querySelector("[data-counter-e8]");
const modalCountere9 = document.querySelector("[data-counter-e9]");
const modalCountere10 = document.querySelector("[data-counter-e10]");

const modalPreve1 = document.querySelector("[data-prev-e1]");
const modalPreve2 = document.querySelector("[data-prev-e2]");
const modalPreve3 = document.querySelector("[data-prev-e3]");
const modalPreve4 = document.querySelector("[data-prev-e4]");
const modalPreve5 = document.querySelector("[data-prev-e5]");
const modalPreve6 = document.querySelector("[data-prev-e6]");
const modalPreve7 = document.querySelector("[data-prev-e7]");
const modalPreve8 = document.querySelector("[data-prev-e8]");
const modalPreve9 = document.querySelector("[data-prev-e9]");
const modalPreve10 = document.querySelector("[data-prev-e10]");

const modalNexte1 = document.querySelector("[data-next-e1]");
const modalNexte2 = document.querySelector("[data-next-e2]");
const modalNexte3 = document.querySelector("[data-next-e3]");
const modalNexte4 = document.querySelector("[data-next-e4]");
const modalNexte5 = document.querySelector("[data-next-e5]");
const modalNexte6 = document.querySelector("[data-next-e6]");
const modalNexte7 = document.querySelector("[data-next-e7]");
const modalNexte8 = document.querySelector("[data-next-e8]");
const modalNexte9 = document.querySelector("[data-next-e9]");
const modalNexte10 = document.querySelector("[data-next-e10]");

const modalImge1 = document.querySelector("[data-modal-img-e1]");
const modalImge2 = document.querySelector("[data-modal-img-e2]");
const modalImge3 = document.querySelector("[data-modal-img-e3]");
const modalImge4 = document.querySelector("[data-modal-img-e4]");
const modalImge5 = document.querySelector("[data-modal-img-e5]");
const modalImge6 = document.querySelector("[data-modal-img-e6]");
const modalImge7 = document.querySelector("[data-modal-img-e7]");
const modalImge8 = document.querySelector("[data-modal-img-e8]");
const modalImge9 = document.querySelector("[data-modal-img-e9]");
const modalImge10 = document.querySelector("[data-modal-img-e10]");

const modalVideoe1 = document.querySelector("[data-modal-video-e1]");
const modalVideoe2 = document.querySelector("[data-modal-video-e2]");
const modalVideoe3 = document.querySelector("[data-modal-video-e3]");
const modalVideoe4 = document.querySelector("[data-modal-video-e4]");
const modalVideoe5 = document.querySelector("[data-modal-video-e5]");
const modalVideoe6 = document.querySelector("[data-modal-video-e6]");
const modalVideoe7 = document.querySelector("[data-modal-video-e7]");
const modalVideoe8 = document.querySelector("[data-modal-video-e8]");
const modalVideoe9 = document.querySelector("[data-modal-video-e9]");
const modalVideoe10 = document.querySelector("[data-modal-video-e10]");

const loader_exp1 = document.getElementById("loader-e1");
const loader_exp2 = document.getElementById("loader-e2");
const loader_exp3 = document.getElementById("loader-e3");
const loader_exp4 = document.getElementById("loader-e4");
const loader_exp5 = document.getElementById("loader-e5");
const loader_exp6 = document.getElementById("loader-e6")
const loader_exp7 = document.getElementById("loader-e7");
const loader_exp8 = document.getElementById("loader-e8");
const loader_exp9 = document.getElementById("loader-e9");
const loader_exp10 = document.getElementById("loader-e10");
/*************************************************************************************/


/* Modals Elements */
/*************************************************************************************/
const modalElementsE = [
  {
    modal: document.getElementById("experiencia1"),
    links: modalLinkse1,
    close: modalClosee1,
    text: modalTexte1,
    img: modalImge1,
    video: modalVideoe1,
    counter: modalCountere1,
    prev: modalPreve1,
    next: modalNexte1,
    loader: loader_exp1
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
    next: modalNexte2,
    loader: loader_exp2
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
    next: modalNexte3,
    loader: loader_exp3
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
    next: modalNexte4,
    loader: loader_exp4
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
    next: modalNexte5,
    loader: loader_exp5
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
    next: modalNexte6,
    loader: loader_exp6
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
    next: modalNexte7,
    loader: loader_exp7
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
    next: modalNexte8,
    loader: loader_exp8
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
    next: modalNexte9,
    loader: loader_exp9
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
    next: modalNexte10,
    loader: loader_exp10
  }
];
/*************************************************************************************/


/* Datos de los voluntariados */
/*************************************************************************************/
const experiencias = [
  //-- Experiencia 1
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Profesor particular a domicilio</h3>
          <p><b>Tipo de contrato:</b> Contrato por hora</p>
          <p><b>Modo de trabajo:</b> Presencial</p>
          <p><b>Idioma:</b> Español</p>
          <p><b>Estudiantes totales:</b> 15</p>
          <p><b>Lugar de las clases:</b> Domicilio particular de cada estudiante</p>
        `
      },
      {
        text: `
          <p><b>Asignaturas a impartir:</b></p>
          <p>- Matemáticas de la ESO y Bachillerato</p>
          <p>- Física de la ESO y Bachillerato</p>
          <p>- Tecnología de la ESO y Bachillerato</p>
          <p>- Informática y programación de la ESO y Bachillerato</p>
          <p>- Electrotecnia de 4º de la ESO y 1º Bachillerato</p>
        `
      },
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Teléfono:</b> 91 591 75 90</p>
          <p><b>Correo electrónico:</b> info@grupodidactia.com</p>
          <p><b>Sede:</b> <a href="https://maps.app.goo.gl/UFSKJctZkS7jTfCk7" target="_blank">Paseo de la Castellana, 194, Chamartín, 28046 Madrid, España</a></p>
        `
      },
      {
        text: `
          <h3>Fin del contrato</h3>
          <p><b>Fecha:</b> Junio 2023</p>
          <p><b>Motivo:</b> Me desvinculo de la empresa y dejo de impartir clases a domicilio</p>
        `
      }
    ]
  },
  //-- Experiencia 2
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Ingeniero NOC</h3>
          <p><b>Tipo de contrato:</b> Contrato de prácticas</p>
          <p><b>Modo de trabajo:</b> Presencial</p>
          <p><b>Acuerdo entre:</b> <a href="https://www.lcrcom.net/" target="_blank">LCRcom</a> - <a href="https://gestion2.urjc.es/practicas/home" target="_blank">URJC</a> - Yo</p>
          <p><b>Nota final de las Prácticas:</b> 9</p>
          <p><b>Campo:</b> Redes de Telecomunicación</p>
          <p><b>Idioma:</b> Español e Inglés</p>
        `
      },
      {
        text: `
          <p><b>Funciones:</b></p>
          <p>- Comprensión práctica de los protocolos de red</p>
          <p>- Monitorización de las señales de audio</p>
          <p>- Soporte técnico y resolución de incidencias, incluyendo Centralita Virtual Meet IP</p>
          <p>- Supervisión en tiempo real de la infraestructura de red</p>
          <p>- Optimización de Servicios de Telecomunicación</p>
          <p>- Gestión de redes</p>
        `
      },
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Teléfono:</b> 91 737 77 77</p>
          <p><b>Correo electrónico:</b> rgpd@airenetworks.es, rrhh@lcrcom.es, rrhh@lcrcom.net y rrhh.comunicados@lcrcom.es</p>
          <p><b>Sede:</b> <a href="https://maps.app.goo.gl/1cRy69a1xHd3GRfP7" target="_blank">Fernando Rey, 8, 28223 Pozuelo de Alarcón, Madrid, España</a></p>
        `
      },
      {
        text: `
          <h3>Fin del contrato</h3>
          <p><b>Fecha:</b> Febrero 2022</p>
          <p><b>Motivo:</b> Me ofrecieron continuar y un contrato de trabajo indefinido a jornada completa, pero
          debido a que tenía que irme de Erasmus+ a Novi Sad (Serbia), tuve que rechazarlo</p>
        `
      }
    ]
  },
  //-- Experiencia 3
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Profesor de informática para adultos</h3>
          <p><b>Tipo de contrato:</b> Contrato por hora</p>
          <p><b>Modo de trabajo:</b> Presencial</p>
          <p><b>Idioma:</b> Español</p>
          <p><b>Lugar de las clases:</b> <a href="https://maps.app.goo.gl/tHZr84kPyW75KAmz5" target="_blank">Centro Cultural Miguel Delibes, Torrelaguna, 2, 28670 Villaviciosa de Odón, Madrid, España</a></p>
        `
      },
      {
        text: `
          <h3>Grupos de estudiantes</h3>
          <p><b>Grupo 1 =></b> De 10 personas de más de 65 años => Martes de 10:00 a 12:00</p>
          <p><b>Grupo 2 =></b> De 12 personas de más de 65 años => Jueves de 10:00 a 12:00</p>
        `
      },
      {
        text: `
          <p><b>Temario impartido:</b></p>
          <p>1. Uso del ratón</p>
          <p>2. Uso del teclado</p>
          <p>3. Uso del explorador de archivos</p>
          <p>4. Uso del escritorio de Windows</p>
          <p>5. Uso del correo electrónico de Gmail</p>
          <p>6. Uso del software Paint</p>
          <p>7. Uso de las herramientas de ofimática de Microsoft: Word y PowerPoint</p>
        `
      },
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Propietaria de la empresa:</b> Pilar Sánchez Núñez</p>
          <p><b>Teléfono:</b> 91 616 42 45</p>
          <p><b>Correo electrónico:</b> ritmopilar@hotmail.com</p>
          <p><b>Sede:</b> Sede: <a href="https://maps.app.goo.gl/zgWfcwgWARd6aRSSA" target="_blank">Juan de Borbón, 19, 28670 Villaviciosa de Odón, Madrid, España</a></p>
        `
      },
      {
        text: `
          <h3>Fin del contrato</h3>
          <p><b>Fecha:</b> Diciembre 2021</p>
          <p><b>Motivo:</b> Quería seguir dando las clases hasta Junio 2022, pero me
          tenía que ir de Erasmus+ a Novi Sad (Serbia) y tuve que poner fin al contrato</p>
        `
      }
    ]
  },
  //-- Experiencia 10
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Experiencia Work & Travel de 4 meses</h3>
          <p><b>Agencia de España:</b> <a href="https://yowork.es/" target="_blank">YoWork</a></p>
          <p><b>Agencia de EE.UU:</b> <a href="https://allianceabroad.com/es/" target="_blank">Alliance Abroad</a></p>
          <p><b>Empresa contratante de EE.UU:</b> <a href="https://www.kalahariresorts.com/wisconsin/" target="_blank">Kalahari Resorts & Conventions</a></p>
          <p><b>Mi alojamiento en EE.UU:</b> <a href="https://maps.app.goo.gl/PzG7fM8U1m9eHqiF6" target="_blank">Bunker Run</a></p>
          <h4><u>Junio y Julio 2019</u></h4>
          <ul>
            <p><b>Puesto:</b> Socorrista en un parque acuático indoor y outdoor</p>
            <p><b>Requisitos previos:</b> Aprobación de un curso teórico-práctico de una semana</p>
            <p><b>Sector:</b> Seguridad y salud</p>
            <p><b>Idioma:</b> Inglés</p>
            <p><b>Tipo de contrato:</b> Contrato por hora</p>
            <p><b>Remuneración:</b> 12$ brutos / h</p>
            <p><b>Funciones:</b></p>
            <p> - Vigilar que los bañistas del parque acuático cumplan<br>las normas</p>
            <p> - Vigilar que nadie se ahogue y evitarlo si sucediera</p>
            <p> - Seguir el protocolo de actuación cuando alguien se<br>está ahogando</p>
            <p> - Llevar un orden en la parte de arriba de una atracción,<br>dejando un margen de seguridad<br>entre bañistas</p>
          </ul>
        `
      },
      {
        text: `
          <h4><u>Agosto y Septiembre 2019</u></h4>
          <ul>
            <p><b>Puesto:</b> Dependiente de las tiendas del Resort</p>
            <p><b>Requisitos previos:</b> Entrevista técnica y práctica en inglés con el Manager</p>
            <p><b>Sector:</b> Ventas</p>
            <p><b>Idioma:</b> Inglés</p>
            <p><b>Tipo de contrato:</b> Contrato por hora</p>
            <p><b>Remuneración:</b> 12$ brutos / h</p>
            <p><b>Tipos de tiendas:</b></p>
            <p> - Tienda de ropa y juguetes para niños/as</p>
            <p> - Tienda de ropa de adolescentes y adultos</p>
            <p> - Tienda de alimentación, snacks, souvenirs y parafarmacia (ultramarinos)</p>
            <p><b>Funciones (turnos rotatorios):</b></p>
            <p> - Conseguir el mayor porcentaje de ventas</p>
            <p> - Ordenar y reponer sus artículos</p>
            <p> - Mantenerla limpia</p>
            <p> - Cobrar a los clientes</p>
            <p> - Convencer, aconsejar y ayudar a los clientes</p>
            <p> - Conseguir que la experiencia de compra del cliente<br>sea lo más satisfactoria posible</p>
          </ul>
        `
      },
      {
        text: `
          <h4><u>Motivo del cambio de trabajo</u></h4>
          <ul>
            <p>
              Cambié de ser socorrista a dependiente de tienda porque quería mejorar y hablar más en inglés.
              De socorrista casi no hablaba y éramos muchos hispanos trabajando. Al cambiar al departamento de
              ventas, cambié a un entorno más nativo (únicamente en inglés) y por ende, pude hablar con más fluidez
              en inglés y mejorar bastante más.
            </p>
          </ul>
        `
      },
      {
        text: `
          <h3>Datos de la empresa contratante de EE.UU</h3>
          <p><b>Teléfono:</b> +1 608-254-5466</p>
          <p><b>Correo electrónico:</b> WIGroups@KalahariResorts.com</p>
          <p><b>Sede:</b> <a href="https://maps.app.goo.gl/rVDf6wYUPEkmwfH88" target="_blank">1305 Kalahari Dr, Baraboo, Wisconsin 53913, United States of America</a></p>
        `
      },
      {img: "https://i.postimg.cc/G2LCCfg0/IMG20250613194138714.png"},
      {img: "https://i.postimg.cc/FKmtyq4f/IMG20250613194600699.png"},
      {img: "https://i.postimg.cc/D0fyx03X/IMG20250613195750872.png"},
      {img: "https://i.postimg.cc/5yP9TJfk/IMG20250618192312.png"},
      {img: "https://i.postimg.cc/tgXqq77m/IMG20250618193921.png"},
      {img: "https://i.postimg.cc/N040mmWc/IMG20250618192750096.png"},
      {img: "https://i.postimg.cc/W3v4JS9S/IMG20250618194523377.png"},
    ]
  }
];
/*************************************************************************************/


/* Renderizar modales */
/*************************************************************************************/
function renderModalE(indexE) {
  const datos = experiencias[indexE];
  const ui = modalElementsE[indexE];
  const pageE = datos.pagesE[datos.pageE];

  function mostrarLoader() {
    if (ui.loader) {
      ui.loader.style.display = "block";
    }
    
    ui.img.style.display = "none";
    ui.video.style.display = "none";
  }
  
  function ocultarLoader() {
    if (ui.loader) {
      ui.loader.style.display = "none";
    }
  }

  ui.counter.textContent = `${datos.pageE+1} / ${datos.pagesE.length}`;

  if(pageE.text){
    ui.text.innerHTML = pageE.text;
  }else{
    ui.text.innerHTML = "";
  }

  ui.img.removeAttribute("src");
  ui.img.style.display = "none";
  ui.video.removeAttribute("src");
  ui.video.style.display = "none";

  if (pageE.img) {
    mostrarLoader();
    const urlImagen = pageE.img;
    const imagenPrecarga = new Image();
    imagenPrecarga.onload = () => {
      if ( experiencias[indexE].pageE !== datos.pageE || pageE.img !== urlImagen ) {
        return;
      }
      ui.img.src = urlImagen;
      ui.img.width = "500px"
      ui.img.style.display = "block";
      ocultarLoader();
    };
    imagenPrecarga.onerror = () => {
      if ( experiencias[indexE].pageE !== datos.pageE || pageE.img !== urlImagen ) {
        return;
      }
      ui.img.removeAttribute("src");
      ui.img.style.display = "none";
      ocultarLoader();
      console.error("Error al cargar la imagen:", urlImagen);
    };
    imagenPrecarga.src = urlImagen;
  } else if (pageE.video) {
    mostrarLoader();
    const urlVideo = pageE.video;
    ui.video.src = urlVideo;
    ui.video.onload = () => {
      if ( experiencias[indexE].pageE !== datos.pageE || pageE.video !== urlVideo ) {
        return;
      }
      ui.video.style.display = "block";
      ocultarLoader();
    };
  } else {
    ocultarLoader();
  }
}
/*************************************************************************************/

//-- Abrir modales
/*************************************************************************************/
modalElementsE.forEach( (ui,indexE) => {
  ui.links.forEach(link=>{
    link.addEventListener("click", (eventE) => {
      eventE.preventDefault();
      experiencias[indexE].pageE=0;
      renderModalE(indexE);
      ui.modal.classList.add("active");
    });
  });
});
/*************************************************************************************/

//-- Cerrar modales
/*************************************************************************************/
modalElementsE.forEach(ui=>{
  ui.close.addEventListener("click",()=>{
    ui.modal.classList.remove("active");
  });
  ui.modal.addEventListener("click",(eventE)=>{
    if(eventE.target===ui.modal){
      ui.modal.classList.remove("active");
    }
  });
});
/*************************************************************************************/

// Botón siguiente
/*************************************************************************************/
modalElementsE.forEach((ui,indexE)=>{
  ui.next.addEventListener("click",()=>{
    const datos = experiencias[indexE];
    datos.pageE++;
    if(datos.pageE>=datos.pagesE.length){
      datos.pageE=0;
    }
    renderModalE(indexE);
  });
});
/*************************************************************************************/

//-- Botón anterior
/*************************************************************************************/
modalElementsE.forEach((ui,indexE)=>{
  ui.prev.addEventListener("click",()=>{
    const datos = experiencias[indexE];
    datos.pageE--;
    if(datos.pageE<0){
        datos.pageE=datos.pagesE.length-1;
    }
    renderModalE(indexE);
  });
});
/*************************************************************************************/