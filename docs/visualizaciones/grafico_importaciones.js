        var spec1 = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}}, "layer": [
            {"mark": {"type": "bar"}, "encoding": {"color": {"field": "color", "legend": null, "scale": null, "type": "nominal"}, "x": {"field": "año", "sort": "ascending", "title": "Año", "type": "ordinal"}, "y": {"field": "Valor CIF acomulado", "title": "Valor CIF acumulado", "type": "quantitative"}}, "title": "Valor CIF acumulado del Pistacho por año (hasta diciembre, excepto 2025 que llega hasta septiembre)"},
            {"mark": {"type": "text", "align": "center", "baseline": "bottom", "dy": -5}, "encoding": {"text": {"field": "Valor CIF acomulado", "format": ",.0f", "type": "quantitative"}, "x": {"field": "año", "sort": "ascending", "title": "Año", "type": "ordinal"}, "y": {"field": "Valor CIF acomulado", "title": "Valor CIF acumulado", "type": "quantitative"}}, "title": "Valor CIF acumulado del Pistacho por año (hasta diciembre, excepto 2025 que llega hasta septiembre)"}
        ], "data": {"values": [
            {"producto": "pistacho", "año": 2014, "mes": "diciembre", "Valor CIF acomulado": 792083.2, "color": "green"}, 
            {"producto": "pistacho", "año": 2015, "mes": "diciembre", "Valor CIF acomulado": 500429.2, "color": "green"}, 
            {"producto": "pistacho", "año": 2016, "mes": "diciembre", "Valor CIF acomulado": 1053531.7, "color": "green"}, 
            {"producto": "pistacho", "año": 2017, "mes": "diciembre", "Valor CIF acomulado": 350183.3, "color": "green"}, 
            {"producto": "pistacho", "año": 2018, "mes": "diciembre", "Valor CIF acomulado": 254386.8, "color": "green"}, 
            {"producto": "pistacho", "año": 2019, "mes": "diciembre", "Valor CIF acomulado": 830321.3, "color": "green"}, 
            {"producto": "pistacho", "año": 2020, "mes": "diciembre", "Valor CIF acomulado": 1017710.8, "color": "green"}, 
            {"producto": "pistacho", "año": 2021, "mes": "diciembre", "Valor CIF acomulado": 1756361.2, "color": "green"}, 
            {"producto": "pistacho", "año": 2022, "mes": "diciembre", "Valor CIF acomulado": 1218029.7, "color": "green"}, 
            {"producto": "pistacho", "año": 2023, "mes": "diciembre", "Valor CIF acomulado": 1501598.4, "color": "green"}, 
            {"producto": "pistacho", "año": 2024, "mes": "diciembre", "Valor CIF acomulado": 1344015.7, "color": "green"}, 
            {"producto": "pistacho", "año": 2025, "mes": "septiembre", "Valor CIF acomulado": 1985887.74, "color": "orange"}
        ]}, "height": 400, "width": 600, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json"};
        vegaEmbed('#altair-viz-pistacho-anual', spec1, {mode: "vega-lite"}).catch(console.error);