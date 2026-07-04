const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const quoteText = document.querySelector("[data-quote-text]");
const quoteAuthor = document.querySelector("[data-quote-author]");
const quoteCompany = document.querySelector("[data-quote-company]");
const quoteEmail = document.querySelector("[data-quote-email]");
const prevQuote = document.querySelector("[data-quote-prev]");
const nextQuote = document.querySelector("[data-quote-next]");
const quoteImage = document.querySelector("[data-quote-image]");

const quotes = [
  //-- 1º Testimonio
  /* {
    text: '""',
    author: {
      text: "Lola Salcedo",
      href: "https://www.linkedin.com/in/lolasalcedo/",
      target: "_blank"
    },
    company: {
      text: "Directora de estrategia e innovación en PSS TI",
      href: "https://www.pss-ti.com/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:lola.salcedo@pss-ti.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person11.png",
      alt: "Lola Salcedo",
      width: 180
    }
  }, */
  //-- 2º Testimonio
  {
    text: '"Alejandro demostró durante el curso de IA generativa en la EOI un gran compromiso y curiosidad por aprender. \
    Destacó por su participación activa, su capacidad de análisis y su cercanía a la hora de compartir ideas con el grupo. \
    Estoy seguro de que esas cualidades le ayudarán a seguir creciendo como profesional en el ámbito tecnológico."',
    author: {
      text: "Raúl Ordóñez",
      href: "https://raulordonez.com/",
      target: "_blank"
    },
    company: {
      text: "Profesor/Director de la EOI",
      href: "https://www.eoi.es/es",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:hola@raulordonez.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person12.png",
      alt: "Raúl Ordóñez",
      width: 180
    }
  },
  //-- 3º Testimonio
  {
    text: '"He tenido la oportunidad de trabajar con Alejandro en un nuevo proyecto. Muy buena actitud y ganas de trabajar, aprender y crecer laboralmente.\
    Buena relación con sus compañeros y dispuesto siempre a colaborar."',
    author: {
      text: "Manel Puntí",
      href: "https://www.linkedin.com/in/manelpunti/",
      target: "_blank"
    },
    company: {
      text: "CEO de Algam Ibérica",
      href: "https://www.algamiberica.com/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:mpunti@algamiberica.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person2.png",
      alt: "Manel Puntí",
      width: 180
    }
  },
  //-- 4º Testimonio
  {
    text: '"Álex es una persona asertiva porque sabe convencer de un buen plan para hacer. Es positivo porque pese a las adversidades,\
    siempre tiene la cabeza alta. Además, es un luchador, hasta que no lo consigue, no se rinde."',
    author: {
      text: "María Alastrué - Amiga de Alejandro",
      href: "https://www.zaragoza.es/sede/",
      target: "_blank"
    },
    company: {
      text: "Enfermera de Mallorca (Islas Baleares)",
      href: "https://www.ibsalut.es/es/profesionales/recursos-humanos/trabaja-con-nosotros/bolsa-unica",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "https://www.instagram.com/mariaalastrue/?hl=en",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person10.png",
      alt: "María Alastrué",
      width: 180
    }
  },
  //-- 5º Testimonio
  {
    text: '"Alejandro es una persona constante, trabajadora y enfocado en sus objetivos. Además, es positivo porque\
    busca las ventajas de las cosas, por encima de las contras. Y es buena persona, porque siempre se da a los demás\
    y hace por crear un entorno cohesionado."',
    author: {
      text: "Alberto Fernández Pérez - Hermano de Alejandro",
      href: "https://www.linkedin.com/in/alberto-fern%C3%A1ndez-p%C3%A9rez-16569b123/",
      target: "_blank"
    },
    company: {
      text: "Product Design Manager de INERTIM",
      href: "https://inertim.com/es/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:albfernandezperez@gmail.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person9.png",
      alt: "Alberto Fernández Pérez",
      width: 180
    }
  },
  //-- 6º Testimonio
  {
    text: '"Álex es una persona extrovertida y proactiva que suele tomar la iniciativa en planes con amigos o proyectos grupales. Además, es\
    ambicioso y perseverante porque busca mejorar y alcanzar nuevas metas. Aunque también, es divertido con su entorno cercano y creativo,\
    proponiendo ideas, solucionando problemas y en la visión de las cosas."',
    author: {
      text: "Juan Segura - Amigo de Alejandro",
      href: "https://www.linkedin.com/in/juansegura1998/?originalSubdomain=es",
      target: "_blank"
    },
    company: {
      text: "Software Engineer de Airbus Crisa",
      href: "https://www.crisa.airbus.com/en",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "https://www.instagram.com/juan_segura98/?hl=en",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person8.png",
      alt: "Juan Segura",
      width: 180
    }
  },
  //-- 7º Testimonio
  {
    text: '"Me tocó ser la supervisora de las Prácticas Curriculares de Alejandro y, puedo decir con certeza,\
    que es un excelente profesional, incluso un diez como persona. Siempre está dispuesto a todo,\
    incluso a ayudar a quién lo necesite. Él sabe que LCRcom es su casa."',
    author: {
      text: "Rita Bereczki",
      href: "https://www.linkedin.com/in/rita-bereczki-5b831344/",
      target: "_blank"
    },
    company: {
      text: "Responsable Operaciones y Soporte Técnico de LCRcom-Grupo Aire",
      href: "https://www.lcrcom.net/ya-puedes-consultar-tu-area-cliente-en-nuestra-web/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:rita.bereczki@lcrcom.es",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person1.png",
      alt: "Rita Bereczki",
      width: 180
    }
  },
  //-- 8º Testimonio
  {
    text: '"Cuando Alejandro realizó su Trabajo de Fin de Grado, fui su tutor.\
    De esa época recuerdo su entusiasmo sin límites, y su gran capacidad de\
    iniciar proyectos y llevarlos hasta el final. Tanto la idea, como la\
    mayor parte del desarrollo de su TFG fueron completamente suyos, y sólo\
    tuve que acompañarle en el camino."',
    author: {
      text: "Jesús M. G. Barahona",
      href: "https://www.linkedin.com/in/jgbarah/",
      target: "_blank"
    },
    company: {
      text: "Profesor de la URJC y Tutor de TFG de Alejandro",
      href: "https://www.urjc.es/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:jesus.gonzalez.barahona@urjc.es",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person13.png",
      alt: "Jesús M. G. Barahona",
      width: 180
    }
  },
  //-- 9º Testimonio
  {
    text: '"Álex siempre está dispuesto a ayudarte. Le encanta el cacharreo de los Hardware, incluso del software y la programación.\
    Le gusta ir más allá de la oferta en sí. Dejando el trabajo a un lado, es una persona que sabe divertirse y disfruta como se debe\
    (con cabeza obviamente). Buenas fiestas nos hemos echado Irene, Rafa, Miguel Ángel, él y yo."',
    author: {
      text: "Álvaro Contreras del Río",
      href: "https://www.linkedin.com/in/alvaro-contreras-a0588364/",
      target: "_blank"
    },
    company: {
      text: "AV Engineer de IOT and BD de Telefónica Tech",
      href: "https://telefonicatech.com/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:alvaro.contrerasdelrio@telefonica.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person7.png",
      alt: "Álvaro Contreras del Río",
      width: 180
    }
  },
  //-- 10º Testimonio
  {
    text: '"Es una gran persona y un estupendo compañero. Siempre se puede contar con él, es bastante trabajador,\
    es creativo e intenta crear buen ambiente en el equipo."',
    author: {
      text: "Pablo Álvarez",
      href: "https://www.linkedin.com/in/pabloaa/",
      target: "_blank"
    },
    company: {
      text: "Técnico de Routing e interconexión VoIP de LCRcom-Grupo Aire",
      href: "https://www.lcrcom.net/ya-puedes-consultar-tu-area-cliente-en-nuestra-web/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:pablo.a.a1986@gmail.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person6.png",
      alt: "Pablo Álvarez",
      width: 180
    }
  },
  //-- 11º Testimonio
  {
    text: '"Soy el supervisor de la parte de Corporate de IOT - Telefónica y, por tanto, de Alejandro.\
    He de decir, que salvo algún pequeño despiste que ha tenido, en general, es un trabajador que cumple con todas las ofertas que le llegan,\
    tiene iniciativa, es hábil de mente y frente a problemas que surgen, siempre tiene una salida."',
    author: {
      text: "Eduardo Saiz Colón",
      href: "https://www.linkedin.com/in/eduardo-saiz-col%C3%B3n-bb425310/",
      target: "_blank"
    },
    company: {
      text: "Project Manager PMP® de Preventa-Corporate IOT & Big Data de Telefónica Tech",
      href: "https://telefonicatech.com/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:eduardo.saizcolon@telefonica.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person5.png",
      alt: "Eduardo Saiz Colón",
      width: 180
    }
  },
  //-- 12º Testimonio
  {
    text: '"Conocí a Alejandro porque le di formaciones de la Meet IP. La verdad, es una persona muy perseverante e inteligente,\
    pone los cinco sentidos para enterarse bien y, también, le pone lógica e ingenio al problema que le surge."',
    author: {
      text: "Álvaro Salvador Guerra",
      href: "https://www.linkedin.com/in/alvaro-salvador-guerra-b08116a9/",
      target: "_blank"
    },
    company: {
      text: "Corporates training manager and presales engineer de LCRcom-Grupo Aire",
      href: "https://www.lcrcom.net/ya-puedes-consultar-tu-area-cliente-en-nuestra-web/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:alvaro.salvador@lcrcom.es",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person4.png",
      alt: "Álvaro Salvador Guerra",
      width: 180
    }
  },
  //-- 13º Testimonio
  {
    text: '"Un gran compañero, en quien se puede confiar y con quien se puede trabajar a gusto.\
    Sabe cuál es su función y si tiene que preguntar a los que llevamos más años que él en la empresa, pregunta sin tapujos."',
    author: {
      text: "Ruth García Noguera",
      href: "https://www.linkedin.com/in/ruthgarcianoguera/",
      target: "_blank"
    },
    company: {
      text: "Ingeniera AV de preventa de Telefónica Tech",
      href: "https://telefonicatech.com/",
      target: "_blank"
    },
    email: {
      text: "Contacto",
      href: "mailto:ruth.garcianoguera@telefonica.com",
      target: "_blank"
    },
    image: {
      src: "assets/testimonios/person3.png",
      alt: "Ruth García Noguera",
      width: 180
    }
  },
];

let quoteIndex = 0;

function renderQuote() {
  quoteText.textContent = quotes[quoteIndex].text;

  const link_Author = document.createElement("a");
  const link_Company = document.createElement("a");
  const link_Email = document.createElement("a");
  const link_Image = document.createElement("img");

  quoteAuthor.innerHTML = "";
  quoteCompany.innerHTML = "";
  quoteEmail.innerHTML = "";
  quoteImage.innerHTML = "";

  link_Author.href = quotes[quoteIndex].author.href;
  link_Author.textContent = quotes[quoteIndex].author.text;
  link_Author.target = quotes[quoteIndex].author.target;

  link_Company.href = quotes[quoteIndex].company.href;
  link_Company.textContent = quotes[quoteIndex].company.text;
  link_Company.target = quotes[quoteIndex].company.target;

  link_Email.href = quotes[quoteIndex].email.href;
  link_Email.textContent = quotes[quoteIndex].email.text;
  link_Email.target = quotes[quoteIndex].email.target;

  link_Image.src = quotes[quoteIndex].image.src;
  link_Image.alt = quotes[quoteIndex].image.alt;
  link_Image.width = quotes[quoteIndex].image.width;

  quoteAuthor.appendChild(link_Author);
  quoteCompany.appendChild(link_Company);
  quoteEmail.appendChild(link_Email);
  quoteImage.appendChild(link_Image);
}

function moveQuote(direction) {
  quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length;
  renderQuote();
}

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
});

menuToggle.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => header.classList.remove("nav-open"));
});

prevQuote.addEventListener("click", () => moveQuote(-1));
nextQuote.addEventListener("click", () => moveQuote(1));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

renderQuote();

if (window.lucide) {
  window.lucide.createIcons();
}