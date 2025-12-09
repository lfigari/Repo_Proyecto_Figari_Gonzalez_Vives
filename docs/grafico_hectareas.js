// === GRÁFICO DE HECTÁREAS ===
// Usamos Vega-Lite + Vega-Embed (ya incluidas en tu HTML)

const specHectareas = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    // Tamaño general
    width: 750,
    height: 450,

    data: {
        url: "datos_hectareas.json"   // ⚠️ te explico abajo cómo generar esto
    },

    params: [
        {
            name: "anio",
            value: 2024,
            bind: {
                input: "range",
                min: 1999,
                max: 2024,
                step: 1,
                name: "Selecciona un año: "
            }
        }
    ],

    vconcat: [
        {
            title: "Hectáreas por especie – Año seleccionado",

            transform: [{ filter: "datum.time == anio" }],

            mark: { type: "circle", opacity: 0.8, filled: true },

            encoding: {
                x: { field: "especie", type: "nominal", title: "Especie" },
                y: { value: 150 },
                size: { field: "value", type: "quantitative", title: "Hectáreas" },
                color: {
                    field: "especie",
                    type: "nominal",
                    scale: {
                        range: ["#8A9A5B", "#9CAF78", "#7A8C4F", "#6B7D45", "#5C6E3B", "#A3B58A"]
                    }
                },
                tooltip: [
                    { field: "especie", title: "Especie" },
                    { field: "time", title: "Año" },
                    { field: "value", title: "Hectáreas", format: ",.0f" }
                ]
            }
        },

        {
            title: "Evolución temporal de la especie seleccionada",

            transform: [{ filter: "datum.especie != null" }],

            mark: { type: "line", point: true, strokeWidth: 3 },

            encoding: {
                x: { field: "time", type: "ordinal", title: "Año" },
                y: { field: "value", type: "quantitative", title: "Hectáreas" },
                color: { field: "especie", type: "nominal" },
                tooltip: [
                    { field: "especie" },
                    { field: "time", title: "Año" },
                    { field: "value", title: "Hectáreas" }
                ]
            }
        }
    ]
};

// Renderizamos en el contenedor
vegaEmbed("#grafico-hectareas", specHectareas)
    .then(() => console.log("Gráfico cargado correctamente"))
    .catch(err => console.error(err));
