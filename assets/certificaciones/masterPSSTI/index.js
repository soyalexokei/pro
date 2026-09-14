/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC2 = document.getElementById("mediaViewerC2");
const prevBtnC2 = document.getElementById("prevBtnC2");
const nextBtnC2 = document.getElementById("nextBtnC2");
const mediaIndexC2 = document.getElementById("mediaIndexC2");
const totalMediaC2 = document.getElementById("totalMediaC2");
const loaderC2 = document.getElementById("loader-c2");
let currentMediaC2 = 0;
let pendingImageC2 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC2 = {
  nombre: "Master: PSS-TI",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación del Talent Campus de PSS-TI</h3>
        <p><b>Objetivo:</b> <a href="https://www.accenture.com/es-es" target="_blank">Obtención de un puesto de ingeniero de sistemas en Accenture</a></p>
        <p><b>Duración del Talent:</b> Marzo - Mayo 2025</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="Talent-Campus-PSSTI.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Práctica de ejemplo de CICS:</b> <i class="fa fa-globe"></i><a href="lab-CICS.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Apuntes Web</h3>
        <p><b>¿Qué es el Sistema Z de IBM?:</b></p>
        <p>
          Es un conjunto de Mainframes o servidores de datos encargados de procesar transacciones a gran escala y
          de ejecutar aplicaciones críticas. Nació en 1964 y fue desarrollado por la empresa estadounidense de IBM
        </p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Características del Sistema Z de IBM:</b></p>
        <ul>
          <p>1. Alta seguridad, ofreciendo cifrado de datos en tiempo real a nivel de hardware, con CryptoExpress y CPACF</p>
          <p>
            2. Escalabilidad y rendimiento, procesando millones de transacciones por día y siendo capaz de ejecutar
            simultáneamente miles de aplicaciones bajo diferentes cargas de trabajo OLTP o Batch Processing (procesamiento por lotes) que,
            no pueden permitirse fallos, pérdidas de datos o tiempos de espera.
          </p>
          <p>
            3. Alta disponibilidad, funcionando con una disponibilidad cercana al 100% y soportando operaciones ininterrumpidas, incluso durante mantenimiento y actualizaciones
          </p>
          <p>4. Virtualización, contenedores y microservicios, ejecutando varios Sistemas Operativos al mismo tiempo y ofreciendo virtualización de recursos</p>
          <p>5. Compatibilidad con Linux, Kubernetes y Docker</p>
          <p>6. Capacidades de multiprogramación y multiprocesamiento, siendo capaz de ejecutar varios programas a la vez</p>
          <p>7. Capacidad de dar soporte a miles de usuarios simultáneos</p>
          <p>8. Importancia histórica y empresarial</p>
          <p>9. Fiabilidad y estabilidad</p>
          <p>10. Capacidad de desarrollar operaciones de E/S</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Usos del Sistema Z de IBM:</b></p>
        <ul>
          <p>1. Bancos, para procesar millones de transacciones diarias</p>
          <p>2. Aerolíneas, para gestionar reservas y sistemas de embarque en tiempo real</p>
          <p>3. Gobiernos, para gestionar los sistemas de la administración</p>
          <p>4. Ventas, comercio y logística, para llevar a cabo la trazabilidad y la facturación a gran escala</p>
          <p>5. La integración con sistemas modernos y APIs</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Tipos del Sistema Z de IBM:</b></p>
        <ul>
          <p>1. z9 EC (2005), es el primer escalado a nivel de sistema. Rendimiento de 1.7 GHz</p>
          <p>2. z10 EC (2008), es el primero con núcleo de alta frecuencia y caché a 3 niveles. Rendimiento de 4.4 GHz</p>
          <p>3. z196 (2010), incluye caché eDRAM, memoria RAIM e integración zBX. Rendimiento de 5.2 GHz</p>
          <p>4. zEC12 (2012), centrado en mejorar la caché y en extender la arquitectura para ser más escalable. Rendimiento de 5.5 GHz</p>
          <p>
            5. z13 (2015), centrado en analítica en tiempo real y movilidad. Rendimiento de 5.0 GHz, pero más potente, consiguiendo a partir de entonces
            en adelante, más potencia con menos rendimiento/GHz
          </p>
          <p>6. z14 (2017), incluye cifrado total de datos o <i>pervasive encryption</i>. Rendimiento de 5.2 GHz</p>
          <p>7. z15 (2019), enfocado en nube híbrida y privacidad de datos. Rendimiento de 5.2 GHz</p>
          <p>8. z16 (2022), es el primer Mainframe con IA integrada acelerada por hardware. Rendimiento de 5.2 GHz. Aparición del Telum II como procesador</p>
          <p>9. z17 (2025), orientado a IA generativa, aceleración cuántica y seguridad Zero Trust</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Composición de la Arquitectura Hardware del Sistema Z de IBM:</b></p>
        <ul>
          <p>
            1. Dos o cuatro switches internos que interconectan:
            <ul>
              <p>1. Los <i>Drawers</i>/<i>Frames</i>/Módulos de procesadores</p>
              <p>2. El hardware de soporte</p>
              <p>3. Los canales de E/S en modo dúplex que pueden ser de tres tipos:</p>
              <ul>
                <p>A) CSS, canal que delega cuando detecta alguna E/S</p>
                <p>B) LCSS, canal virtual lógico</p>
                <p>C) PR/SM, virtualizador del hardware</p>
              </ul>
            </ul>
          </p>
          <p>2. Un procesador central que contiene hasta 4 chips Telum con 8 núcleos físicos cada uno</p>
          <p>
            3. Hasta seis procesadores físicos y distribuidos, si la configuración del procesador central es <i>Multi-drawer</i>, para mayor escalabilidad.
            Si los seis están activos (6de6), asignados a una partición lógica (LPAR) y disponibles para su procesamiento, tienen una Latencia
            menor o igual a 18 microsegundos (L <= 18 microseg)
          </p>
          <p>
            4. Hasta dos elementos de soporte o terminales locales embebidos que permiten gestionar IPLs, supervisar el estado del sistema y
            realizar tareas de diagnóstico y actualización
          </p>
          <p>5. Direccionamiento basado en 64 bits</p>
          <p>
            6. Subsistemas de canal de E/S, como OSA (Adaptador de sistemas abiertos) y FICON, para conectar el sistema con
            dispositivos DASD para almacenamiento y redes TCP/IP de alta velocidad
          </p>
          <p>
            7. Un software de gestión de hardware basado en consola (HMC) para controlar la creación y administración de particiones lógicas (LPARs), la ejecución de IPLs,
            la supervisión de logs y alertas y, la gestión de seguridad y actualizaciones
          </p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Procesadores del Sistema Z de IBM:</b></p>
        <ul>
          <p>1. CP (Central Processor): se encarga de ejecutar el núcleo del sistema operativo z/OS y la mayoría de las aplicaciones generales</p>
          <p>2. IFL (Integrated Facility for Linux): se encarga de ejecutar exclusivamente sistemas Linux sobre z/VM o KVM</p>
          <p>3. zIIP (z Integrated Information Processor): se encarga de acelerar cargas específicas como consultas Db2, Java, cifrado XML e IPsec</p>
          <p>4. zAAP (z Application Assist Processor): siempre se ha dedicado a Java, pero ya es obsoleto. Su funcionalidad fue absorbida por zIIP</p>
          <p>5. SAP (System Assist Processor): se encarga de ejecutar operaciones de E/S sin intervención del CP</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Sistemas Operativos del Sistema Z de IBM:</b></p>
        <ul>
          <p>
            1. El z/OS, o también conocido como MVS, es el Sistema Operativo principal, con alta disponibilidad, seguridad, escalabilidad,
            capacidades avanzadas de virtualización y orientado a cargas de trabajo críticas Batch Processing (procesamiento por lotes) y online.
            Su software interactivo es el TSO, basado en paneles.
          </p>
          <p>
            2. El z/VM, es un Sistema Operativo que permite la creación y gestión de múltiples máquinas virtuales, donde se ejecutan distintos Sistemas Operativos
            simultáneamente.
          </p>
          <p>
            3. El z/VSE, es un Sistema Operativo ligero, pensado para entornos empresariales de menor tamaño que, requieren alta fiabilidad,
            pero menor complejidad. No cuenta con DB2, sino otro parecido. Sí cuenta con MQ y CICS.
          </p>
          <p>
            4. El z/TPF, es un Sistema Operativo optimizado para el procesamiento ultra rápido de transacciones de alta frecuencia, usado en sectores como
            aerolíneas y banca. Se usa mucho en Francia.
          </p>
          <p>
            5. Linux on Z, son implementaciones de Linux adaptadas al Sistema Z de IBM, combinando la robustez del Mainframe,
            con la flexibilidad del software abierto.
          </p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Sistema Operativo de z/OS:</b></p>
        <img src="zOS.png"/>
      `
    },
    {
      type: "text",
      content:`
        <p>Se estructura en cinco capas o niveles funcionales:</p>
        <ul>
          <p>
            1. <u>La Interacción Hardware</u> => es la base física que controla el hardware del Sistema Z e incluye la gestión de memoria,
            los dispositivos de E/S, los tipos de canales y las particiones LPARs
          </p>
          <p>
            2. <u>El Core Services</u> => son los servicios básicos del sistema operativo, como: la gestión de procesos y tareas (TCB),
            la gestión de memoria (como la paginación o el direccionamiento virtual), la gestión de almacenamiento en ficheros (como los Datasets, VSAMs o zFS),
            la planificación de los JOBs del JES2 (se utiliza 2 porque el 1 está desaparecido y el 3 va a desaparecer), el sistema de
            ficheros (como el MVS, zFS o HFS) y la seguridad RACF
          </p>
          <p>
            3. <u>Los Middleware y Servicios de Plataforma</u> => son los programas o softwares que conectan las aplicaciones con el
            sistema operativo, es decir, los que se encargan de ser intermediarios entre el sistema final y el usuario. Tipos de Middleware:
            <ul>
              <p>1. CICS => es el gestor de transacciones online</p>
              <p>2. IMS => es el sistema de gestión de información</p>
              <p>3. DB2 => es la base de datos relacional</p>
              <p>4. WebSphere Application Server => es el servidor de aplicaciones Java EE</p>
              <p>5. MQ => es la mensajería empresarial</p>
            </ul>
          </p>
          <p>
            4. Las Aplicaciones o Lenguajes de Programación => son aquéllos desarrollados por usuarios o empresas. Tipos:
            <ul>
              <p>1. Cobol.</p>
              <p>2. Java.</p>
              <p>3. Assembler.</p>
              <p>4. REXX.</p>
              <p>5. C</p>
              <p>6. PHP</p>
              <p>7. JCICS</p>
            </ul>
          </p>
          <p>
            5. Las Interfaces de Usuario => son modos de visualización para que los usuarios y los administradores interactúen con el sistema. Tipos:
            <ul>
              <p>1. TSO/E => es una interfaz de línea de comandos, donde los usuarios ejecutan comandos y programas directamente desde terminales interactivos</p>
              <p>
                2. ISPF => es una interfaz de paneles de menús y de texto estructurado sobre TSO/E, que cuenta con TCB o registros de control para saber
                quien está ejecutando en el sistema
              </p>
              <p>
                3. USS (UNIX System Services) => es un entorno de UNIX dentro de z/OS que ofrece una experiencia <i>Shell</i> similar a la de sistemas UNIX tradicionales.
                Hay dos tipos de comandos: ishell y omvs. El primero, abre un menú para explorar el sistema UNIX. El segundo, abre una sesión de línea de comandos tipo <i>Shell</i>
              </p>
              <p>
                4. SDSF => es una herramienta integrada en z/OS que permite ver, gestionar y controlar los Jobs que se ejecutan en el sistema para
                monitorizar recursos y rendimiento. Se accede escribiendo <i>S</i> a través del ISPF
              </p>
              <p>
                5. z/OSMF => es una plataforma de gestión web integrada en z/OS que permite a los administradores y operadores
                gestionar y configurar el sistema z/OS de forma moderna, visual e intuitiva, sin necesidad de usar
                la línea de comandos de TSO, los paneles de ISPF o los comandos 3270
              </p>
            </ul>
          </p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>La Inteligencia Artificial de IBM:</b></p>
        <ul>
          <p><u>Nombre:</u> Watson AI</p>
          <p><u>Funcionamiento:</u> es una combinación de técnicas de procesamiento del lenguaje natural, aprendizaje automático, razonamiento y una gran base de conocimientos para entender preguntas complejas y encontrar respuestas relevantes</p>
          <p>
            <u>Componentes:</u>
            <ul>
              <p>1. watsonx.ai: para implementar modelos de IA</p>
              <p>2. watsonx.data: para almacenar datos</p>
              <p>3. watsonx.governance: para gestionar flujos de trabajo</p>
            </ul>
          </p>
        </ul>
        <img src="ia_ibm.png"/>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Almacenamiento de datos en z/OS:</b></p>
        <ul>
          <p>
            ¿Qué es un DataSet (DS)?: Es un conjunto de datos o fichero utilizado en z/OS para almacenar y gestionar datos. Se compone de registros (PSWs) que estan divididos en campos
            y cada uno de ellos contiene datos, como caracteres. Cada carácter se posiciona en un campo. Varios registros pueden formar bloques de registros.
            Un bloque es lo que se transfiere en cada operación de E/S
          </p>
          <p>
            Tipos de DataSets:
            <ul>
              <p>A) PS => Fichero secuencial => son registros almacenados uno tras otro, con acceso secuencial</p>
              <p>
                B) PDS => Fichero particionado => se compone de directorio y miembros, es decir, de ficheros dentro de una carpeta.
                Cada miembro es un fichero secuencial. Si borras uno de ellos, su espacio se queda borrado y sin poder volver a utilizarse
              </p>
              <p>
                C) PDSE => Fichero particionado extendido => es una versión avanzada del PDS, reutilizando el espacio automáticamente,
                permitiendo más extensiones y sin necesidad de compresión manual. Una diferencia importante con el PDS es que la parte de
                los bloques de directorio máximo es <i>No limit</i>
              </p>
              <p>
                D) VSAM => Estructuras que actúan como método de acceso optimizado para almacenamiento en sistemas con memoria virtual.
                Su objetivo es mejorar el rendimiento del acceso a datos de los ficheros PS. Para ello, usa técnicas de indexación,
                acceso directo y almacenamiento eficiente. Cuenta con cuatro tipos:
                <ul>
                  <p>- KSDS => usa una clave para acceso directo</p>
                  <p>- LDS => mete datos en una base de datos de db2</p>
                  <p>- ESDS => equivale a un secuencial, pero de VSAM</p>
                  <p>- RRDS => accede eficientemente por número relativo de registro</p>
                </ul>
              </p>
            </ul>
          </p>
        </ul>
      `
    },
    {type: "image", src: "creacionDS-1.png"},
    {type: "image", src: "creacionDS-2.png"}
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC2() {
  loaderC2.style.display = "block";
  viewerC2.style.display = "none";
}

function ocultarLoaderC2() {
  loaderC2.style.display = "none";
}

function cargarImagenC2(url) {
  if (!url) {
    viewerC2.innerHTML = "";
    viewerC2.style.display = "none";
    ocultarLoaderC2();
    return;
  }

  mostrarLoaderC2();

  const img = new Image();
  pendingImageC2 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC2 !== img) return;

    viewerC2.innerHTML = "";
    viewerC2.appendChild(img);

    viewerC2.style.display = "block";
    ocultarLoaderC2();

    pendingImageC2 = null;
  };

  img.onerror = () => {
    if (pendingImageC2 !== img) return;

    viewerC2.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC2.style.display = "block";
    ocultarLoaderC2();

    pendingImageC2 = null;
  };

  img.src = url;
}

function renderMediaC2() {
  const media = certificadoC2.medios[currentMediaC2];
  viewerC2.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC2(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC2();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC2.style.display = "block";
    viewerC2.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC2.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC2.value=currentMediaC2+1;
  totalMediaC2.textContent = certificadoC2.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC2.addEventListener("click", () => {
  currentMediaC2++;
  if(currentMediaC2 >= certificadoC2.medios.length) {
    currentMediaC2=0;
  }
  renderMediaC2();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC2.addEventListener("click",()=>{
  currentMediaC2--;
  if(currentMediaC2 < 0) {
    currentMediaC2 = certificadoC2.medios.length-1;
  }
  renderMediaC2();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC2.addEventListener("change", () => {
  const value=Number(mediaIndexC2.value);
  if(value>=1 && value<=certificadoC2.medios.length) {
    currentMediaC2=value-1;
    renderMediaC2();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC2.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC2.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC2();