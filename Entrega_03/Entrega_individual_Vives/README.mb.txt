DOCUMENTACIÓN: 

Para esta entrega trabajé con datos de importaciones anuales de pistacho, almendra, avellana, castaña y nuez, con el objetivo de observar las tendencias de crecimiento y comparar los valores acumulados entre años.

Inicialmente, había utilizado los valores mensuales de importación, pero al revisar los registros del Servicio Nacional de Aduanas; me dí cuenta de que había un error en los datos ya que en algunos años faltaban meses, y los totales acumulados oficiales hasta diciembre eran mayores que la suma de los valores mensuales.
Por este motivo, decidí reemplazar la base de datos y trabajar directamente con los valores acumulados anuales, lo que permite una comparación más precisa y coherente entre los distintos años y productos.
La visualización fue creada en formato Jupyter Notebook desde Google Colab utilizando, Pandas y Altair y herramientas como altair-viz.github.io y Chatgpt. 
El paso a paso de la visualización fue el siguiente: 
Ordenar, filtrar y limpiar la base de datos pasada, dejando sólo los dato
Descargar cada producto con un csv distinto
Subir cada cvs al notebook de Google Colab
Buscar desde la página  altair-viz.github.io un modelo que funcioné para mí visualización
Copiar los datos y preguntarle a Chatgpt cómo arreglar el código para que muestre los valores de la importación acumulada hasta diciembre, haciendo una excepción con 2025 que llega hasta septiembre. 
Importar pandas y altair en el código y extraer los datos de cada producto csv y pegar el código entregado por Chatgpt
Arreglar errores de visualización como que los meses estaban ordenados por orden alfabético. 
Editar cada código para los cinco productos
Preguntas que puede responder: 
¿Cómo ha evolucionado la importación de cada fruto seco a lo largo de los años?
¿Qué producto presenta un mayor crecimiento en los últimos periodos?
¿En qué años se registraron los mayores y menores valores de importación?
¿El año 2025 (hasta septiembre) ya supera los valores acumulados de años anteriores?
