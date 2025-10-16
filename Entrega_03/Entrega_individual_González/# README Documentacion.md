# README Documentacion

## 1. Proceso de visualización

### a. Selección y propósito
La visualización busca mostrar la evolución del interés en torno a tres frutos secos, como el pistacho, nuez y almendra, en Chile, entre 2018 y 2025, utilizando datos de Google Trends.  
El objetivo fue evidenciar el aumento sostenido del interés por el pistacho, que alcanzó su punto más alto en 2025, y contrastarlo con la estabilidad de los otros dos productos.

La base utilizada proviene de la Base de datos inicial (decidí no usar la limpia porque la base de datos inicial tiene todo el período completo hasta 2025 y los puntos 0 y 100, que garantiza comparaciones relativas válidas) exportada desde Google Trends. 

### b. Limpieza y transformación
El procesamiento se realizó en Python (Google Colab) con `pandas` y `altair`.  

Pasos realizados:
1. **Carga del archivo Excel original** y verificación de las hojas correspondientes a los tres términos.  
2. **Unificación en un único DataFrame**, con formato “largo”, mediante la función `pd.melt()`, generando las columnas:
   - `Producto`
   - `Año`
   - `Mes`
   - `Valor`
3. **Conversión de fechas**: se creó una columna `Fecha` combinando año y mes. 
4. **Eliminación de filas vacías**   
5. **Verificación de extremos (0 y 100)** para asegurar la correcta escala relativa de Google Trends.  
6. **Exportación final a CSV limpio**, usado directamente para la visualización.  

### c. Generación del gráfico
El gráfico se creó con **Altair** en Google Colab, bajo el siguiente proceso:
- Se asignaron las variables `x = Fecha`, `y = Valor`, `color = Producto`.  
- Se utilizó `mark_line(point=True)` para resaltar los puntos clave.  
- Se añadieron tooltips con el valor, producto y fecha.  
- Finalmente, se exportó la visualización en formatos `.html`, `.png` y `.jpg`.  

El gráfico permite identificar visualmente el boom del pistacho en 2023–2025, en contraste con la estabilidad de la almendra y la nuez.  



## 2. Preguntas que responde la visualización

1. ¿Cuándo comienza el aumento sostenido del interés por el pistacho en Chile?  
2. ¿Qué diferencia hay entre la tendencia del pistacho y la de la nuez o almendra?  
3. ¿En qué año se alcanza el punto máximo de interés (valor 100)?  

