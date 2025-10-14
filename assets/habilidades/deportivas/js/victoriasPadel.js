/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const mediaPadelVictorias =
[
  { type: "image", src: "https://i.postimg.cc/Prrx9dsD/IMG-20250812-175004.jpg" },
  { type: "image", src: "https://i.postimg.cc/441yWmMZ/IMG-20250812-175311.jpg" },
  { type: "image", src: "https://i.postimg.cc/RhG0hDfq/IMG-20250812-175837.jpg" },
  { type: "image", src: "https://i.postimg.cc/BbJ6q0jd/IMG-20250812-175901.jpg" },
  { type: "image", src: "https://i.postimg.cc/3RXN5RxX/IMG-20250812-175930.jpg" },
  { type: "image", src: "https://i.postimg.cc/k5tDswrh/IMG-20250812-180042.jpg" },
  { type: "image", src: "https://i.postimg.cc/x1ZcLhZz/IMG-20250812-180102.jpg" },
  { type: "image", src: "https://i.postimg.cc/8zc7JNZG/IMG-20250812-180554.jpg" },
  { type: "image", src: "https://i.postimg.cc/c4sgWQYr/IMG-20250812-180827.jpg" },
  { type: "image", src: "https://i.postimg.cc/BZ5LRhjr/IMG-20250812-181104.jpg" },
  { type: "image", src: "https://i.postimg.cc/wMk1JvKq/IMG-20250812-181122.jpg" },
  { type: "image", src: "https://i.postimg.cc/7h4CfzWt/IMG-20250812-181206.jpg" },
  { type: "image", src: "https://i.postimg.cc/HxXcYzB7/IMG-20250812-181247.jpg" },
  { type: "image", src: "https://i.postimg.cc/8Cqfg9BS/IMG-20250812-181424.jpg" },
  { type: "image", src: "https://i.postimg.cc/0N6K3PSn/IMG-20250812-181441.jpg" },
  { type: "image", src: "https://i.postimg.cc/Z5syVCW0/IMG-20250812-181536.jpg" },
  { type: "image", src: "https://i.postimg.cc/K88MPnvd/IMG-20250812-181727.jpg" },
  { type: "image", src: "https://i.postimg.cc/KvNT39FP/IMG-20250812-181808.jpg" },
  { type: "image", src: "https://i.postimg.cc/J4mJnww7/IMG-20250812-182000.jpg" },
  { type: "image", src: "https://i.postimg.cc/057DPkBH/IMG-20250812-182022.jpg" },
  { type: "image", src: "https://i.postimg.cc/gjyZDshP/IMG-20250812-182518.jpg" },
  { type: "image", src: "https://i.postimg.cc/4yRcVqm5/IMG-20250812-182633.jpg" },
  { type: "image", src: "https://i.postimg.cc/0Qwm6P2j/IMG-20250812-182707.jpg" },
  { type: "image", src: "https://i.postimg.cc/N0Vmf5tZ/IMG-20250812-182750.jpg" },
  { type: "image", src: "https://i.postimg.cc/qv12S15J/IMG-20250812-183003.jpg" },
  { type: "image", src: "https://i.postimg.cc/mrh7s7vQ/IMG-20250812-183030.jpg" },
  { type: "image", src: "https://i.postimg.cc/VkfjKx4Z/IMG-20250812-183258.jpg" },
  { type: "image", src: "https://i.postimg.cc/02dYdkGJ/IMG-20250812-183339.jpg" },
  { type: "image", src: "https://i.postimg.cc/VLc9Crt8/IMG-20250812-183521.jpg" },
  { type: "image", src: "https://i.postimg.cc/jqfQ2QLc/IMG-20250812-183601.jpg" },
  { type: "image", src: "https://i.postimg.cc/fLGc5kgY/IMG-20250812-183732.jpg" },
  { type: "image", src: "https://i.postimg.cc/2yn4tmPM/IMG-20250812-184027.jpg" },
  { type: "image", src: "https://i.postimg.cc/N0P79d6J/IMG-20250812-184130.jpg" },
  { type: "image", src: "https://i.postimg.cc/cJJBLpnt/IMG-20250812-184151.jpg" },
  { type: "image", src: "https://i.postimg.cc/wj2kHq7d/IMG-20250812-184251.jpg" },
  { type: "image", src: "https://i.postimg.cc/DwnctJfg/IMG-20250812-184511.jpg" },
  { type: "image", src: "https://i.postimg.cc/tRnDPGmh/IMG-20250812-184645.jpg" },
  { type: "image", src: "https://i.postimg.cc/NfhDkCWZ/IMG-20250812-184706.jpg" },
  { type: "image", src: "https://i.postimg.cc/rs4JL5th/IMG-20250812-184804.jpg" },
  { type: "image", src: "https://i.postimg.cc/Nf14J7tF/IMG-20250812-184820.jpg" },
  { type: "image", src: "https://i.postimg.cc/Pf039H9p/IMG-20250908-183226.jpg" },
  { type: "image", src: "https://i.postimg.cc/Pq0J1GDm/IMG-20251006-193204.jpg" },
  { type: "image", src: "https://i.postimg.cc/9MzHd0Nh/IMG-20251014-135626.jpg" },
  { type: "image", src: "https://i.postimg.cc/QNTxwYSg/IMG-20251014-135644.jpg" },
];

let primeravictoriasPadel = 1;
const totalMediaPadelVictorias = mediaPadelVictorias.length;

const pantallavictoriasPadel = document.getElementById('pantalla-victoriasPadel');
const prevBtnPadelVictorias = document.getElementById('flecha-izquierda-victoriasPadel');
const nextBtnPadelVictorias = document.getElementById('flecha-derecha-victoriasPadel');

function mostrarvictoriasPadel(auxVictoriasPadel) {
  if (auxVictoriasPadel < 1) auxVictoriasPadel = totalMediaPadelVictorias;
  if (auxVictoriasPadel > totalMediaPadelVictorias) auxVictoriasPadel = 1;

  const item = mediaPadelVictorias[auxVictoriasPadel - 1];
  pantallavictoriasPadel.innerHTML = "";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    pantallavictoriasPadel.appendChild(img);
  } else if (item.type === "youtube") {
    pantallavictoriasPadel.innerHTML = "";
    pantallavictoriasPadel.style.width = "432px";
    pantallavictoriasPadel.style.height = "825px";

    const iframe = document.createElement("iframe");
    iframe.src = item.src + "?autoplay=1&rel=0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = false;
    iframe.style.width = "100%";  // ocupa todo el ancho del div
    iframe.style.height = "100%"; // ocupa todo el alto del div
    pantallavictoriasPadel.appendChild(iframe);
  }
  primeravictoriasPadel = auxVictoriasPadel;
}

prevBtnPadelVictorias.addEventListener('click', () => {
  mostrarvictoriasPadel(primeravictoriasPadel - 1);
});

nextBtnPadelVictorias.addEventListener('click', () => {
  mostrarvictoriasPadel(primeravictoriasPadel + 1);
});

mostrarvictoriasPadel(primeravictoriasPadel);
