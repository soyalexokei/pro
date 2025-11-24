const p_totales = document.getElementById("p_totales")
const victorias = document.getElementById("victorias")
const derrotas = document.getElementById("derrotas")
const empates = document.getElementById("empates")
const ctx = document.getElementById('performanceChart').getContext('2d');
var eficacia = document.getElementById("eficacia")
const nivel = document.getElementById("nivel")
const fiabilidad = document.getElementById("fiabilidad")

victorias.innerHTML = 46
derrotas.innerHTML = 36
empates.innerHTML = 12
nivel.innerHTML = 2.50
fiabilidad.innerHTML = "Alta - " + 85.11 + "%"

const partidos_ganados = parseInt(victorias.innerHTML)
const partidos_perdidos = parseInt(derrotas.innerHTML)
const partidos_empatados = parseInt(empates.innerHTML)

//-- Cálculo de la Eficacia y de partidos totales
const partidos_totales = partidos_ganados + partidos_perdidos + partidos_empatados
p_totales.innerHTML = partidos_totales
eficacia.innerHTML = Math.round((partidos_ganados * 100) / partidos_totales) + "%"

new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [partidos_ganados, partidos_perdidos, partidos_empatados],
            backgroundColor: ['#34D399', '#EF4444', '#FFEB3B'],
        }]
    },
    options: {
        responsive: true
    }
});
