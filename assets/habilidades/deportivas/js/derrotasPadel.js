/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const mediaPadelDerr =
[
  { type: "image", src: "https://i.postimg.cc/rp3JKhcV/IMG-20250812-174853.jpg" },
  { type: "image", src: "https://i.postimg.cc/k5BsJ00Y/IMG-20250812-174910.jpg" },
  { type: "image", src: "https://i.postimg.cc/x1sgSf4b/IMG-20250812-175022.jpg" },
  { type: "image", src: "https://i.postimg.cc/0y5Z3Mcs/IMG-20250812-175218.jpg" },
  { type: "image", src: "https://i.postimg.cc/qMxjjXcw/IMG-20250812-175240.jpg" },
  { type: "image", src: "https://i.postimg.cc/RVBg7btq/IMG-20250812-175329.jpg" },
  { type: "image", src: "https://i.postimg.cc/XNF2y0pT/IMG-20250812-175354.jpg" },
  { type: "image", src: "https://i.postimg.cc/C1ncN3Jn/IMG-20250812-175439.jpg" },
  { type: "image", src: "https://i.postimg.cc/4yzBCpDJ/IMG-20250812-175949.jpg" },
  { type: "image", src: "https://i.postimg.cc/zvm0PxPt/IMG-20250812-180225.jpg" },
  { type: "image", src: "https://i.postimg.cc/bvB61y0j/IMG-20250812-180242.jpg" },
  { type: "image", src: "https://i.postimg.cc/HLxZJcy2/IMG-20250812-180405.jpg" },
  { type: "image", src: "https://i.postimg.cc/fRMgNgW1/IMG-20250812-180426.jpg" },
  { type: "image", src: "https://i.postimg.cc/Hk3vs4Vn/IMG-20250812-180616.jpg" },
  { type: "image", src: "https://i.postimg.cc/c4R5PNWQ/IMG-20250812-180633.jpg" },
  { type: "image", src: "https://i.postimg.cc/DfbNdXYp/IMG-20250812-180752.jpg" },
  { type: "image", src: "https://i.postimg.cc/QtvyZ8Vq/IMG-20250812-181044.jpg" },
  { type: "image", src: "https://i.postimg.cc/qMV5mvPJ/IMG-20250812-181228.jpg" },
  { type: "image", src: "https://i.postimg.cc/BbDwqrKf/IMG-20250812-181402.jpg" },
  { type: "image", src: "https://i.postimg.cc/gJxT7XcJ/IMG-20250812-181611.jpg" },
  { type: "image", src: "https://i.postimg.cc/s26LK9rq/IMG-20250812-182055.jpg" },
  { type: "image", src: "https://i.postimg.cc/7LYcgtpS/IMG-20250812-182540.jpg" },
  { type: "image", src: "https://i.postimg.cc/W17Cqcf2/IMG-20250812-182602.jpg" },
  { type: "image", src: "https://i.postimg.cc/nhxNLh2R/IMG-20250812-182856.jpg" },
  { type: "image", src: "https://i.postimg.cc/dtrzvy2Z/IMG-20250812-182915.jpg" },
  { type: "image", src: "https://i.postimg.cc/NGWWW4Hw/IMG-20250812-182934.jpg" },
  { type: "image", src: "https://i.postimg.cc/mZcvXqhw/IMG-20250812-183444.jpg" },
  { type: "image", src: "https://i.postimg.cc/tTJ5gL8m/IMG-20250812-183503.jpg" },
  { type: "image", src: "https://i.postimg.cc/J0B5NjrN/IMG-20250812-183809.jpg" },
  { type: "image", src: "https://i.postimg.cc/RFYTJgBC/IMG-20250812-183945.jpg" },
  { type: "image", src: "https://i.postimg.cc/14hcJ4XL/IMG-20250812-184355.jpg" },
  { type: "image", src: "https://i.postimg.cc/vBzqC6RG/IMG-20250908-183137.jpg" },
  { type: "image", src: "https://i.postimg.cc/x1J6KdFT/IMG-20250929-190205.jpg" },
  { type: "image", src: "https://i.postimg.cc/7LsFCY2J/IMG-20251121-170025.jpg" },
  { type: "image", src: "https://i.postimg.cc/q7bPtM3h/IMG-20251121-170116.jpg" },
];

let primeraderrotasPadel = 1;
const totalMediaPadel = mediaPadelDerr.length;

const pantallaDerrotasPadel = document.getElementById('pantalla-derrotasPadel');
const prevBtnPadelDerr = document.getElementById('flecha-izquierda-derrotasPadel');
const nextBtnPadelDerr = document.getElementById('flecha-derecha-derrotasPadel');

function mostrarderrotasPadel(indexDerrPadel) {
  if (indexDerrPadel < 1) indexDerrPadel = totalMediaPadel;
  if (indexDerrPadel > totalMediaPadel) indexDerrPadel = 1;

  const item = mediaPadelDerr[indexDerrPadel - 1];
  pantallaDerrotasPadel.innerHTML = "";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    pantallaDerrotasPadel.appendChild(img);
  } else if (item.type === "youtube") {
    pantallaDerrotasPadel.innerHTML = "";
    pantallaDerrotasPadel.style.width = "432px";
    pantallaDerrotasPadel.style.height = "825px";

    const iframe = document.createElement("iframe");
    iframe.src = item.src + "?autoplay=1&rel=0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = false;
    iframe.style.width = "100%";  // ocupa todo el ancho del div
    iframe.style.height = "100%"; // ocupa todo el alto del div
    pantallaDerrotasPadel.appendChild(iframe);
  }
  primeraderrotasPadel = indexDerrPadel;
}

prevBtnPadelDerr.addEventListener('click', () => {
  mostrarderrotasPadel(primeraderrotasPadel - 1);
});

nextBtnPadelDerr.addEventListener('click', () => {
  mostrarderrotasPadel(primeraderrotasPadel + 1);
});

mostrarderrotasPadel(primeraderrotasPadel);