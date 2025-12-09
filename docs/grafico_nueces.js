// Cargar CSV y generar gráfico
fetch("nuez 2 grafico anual.csv")  // ← asegúrate de que el archivo está en la misma carpeta
  .then(response => response.text())
  .then(csvText => {

    // Convertir CSV separado por ;
    const rows = csvText.trim().split("\n");
    const headers = rows[0].split(";");

    const data = rows.slice(1).map(row => {
      const values = row.split(";");

      let obj = {};
      headers.forEach((h, i) => obj[h] = values[i]);

      // Solo producto = nuez
      if (obj["producto"].toLowerCase() !== "nuez") return null;

      // Limpiar número
      obj["Valor CIF acomulado"] = parseFloat(
        obj["Valor CIF acomulado"]
          .replace(/\./g, "")
          .replace(",", ".")
      );

      obj["año"] = parseInt(obj["año"]);

      // Color especial para 2025
      obj["color"] = obj["año"] === 2025 ? "orange" : "green";

      return obj;
    }).filter(Boolean);


    // Especificación del gráfico Vega-Lite
    const spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

      "data": { "values": data },

      "layer": [
        {
          "mark": "bar",
          "encoding": {
            "x": { "field": "año", "type": "ordinal", "title": "Año", "sort": "ascending" },
            "y": { "field": "Valor CIF acomulado", "type": "quantitative", "title": "Valor CIF acumulado" },
            "color": { "field": "color", "type": "nominal", "scale": null, "legend": null }
          }
        },

        // Etiquetas de valor arriba
        {
          "mark": {
            "type": "text",
            "align": "center",
            "baseline": "bottom",
            "dy": -5
          },
          "encoding": {
            "x": { "field": "año" },
            "y": { "field": "Valor CIF acomulado" },
            "text": { "field": "Valor CIF acomulado", "format": ",.0f" }
          }
        }
      ],

      "width": 600,
      "height": 400,
      "title": "Valor CIF acumulado de la nuez por año"
    };


    // Insertar en el HTML
    vegaEmbed("#grafico-nuez", spec, { actions: false });
  })
  .catch(error => console.error("Error cargando gráfico de nuez:", error));
