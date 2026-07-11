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
    modal: document.getElementById("certificacion2"),
    links: modalLinksc2,
    close: modalClosec2,
    text: modalTextc2,
    img: modalImgc2,
    video: modalVideoc2,
    counter: modalCounterc2,
    prev: modalPrevc2,
    next: modalNextc2
  },
  {
    modal: document.getElementById("certificacion3"),
    links: modalLinksc3,
    close: modalClosec3,
    text: modalTextc3,
    img: modalImgc3,
    video: modalVideoc3,
    counter: modalCounterc3,
    prev: modalPrevc3,
    next: modalNextc3
  },
  {
    modal: document.getElementById("certificacion4"),
    links: modalLinksc4,
    close: modalClosec4,
    text: modalTextc4,
    img: modalImgc4,
    video: modalVideoc4,
    counter: modalCounterc4,
    prev: modalPrevc4,
    next: modalNextc4
  },
  {
    modal: document.getElementById("certificacion5"),
    links: modalLinksc5,
    close: modalClosec5,
    text: modalTextc5,
    img: modalImgc5,
    video: modalVideoc5,
    counter: modalCounterc5,
    prev: modalPrevc5,
    next: modalNextc5
  },
  {
    modal: document.getElementById("certificacion6"),
    links: modalLinksc6,
    close: modalClosec6,
    text: modalTextc6,
    img: modalImgc6,
    video: modalVideoc6,
    counter: modalCounterc6,
    prev: modalPrevc6,
    next: modalNextc6
  },
  {
    modal: document.getElementById("certificacion7"),
    links: modalLinksc7,
    close: modalClosec7,
    text: modalTextc7,
    img: modalImgc7,
    video: modalVideoc7,
    counter: modalCounterc7,
    prev: modalPrevc7,
    next: modalNextc7
  },
  {
    modal: document.getElementById("certificacion8"),
    links: modalLinksc8,
    close: modalClosec8,
    text: modalTextc8,
    img: modalImgc8,
    video: modalVideoc8,
    counter: modalCounterc8,
    prev: modalPrevc8,
    next: modalNextc8
  },
  {
    modal: document.getElementById("certificacion9"),
    links: modalLinksc9,
    close: modalClosec9,
    text: modalTextc9,
    img: modalImgc9,
    video: modalVideoc9,
    counter: modalCounterc9,
    prev: modalPrevc9,
    next: modalNextc9
  },
  {
    modal: document.getElementById("certificacion10"),
    links: modalLinksc10,
    close: modalClosec10,
    text: modalTextc10,
    img: modalImgc10,
    video: modalVideoc10,
    counter: modalCounterc10,
    prev: modalPrevc10,
    next: modalNextc10
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
  },
  //-- Certificación 2
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Mi Licenciatura o Carrera Universitaria</h3>
          <p><b>Licenciatura:</b> <a href="https://www.urjc.es/estudios/grado/637-ingenieria-en-sistemas-audiovisuales-y-multimedia" target="_blank">Ingeniería en Sistemas Audiovisuales y Multimedia</a></p>
          <p><b>Rama de la Licenciatura:</b> Telecomunicaciones</p>
          <p><b>Campus universitario:</b> <a href="https://maps.app.goo.gl/FLMAsusBbyKdD83J7" target="_blank">URJC Fuenlabrada, Camino del Molino, 5, 28942 Fuenlabrada, Madrid, España</a></p>
          <p><b>Ver título oficial en español:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
          <p><b>Ver título oficial en inglés:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
          <p><b>Ver el historial académico:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
          <p><b>Ver el libro de la Licenciatura:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Libro-Licenciatura.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `<h3>Logo de la Universidad</h3>`,
        img: "./assets/certificaciones/logo_uni.png"
      },
      {
        text: `
          <p><b>Mi periodo universitario se llevo a cabo en 4 etapas:</b></p>
          <p> 1. Periodo de Asignaturas: desde septiembre/2016 a junio/2021</p>
          <p> 2. Periodo de Prácticas Curriculares en Empresa: desde septiembre/2021 a Febrero/2022</p>
          <p> 3. Periodo de Experiencia Erasmus+ fuera de España (en inglés): desde Febrero/2022 a julio/2022</p>
          <p> 4. Periodo de desarrollo y presentación del Trabajo de Fin de Grado (TFG): desde septiembre/2022 a julio/2023</p>
        `
      },
      {
        text: `
          <p><b>Trabajo de Fin de Grado - TFG:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/TFGAlejandroFernandezPerez.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Presentación del TFG (en español):</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/PresentacionTFGAlejandroFernandezPerez.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Presentación del TFG (en inglés):</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/BA-FinalProject-Presentation.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Mi tutor de TFG:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Mi-Tutor-TFG.png" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Nota de mis Prácticas Curriculares en Empresa:</b> 9</p>
          <p><b>Nota de mi Trabajo de Fin de Grado:</b> 9.3</p>
          <p><b>Nota media final:</b> 7</p>
          <p><b>Orla de Graduación:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Graduacion.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `<h3>Foto mía graduado 1</h3>`,
        img: "./assets/certificaciones/graduado1.jpg"
      },
      {
        text: `<h3>Foto mía graduado 2</h3>`,
        img: "./assets/certificaciones/graduado2.jpg"
      },
      {
        text: `<h3>Mi Vida Universitaria</h3>`,
        video: "https://streamable.com/e/snd0v3"
      },
      {
        text: `<h3>Experiencia en mi Acto de Graduación (octubre 2023)</h3>`,
        img: "https://i.postimg.cc/jjM17tbv/01.jpg"
      },
      {img: "https://i.postimg.cc/XYcmn91R/02.jpg"},   
      {img: "https://i.postimg.cc/qq3DSKCZ/03.jpg"},  
      {img: "https://i.postimg.cc/9XRkr6Nt/04.jpg"},  
      {img: "https://i.postimg.cc/pT71sCyF/05.jpg"},
      {video: "https://streamable.com/e/4eybtc"},
      {img: "https://i.postimg.cc/nhZSSCV0/07.jpg"},  
      {img: "https://i.postimg.cc/SKS5RjwJ/08.jpg"},
      {video: "https://streamable.com/e/vna4cl"},
      {img: "https://i.postimg.cc/HLkZHRyM/10.jpg"},
      {video: "https://streamable.com/e/mpmsrf"},
      {img: "https://i.postimg.cc/ZK6DLrmW/12.jpg"},
      {img: "https://i.postimg.cc/XNRzFsRM/13.jpg"},  
      {img: "https://i.postimg.cc/nzMPKgVx/14.jpg"},
      {
        text: `
          <h3>Datos de contacto de la URJC</h3>
          <p><b>Teléfono:</b> 91 665 50 60</p>
          <p><b>Correos electrónicos:</b> fuenlabrada.secretariadealumnos@urjc.es, fuenlabrada.gerencia@urjc.es y grado.ingenieriasam@urjc.es</p>
        `
      }
    ]
  },
  //-- Certificación 3
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Bachillerato</h3>
          <p><b>Centro Educativo:</b> <a href="https://maps.app.goo.gl/gWNBuUwKEQbjnYfR7" target="_blank">IES Profesor Máximo Trueba, Santillana del Mar, 22, 28660 Boadilla del Monte, Madrid, España</a></p>
          <p><b>Modalidad:</b> Bachillerato Tecnológico</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
          <p><b>Cursos alcanzados:</b></p>
          <p> - 1º de Bachillerato: 2013/14</p>
          <p> - 2º de Bachillerato: 2014/15</p>
          <p><b>Orla de Graduación (mayo 2015):</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Graduacion_Bachillerato.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Diploma de Graduación:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/DiplomaGraduadoBachillerato.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Examen de la PAU (Prueba de Acceso a la Universidad) de junio de 2015:</b> Aprobado con un 8 sobre 14</p>
        `
      },
      {
        text: `<h3>Logo del Instituto</h3>`,
        img: "./assets/certificaciones/logo_tuto.png"
      },
      {
        text: `<h3>Experiencia en mi Acto de Graduación (mayo 2015)</h3>`,
        img: "https://i.postimg.cc/8CPjtQj7/1.png"
      },
      {img: "https://i.postimg.cc/K8bK3gbr/2.png"},
      {img: "https://i.postimg.cc/pXzhdJwL/3.png"},
      {img: "https://i.postimg.cc/RZTW7VVr/4.png"},
      {img: "https://i.postimg.cc/G3ZTr5Sf/5.png"},
      {
        text: `
          <h3>Datos de contacto del Instituto</h3>
          <p><b>Teléfono:</b> 91 632 15 12</p>
          <p><b>Correo electrónico:</b> secretaria.ies.maximotrueba.boadilla@educa.madrid.org</p>
        `
      }
    ]
  },
  //-- Certificación 4
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Educación Secundaria Obligatoria (ESO)</h3>
          <p><b>Centro Educativo:</b> <a href="https://maps.app.goo.gl/gWNBuUwKEQbjnYfR7" target="_blank">IES Profesor Máximo Trueba, Santillana del Mar, 22, 28660 Boadilla del Monte, Madrid, España</a></p>
          <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
          <p><b>Cursos alcanzados:</b></p>
          <p> - <a href="./assets/certificaciones/PrimeroESO.pdf" target="_blank">1º de la E.S.O: 2009/10</a></p>
          <p> - 2º de la E.S.O: 2010/11</p>
          <p> - 3º de la E.S.O: 2011/12</p>
          <p> - <a href="./assets/certificaciones/CuartoESO.pdf" target="_blank">4º de la E.S.O: 2012/13</a></p>
          <p><b>Orla de Graduación de la E.S.O (junio 2013):</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Graduacion_ESO.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Diploma de Aprovechamiento:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/DiplomaAprovechamientoESO.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `<h3>Logo del Instituto</h3>`,
        img: "./assets/certificaciones/logo_tuto.png"
      },
      {
        text: `
          <h3>Datos de contacto del Instituto</h3>
          <p><b>Teléfono:</b> 91 632 15 12</p>
          <p><b>Correo electrónico:</b> secretaria.ies.maximotrueba.boadilla@educa.madrid.org</p>
        `
      }
    ]
  },
  //-- Certificación 5
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Educación Primaria Básica (EPB)</h3>
          <p><b>Centro Educativo:</b> <a href="https://maps.app.goo.gl/C33NUr3LMaqS5E6B8" target="_blank">CEIP Príncipe Don Felipe, Juan Carlos I, 40, 28660 Boadilla del Monte, Madrid, España</a></p>
          <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
          <p><b>Cursos alcanzados:</b></p>
          <p> - 1º de Educación Infantil: 2000/01</p>
          <p> - <a href="./assets/certificaciones/Segundo-Ed-Infantil.pdf" target="_blank">2º de Educación Infantil: 2001/02</a></p>
          <p> - 3º de Educación Infantil: 2002/03</p>
          <p> - Orla de Graduación de Ed. Infantil (junio 2003): <i class="fa fa-globe"></i><a href="./assets/certificaciones/Graduacion-Ed-Infantil.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p> - <a href="./assets/certificaciones/Primero-Ed-Primaria.pdf" target="_blank">1º de Educación Primaria: 2003/04</a></p>
          <p> - <a href="./assets/certificaciones/Segundo-Ed-Primaria.pdf" target="_blank">2º de Educación Primaria: 2004/05</a></p>
          <p> - <a href="./assets/certificaciones/Tercero-Ed-Primaria.pdf" target="_blank">3º de Educación Primaria: 2005/06</a></p>
          <p> - 4º de Educación Primaria: 2006/07</p>
          <p> - 5º de Educación Primaria: 2007/08</p>
          <p> - <a href="./assets/certificaciones/Sexto-Ed-Primaria.pdf" target="_blank">6º de Educación Primaria: 2008/09</a></p>
          <p> - Orla de Graduación de Ed. Primaria (junio 2009): <i class="fa fa-globe"></i><a href="./assets/certificaciones/Graduacion-Ed-Primaria.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `<h3>Logo del Colegio durante mi presencia</h3>`,
        img: "./assets/certificaciones/logo_anterior.png"
      },
      {
        text: `<h3>Logo del Colegio actual</h3>`,
        img: "./assets/certificaciones/logo_posterior.png"
      },
      {
        text: `<h3>Obra de teatro por el final de Ed. Primaria (junio 2009)</h3>`,
        img: "https://i.postimg.cc/x1DvdMDP/01.jpg"
      },
      {img: "https://i.postimg.cc/Y9Mk2Xbw/02.jpg"},  
      {img: "https://i.postimg.cc/7YT1DXc6/03.jpg"},  
      {img: "https://i.postimg.cc/J0sNsQzp/04.jpg"},  
      {img: "https://i.postimg.cc/fy1xm03D/05.jpg"},  
      {img: "https://i.postimg.cc/nVWK6N3g/06.jpg"},  
      {img: "https://i.postimg.cc/8zfTZfjx/07.jpg"},  
      {img: "https://i.postimg.cc/KYXxwcTj/08.jpg"},  
      {img: "https://i.postimg.cc/FKjN4tbZ/09.jpg"},  
      {img: "https://i.postimg.cc/tTkbshMn/10.jpg"},  
      {img: "https://i.postimg.cc/qqZdLp0k/11.jpg"},  
      {img: "https://i.postimg.cc/prdHzpwG/12.jpg"},  
      {img: "https://i.postimg.cc/59P11SzZ/13.jpg"},
      {
        text: `<h3>Experiencia en mi Acto de Graduación de Primaria (junio 2009)</h3>`,
        img: "https://i.postimg.cc/s2S7C20N/01.jpg"
      },
      {img: "https://i.postimg.cc/MpgVLBtB/02.jpg"},  
      {img: "https://i.postimg.cc/ry9GpKF6/03.jpg"},  
      {img: "https://i.postimg.cc/hPy996dp/04.jpg"},  
      {img: "https://i.postimg.cc/8PPRfNj7/05.jpg"},  
      {img: "https://i.postimg.cc/0yz7ZnGx/06.jpg"},
      {
        text: `
          <h3>Datos de contacto del Colegio</h3>
          <p><b>Teléfono:</b> 91 633 16 26</p>
          <p><b>Correo electrónico:</b> secretaria.cp.principedonfelipe.boadilla@educa.madrid.org</p>
        `
      }
    ]
  },
  //-- Certificación 6
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Curso de Monitor de Ocio y Tiempo Libre</h3>
          <p><b>Organiza:</b> <a href="https://maps.app.goo.gl/QnbAnTh6U4i8aN2K7" target="_blank">ISADIA Aventura, María Teresa, 11, Salamanca, 28028 Madrid, España</a></p>
          <p><b>Lugar del curso:</b> <a href="https://maps.app.goo.gl/31KWtftYKaKv5CdZA" target="_blank">Universidad Europea de Madrid, Tajo, s/n, 28670 Villaviciosa de Odón, Madrid, España</a></p>
          <p><b>Periodo del Curso:</b> Todos los fines de semana de febrero, marzo y abril de 2017</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-envelope"></i><a href="#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
          <p><b>Memoria/Proyecto Final del Curso:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/ProyectoFinal-MonitorOTL.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Teléfono de la empresa organizadora:</b> +34 657 51 00 87</p>
          <p><b>Correo electrónico de la empresa organizadora:</b> info@isadia-aventura.com</p>
        `
      },
      {
        text: `<h3>Logo del Curso</h3>`,
        img: "./assets/certificaciones/logo_motl.png"
      },
      {
        text: `<h3>Vídeo del Curso</h3>`,
        video: "https://streamable.com/e/9teayc"
      },
      {
        text: `
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
        text: `<h3>Logo de la 1º Experiencia</h3>`,
        img: "./assets/certificaciones/motl_exp1.png"
      },
      {
        text: `<h3>Sobre la 1º Experiencia</h3>`,
        img: "https://i.postimg.cc/jj1LZHkQ/1.jpg"
      },
      {img: "https://i.postimg.cc/XYQZySfP/2.jpg"},
      {img: "https://i.postimg.cc/hj7hwXkF/3.jpg"},
      {img: "https://i.postimg.cc/hGvXLyMt/4.jpg"},
      {img: "https://i.postimg.cc/jSmb1Mt5/5.png"},
      {
        text: `
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
        text: `<h3>Logo de la 2º Experiencia</h3>`,
        img: "./assets/certificaciones/motl_exp2.png"
      },
      {
        text: `<h3>Sobre la 2º Experiencia</h3>`,
        img: "https://i.postimg.cc/8P03mjwR/IMG-20250730-173041.png"
      },
      {img: "https://i.postimg.cc/wTvZNh5x/IMG-20250730-173321.png"},
      {img: "https://i.postimg.cc/44wjn89F/IMG-20250730-173514.png"},
      {img: "https://i.postimg.cc/zBz0rr0D/IMG-20250730-173851.png"},
      {img: "https://i.postimg.cc/CKHmX1C6/IMG-20250730-174135.png"},
      {img: "https://i.postimg.cc/dQWSJLbb/IMG-20250730-175717.png"},
      {img: "https://i.postimg.cc/nhmdKTXx/IMG-20250730-175423.png"},
      {img: "https://i.postimg.cc/DzKxxsGX/IMG-20250730-180402.png"},
      {img: "https://i.postimg.cc/ZK27yXKj/IMG-20250730-181857.png"},
      {img: "https://i.postimg.cc/k5Xv2v37/IMG-20250731-120746.png"},
      {img: "https://i.postimg.cc/SNPhTDdv/IMG-20250731-120719-860.webp"},
      {img: "https://i.postimg.cc/hGLRGgBk/IMG-20250731-121208.png"},
      {img: "https://i.postimg.cc/YCmwJYyq/IMG-20250731-121410-875.webp"},
      {img: "https://i.postimg.cc/k56FNX4H/IMG-20250731-121447-738.webp"},
      {img: "https://i.postimg.cc/NjPkrrgT/IMG-20250731-122003.png"},
      {img: "https://i.postimg.cc/x1dPCPSn/IMG-20250731-122020.png"},
      {img: "https://i.postimg.cc/rFjJMP3f/IMG-20250731-122801.png"},
      {img: "https://i.postimg.cc/X74LMbHZ/IMG-20250731-122812.png"},
      {img: "https://i.postimg.cc/MZy5rTD2/IMG-20250731-123452.png"},
      {img: "https://i.postimg.cc/BbGgn9JV/IMG-20250731-124645.png"},
      {img: "https://i.postimg.cc/Wz67DW3b/IMG-20250731-125047.png"},
      {img: "https://i.postimg.cc/G2DKRhnD/IMG-20250731-125928.png"},
      {img: "https://i.postimg.cc/nLCTdGd0/IMG-20250731-130913.png"},
      {img: "https://i.postimg.cc/bvWg4SW8/IMG-20250731-130846-074.webp"},
      {img: "https://i.postimg.cc/g2cghW39/IMG-20250731-131258.png"},
      {img: "https://i.postimg.cc/2SH2FKx1/IMG-20250731-131247.png"},
      {img: "https://i.postimg.cc/RVLPqF6Q/IMG-20250731-131316.png"}
    ]
  },
  //-- Certificación 7
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Curso de Monitor de Kayak y SUP</h3>
          <p><b>Organiza:</b> <a href="https://maps.app.goo.gl/Xb8g5Df2ik8XSJR27" target="_blank">Asdon Aventura, Las Eras, 8, Poveda de la Sierra, 19463 Guadalajara, España</a></p>
          <p><b>Lugar del curso:</b> <a href="https://maps.app.goo.gl/sBaoNStF6Yingjhf7" target="_blank">Río Alberche, s/n, 28696 Pelayos de la Presa, Madrid, España</a></p>
          <p><b>Periodo del Curso:</b> Dos fines de semana de mayo 2021</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/titulo_kayak_sup.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Teléfonos de la empresa organizadora:</b> +34 667 759 645 y +34 616 250 495</p>
          <p><b>Correo electrónico de la empresa organizadora:</b> info@asdonaventura.com</p>
        `
      },
      {
        text: `<h3>Logo de la empresa + Background del curso</h3>`,
        img: "./assets/certificaciones/kayak-y-padelSurf.png"
      }
    ]
  },
  //-- Certificación 8
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Certificación Dante Audinate N1</h3>
          <p><b>Modo del curso:</b> Remoto</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Certificacion-Dante-Audinate-1.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `
          <h3>Certificación Dante Audinate N2</h3>
          <p><b>Modo del curso:</b> Remoto</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Certificacion-Dante-Audinate-2.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `
          <h3>Certificación Dante Audinate N3</h3>
          <p><b>Modo del curso:</b> Remoto</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Certificacion-Dante-Audinate-3.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      },
      {
        text: `
          <h3>Certificación Dante Audinate AV</h3>
          <p><b>Modo del curso:</b> Remoto</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Certificacion-Dante-Audinate-4.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      }
    ]
  },
  //-- Certificación 9
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Certificación Sistemas USB</h3>
          <p><b>Organizado por:</b> <a href="https://maps.app.goo.gl/b1HdfeXqyRMeVLz6A" target="_blank">Crestron, Santa Leonor, 65, Edif A, Planta 4, San Blas-Canillejas, 28037 Madrid, España</a></p>
          <p><b>Modo del curso:</b> Presencial</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Certificado-USB-Crestron.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
          <p><b>Contenidos de la certificación:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/SistemasUSB-Crestron.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      }
    ]
  },
  //-- Certificación 10
  {
    pageC: 0,
    pagesC: [
      {
        text: `
          <h3>Certificación Adobe After Effects</h3>
          <p><b>Organizado por:</b> <a href="https://share.google/b2EtrJ6jZuuxrszqd" target="_blank">CUESA-URJC</a></p>
          <p><b>Lugar del curso:</b> <a href="https://maps.app.goo.gl/Jasttnmqg2LKnVxy8" target="_blank">Camino del Molino, 5, 28942 Fuenlabrada, Madrid, España</a></p>
          <p><b>Modo del curso:</b> Presencial</p>
          <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="./assets/certificaciones/Certificacion-Ae.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        `
      }
    ]
  }
];
/*************************************************************************************/


/* Renderizar modales */
/*************************************************************************************/
function renderModalC(indexC) {
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
      renderModalC(indexC);
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
    renderModalC(indexC);
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
    renderModalC(indexC);
  });
});
/*************************************************************************************/