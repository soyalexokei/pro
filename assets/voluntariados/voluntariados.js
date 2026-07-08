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
//-- {img: "https://i.postimg.cc/"},
//-- {video: "https://www.youtube.com/embed/"},
/*************************************************************************************/
const voluntariados = [
  //-- Voluntariado 1
  {
    pageV:0,
    pagesV: [
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
    pageV:0,
    pagesV:[
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
    pageV:0,
    pagesV:[
      {
        text:`
          <h3 style="text-align: center;">Mi experiencia como voluntario</h3>
          <p><b>Tipo de experiencia:</b> <a href="https://www.worldpackers.com/es/positions/51113" target="_blank">Worldpackers</a> - voluntario, viajero y mochilero</p>
          <p><b>Idioma empleado:</b> Inglés</p>
          <p><b>Funciones (lo que ofrezco):</b></p>
          <p> - Recogida de alimentos de la tierra y conocer técnicas de agricultura</p>
          <p> - Ser pinche de cocina: preparar y envasar pepinos pelados para conservar, pelar patatas y otras hortalizas, ayudar a preparar la comida del día, lavar la vajilla y limpiar la cocina</p>
          <p> - Ayudar en la elaboración de pan</p>
          <p> - Ayudar en la elaboración de quesos y en su envasado</p>
          <p> - Ayudar en la construcción de viviendas</p>
          <p> - Ayudar en el mantenimiento de los jardines</p>
          <p> - Ayudar al pastoreo de las ovejas y del cuidado y limpieza de todos los animales: vacas, un toro, cerdos, cabras, ovejas y caballos</p>
          <p> - Ayudar y ser reponedor en la tienda de alimentación</p>
          <p> - 5 días de trabajo a la semana (7h/día)</p>
          <p> - Hacer que la ecogranja de Sammatz sea un lugar mejor</p>
          <p><b>Funciones (lo que obtengo):</b></p>
          <p> - Alojamiento en habitación privada/compartida</p>
          <p> - Almuerzo diario servido por catering y voluntarios</p>
          <p> - Desayuno y cena servido por ti mismo, pero sin coste</p>
          <p> - Algunas veces, merienda con café y pastel, lo que se conoce como <i>Kuchen und Kaffee</i></p>
          <p> - Bicicletas a disposición, con reserva previa gratuita</p>
          <p> - Desplazamientos a la estación de tren más cercana</p>
          <p> - Frutas y hortalizas del día y de la tierra a disposición</p>
          <p> - Descuentos en viajes de tren y en restaurantes</p>
          <p> - 2 días libres a la semana</p>
        `
      },
      {
        text:`
          <h3 style="text-align: center;">Datos de la organización</h3>
          <p><b>Teléfono:</b> 05858 970 30</p>
          <p><b>Correo electrónico:</b> kontakt@sammatz.de</p>
          <p><b>Dirección:</b> Im Dorfe, 11, 29490, Sammatz, Niedersachsen, Deutschland</p>
        `
      },{img: "https://i.postimg.cc/ZYGkSPbq/1.jpg"},{img: "https://i.postimg.cc/T3xZyRWM/2.jpg"},{video: "https://www.youtube.com/embed/PdxNRQczFw0"},
      {img: "https://i.postimg.cc/28hs8qy7/4.jpg"},{img: "https://i.postimg.cc/3xZzmPgy/5.jpg"},{img: "https://i.postimg.cc/Xv7m8Q8s/6.jpg"},
      {img: "https://i.postimg.cc/fb2FgmqD/7.jpg"},{img: "https://i.postimg.cc/QtFPLCv5/8.jpg"},{img: "https://i.postimg.cc/tT8c9yHc/9.jpg"},
      {img: "https://i.postimg.cc/5yvR0G42/10.jpg"},{img: "https://i.postimg.cc/SQz5DX6b/11.jpg"},{video: "https://www.youtube.com/embed/ke9MInBdzH0"},
      {video: "https://www.youtube.com/embed/NH58gQWo9mM"},{video: "https://www.youtube.com/embed/qTxboYDAUlI"},{video: "https://www.youtube.com/embed/N6I4kwdrwJ8"},
      {video: "https://www.youtube.com/embed/m8u6yeTSMJY"},{img: "https://i.postimg.cc/CLT2tF7B/17.jpg"},{video: "https://www.youtube.com/embed/HUWCCp-Gm2w"},
      {video: "https://www.youtube.com/embed/gutpMrinsBY"},{video: "https://www.youtube.com/embed/Fp-ecbHzHes"},{video: "https://www.youtube.com/embed/MbfkBCP5gNs"},
      {video: "https://www.youtube.com/embed/oGmZW0v1NwQ"},{video: "https://www.youtube.com/embed/_W3qHpUdrX0"},{video: "https://www.youtube.com/embed/clOJ8arr8p8"},
      {video: "https://www.youtube.com/embed/HaKFuO4M02s"},{img: "https://i.postimg.cc/vHrKwp2P/26.jpg"},{img: "https://i.postimg.cc/52fR4nZf/27.jpg"},
      {img: "https://i.postimg.cc/xdCpHqf7/28.jpg"},{img: "https://i.postimg.cc/qvQZz2Ty/29.jpg"},{img: "https://i.postimg.cc/R0DsT9q0/30.jpg"},
      {img: "https://i.postimg.cc/DZ4CjDbP/31.jpg"},{img: "https://i.postimg.cc/Gt0XZQFw/32.jpg"},{video: "https://www.youtube.com/embed/oLlmVGI7TPE"},
      {img: "https://i.postimg.cc/wMhwHm2t/34.jpg"},{img: "https://i.postimg.cc/59v78hJx/35.jpg"},{img: "https://i.postimg.cc/3JTL1tr2/36.jpg"},
      {img: "https://i.postimg.cc/qMx152gS/37.jpg"},{img: "https://i.postimg.cc/529sdjC0/38.jpg"},{img: "https://i.postimg.cc/K89JZFP5/39.jpg"},
      {img: "https://i.postimg.cc/VNd4vT4P/40.jpg"},{video: "https://www.youtube.com/embed/2VpR7gxzvpw"}
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
          <p><b>Dirección:</b> Calle de Fuencarral, 3, Madrid 28004, Madrid, España</p>
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
          <p><b>Dirección:</b> Carrer Benirràs D, 51, 07810 San Juan Bautista, Ibiza, Illes Balears, España</p>
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
    ui.img.width = "450";
    ui.img.style.display = "block";
  }else{
    ui.img.removeAttribute("src");
    ui.img.style.display = "none";
  }

  if(pageV.video){
    ui.video.src = pageV.video;
    ui.video.width = "400";
    ui.video.height = "533";
    ui.video.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    ui.video.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    ui.video.setAttribute("allowFullscreen", "");
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