//-- Declaración de variables
/*************************************************************************************/
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

const modalClosee1 = document.querySelector("[data-modal-close-e1]");
const modalClosee2 = document.querySelector("[data-modal-close-e2]");
const modalClosee3 = document.querySelector("[data-modal-close-e3]");
const modalClosee4 = document.querySelector("[data-modal-close-e4]");
const modalClosee5 = document.querySelector("[data-modal-close-e5]");
const modalClosee6 = document.querySelector("[data-modal-close-e6]");
const modalClosee7 = document.querySelector("[data-modal-close-e7]");
const modalClosee8 = document.querySelector("[data-modal-close-e8]");
const modalClosee9 = document.querySelector("[data-modal-close-e9]");

const modalCountere1 = document.querySelector("[data-counter-e1]");
const modalCountere2 = document.querySelector("[data-counter-e2]");
const modalCountere3 = document.querySelector("[data-counter-e3]");
const modalCountere4 = document.querySelector("[data-counter-e4]");
const modalCountere5 = document.querySelector("[data-counter-e5]");
const modalCountere6 = document.querySelector("[data-counter-e6]");
const modalCountere7 = document.querySelector("[data-counter-e7]");
const modalCountere8 = document.querySelector("[data-counter-e8]");
const modalCountere9 = document.querySelector("[data-counter-e9]");

const modalPreve1 = document.querySelector("[data-prev-e1]");
const modalPreve2 = document.querySelector("[data-prev-e2]");
const modalPreve3 = document.querySelector("[data-prev-e3]");
const modalPreve4 = document.querySelector("[data-prev-e4]");
const modalPreve5 = document.querySelector("[data-prev-e5]");
const modalPreve6 = document.querySelector("[data-prev-e6]");
const modalPreve7 = document.querySelector("[data-prev-e7]");
const modalPreve8 = document.querySelector("[data-prev-e8]");
const modalPreve9 = document.querySelector("[data-prev-e9]");

const modalNexte1 = document.querySelector("[data-next-e1]");
const modalNexte2 = document.querySelector("[data-next-e2]");
const modalNexte3 = document.querySelector("[data-next-e3]");
const modalNexte4 = document.querySelector("[data-next-e4]");
const modalNexte5 = document.querySelector("[data-next-e5]");
const modalNexte6 = document.querySelector("[data-next-e6]");
const modalNexte7 = document.querySelector("[data-next-e7]");
const modalNexte8 = document.querySelector("[data-next-e8]");
const modalNexte9 = document.querySelector("[data-next-e9]");

const modalImge1 = document.querySelector("[data-modal-img-e1]");
const modalImge2 = document.querySelector("[data-modal-img-e2]");
const modalImge3 = document.querySelector("[data-modal-img-e3]");
const modalImge4 = document.querySelector("[data-modal-img-e4]");
const modalImge5 = document.querySelector("[data-modal-img-e5]");
const modalImge6 = document.querySelector("[data-modal-img-e6]");
const modalImge7 = document.querySelector("[data-modal-img-e7]");
const modalImge8 = document.querySelector("[data-modal-img-e8]");
const modalImge9 = document.querySelector("[data-modal-img-e9]");

const modalVideoe1 = document.querySelector("[data-modal-video-e1]");
const modalVideoe2 = document.querySelector("[data-modal-video-e2]");
const modalVideoe3 = document.querySelector("[data-modal-video-e3]");
const modalVideoe4 = document.querySelector("[data-modal-video-e4]");
const modalVideoe5 = document.querySelector("[data-modal-video-e5]");
const modalVideoe6 = document.querySelector("[data-modal-video-e6]");
const modalVideoe7 = document.querySelector("[data-modal-video-e7]");
const modalVideoe8 = document.querySelector("[data-modal-video-e8]");
const modalVideoe9 = document.querySelector("[data-modal-video-e9]");
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
    next: modalNexte1
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
  //-- Experiencia 4
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Ingeniero Preventa IoT & Big Data Junior</h3>
          <p><b>Tipo de contrato:</b> Jornada completa</p>
          <p><b>Modo de trabajo:</b> Híbrido (Presencial + Remoto)</p>
          <p><b>Idioma:</b> Español e Inglés</p>
        `
      },
      {
        text: `
          <p><b>Funciones:</b></p>
          <p>- Diseño de soluciones tecnológicas</p>
          <p>- Elaboración de propuestas técnicas y económicas</p>
          <p>- Trato con clientes</p>
          <p>- Soporte técnico en la fase de preventa para proyectos de IoT y Big Data en el área corporativa</p>
          <p>- Soluciones de integración AV</p>
          <p>- Preparación de documentación técnica</p>
          <p>- Investigación y actualización de tecnologías IoT & Big Data</p>
        `
      },
      {
        text: `
          <h3>Ferias de empresa</h3>
          <p>1. <a href="https://www.bitamshow.com/" target="_blank">Bitam</a> - Noviembre 2023 - Madrid (España)</p>
          <p>2. <a href="https://www.iseurope.org/" target="_blank">ISE</a> - Enero 2024 - Barcelona (España)</p>
        `
      },
      {
        text: `<p><b>Momentos de la empresa:</b></p>`,
        img: "https://i.postimg.cc/3x0M3jpy/1.jpg"
      },
      {img: "https://i.postimg.cc/ncPb8Ssb/3.jpg"},
      {img: "https://i.postimg.cc/cHC1Mg2f/2.jpg"},
      {video: "https://streamable.com/e/al0ysf"},
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Teléfono:</b> 91 592 05 09</p>
          <p><b>Correos electrónicos:</b> telefonicaiot@telefonica.com, cristina.velazquezurenda@telefonica.com, cristina.patinogarcia@telefonica.com y preguntanos_peopleiotbd@telefonica.com</p>
          <p><b>Sede:</b> <a href="https://maps.app.goo.gl/unhMBQeq11aKVz2y7" target="_blank">Distrito Telefónica Edificio Oeste 1, Ronda de la Comunicación, S/N, Fuencarral-El Pardo, 28050 Madrid, España</a></p>
        `
      },
      {
        text: `
          <h3>Fin del contrato</h3>
          <p><b>Fecha:</b> Enero 2024</p>
          <p><b>Motivo:</b> Acabo contrato porque me ofrecieron realizar proyectos de ingeniería acústica arquitectónica y ambiental en Mallorca
          y de programación de sistemas de videoconferencia en Barcelona, viéndolos como una gran oportunidad para no estancarme,
          salir de mi zona de confort, aprender nuevas habilidades, tener nuevas experiencias profesionales y viajar
          por todo el territorio español</p>
        `
      }
    ]
  },
  //-- Experiencia 5
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Proyecto acústico en Mallorca</h3>
          <p><b>Tipo de contrato:</b> Jornada completa</p>
          <p><b>Por medio de:</b> Proyectos Empresariales Talento Futuro de <a href="https://www.urjc.es/todas-las-noticias-de-actualidad/9119-la-urjc-presenta-una-veintena-de-proyectos-empresariales-incubados-en-explorer-24" target="_blank">URJC</a> y <a href="https://www.bancosantander.es/universidades/emprendimiento" target="_blank">Banco Santander</a></p>
          <p><b>Remuneración:</b> Sí</p>
          <p><b>Modo de trabajo:</b> Presencial</p>
          <p><b>Idioma:</b> Español e Inglés</p>
        `
      },
      {
        text: `
          <p><b>Funciones:</b></p>
          <p>
            - Estudios acústicos con Immi <br>
            - Mediciones sonométricas in situ <br>
            - Realización de informes acústicos en Word <br>
            - Programación de gráficas y mediciones en Excel <br>
            - Entender Reales Decretos acústicos
          </p>
        `
      },
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Teléfono:</b> +34 692 31 97 67</p>
          <p><b>Correos electrónicos:</b> info@macustica.com</p>
          <p><b>Sede:</b> <a href="https://maps.app.goo.gl/pvzJzhVh5py8qydy6" target="_blank">Pérez Galdós, 3, 07300 Inca, Islas Baleares, España</a></p>
        `
      },
      {
        text: `
          <h3>Fin del contrato</h3>
          <p><b>Motivo:</b> Proyecto acústico de duración finita</p>
        `
      }
    ]
  },
  //-- Experiencia 6
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Proyecto de Sistemas de Videoconferencia</h3>
          <p><b>Tipo de contrato:</b> Jornada completa</p>
          <p><b>Por medio de:</b> Proyectos Empresariales Talento Futuro de <a href="https://www.urjc.es/todas-las-noticias-de-actualidad/9119-la-urjc-presenta-una-veintena-de-proyectos-empresariales-incubados-en-explorer-24" target="_blank">URJC</a> y <a href="https://www.bancosantander.es/universidades/emprendimiento" target="_blank">Banco Santander</a></p>
          <p><b>Remuneración:</b> Sí</p>
          <p><b>Modo de trabajo:</b> Presencial</p>
          <p><b>Idioma:</b> Español e Inglés</p>
        `
      },
      {
        text: `
          <p><b>Funciones:</b></p>
          <p>
            - Programación audiovisual de salas de control y videoconferencia con Muse Automator de AMX, basado en JS y Python <br>
            - Configuración del sistema de sonido de las salas a través de Audio Architect y DSPs <br>
            - Realización de diagramas a través de Draw.IO <br>
            - Estudio acústico de salas a través del software DDA JBL <br>
            - Entender el funcionamiento de proyectos acústicos y de salas de control audiovisual
          </p>
        `
      },
      {
        text: `
          <p><b>Viaje de formación de 4 días a Harman Pro (Apsley, Reino Unido):</b></p>
          <p>
            - <a href="https://pro.harman.com/" target="_blank">Harman Pro</a> es una empresa líder en la fabricación de equipos de sonido profesional.
            Trabaja con marcas como JBL, Soundcraft, entre otras. El viaje de formación se centró en
            aprender a configurar y programar sistemas de videoconferencia y control audiovisual utilizando DSPs y el software de programación AMX Muse Automator.
          </p>
        `
      },
      {
        text: `<p><b>Momentos del viaje:</b></p>`,
        img: "https://i.postimg.cc/dtHkCkk8/1.png"
      },
      {img: "https://i.postimg.cc/PrrvNzxX/2.png"},
      {video: "https://streamable.com/e/9zty5h"},
      {video: "https://streamable.com/e/1y0fpi"},
      {img: "https://i.postimg.cc/9QsDx6B0/5.png"},
      {video: "https://streamable.com/e/fk8cpg"},
      {video: "https://streamable.com/e/g6wdtm"},
      {video: "https://streamable.com/e/k1iqe1"},
      {img: "https://i.postimg.cc/138grmwb/9.png"},
      {img: "https://i.postimg.cc/d3Q3kwJH/10.png"},
      {img: "https://i.postimg.cc/pTJyLpM5/11.png"},
      {img: "https://i.postimg.cc/k4mBCWzd/12.png"},
      {img: "https://i.postimg.cc/5tv6DsP3/13.png"},
      {img: "https://i.postimg.cc/tJrTFwTX/14.png"},
      {img: "https://i.postimg.cc/dt1DJsHD/15.png"},
      {img: "https://i.postimg.cc/hP5vjk6s/16.png"},
      {img: "https://i.postimg.cc/Y28hcGxJ/17.png"},
      {img: "https://i.postimg.cc/nh9zQdtJ/18.png"},
      {img: "https://i.postimg.cc/DzVzQq2b/19.png"},
      {img: "https://i.postimg.cc/8ChzZj5X/20.png"},
      {video: "https://streamable.com/e/41qe3z"},
      {img: "https://i.postimg.cc/TwfYFf5d/22.png"},
      {video: "https://streamable.com/e/tpstki"},
      {video: "https://streamable.com/e/wr0x6s"},
      {img: "https://i.postimg.cc/Tw0YXFnr/25.png"},
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Teléfono de Algam Ibérica:</b> +34 934 221 811</p>
          <p><b>Teléfono de Harman Pro:</b> +44 1 904 343 142</p>
          <p><b>Correo electrónico de Algam Ibérica:</b> mpunti@algamiberica.com (CEO)</p>
          <p><b>Correo electrónico de Harman Pro:</b> adam.findlay@harman.com (Director de Ingeniería de Ventas EMEA)</p>
          <p><b>Sede de Algam Ibérica:</b> <a href="https://maps.app.goo.gl/tpjyxcLFqDoqf9Wm6" target="_blank">Garcilaso, 11, Sant Andreu, 08027 Barcelona, España</a></p>
          <p><b>Sede de Harman Pro:</b> <a href="https://maps.app.goo.gl/uFuiPw5o9useeTax8" target="_blank">HARMAN, Westside, London Road, Hemel Hempstead HP3 9TD, Reino Unido</a></p>
        `
      },
      {
        text: `
          <h3>Fin del contrato</h3>
          <p><b>Motivo:</b> Proyecto de Sistemas de Videoconferencia de duración finita</p>
        `
      }
    ]
  },
  //-- Experiencia 7
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>IT Engineer Trainee</h3>
          <p><b>Tipo de contrato:</b> Contrato de formación</p>
          <p><b>Modo de trabajo:</b> Híbrido (Presencial + Remoto)</p>
          <p><b>Idioma:</b> Inglés y Español</p>
          <p><b>Calendario del Programa:</b> <i class="fa fa-globe"></i><a href="./assets/experiencias/Calendario_PSS_TI.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `
          <p><b>Funciones y Desarrollo:</b></p>
          <p> - Arquitectura Mainframe y z/OS</p>
          <p> - JCL y Utilidades del z/OS</p>
          <p> - MQ</p>
          <p> - DB2</p>
          <p> - CICS</p>
          <p> - Arquitectura z16 y z17 en <a class="otros-enlaces" href="https://www.ibm.com/es-es" target="_blank">IBM</a></p>
          <p> - z/OSMF y ZOWE</p>
          <p> - z/CX</p>
          <p> - z/OS Comm Server</p>
          <p> - Lenguaje de Programación REXX</p>
        `
      },
      {
        text: `<p><b>Mi experiencia en PSS TI:</b></p>`,
        img: "https://i.postimg.cc/7LGJdYwd/IMG-20250324-WA0004.png"
      },
      {img: "https://i.postimg.cc/P5F8S8s1/IMG-20250324-WA0009.png"},
      {img: "https://i.postimg.cc/02Pmjs0K/IMG-20250324-WA0015.jpg"},
      {img: "https://i.postimg.cc/Wb8ZJH5W/IMG-20250324-WA0017.jpg"},
      {img: "https://i.postimg.cc/g20ZyH5Y/IMG-20250327-WA0009.png"},
      {img: "https://i.postimg.cc/nVvBnzBt/IMG-20250327-WA0011.jpg"},
      {img: "https://i.postimg.cc/YSMjq48C/Config-Mainframe1.png"},
      {img: "https://i.postimg.cc/xd58k0Fy/Config-Mainframe2.png"},
      {img: "https://i.postimg.cc/GmkHCPFf/Config-Mainframe3.png"},
      {img: "https://i.postimg.cc/fb2J19Pc/IMG-20250429-WA0005.png"},
      {img: "https://i.postimg.cc/fRv3jFjg/IMG-20250429-WA0006.png"},
      {img: "https://i.postimg.cc/DzySCgxf/IMG-20250429-WA0008.png"},
      {img: "https://i.postimg.cc/v8jFpWSq/IMG-20250520-WA0008.png"},
      {img: "https://i.postimg.cc/TwPw2WzN/1.png"},
      {img: "https://i.postimg.cc/mD6rPgRL/2.png"},
      {
        text: `
          <p><b>Presentación del Proyecto Final:</b> <i class="fa fa-globe"></i><a href="./assets/experiencias/Presentacion_PSS_TI.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Notas del Talent Campus:</b> <i class="fa fa-globe"></i><a href="./assets/experiencias/Notas_Talent_Campus.png" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Diploma del Talent Campus de PSS TI:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i> - Apto</p>
        `
      },
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Teléfono:</b> +34 91 345 10 27</p>
          <p><b>Correo electrónico:</b> peopleandtalent@pss-ti.com</p>
          <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/QBa63tFWuWXorY6SA" target="_blank">Spaces Madrid - Edificio E - 3º planta, Vía de los Poblados, 1, Hortaleza, 28033 Madrid, España</a></p>
        `
      }
    ]
  },
  //-- Experiencia 8
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>ALM Engineer</h3>
          <p><b>Tipo de contrato:</b> Jornada completa</p>
          <p><b>Modo de trabajo:</b> Remoto</p>
          <p><b>Idioma:</b> Inglés y Español</p>
          <p><b>Proyecto/Cliente:</b> Allianz Italia</p>
          <p><b>Departamento:</b> Migration & Mainframe Modernization</p>
        `
      },
      {
        text: `
          <p><b>Funciones:</b></p>
          <p> - Integración en el equipo de modernización de sistemas Mainframe</p>
          <p> - Diseñar y desarrollar componentes dentro del nuevo ecosistema distribuido</p>
          <p> - Soporte técnico a nivel scripting, automatización y procesos asociados a la transición tecnológica</p>
          <p> - Colaborar con arquitectos hardware y software para definir la estructura del nuevo entorno</p>
          <p> - Interactuar con un equipo multidisciplinar distribuido en varios proyectos de desarrollo</p>
        `
      },
      {
        text: `
          <h3>Datos de la empresa</h3>
          <p><b>Teléfono:</b> +34 91 596 60 00</p>
          <p><b>Correo electrónico:</b> a.fernandez.perez@accenture.com</p>
          <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/iv9Lcj7Sapg59diG7" target="_blank">Paseo de la Castellana, 85, Tetuán, 28046, Madrid, España</a></p>
        `
      }
    ]
  },
  //-- Experiencia 9
  {
    pageE: 0,
    pagesE: [
      {
        text: `
          <h3>Semestre de Erasmus+</h3>
          <p><b>Institución:</b> <a href="https://www.course-catalogue.uns.ac.rs/course-catalogue/faculty-of-technical-sciences" target="_blank">Facultad de Ciencias Técnicas (FTN)</a> - <a href="https://www.course-catalogue.uns.ac.rs/course-catalogue/university-of-novi-sad" target="_blank">Universidad de Novi Sad (UNS)</a></p>
          <p><b>Duración:</b> 1 semestre (6 meses)</p>
          <p><b>Idioma:</b> Inglés</p>
          <p><b>Remuneración:</b> 200 € netos / mes</p>
          <p><b>Experiencia realizada gracias a:</b> <a class="otros-enlaces" href="https://www.course-catalogue.uns.ac.rs/course-catalogue/university-of-novi-sad" target="_blank">UNS</a> y <a class="otros-enlaces" href="https://www.urjc.es/internacional/erasmus-y-movilidad" target="_blank">URJC</a></p>
        `
      },
      {
        text: `
          <p><b>Asignaturas (30 ECTS):</b></p>
          <p> - Informática II <=> Fundamentals in Programming ==> Nota: 8.5</p>
          <p> - Protocolos para la Transmisión de Audio y Vídeo en Internet <=> XML & WEB Services ==> Nota: 6.5</p>
          <p> - Tratamiento Digital de la Imagen <=> Digital Image Processing ==> Nota: 5.5</p>
          <p> - Gráficos y Visualización en 3D <=> Energy & Renewable Energy Sources in Rural Areas ==> Nota: 9.5</p>
          <p> - Laboratorio de Tecnologías Audiovisuales en la Web <=> Strategic Planning in Postal Traffic & Telecommunications ==> Nota: 9.5</p>
        `
      },
      {
        text: `
          <h3>Datos del Erasmus+</h3>
          <p><b>Libro del Erasmus+:</b> <i class="fa fa-globe"></i><a href="./assets/experiencias/Libro.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Tarjeta ESN Oficial:</b> <i class="fa fa-globe"></i><a href="./assets/experiencias/ESN.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>                            
          <p><b>Tarjeta de Transporte de Novi Sad:</b> <i class="fa fa-globe"></i><a href="./assets/experiencias/TransporteNoviSad.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `
          <h3>Datos de la institución universitaria</h3>
          <p><b>Teléfonos:</b> +381 21 485 2056 y +34 91 665 50 60</p>
          <p><b>Correos electrónicos:</b> darkoste@uns.ac.rs, iro.ftn@uns.ac.rs y ana.arboleya@urjc.es</p>
          <p><b>Sede:</b> <a href="https://maps.app.goo.gl/nWr1PJDAnpiyfQQj8" target="_blank">Zorana Đinđića 1, Novi Sad 21000, Serbia</a></p>
        `
      }
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
  ui.counter.textContent = `${datos.pageE+1} / ${datos.pagesE.length}`;

  if(pageE.text){
    ui.text.innerHTML = pageE.text;
  }else{
    ui.text.innerHTML = "";
  }

  if(pageE.img){
    ui.img.src = pageE.img;
    ui.img.width = "500";
    ui.img.style.display = "block";
  }else{
    ui.img.removeAttribute("src");
    ui.img.style.display = "none";
  }

  if(pageE.video){
    ui.video.src = pageE.video;
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