let barras, torta;

function renderCharts(ingresos, gastos) {
  if (barras) barras.destroy();
  if (torta) torta.destroy();

  barras = new Chart(graficoBarras, {
    type: "bar",
    data: {
      labels: ["Ingresos", "Gastos"],
      datasets: [{
        data: [ingresos, gastos],
        backgroundColor: ["green", "red"]
      }]
    }
  });

  torta = new Chart(graficoTorta, {
    type: "pie",
    data: {
      labels: ["Ingresos", "Gastos"],
      datasets: [{
        data: [ingresos, gastos],
        backgroundColor: ["green", "red"]
      }]
    }
  });
}
