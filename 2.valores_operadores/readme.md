# Valores, Tipos y Operadores
## indice
- [ tipos de datos o valores](#valores)
## valores
imagina un mar de bits. una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o`memoria principal`o`memoria volatil`o`ram`.
ahora la memnoria no volatil o memoria secundaria tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.
cuando nosotros porogramamos havemos uso de `memoria de trabajo`, para trabajar de manera ordenada con los bits que se encvuentran en nuestro mas de bits, javascript ordena los bits en pequeñas partes o piezas de informacion a esto se le conoce como `valores`
cada valor tiene una funcionalidad distinta puede ser un numero un texto o una funcion.
cuando hablamos de tipos de datos en javascript
nos referimos a su representancion binaria al tipo de valor que usamos

### datos primitivos
son aquellos datos que ya existen no pueden ser creados, actualizados ni eliminados solo pueden ser llamados para el uso que deseamos darle.
los datos primitivos en javascript son
#### - Numeros (Number)
los valores de tipo numero, como es de esperar son numeros y en javascript se escribe o se hace el llamado dee este valor de la siguiente manera
- numero de tipo entero
```js
// entero positivo
20
// enetero negativo
-20
// estamos usando un praton de bits para el numero 20 que existira dentro de la memoria de trabajo.
```
- numero de punto flotante decimal fraccion
```js
// decimal positivo
2.7
0.
.0
// decimal negativo
-3,6
```
- numeros de tipo notacion cientifica
```js
2.998e8
//2.998 * 10^8
```
>[!WARNING]
> cuando javascript realiza operacion con numeros enteros el resultado siempre sera exacto, cuando realize operacion con numeros decimales el resultado perdera precision por que solo tiene 64 para almacenar el numero esto suele ocurrir con resultados cuyos decimales sean infinitos como el caso del numero PI **es nuetra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores**
---
> [!TIP]
> cuando javacscript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todo numero som almacenados como decimal positivo.
#### nuemeros especiales
en javascript existen tres valores de tipo numero que se concideran dato primitivo numerico de tipo especial 
```js
Infinity
- Infinity 
NaN //not a number
// no es un numero
// cuando el resultado de una operacion es matematicamente imposible.
```
- tipos (tipos de datos)
- operadores