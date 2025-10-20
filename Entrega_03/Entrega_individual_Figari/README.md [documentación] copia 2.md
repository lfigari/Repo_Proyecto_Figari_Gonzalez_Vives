# Archivo README

La base de datos utilizada contiene información sobre las hectáreas plantadas de siete frutos secos en Chile, desde el año 1999 hasta 2024. Esta fue seccionada con el objetivo de comparar la superficie cultivada entre las distintas especies y observar la evolución de cada una a lo largo del tiempo.

En primer lugar, fue necesario modificar la estructura de la base de datos. Originalmente estaba en formato horizontal, por lo que se transformó manualmente a formato vertical, de manera que Jupyter pudiera leerla correctamente. Luego, a partir de la galería de Vega-Altair, se tomó como base el código del gráfico Selection Detail. A partir de este modelo, se realizaron modificaciones para obtener un gráfico de círculos (“pelotas”) con una barra que permite cambiar los años visualizados.

Además, se agregó un segundo gráfico que permite comparar de mejor manera las especies en los años seleccionados. Esta parte fue más sencilla, ya que los datos ya se encontraban ordenados; bastó con incorporar un nuevo bloque de código.
