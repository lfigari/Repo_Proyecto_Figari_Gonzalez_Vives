# Ficha Técnica
Base de datos: Tendencias de búsqueda sobre frutos secos (2018–2025)

## Características generales

- **Fuente:** Google Trends 
- **País:** Chile  
- **Fechas** Enero 2018 – Septiembre 2025  
- **Registro:** en la visualizacion: mensual. 
- **Unidad de medida:** Índice relativo de interés (escala 0–100)  
- **Tipo de archivo original:** excel exportado desde Google Trends en formato 
- **Número de observaciones:** 288 (96 registros por término de búsqueda)  
- **Formato final:** una fila por producto, año y mes. 



## Variables incorporadas
- producto (nuez, almendra y pistacho)
- año
- mes
- valor (nivel de interes en escala relativa)
- fecha (dia 15 de cada mes para ponerlo en el grafico)




## Observaciones 

- Los datos fueron obtenidos directamente desde **Google Trends**, sin manipulación manual de los valores.  
- El formato original era multiserie (una columna por término). Se transformó al formato **largo** para permitir el uso con Altair y facilitar la comparación entre variables.  
- Se verificó la presencia de los valores extremos **0 y 100** 
- No existen registros duplicados ni celdas vacías; cada observación corresponde a un mes específico por producto.  
- Se mantuvo la cobertura completa hasta **septiembre de 2025**, ya que este año registra el **máximo histórico** de interés por el pistacho, esencial para sostener la hipótesis del reportaje.  
- La variable "valor" no representa cifras absolutas, sino un índice relativo, lo que implica que cada término se mide en proporción a su propio nivel máximo de búsqueda.  


