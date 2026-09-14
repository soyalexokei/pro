/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC1 = document.getElementById("mediaViewerC1");
const prevBtnC1 = document.getElementById("prevBtnC1");
const nextBtnC1 = document.getElementById("nextBtnC1");
const mediaIndexC1 = document.getElementById("mediaIndexC1");
const totalMediaC1 = document.getElementById("totalMediaC1");
const loaderC1 = document.getElementById("loader-c1");
let currentMediaC1 = 0;
let pendingImageC1 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC1 = {
  nombre: "Master: IA Generativa",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación IA Generativa</h3>
        <p><b>Organizado por:</b> <a href="https://maps.app.goo.gl/tEbeXXdMCEeExwJf8" target="_blank">EOI, Gregorio del Amo, 6, Moncloa - Aravaca, 28040 Madrid, España</a></p>
        <p><b>Lugar:</b> Online, a través de la plataforma <a href="https://campus.eoi.es/" target="_blank">Campus EOI</a></p>
        <p><b>Calendario:</b> Del miércoles 2 de octubre de 2024 al jueves 5 de diciembre de 2024</p>
        <p><b>Horario:</b> De lunes a viernes de 10:00 a 14:00</p>
        <p><b>Duración:</b> 220 h</p>
        <p><b>Ver título oficial:</b> <i class="fa fa-globe"></i><a href="IAgenerativaEOI.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo de la empresa</h3>
        <img src="logo_eoi.png"/>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Profesores:</b></p>
        <p>1. Raúl Ordóñez <a href="https://www.instagram.com/jaspeante/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://www.linkedin.com/in/raulordonez/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:hola@raulordonez.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://raulordonez.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.youtube.com/jasp" target="_blank"><i class="fa-brands fa-youtube"></i></a></p>
        <p>2. Javier Albelo <a href="https://www.linkedin.com/in/javier-albelo-45a89132/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="https://www.youtube.com/watch?v=us1CCu7eHis" target="_blank"><i class="fa-brands fa-youtube"></i></a></p>
        <p>3. Fran Bartolomé Valentín-Gamazo <a href="https://www.linkedin.com/in/franbvgamazo/?originalSubdomain=es" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:franbvg@proton.me" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://dayonerobot.com/" target="_blank"><i class="fa fa-globe"></i></a></p>
        <p>4. Yaye Cáceres <a href="https://www.linkedin.com/in/yayecaceres/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:yayecaceres@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://typeflowai.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.youtube.com/channel/UCwyCFDXrH-MbmUnN5myOwOA" target="_blank"><i class="fa-brands fa-youtube"></i></a></p>
        <p>5. Esperanza Noronha López <a href="https://www.linkedin.com/in/esperanzanoronhalopez/?originalSubdomain=es" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:espenoronha@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://esperanzanoronha.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.instagram.com/espenoronha/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://twitter.com/espenoronha" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15" height="15" fill="currentColor"><path d="M28.15 0H21.5l-3.9 7.5L13.6 0H7.35l6.7 12.3L6 24.25h6.65L18 17.5l5.35 6.75h6.85L22.95 12.3 28.15 0z"/></svg></a></p>
        <p>6. Efrén J. Rodríguez <a href="https://www.linkedin.com/in/efren-j-rodriguez/?trk=public_profile_samename-profile&originalSubdomain=es" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:efrenjrodriguez.edu@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://www.instagram.com/efrenjrodriguez/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://twitter.com/efrenjrodriguez" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15" height="15" fill="currentColor"><path d="M28.15 0H21.5l-3.9 7.5L13.6 0H7.35l6.7 12.3L6 24.25h6.65L18 17.5l5.35 6.75h6.85L22.95 12.3 28.15 0z"/></svg></a></p>
        <p>7. Pedro Martín Díaz <a href="https://www.linkedin.com/in/pedro-martin-diaz/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <a href="mailto:pedromartindiaz@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> <a href="https://pedromartindiaz.com/" target="_blank"><i class="fa fa-globe"></i></a> <a href="https://www.instagram.com/pedromartindiaz/" target="_blank"><i class="fa-brands fa-instagram"></i></a> <a href="https://twitter.com/pedrovisualeo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15" height="15" fill="currentColor"><path d="M28.15 0H21.5l-3.9 7.5L13.6 0H7.35l6.7 12.3L6 24.25h6.65L18 17.5l5.35 6.75h6.85L22.95 12.3 28.15 0z"/></svg></a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Contenido del curso:</b></p>
        <p>Módulo 1: <a href="CursoIA/Módulo1-Fundamentos-IA.pdf" target="_blank">Fundamentos de inteligencia artificial</a></p>
        <p>Módulo 2: <a href="CursoIA/Módulo2-Chatbots-y-Tecnicas-Prompting.pdf" target="_blank">Chatbots y técnicas de prompting</a></p>
        <p>Módulo 3.1: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte1.pdf" target="_blank">Generación y edición de imagen (Parte 1)</a></p>
        <p>Módulo 3.2: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte2.pdf" target="_blank">Generación y edición de imagen (Parte 2)</a></p>
        <p>Módulo 3.3: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte3.pdf" target="_blank">Generación y edición de imagen (Parte 3)</a></p>
        <p>Módulo 3.4: <a href="CursoIA/Modulo3-Generacion-Edicion-Imagen-parte4.pdf" target="_blank">Generación y edición de imagen (Parte 4)</a></p>
        <p>Módulo 4: <a href="CursoIA/Modulo4-Generacion-Edicion-Video.pdf" target="_blank">Generación y edición de vídeo</a></p>
        <p>Módulo 5: <a href="CursoIA/Modulo5-Generacion-Edición-Audio.pdf" target="_blank">Generación y edición de audio</a></p>
        <p>Módulo 6: <a href="CursoIA/Modulo6-Negocio-y-Marketing-con-IA.pdf" target="_blank">Negocio y marketing con IA</a></p>
        <p>Módulo 7.1: <a href="CursoIA/Modulo7-Productividad-IA-Parte1.pdf" target="_blank">Productividad con IA (Parte 1)</a></p>
        <p>Módulo 7.2: <a href="CursoIA/Modulo7-Productividad-IA-Parte2.pdf" target="_blank">Productividad con IA (Parte 2)</a></p>
        <p>Módulo 7.3: <a href="CursoIA/Modulo7-Productividad-IA-Parte3.pdf" target="_blank">Productividad con IA (Parte 3)</a></p>
        <p>Módulo 7.4: <a href="CursoIA/Modulo7-Productividad-IA-Parte4.pdf" target="_blank">Productividad con IA (Parte 4)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte1.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 1)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte2.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 2)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte3.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 3)</a></p>
        <p>Módulo Transversal: <a href="CursoIA/ModuloTransversal-Empleabilidad-Parte4.pdf" target="_blank">Empleabilidad y competencias digitales (Parte 4)</a></p>
        <p>Módulo 8.1: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte1.pdf" target="_blank">Ética y regulación de la IA (Parte 1)</a></p>
        <p>Módulo 8.2: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte2.pdf" target="_blank">Ética y regulación de la IA (Parte 2)</a></p>
        <p>Módulo 8.3: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte3.pdf" target="_blank">Ética y regulación de la IA (Parte 3)</a></p>
        <p>Módulo 8.4: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte4.pdf" target="_blank">Ética y regulación de la IA (Parte 4)</a></p>
        <p>Módulo 8.5: <a href="CursoIA/Modulo8-Etica-Regulacion-IA-Parte5.pdf" target="_blank">Ética y regulación de la IA (Parte 5)</a></p>
        <p>Módulo 9: <a href="CursoIA/Modulo9-Ecosistema-Copilot.pdf" target="_blank">Ecosistema Microsoft Copilot</a></p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Proyecto Final:</b> <i class="fa fa-globe"></i><a href="ProyectoIA-versionFinal.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>Presentación del Proyecto Final:</b> <i class="fa fa-globe"></i><a href="Presentacion-PFIA.pdf" target="_blank">Ver online</a><i class="fa fa-globe"></i></p>
        <p><b>ZIP de la Interfaz Web:</b> <i class="fa fa-download"></i><a href="hackAlearning.zip" target="_blank">Descargar</a><i class="fa fa-download"></i></p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Apuntes Web</h3>
        <p><b>¿Qué es un software con IA?:</b> Es un sistema informático que trata de imitar la inteligencia humana y el cerebro humano</p>
        <p><b>Conceptos fundamentales de la IA:</b></p>
        <ul>
          <p>1. DL, o también llamado Deep Learning, subcampo de la IA que utiliza redes neuronales artificiales con múltiples capas para "aprender" a realizar tareas complejas, procesar grandes cantidades de datos y extraer patrones complejos de estos</p>
          <p>2. ML, o también llamado Machine Learning, subcampo de la IA que permite a las máquinas aprender a partir de datos, sin ser programadas explícitamente para cada tarea, para que con esos datos y algoritmos proporcionados, ella misma encuentre patrones y tome decisiones.
          <p>Funcionamiento práctico: se quiere distinguir entre perros y gatos, por lo que el ML, lo que haría es, que en lugar de escribir un programa con todas las características de un perro y un gato, mostraría miles de imágenes de ambos animales, para así analizarlas y encontrar patrones comunes que permitan diferenciar entre una mascota y la otra</p>
          <p>Tipos: aprendizaje supervisado, no supervisado y por refuerzo. En el primero, se utilizan datos etiquetados para entrenar al modelo, ejemplo: cada imagen estaría etiquetada como "perro" o como "gato".
          En el segundo, se utilizan datos sin etiquetar para encontrar patrones ocultos, ejemplo: agrupar clientes en segmentos basados de las compras de los mismos.
          En el tercero, se aprende a tomar decisiones en un entorno a través de "prueba y error", recibiendo recompensas o penalizaciones por sus acciones</p>
          <p>APPs del ML: reconocimiento de imágenes, procesamiento del lenguaje natural, como traducciones o chatbots, sugerencia de productos o contenido personalizado,
          detección de fraudes y predicción de hechos</p>
          <p>Diferencias entre el ML y el DL: mientras que el DL es un subconjunto del ML que utiliza redes neuronales artificiales con múltiples capas para aprender representaciones jerárquicas de los datos, el ML es un término más amplio que abarca diferentes técnicas de aprendizaje automático</p>
          <p>3. PL, o también llamado Procesamiento del Lenguaje, subcampo de la IA que se enfoca en la interacción entre las computadoras y el lenguaje humano, es decir, su función es enseñar a las máquinas a comprender, interpretar y generar lenguaje humano de forma significativa y útil</p>
          <p>Técnicas que utiliza: la Tokenización, el análisis morfológico, el análisis sintáctico, el análisis semántico y el análisis pragmático. El primero se encarga de dividir el texto en unidades más pequeñas como palabras. El segundo se encarga
          de estudiar la estructura interna de las palabras. El tercero se encarga de analizar la estructura gramatical de las oraciones. El cuarto se encarga de entender el significado de las palabras y las frases. Y el último se encarga de comprender el contexto y la intención detrás del lenguaje</p>
        </ul>
        <img width="200px" src="GraficoDLMLPL.png"/>
      `
    },
    {
      type: "text",
      content:`
        <p><b>¿Qué es la técnica prompting?:</b></p>
        <p>Es la introducción de Prompts de entrada para que el modelo basado en IA te responda, de acuerdo a las condiciones del propio modelo y de las preestablecidas por el usuario</p>
        <p><b>¿Qué son los prompts?:</b></p>
        <p>Son instrucciones lo más adecuadas y coherentes que hay que dar al modelo de lenguaje basado en IA para poder interactuar con él y que lleve a cabo la respuesta lo más precisa posible. Cuanto más adecuado y coherente sea el Prompt, más precisa será la respuesta</p>
        <p><b>Uso de atajos en los prompts:</b></p>
        <ul>
          <p>1. <b>/"palabra"</b> => significa que quieres que la IA te diga lo qué es esa "palabra"</p>
          <p>2. <b>@</b> => sirve para que aparezca una lista de selección de submodelos dentro del modelo de lenguaje de IA</p>
          <p>3. <b>#Temperatura</b> => sirve para que la IA te dé respuestas de acuerdo a un nivel de creatividad bajo, medio o alto</p>
          <p>4. <b>#Estructura</b> => sirve para que la IA te dé respuestas de acuerdo a la estructura de: Inicio, Cuerpo (Nudo) y Conclusión (Desenlace)</p>
          <p>5. <b>One shot</b> => sirve para que la IA te dé un ejemplo en las respuestas</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>¿Qué es un Chatbot?:</b></p>
        <p>
          Es una interfaz basada en un Asistente Virtual generado por IA que sigue un conjunto de reglas predefinidas
          para que un usuario pueda interactuar con él, estableciendo una comunicación similar a la de un humano. Hay de
          todo tipo de ChatBots: Asistentes de médicos, de psicólogos, entre otras ramas laborales.
        </p>
        <p><b>Ejemplos de Chatbots:</b></p>
        <p>
          1. <b><a href="https://www.apple.com/es/siri/" target="_blank">Siri</a></b> =>
          Asistente Virtual desarrollado por Apple que utiliza IA para responder las preguntas de los usuarios,
          realizar acciones en dispositivos y ejecutar comandos mediante voz. Fue lanzado en 2011.<br><br>
          2. <b><a href="https://www.alexa.com/" target="_blank">Alexa</a></b> =>
          Asistente Virtual desarrollado por Amazon que utiliza IA, funciona a través
          de los dispositivos <i><b>Echo</b></i> y destaca por su integración con la Plataforma de Comercio
          Electrónico de Amazon. Fue lanzado en 2014 y es el más usado por los usuarios.<br><br>
          3. <b><a href="https://support.microsoft.com/es-es/topic/finalizaci%C3%B3n-del-soporte-para-cortana-d025b39f-ee5b-4836-a954-0ab646ee1efa" target="_blank">Cortana</a></b> =>
          Asistente Virtual desarrollado por Microsoft que utiliza IA, su nombre proviene de la serie de videojuegos Halo. Fue lanzado en 2014,
          pero actualmente, Microsoft le ha puesto fecha de fin.<br><br>
          4. <b><a href="https://assistant.google.com/intl/es_es/" target="_blank">Google Assistant</a></b> => 
          Asistente Virtual desarrollado por Google que utiliza IA, fue anunciado como parte del ecosistema Google Pixel.
          Actualmente, ha cambiado su nombre a <i><b>Gemini</b></i> y tiene la capacidad de hacer capturas de pantalla y
          reconocimiento inteligente de contenido. Fue lanzado en 2016.
        </p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Tipos de IA:</b></p>
        <ul>
          <p>
            1. <b>IA predictiva</b> => herramienta enfocada en analizar el pasado para predecir el futuro. Su uso consiste en
            predecir ventas o comportamientos de los clientes, detectar fraudes, predecir el valor de acciones en bolsa o predecir
            fallas en equipos industriales
          </p>
          <p>
            2. <b>IA generativa</b> => herramienta enfocada en crear algo nuevo y original a partir de lo que ya existe. Su uso consiste en
            generar textos, imágenes, música, vídeos, códigos de programación o diseños de productos en general
          </p>
          <p>
            3. <b>IA débil</b> => herramienta muy especializada y enfocada en tareas específicas que, simplemente sigue instrucciones
            y algoritmos para completar tareas. Ha sido y es la IA más común hasta ahora, destacando: Asistentes virtuales y Sistemas de recomendación de productos
          </p>
          <p>
            4. <b>IA fuerte</b> => herramienta que actúa como una mente humana, cuyo objetivo es ser capaz de aprender, comprender, razonar, adaptarse a cualquier situación,
            tener la máxima inteligencia posible, ser consciente de sí mismo y ser capaz de realizar cualquier tarea intelectual. Actualmente se ha avanzado mucho
            en el campo de la IA, pero esta herramienta en concreto, sigue siendo un objetivo a largo plazo y aún no se ha logrado todo su potencial
          </p>
        </ul>
        <p><b>Negocio y Marketing con IA:</b></p>
        <p>En toda marca o producto debe haber un eslogan, llevado a cabo en tres pasos:</p>
        <ul>
          <p>1. Saber qué producto tienes y quién es tu público objetivo</p>
          <p>2. Preparar un eslogan breve, llamativo y fácil de recordar, donde se refleje el valor del producto</p>
          <p>3. Resaltar su sostenibilidad, conexión con su público objetivo y otros aspectos importantes</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Productividad con IA:</b></p>
        <p>Presentación generada con IA sobre el Poder de la IA en la Gestión de Proyectos y la Mejora de la Productividad:</p>
        <iframe src="El Poder de la IA en la Gestión de Proyectos y la Mejora de la Productividad.pdf" width="600" height="400" frameborder="0"></iframe>
        <p>Ver vídeo generado con IA sobre el Poder de la IA en la Gestión de Proyectos y la Mejora de la Productividad:</p>
        <iframe src="https://streamable.com/e/s5bqdx" width="600" height="400" frameborder="0"></iframe>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Ética y regulación de la IA:</b></p>
        <p>
          La ética en la IA es muy importante porque dependiendo de las decisiones que se tomen, pueden ser beneficiosas o perjudiciales, justas o injustas, con alta aprobación o con baja. Por eso, hay que estar alerta del desarrollo de la IA
          en áreas sensibles, como la banca o la salud, ya que afectan directamente a las personas. Además, hay que tener en cuenta los sesgos de la IA, porque si se entrena con datos sesgados, puede perpetuar prejuicios. Para ello, debe haber transparencia,
          confianza y entender que la IA puede llegar a decidir en campos críticos, con el fin de crear un futuro de convivencia, con una IA
          cada vez más autónoma y estableciendo límites éticos, como el de beneficiencia y no maleficiencia, garantizando un uso adecuado de la IA, evitando daños.
          Por ejemplo: Un sistema de medicina con IA debería buscar siempre el beneficio del paciente y no causar daño, donde cualquier riesgo asociado debe ser claramente comunicado
        </p>
        <p><u>Dilema práctico:</u></p>
        <p>En una empresa son 60% hombres heterosexuales y 40% mujeres heterosexuales y quieren contratar una persona más. Los candidatos son:</p>
        <ul>
          <p>1. Un hombre heterosexual con un CV brillante, mucha experiencia laboral en el sector, con Licenciatura y Master</p>
          <p>2. Un hombre homosexual, con un poco de menos experiencia laboral y sólo licenciatura</p>
          <p>3. Un hombre trans sin estudios y con experiencia en otros sectores</p>
          <p>4. Una mujer únicamente con una licenciatura en otro sector diferente y experiencia laboral en otro sector también</p>
          <p>5. Un musulmán de Marruecos sin estudios pero con muchos años de experiencia en el sector</p>
        </ul>
        <p><u>Respuesta de la IA sobre quién contratar:</u></p>
        <p>
          La decisión sobre a quién contratar debe basarse en criterios objetivos y profesionales que alineen las necesidades de la empresa con las
          competencias y valores de los candidatos. A continuación, te proporciono un análisis para ayudarte a tomar una decisión bien fundamentada:
        </p>
        <p>
          <b>1. Definir los requisitos del puesto:</b> 
          Antes de tomar una decisión, es crucial detallar las competencias técnicas, habilidades blandas, experiencia, y formación necesarias para el puesto. Por ejemplo: ¿Qué habilidades específicas son imprescindibles?
          ¿Qué peso se le da a la experiencia, formación o adaptabilidad? ¿Cuáles son las metas estratégicas que debe cumplir esta nueva contratación?
        </p>
        <p>
          <b>2. Evaluación objetiva de los candidatos basándose en la información proporcionada:</b> 
          <ul>
            <p>- Hombre heterosexual (CV brillante, experiencia en el sector, Licenciatura y Máster) => este candidato parece encajar bien en el perfil
            técnico si los requisitos del puesto demandan altos niveles de experiencia y formación. Sin embargo, sería relevante evaluar su capacidad para integrarse en el equipo y aportar diversidad o nuevas perspectivas</p>
            <p>- Hombre homosexual (menos experiencia laboral, solo licenciatura) => aunque tiene menos experiencia y formación, puede aportar
            diversidad y, dependiendo del puesto, su adaptabilidad y valores podrían sumar a la dinámica de la empresa</p>
            <p>- Hombre trans (sin estudios y experiencia en otro sector) => este candidato podría destacarse si el puesto requiere flexibilidad, creatividad
            o habilidades transferibles, pero su falta de experiencia en el sector específico podría ser una desventaja en ciertos roles técnicos</p>
            <p>- Mujer (licenciatura y experiencia en otro sector) => podría ser una opción interesante si la empresa busca sumar una perspectiva femenina,
            adaptabilidad y habilidades transferibles. Sin embargo, la adecuación al sector sería importante de evaluar</p>
            <p>- Musulmán marroquí (sin estudios, experiencia en el sector) => a pesar de la falta de estudios, su experiencia práctica en el sector puede
            hacerlo un candidato fuerte si las competencias técnicas adquiridas son clave para el puesto</p>
          </ul>
        </p>
        <p>
          <b>3. Consideraciones adicionales:</b>
          <ul>
            <p>- Diversidad e inclusión => la diversidad no solo es ética, sino también estratégica. Equipos diversos tienden a ser más innovadores
            y creativos. Contratar a alguien que represente una perspectiva diferente (género, orientación sexual, cultura, etc.) puede ser
            una oportunidad de enriquecer el equipo</p>
            <p>- Capacidad de desarrollo => más allá de las calificaciones actuales, es clave evaluar el potencial de cada candidato para aprender y
            crecer dentro de la empresa</p>
            <p>- Alineación con la cultura empresarial: ¿Quién se adapta mejor a los valores y la dinámica del equipo? Pues dependiendo de si el puesto
            requiere experiencia técnica específica y la prioridad es el rendimiento inmediato, en este caso, el hombre heterosexual con CV
            brillante parece la opción más preparada. Pero si la empresa está buscando equilibrar las dinámicas de diversidad o apostar por el desarrollo de
            talento, consideraría al hombre homosexual o al musulmán marroquí (por experiencia en el sector). Aunque también podría darse que la prioridad
            estuviera en las habilidades transferibles o perspectivas diversas, en cuyo caso, la mujer o el hombre trans podrían aportar un
            valor inesperado y a largo plazo. En conclusión, elige a quien mejor equilibre aptitudes técnicas, adaptabilidad, y contribución a la cultura empresarial</p>
          </ul>
        </p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Políticas de Privacidad reales:</b></p>
        <p>Caso de la empresa estadounidense <a href="https://about.fb.com/ltam/news/2022/05/esto-es-lo-que-debes-saber-sobre-nuestra-politica-de-privacidad-actualizada-y-nuestras-condiciones-del-servicio/" target="_blank" class="otros-enlaces">Meta</a></p>
        <p>Caso de la empresa china <a href="https://www.tiktok.com/legal/page/eea/terms-of-service/es" target="_blank" class="otros-enlaces">TikTok</a></p>
        <p>Caso de la empresa estadounidense <a href="https://policies.google.com/terms" target="_blank" class="otros-enlaces">Google</a></p>
        <p>Caso de la nueva <a href="https://artificialintelligenceact.eu/high-level-summary/" target="_blank" class="otros-enlaces">Ley de la Unión Europea de 2023</a> sobre la Regulación de la IA</p>
      `
    },
    {
      type: "text",
      content:`
        <p><b>Herramientas IA actuales:</b></p>
        <ul>
          <p>1. <b><a href="https://notebooklm.google/" target="_blank">Notebook LM</a></b> => herramienta de Google que utiliza la IA (Inteligencia Artificial) generativa para mejorar la experiencia de tomar notas</p>
          <p>2. <b><a href="https://www.notion.so/ca21f6e555264fa191cfdb2ef5a8c337" target="_blank">Notion AI</a></b> => herramienta que utiliza la IA (Inteligencia Artificial) generativa para generar y organizar datos. Fue originado en EE.UU por la empresa tecnológica Notion Labs Inc, fundada por Ivan Zhao y Simon Last, en 2013</p>
          <p>3. <b><a href="https://deepmind.google/" target="_blank">Google Deep Mind</a></b> => herramienta que desarrolla juegos con IA</p>
          <p>4. <b><a href="https://chatgpt.com/" target="_blank">ChatGPT</a> (de 01-mini a 05)</b> => modelo de lenguaje de inteligencia artificial (IA), o chat transformador preentrenado generativo, basado en un chatbot muy avanzado que puede mantener conversaciones coherentes y naturales con humanos, gracias a previas fuentes proveniente de: vídeos, bases de datos y/o enciclopedias. Está desarrollado por OpenAI</p>
          <p>5. <b><a href="https://gemini.google.com/app?hl=es-ES" target="_blank">Gemini AI</a></b> => modelo de lenguaje de inteligencia artificial (IA) desarrollado por Google</p>
          <p>6. <b><a href="https://x.ai/" target="_blank">Grok AI</a></b> => modelo de lenguaje de inteligencia artificial (IA) desarrollado por Elon Musk y X (Twitter anteriormente)</p>
          <p>7. <b><a href="https://www.flux.ai/p" target="_blank">Flux AI</a></b> => modelo de lenguaje de inteligencia artificial (IA) desarrollado por Black Forest Labs</p>
          <p>8. <b><a href="https://www.adobe.com/es/products/firefly.html" target="_blank">Adobe Firefly AI</a></b> => modelo de lenguaje de inteligencia artificial (IA) desarrollado por Adobe</p>
          <p>9. <b><a href="https://claude.ai/login?returnTo=%2F%3F" target="_blank">Claude AI</a></b> => modelo de lenguaje de inteligencia artificial (IA) desarrollado por Anthropic</p>
          <p>10. <b><a href="https://www.perplexity.ai/" target="_blank">Perplexity AI</a></b> => modelo de lenguaje de inteligencia artificial (IA) desarrollado por Wayra y financiado por Telefónica</p>
          <p>11. <b><a href="https://replicate.com/" target="_blank">Replicate</a></b> => es una plataforma donde se permite ejecutar modelos de inteligencia artificial (IA) preentrenado en la nube, ofreciendo una gran variedad de tipos distintos. Es decir, es una especie de <i>repositorio de modelos</i> de IA, en el cual los usuarios pueden elegir el modelo que necesiten para tareas específicas. Fue desarrollado por dos exingenieros de GitHub: Ben Firshman y Andreas Jansson</p>
          <p>12. <b><a href="https://huggingface.co/" target="_blank">Hugging Face</a></b> => es una plataforma donde albergar modelos de inteligencia artificial (IA). Fue desarrollado en 2016 por Clément Delangue, Julien Chaumond, y Thomas Wolf, tres emprendedores franceses apasionados por la inteligencia artificial (IA) y el procesamiento del lenguaje natural (NLP)</p>
          <p>13. <b><a href="https://www.chatbase.co/" target="_blank">Chatbase</a></b> => es una herramienta de creación y entrenamiento de ChatBots con IA, desarrollada por OpenAI, con el objetivo de que se desarrollen lo más eficaces posibles</p>
          <p>14. <b><a href="https://copilot.microsoft.com/chats/39YwrA1HQqKmWXd93rUWG" target="_blank">Copilot</a></b> => modelo de lenguaje de inteligencia artificial (IA) para aumentar la productividad y creatividad, desarrollado por Microsoft</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <ul>
          <p>15. <b>Dali AI <a href="https://openai.com/index/dall-e-2/" target="_blank">E2</a> y <a href="https://openai.com/index/dall-e-3/" target="_blank">E3</a></b> => 
          herramienta de Open AI que utiliza la IA (Inteligencia Artificial) generativa para generar imágenes</p>
          <p>16. <b><a href="https://openai.com/index/sora/" target="_blank">Sora AI</a></b> => herramienta de Open AI que utiliza la IA (Inteligencia Artificial) generativa
          para generar imágenes</p>
          <p>17. <b><a href="https://deepdreamgenerator.com/" target="_blank">Deep Dream AI</a></b> => herramienta de Google que utiliza la IA (Inteligencia Artificial)
          generativa para generar imágenes</p>
          <p>18. <b><a href="https://lexica.art/" target="_blank">Lexica.ART</a></b> => herramienta que utiliza la IA (Inteligencia Artificial)
          generativa para generar imágenes, desarrollado por Sharif Shameem</p>
          <p>19. <b><a href="https://www.midjourney.com/home" target="_blank">Midjourney.COM</a></b> => herramienta que utiliza la IA (Inteligencia Artificial)
          generativa para generar imágenes, desarrollado por David Holz</p>
          <p>20. <b><a href="https://thispersondoesnotexist.com/" target="_blank">ThisPersonDoesNotExist random AI</a></b> => herramienta que utiliza la IA (Inteligencia Artificial) generativa para generar personas humanas aleatorias y no existentes al actualizar la página web. Desarrollado por el ingeniero Philip Wang en 2019</p>
          <p>21. <b><a href="https://app.artflow.ai/character-builder" target="_blank">Artflow AI</a></b> => herramienta que utiliza la IA (Inteligencia Artificial) generativa para generar imágenes mejoradas a partir de 5 imágenes de una persona humana</p>
          <p>22. <b><a href="https://aiselfi.es/" target="_blank">AI Selfie</a></b> => herramienta que utiliza la IA (Inteligencia Artificial) generativa para convertir <q>selfies</q> en fotos profesionales</p>
          <p>23. <b><a href="https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.17424&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false" target="_blank">TensorFlow</a></b> => es un software práctico de una Red Neuronal</p>
          <p>24. <b><a href="https://klingai.com/" target="_blank">Kling AI</a></b> => herramienta para generar vídeos, transformando texto/prompt en videos realistas de alta calidad y de duración de hasta 2 minutos, con resoluciones de hasta 1080p, escena de cámara y la posibilidad de realizar algunos ajustes extra</p>
          <p>25. <b><a href="https://invideo.io/" target="_blank">Invideo AI</a></b> => herramienta para generar y editar vídeos profesionales de manera rápida y sencilla</p>
          <p>26. <b><a href="https://www.heygen.com/" target="_blank">Heygen AI</a></b> => herramienta para generar y editar vídeos profesionales para facilitar la creación de contenido audiovisual</p>
          <p>27. <b><a href="https://aiapp-es.vidnoz.com/" target="_blank">Vidnoz AI</a></b> => herramienta para generar y editar vídeos profesionales con personas humanas muy reales. Haciendo que la experiencia de usuario sea muy satisfactoria</p>
          <p>28. <b><a href="https://suno.com/" target="_blank">Suno AI</a></b> => herramienta de IA generativa para generar canciones y pistas de audio personalizadas y adaptadas a diferentes géneros musicales y preferencias del usuario</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <ul>
          <p>29. <b><a href="https://www.udio.com/" target="_blank">Udio AI</a></b> => herramienta de IA generativa para generar canciones y pistas de audio personalizadas y adaptadas a diferentes géneros musicales y preferencias del usuario</p>
          <p>30. <b><a href="https://elevenlabs.io/" target="_blank">ElevenLabs</a></b> => herramienta de IA generativa para generar locuciones a partir de ajustes tipo:</p>
          <ul>
            <p>1. <b>Model</b>: el modelo que quieres usar para que se ejecute la locución, es decir, la elección del locutor o voz clonada, de acuerdo al idioma, acento y tipo de locución</p>
            <p>2. <b>Stability</b>: el nivel de emoción en el discurso, es decir, a más nivel, más alegría, a menos nivel, más seriedad</p>
            <p>3. <b>Similarity</b>: la precisión de la voz clonada o locutor elegido imitando al original</p>
            <p>4. <b>Style exaggeration</b>: el nivel de exageración de los matices de la voz</p>
            <p>5. <b>Speaker boost</b>: la intensidad y el volumen de la voz</p>
          </ul>
          <p>31. <b><a href="https://podcast.adobe.com/" target="_blank">Adobe Podcast</a></b> => herramienta de IA generativa para generar podcasts</p>
          <p>32. <b><a href="https://www.cursor.com/" target="_blank">Cursor AI</a></b> => herramienta basada en Visual Studio Code que utiliza la IA generativa para generar código de programación tipo JavaScript, TypeScript, Python, entre otros, con el objetivo de crear un BackEnd</p>
          <p>33. <b><a href="https://tailwindui.com/templates/spotlight" target="_blank">TailWind AI</a></b> => herramienta que utiliza la IA generativa para generar código de programación tipo HTML, PHP, CSS, entre otros, con el objetivo de crear un FrontEnd</p>
          <p>34. <b><a href="https://zapier.com/" target="_blank">_zapier</a></b> => herramienta que utiliza la IA generativa para generar código de programación con el objetivo de crear un BackEnd y de desarrollar un chatbot con Open AI, al estilo chatbase</p>
          <p>35. <b><a href="https://miniapps.ai/Clot" target="_blank">Clot AI</a></b> => modelo de lenguaje de IA desarrollado por Anthropic para la resolución de problemas matemáticos</p>
          <p>36. <b><a href="https://gamma.app/" target="_blank">Gamma AI</a></b> => herramienta que utiliza la IA generativa para generar presentaciones, documentos, blogs y páginas web estáticas</p>
          <p>37. <b><a href="https://www.napkin.ai/" target="_blank">Napkin AI</a></b> => herramienta que utiliza la IA generativa para generar presentaciones, storytellings, diagramas de bloques y de otros tipos y, la opción de dibujar con lápiz táctil</p>
        </ul>
      `
    },
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC1() {
  loaderC1.style.display = "block";
  viewerC1.style.display = "none";
}

function ocultarLoaderC1() {
  loaderC1.style.display = "none";
}

function cargarImagenC1(url) {
  if (!url) {
    viewerC1.innerHTML = "";
    viewerC1.style.display = "none";
    ocultarLoaderC1();
    return;
  }

  mostrarLoaderC1();

  const img = new Image();
  pendingImageC1 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC1 !== img) return;

    viewerC1.innerHTML = "";
    viewerC1.appendChild(img);

    viewerC1.style.display = "block";
    ocultarLoaderC1();

    pendingImageC1 = null;
  };

  img.onerror = () => {
    if (pendingImageC1 !== img) return;

    viewerC1.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC1.style.display = "block";
    ocultarLoaderC1();

    pendingImageC1 = null;
  };

  img.src = url;
}

function renderMediaC1() {
  const media = certificadoC1.medios[currentMediaC1];
  viewerC1.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC1(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC1();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC1.style.display = "block";
    viewerC1.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC1.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC1.value=currentMediaC1+1;
  totalMediaC1.textContent = certificadoC1.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC1.addEventListener("click", () => {
  currentMediaC1++;
  if(currentMediaC1 >= certificadoC1.medios.length) {
    currentMediaC1=0;
  }
  renderMediaC1();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC1.addEventListener("click",()=>{
  currentMediaC1--;
  if(currentMediaC1 < 0) {
    currentMediaC1 = certificadoC1.medios.length-1;
  }
  renderMediaC1();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC1.addEventListener("change", () => {
  const value=Number(mediaIndexC1.value);
  if(value>=1 && value<=certificadoC1.medios.length) {
    currentMediaC1=value-1;
    renderMediaC1();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC1.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC1.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC1();