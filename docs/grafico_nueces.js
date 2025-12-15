// Datos embebidos
const data = [
  { producto: "nuez", año: 2025, mes: "septiembre", "Valor CIF acumulado": 120000 },
  { producto: "nuez", año: 2024, mes: "diciembre", "Valor CIF acumulado": 135376.60 },
  { producto: "nuez", año: 2023, mes: "diciembre", "Valor CIF acumulado": 121521.40 },
  { producto: "nuez", año: 2022, mes: "diciembre", "Valor CIF acumulado": 363789.60 },
  { producto: "nuez", año: 2021, mes: "diciembre", "Valor CIF acumulado": 835597.50 },
  { producto: "nuez", año: 2020, mes: "diciembre", "Valor CIF acumulado": 1081716.90 },
  { producto: "nuez", año: 2019, mes: "diciembre", "Valor CIF acumulado": 778223.20 },
  { producto: "nuez", año: 2018, mes: "diciembre", "Valor CIF acumulado": 73953.20 },
  { producto: "nuez", año: 2017, mes: "diciembre", "Valor CIF acumulado": 114877.30 },
  { producto: "nuez", año: 2016, mes: "diciembre", "Valor CIF acumulado": 745341.00 },
  { producto: "nuez", año: 2015, mes: "diciembre", "Valor CIF acumulado": 807862.00 },
  { producto: "nuez", año: 2014, mes: "diciembre", "Valor CIF acumulado": 3404530.70 }
];

// Agregar color especial para 2025
data.forEach(obj => {
  obj.color = obj.año === 2025 ? "orange" : "green";
});

// Especificación del gráfico Vega-Lite
const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": { "values": data },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": { "field": "año", "type": "ordinal", "title": "Año", "sort": "ascending" },
        "y": { "field": "Valor CIF acumulado", "type": "quantitative", "title": "Valor CIF acumulado" },
        "color": { "field": "color", "type": "nominal", "scale": null, "legend": null },
          "tooltip": [
            { "field": "año", "type": "ordinal", "title": "Año" },
            { "field": "Valor CIF acumulado", "type": "quantitative", "title": "Valor CIF acumulado", "format": ",.2f" }
            ]
      }
    }
  ],
  "width": 600,
  "height": 400,
  "title": "Valor CIF acumulado de la nuez por año"
};

// Insertar en el HTML
vegaEmbed("#grafico-nuez", spec, { actions: false });