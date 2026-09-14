/****************************************************/
/* ELEMENTOS DEL VOLUNTARIADO */
/****************************************************/
const viewerC4 = document.getElementById("mediaViewerC4");
const prevBtnC4 = document.getElementById("prevBtnC4");
const nextBtnC4 = document.getElementById("nextBtnC4");
const mediaIndexC4 = document.getElementById("mediaIndexC4");
const totalMediaC4 = document.getElementById("totalMediaC4");
const loaderC4 = document.getElementById("loader-c4");
let currentMediaC4 = 0;
let pendingImageC4 = null;

/****************************************************/
/* DATOS DEL VOLUNTARIADO */
/****************************************************/
const certificadoC4 = {
  nombre: "Certificado: DGT Permiso B",
  medios: [
    {
      type: "text",
      content:`
        <h3>Mi permiso de conducir en España y la Unión Europea</h3>
        <p><b>Ver permiso:</b> <i class="fa fa-envelope"></i><a href="../../../index.html#contacto">Pedirlo</a><i class="fa fa-envelope"></i></p>
        <p><b>Tipo de permiso:</b> B</p>
        <p><b>Permisos extras incluidos:</b> AM y A1</p>
        <p><b>Fecha de expedición:</b> 26/01/2016</p>
        <p><b>Fecha de expiración:</b> 26/01/2036</p>
        <p><b>Controles de alcoholemia:</b> 1</p>
        <p><b>Resultados de los controles de alcoholemia:</b></p>
        <ul>
          <p>1º Control de alcoholemia => 22/07/2026 - 21:55 => Resultado: 0.0</p>
        </ul>
      `
    },
    {
      type: "text",
      content:`
        <h3>Con mi primer coche:</h3>
        <p><b>Tipo de vehículo:</b> Volkswagen Golf IV (manual y diesel)</p>
        <p><b>Tipo de adquisición:</b> Compra por 3000€ (2º mano)</p>
        <img src="https://i.postimg.cc/pV4dj5hX/Primer-coche.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Mi segundo coche:</h3>
        <p><b>Tipo de vehículo:</b> Volkswagen Polo 2021 (automático y gasolina)</p>
        <p><b>Tipo de adquisición:</b> Renting de 200€/mes (opción a compra y todo incluido)</p>
        <p><b>Resolución final:</b> No compra - Quería el nuevo Volkswagen Golf</p>
        <img src="https://i.postimg.cc/nVSJ5Xvh/Segundo-coche.png"/>
      `
    },
    {
      type: "text",
      content:`
        <h3>Mi coche actual:</h3>
        <p><b>Tipo de vehículo:</b> Volkswagen Golf 2025 (manual y diesel)</p>
        <p><b>Tipo de adquisición:</b> Renting de 385€/mes (opción a compra y todo incluido)</p>
        <img src="https://i.postimg.cc/ZnPZXHZ9/Tercer-coche.png"/>
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
function mostrarLoader4() {
  loaderC4.style.display = "block";
  viewerC4.style.display = "none";
}

function ocultarLoaderC4() {
  loaderC4.style.display = "none";
}

function cargarImagenC4(url) {
  if (!url) {
    viewerC4.innerHTML = "";
    viewerC4.style.display = "none";
    ocultarLoaderC4();
    return;
  }

  mostrarLoaderC4();

  const img = new Image();
  pendingImageC4 = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageC4 !== img) return;

    viewerC4.innerHTML = "";
    viewerC4.appendChild(img);

    viewerC4.style.display = "block";
    ocultarLoaderC4();

    pendingImageC4 = null;
  };

  img.onerror = () => {
    if (pendingImageC4 !== img) return;

    viewerC4.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerC4.style.display = "block";
    ocultarLoaderC4();

    pendingImageC4 = null;
  };

  img.src = url;
}

function renderMediaC4() {
  const media = certificadoC4.medios[currentMediaC4];
  viewerC4.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenC4(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderC4();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerC4.style.display = "block";
    viewerC4.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerC4.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexC4.value=currentMediaC4+1;
  totalMediaC4.textContent = certificadoC4.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnC4.addEventListener("click", () => {
  currentMediaC4++;
  if(currentMediaC4 >= certificadoC4.medios.length) {
    currentMediaC4=0;
  }
  renderMediaC4();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnC4.addEventListener("click",()=>{
  currentMediaC4--;
  if(currentMediaC4 < 0) {
    currentMediaC4 = certificadoC4.medios.length-1;
  }
  renderMediaC4();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexC4.addEventListener("change", () => {
  const value=Number(mediaIndexC4.value);
  if(value>=1 && value<=certificadoC4.medios.length) {
    currentMediaC4=value-1;
    renderMediaC4();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnC4.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnC4.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaC4();