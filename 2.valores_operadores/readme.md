# Valores, Tipos y Operadores
## indice
- [valores, tipos y operadores] (#valores-tipos-y-operadores)
 - [valores](#valores)
- [Datos primitivos](#datos-primitivos)
- [numeros(Number)](#--numeros-number)
- [aritmetica](#aritmetica-operadores-aritmeticos)
- [cedenas](#cadenas)
- [concatenacion](#concatenacion)
- [plantillas](#plantillas-literales)
- [operadores unarios](#operadores-unarios)
- [valores boleanos](#valores-boleanos)

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
#### Aritmetica (operadores aritmeticos)
la principal operacion que se pude hacer con numeros es la aritmetica.
para esot tenemos los operadores aritmeticos como:
- suma (+).
- resta (-).
- multiplicacion (*).
- division (/).
- potencia (**).
- modulo (%).
- incremento (++).
- decrementop (--).
**podemos agrupar operaciones con parentecis () las operaciones que esten entre los parentesis se ejecutaran primero**
consulta el archivo de operadores [aqui](./operadores.js).
ve los ejercicios [aqui](./ejercicios.js) 
#### cadenas 
el siguiente tipo de dato primitivo es la `cadena` - `string`.
¿para que sirve las cadenas en javascript?
- para representar texto 
se escribe encerrando su contenido entre comillas:
```js
"soy un texto" // comillas dobles
'tambien soy un texto' // comillas simples 
`yo tambien soy` // acento grave

// cadena vacia
""
" "
```
**problema** - como representamos un texto entre comillas para hacer el uso decomlillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones:
```js
// si nuestro texto tiene que estar entre comillas simples
"'este texto se muestra entre comillas simples'"
// si nuestro texto tiene que estar entre comillas dobles
'"este texto se muestra entre comillas dobles"'
//si nuestro texto tendra tanto comillas dobles como simples
`'esta en la comillas simples', "esta en comillas dobles"`
```
otra manera de hacer lo antes mencionados es haciendo uso de la barra invertida `\` tambien conocido como `caracter de escape`.
hacer uso de este caracter indica el caracter posterior tendra un significado especial.
```js
"de este texto solo esta \"palabra\" estara en comillas "
```
**problema** - deseamos aggrgar un salto de linea en nuestro texto.
```js
// solucionasmos este problema hacdiendo uso de los acentos graves
`primera linea
segunda linea`
```
antes de la incorporacion de es6 en el uso de acentos graves se utilizaba el caracter de escape`\`
```js
" esta es mi primera linea \n y esta es la segunda linea"
```
**problema** -deseo tabular en texto
```js
`
este texto no esta tabulado
     este texto si esta tabulado 
`
```
ahora tabularemos haciendo uso del caracter de escape
```js
"si tabular \t y tabulado "
```
#### concatenacion
el unico operador aritmetico que puede ser usado por cadenas es el operador de suma(+) puede ser usado en dos o mas cadenas y pasa a llamar operador de concetenacion, lo que realizar es unir cadena en una sola.
```js
"hola"+" "+"mundo "
```
#### plantillas literales
las pantillas literales mencionadas anteriormente con el nombre de acentros graves son usadas para mostrar texto literal, tambien nos permite ejecutar codigo javascript dentro de una plantilla literal el codigo o el resulatdo de este codigo sera transformado en un dato de tipo texto y se incluira en la posicion en que se encuentre.
para hacer uso de esta funcionalidad debemos usar, la siguiente expresion `${}`.
```js
// creando una plantilla literal - template literals
``
// usando js dentro de una plantilla literal
`la suma de 1+1 es ${1+1}`
```
> [!TIP]
> se dice literal por que en el formato que codificamos sera mostrado de esa misma forma en la consola

#### operadores unarios
no todos los operadores son simbolos, algunos se escriben como palabras.
un ejemplo es el operador `typeof` este operador produce un valor de cadena que indica el tipo del valor que le proporcionamos.

`operadores binarios` se les conoce por que opera sobre dos valores `2*5`
`operadores uniarios` por que solo trabaja con un valor.
```js
// para poder ver su funcionalidad o el valor que genera siemore debemos mostrarlo en un console
console.log(typeof 5)
```
#### valores boleanos
este tipo de dato primitivo es util cuando tenemos en valor que distinga solo entre dos posibilidades, como `si` y `no` o `encendido` y `apagado`.
para este proposito, javascript tiene un tipo de dato `Booleano` que tiene dos valores `true` y `false`.
**que formas de producir valores voleanos tenemos?**
1. **usando operadores de comparacion**
los operadores de comparacion son los siguientes
- mayor que(>).
- menos que (<).
- mayor o igual que (>=).
- manor o igual que (<=).
- igual a (==).
- estrictamente igual (===).
- no es igual a (!=).
2. **usando los operadores logicos**
javascript soporta tres operadores logicos 
- and (y) representacion en javascript `&&`,
- or (o) representancion en javascript `||`,
- not (no) representacion en javascript `!`,
**observacion** este es un operador unario que su funcion es invertir el valor que tiene a su derecha `!true` produce `false`