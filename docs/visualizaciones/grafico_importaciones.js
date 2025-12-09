var spec1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "config": { 
    "view": { "continuousWidth": 300, "continuousHeight": 300 }
  },

  "data": {
    "values": [
      {"producto": "pistacho", "año": 2014, "mes": "diciembre", "Valor CIF acomulado": 792083.2, "categoria": "normal"},
      {"producto": "pistacho", "año": 2015, "mes": "diciembre", "Valor CIF acomulado": 500429.2, "categoria": "normal"},
      {"producto": "pistacho", "año": 2016, "mes": "diciembre", "Valor CIF acomulado": 1053531.7, "categoria": "normal"},
      {"producto": "pistacho", "año": 2017, "mes": "diciembre", "Valor CIF acomulado": 350183.3, "categoria": "normal"},
      {"producto": "pistacho", "año": 2018, "mes": "diciembre", "Valor CIF acomulado": 254386.8, "categoria": "normal"},
      {"producto": "pistacho", "año": 2019, "mes": "diciembre", "Valor CIF acomulado": 830321.3, "categoria": "normal"},
      {"producto": "pistacho", "año": 2020, "mes": "diciembre", "Valor CIF acomulado": 1017710.8, "categoria": "normal"},
      {"producto": "pistacho", "año": 2021, "mes": "diciembre", "Valor CIF acomulado": 1756361.2, "categoria": "normal"},
      {"producto": "pistacho", "año": 2022, "mes": "diciembre", "Valor CIF acomulado": 1218029.7, "categoria": "normal"},
      {"producto": "pistacho", "año": 2023, "mes": "diciembre", "Valor CIF acomulado": 1501598.4, "categoria": "normal"},
      {"producto": "pistacho", "año": 2024, "mes": "diciembre", "Valor CIF acomulado": 1344015.7, "categoria": "normal"},
      {"producto": "pistacho", "año": 2025, "mes": "septiembre", "Valor CIF acomulado": 1985887.74, "categoria": "especial"}
    ]
  },

  "layer": [
    {
      "mark": {"type": "bar"},
      "encoding": {
        "x": {"field": "año", "type": "ordinal", "sort": "ascending", "title": "Año"},
        "y": {"field": "Valor CIF acomulado", "type": "quantitative", "title": "Valor CIF acumulado"},
        "color": {
          "field": "categoria",
          "type": "nominal",
          "legend": null,
          "scale": {
            "domain": ["normal", "especial"],
            "range": ["#7A9046", "#D1D983"]   // verde pistacho + amarillo
          }
        }
      },
      "title": "Valor CIF acumulado del Pistacho por año"
    },

    {
      "mark": {
        "type": "text",
        "align": "center",
        "baseline": "bottom",
        "dy": -5,
        "color": "#1A1A1A"
      },
      "encoding": {
        "x": {"field": "año", "type": "ordinal", "sort": "ascending"},
        "y": {"field": "Valor CIF acomulado", "type": "quantitative"},
        "text": {"field": "Valor CIF acomulado", "format": ",.0f"}
      }
    }
  ],

  "height": 400,
  "width": 600
};

vegaEmbed('#altair-viz-pistacho-anual', spec1, {mode: "vega-lite"}).catch(console.error);
