/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC15 = document.getElementById("mediaViewerC15");
const prevBtnC15 = document.getElementById("prevBtnC15");
const nextBtnC15 = document.getElementById("nextBtnC15");
const mediaIndexC15 = document.getElementById("mediaIndexC15");
const totalMediaC15 = document.getElementById("totalMediaC15");
const loaderC15 = document.getElementById("loader-c15");
let currentMediaC15 = 0;
let pendingImageC15 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC15 = {
  nombre: "Certificado: A1 de serbio",
  medios: [
    {
      type: "text",
      content:`
        <h3>Certificación A1 de serbio</h3>
        <p><b>Por medio de:</b> <a href="https://www.uns.ac.rs/index.php/en/" target="_blank">Universidad de Novi Sad</a></p>
        <p><b>Modo del curso:</b> Presencial</p>
        <p><b>Periodo del curso:</b> 02/2022 - 07/2022</p>
        <p>
          <b>Historial de la obtención del Nivel A1:</b> Mientras estuve de Erasmus+ en Novi Sad (Serbia) de febrero 2022 a julio 2022, hice un curso del nivel A1 para conocer el idioma local,
          aunque el idioma principal durante mi estancia era el inglés principalmente
        </p>
      `
    },
    {
      type: "text",
      content:`
        <h3>Logo del certificado</h3>
        <img src="logo_A1_serbio.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Vocabulario y expresiones del serbio</h3>
        <table>
          <!-- Expresiones -->
          <tr>
            <th>Pronunciación para hispanos</th>
            <th>Traducción en Español</th>
          </tr>
          <tr>
            <td>/dobro iutro/</td>
            <td>buenos días</td>
          </tr>
          <tr>
            <td>/dobre dan/</td>
            <td>buenas medio día</td>
          </tr>
          <tr>
            <td>/dobro veche/</td>
            <td>buenas tardes</td>
          </tr>
          <tr>
            <td>/lacu noch/</td>
            <td>buenas noches</td>
          </tr>
          <tr>
            <td>/da/</td>
            <td>sí</td>
          </tr>
          <tr>
            <td>/ne/</td>
            <td>no</td>
          </tr>
          <tr>
            <td>/molim vas/</td>
            <td>por favor</td>
          </tr>
          <tr>
            <td>/javala/</td>
            <td>gracias</td>
          </tr>
          <tr>
            <td>/doviyeña/</td>
            <td>adiós (formal)</td>
          </tr>
          <tr>
            <td>/chao/</td>
            <td>hola y adiós (informal)</td>
          </tr>
          <tr>
            <td>/sdravo/</td>
            <td>hola (formal)</td>
          </tr>
          <tr>
            <td>/vidimo sé/</td>
            <td>hasta pronto</td>
          </tr>
          <tr>
            <td>/javala puno/</td>
            <td>muchas gracias</td>
          </tr>
          <tr>
            <td>/nema na tchemu/</td>
            <td>de nada</td>
          </tr>
          <tr>
            <td>/isvínite/</td>
            <td>perdona.....</td>
          </tr>
          <tr>
            <td>/javala na pomotchi/</td>
            <td>gracias por tu ayuda</td>
          </tr>
          <tr>
            <td>/u redu/</td>
            <td>de acuerdo</td>
          </tr>
          <tr>
            <td>/ne snam/</td>
            <td>no lo sé</td>
          </tr>
          <tr>
            <td>/ne rasumem/</td>
            <td>no lo entiendo</td>
          </tr>
          <tr>
            <td>/posto ye?/</td>
            <td>¿cuánto cuesta?</td>
          </tr>
          <tr>
            <td>/rasumela sam/</td>
            <td>entendido</td>
          </tr>
          <tr>
            <td>/sabrañeno/</td>
            <td>prohibido</td>
          </tr>
          <tr>
            <td>/dobro/</td>
            <td>bien</td>
          </tr>
          <tr>
            <td>/mosda/</td>
            <td>puede, a lo mejor</td>
          </tr>
          <tr>
            <td>/cámen, pápir, mácase/</td>
            <td>piedra, papel o tijera</td>
          </tr>
          <tr>
            <td>/slá/</td>
            <td>mal</td>
          </tr>
          <tr>
            <td>/molim vas rachun/</td>
            <td>la cuenta, por favor</td>
          </tr>
          <tr>
            <td>/nema problema/</td>
            <td>no hay ningún problema</td>
          </tr>
          <tr>
            <td>/nema/</td>
            <td>no hay</td>
          </tr>
          <tr>
            <td>/ne postoi/</td>
            <td>no existe</td>
          </tr>
          <tr>
            <td>/ima nésto/</td>
            <td>hay algo</td>
          </tr>
          <tr>
            <td>/ya sem Alejandro/</td>
            <td>me llamo Alejandro</td>
          </tr>
          <tr>
            <td>/ya imam "nº" godina/</td>
            <td>tengo "nº" años</td>
          </tr>
          <tr>
            <td>/molim vas de su toaleti/</td>
            <td>por favor, dónde están los aseos</td>
          </tr>
          <tr>
            <td>/srechna nova godina/</td>
            <td>feliz año nuevo</td>
          </tr>
          <tr>
            <td>/srechni prasnichi/</td>
            <td>felices vacaciones</td>
          </tr>
          <tr>
            <td>/srechan royendan/</td>
            <td>feliz cumpleaños</td>
          </tr>
          <tr>
            <td>/chestitam/</td>
            <td>enhorabuena</td>
          </tr>
          <tr>
            <td>/yíveli!/</td>
            <td>salud!, cheers!</td>
          </tr>
          <tr>
            <td>/caco se sove<b>s-ll</b>?/</td>
            <td>¿cómo te llamas?</td>
          </tr>
          <tr>
            <td>/odacle sí??/</td>
            <td>¿de dónde eres?</td>
          </tr>
          <tr>
            <td>/colico ima<b>s-ll</b> godina?/</td>
            <td>¿qué edad tienes?</td>
          </tr>
          <tr>
            <td>/tuisté/</td>
            <td>trabalenguas</td>
          </tr>
          <tr>
            <td>/malo govorim sreski/</td>
            <td>hablo un poco de serbio</td>
          </tr>
          <tr>
            <td>/da li ovai autóbus ide do autobusque staniche Palata Serbía?/</td>
            <td>¿este autobús va a la parada de bus Palacio de Serbia?</td>
          </tr>
          <tr>
            <td>/na ver ju berda sé pómera bor/</td>
            <td>en lo alto de la colina se mueve el pino</td>
          </tr>
          <tr>
            <td>/senka e pochela da laye/</td>
            <td>la perra empezó a ladrar</td>
          </tr>
        </table>
      `
    },
    {
      type: "text",
      content:`
        <h3>Gramática del serbio</h3>
        <p><b>1. Pronombres serbios:</b></p>
        <p>Yo => Ja</p>
        <p>Tú => Ti</p>
        <p>Él/Ella/Ello => On/Ona/Ono</p>
        <p>Nosotros/as => Mi</p>
        <p>Vosotros/as => Vi</p>
        <p>Ellos/as => Oni</p>
        <p><b>2. Números:</b></p>
        <p>0 => /nula/</p>
        <p>1 => /yedan/</p>
        <p>2 => /divá/</p>
        <p>3 => /tri/</p>
        <p>4 => /chétiri/</p>
        <p>5 => /pet/</p>
        <p>6 => /sest/</p>
        <p>7 => /sedam/</p>
        <p>8 => /osam/</p>
        <p>9 => /devet/</p>
        <p>10 => /deset/</p>
        <p>11 => /yedanaest/</p>
        <p>12 => /duanaest/</p>
        <p>13 => /trinaest/</p>
        <p>14 => /chetrinaest/</p>
        <p>15 => /petnaest/</p>
        <p>16 => /sesnaest/</p>
        <p>17 => /sedamnaest/</p>
        <p>18 => /osamnaest/</p>
        <p>19 => /devetnaest/</p>
        <p>20 => /divadeset/</p>
        <p>30 => /trideset/</p>
        <p>40 => /chetrideset/</p>
        <p>50 => /pedeset/</p>
        <p>60 => /sesdeset/</p>
        <p>70 => /sedamdeset/</p>
        <p>80 => /osamdeset/</p>
        <p>90 => /devedeset/</p>
        <p>100 => /sto/</p>
        <p>200 => /divesta/</p>
        <p>300 => /trista/</p>
        <p>400 => /chetristo/</p>
        <p>500 => /petsto/</p>
        <p>600 => /sesto/</p>
        <p>700 => /sedamsto/</p>
        <p>800 => /osamsto/</p>
        <p>900 => /devesto/</p>
        <p>1000 => /gilyada/</p>
      `
    }
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VOLUNTARIADO */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderC15() {
  loaderC15.style.display = "block";
  viewerC15.style.display = "none";
}

function ocultarLoaderC15() {
  loaderC15.style.display = "none";
}

function cargarImagenC15(url) {
  if (!url) {
    viewerC15.innerHTML = "";
    viewerC15.style.display = "none";
    ocultarLoaderC15();
    return;
  }

  mostrarLoaderC15();

  const img = new Image();
  pendingImageC15 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC15 !== img) return;

    viewerC15.innerHTML = "";
    viewerC15.appendChild(img);

    viewerC15.style.display = "block";
    ocultarLoaderC15();

    pendingImageC15 = null;
  };

  img.onerror = () => {
    if (pendingImageC15 !== img) return;

    viewerC15.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC15.style.display = "block";
    ocultarLoaderC15();

    pendingImageC15 = null;
  };

  img.src = url;
}

function renderMediaC15() {
  const media = certificadoC15.medios[currentMediaC15];
  viewerC15.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC15(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC15();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC15.style.display = "block";
    viewerC15.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC15.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC15.value=currentMediaC15+1;
  totalMediaC15.textContent = certificadoC15.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC15.addEventListener("click", () => {
  currentMediaC15++;
  if(currentMediaC15 >= certificadoC15.medios.length) {
    currentMediaC15=0;
  }
  renderMediaC15();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC15.addEventListener("click",()=>{
  currentMediaC15--;
  if(currentMediaC15 < 0) {
    currentMediaC15 = certificadoC15.medios.length-1;
  }
  renderMediaC15();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC15.addEventListener("change", () => {
  const value=Number(mediaIndexC15.value);
  if(value>=1 && value<=certificadoC15.medios.length) {
    currentMediaC15=value-1;
    renderMediaC15();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC15.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC15.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC15();