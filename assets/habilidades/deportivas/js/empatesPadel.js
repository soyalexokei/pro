/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const mediaPadelEmpates =
[
  { type: "image", src: "https://i.postimg.cc/DZ3vfTW7/IMG-20250812-175422.jpg" },
  { type: "image", src: "https://i.postimg.cc/bvtYjJw6/IMG-20250812-180733.jpg" },
  { type: "image", src: "https://i.postimg.cc/kgZMZ8q6/IMG-20250812-181552.jpg" },
  { type: "image", src: "https://i.postimg.cc/MpXKdt2J/IMG-20250812-181750.jpg" },
  { type: "image", src: "https://i.postimg.cc/gkg2VQ7K/IMG-20250812-183319.jpg" },
  { type: "image", src: "https://i.postimg.cc/pVYTTpY4/IMG-20250812-183751.jpg" },
  { type: "image", src: "https://i.postimg.cc/15mzNsvt/IMG-20250812-184006.jpg" },
  { type: "image", src: "https://i.postimg.cc/C5NL6QxS/IMG-20250812-184338.jpg" },
  { type: "image", src: "https://i.postimg.cc/tJy4kjyB/IMG-20250812-184452.jpg" },
  { type: "image", src: "https://i.postimg.cc/T3gcZWmB/IMG-20250908-183202.jpg" },
  { type: "image", src: "https://i.postimg.cc/gc7qjKHf/IMG-20250908-183243.jpg" }
];

let primeraempatesPadel = 1;
const totalMediaPadelEmpates = mediaPadelEmpates.length;

const pantallaPadelEmpates = document.getElementById('pantalla-empatesPadel');
const prevBtnPadelEmpates = document.getElementById('flecha-izquierda-empatesPadel');
const nextBtnPadelEmpates = document.getElementById('flecha-derecha-empatesPadel');

function mostrarempatesPadel(auxempatesPadel) {
  if (auxempatesPadel < 1) auxempatesPadel = totalMediaPadelEmpates;
  if (auxempatesPadel > totalMediaPadelEmpates) auxempatesPadel = 1;

  const item = mediaPadelEmpates[auxempatesPadel - 1];
  pantallaPadelEmpates.innerHTML = "";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    pantallaPadelEmpates.appendChild(img);
  } else if (item.type === "youtube") {
    pantallaPadelEmpates.innerHTML = "";
    pantallaPadelEmpates.style.width = "432px";
    pantallaPadelEmpates.style.height = "825px";

    const iframe = document.createElement("iframe");
    iframe.src = item.src + "?autoplay=1&rel=0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = false;
    iframe.style.width = "100%";  // ocupa todo el ancho del div
    iframe.style.height = "100%"; // ocupa todo el alto del div
    pantallaPadelEmpates.appendChild(iframe);
  }
  primeraempatesPadel = auxempatesPadel;
}

prevBtnPadelEmpates.addEventListener('click', () => {
  mostrarempatesPadel(primeraempatesPadel - 1);
});

nextBtnPadelEmpates.addEventListener('click', () => {
  mostrarempatesPadel(primeraempatesPadel + 1);
});

mostrarempatesPadel(primeraempatesPadel);