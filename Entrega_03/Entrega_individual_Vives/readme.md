# DOCUMENTACIÓN: # 

Para esta entrega trabajé con datos de importaciones anuales de pistacho, almendra, avellana, castaña y nuez, con el objetivo de observar las tendencias de crecimiento y comparar los valores acumulados entre años.
Decidí hacer una visualización de dos maneras distintas sobre la base de datos. La primera, que expresa  los valores mensuales de importación según cada año y otra respecto al valor acumulado anual de los mismos productos.
Por este motivo, decidí realizar dos bases de datos y trabajar con ambos.  Esto porque para hacer una comparación entre los meses y datos acumulados más precisa y coherente entre los distintos años y productos.
La visualización fue creada en formato Jupyter Notebook desde Google Colab utilizando, Pandas y Altair y herramientas como altair-viz.github.io y Chatgpt. 

# El paso a paso de la visualización fue el siguiente:  

1. Ordenar, filtrar y limpiar la base de datos pasada, realizando dos distintas: una que compare meses y años y otra que compara acumoluación de datos por años
2. Descargar cada producto con un csv distinto.
3. Crear dos notebooks en Google Colab distintos para las dos visualizaciones
4. Subir cada cvs al notebook correspondiente de la visualización 
5. Buscar desde la página  altair-viz.github.io un modelo que funcioné para cada visualización
6. Copiar los datos y preguntarle a Chatgpt cómo arreglar el código para que muestre la tabla de comparación de mes y año y otra para hacer los valores de la importación acumulada hasta diciembre, haciendo una excepción con 2025 que llega hasta septiembre. 
7. Importar pandas y altair en el código y extraer los datos de cada producto csv y pegar el código entregado por Chatgpt
Arreglar errores de visualización como que los meses estaban ordenados por orden alfabético. 
8. Editar cada código para los cinco productos en ambas visualizaciones
