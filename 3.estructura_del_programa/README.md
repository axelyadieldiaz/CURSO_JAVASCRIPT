# Estructura del programa
## Indice
- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y Declaraciones](#expresiones-y-declaraciones)
  - [binddings o enlaces](#bindings-enlaces)
  - [el entorno](#el-entorno)
  - [control de flujo](#control-de-flujo)
  - [Bucles](#bucles)
## Interaccion basica con el usuario
Podemos interactuar con el usuario desde javascript, utilizando un metodo sencillo que biene implementado en los navegadores.
el metodo es conocido como `Window` o el metodo de ventana este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **confirm** - preguntar al usuario y ofrecer dos botones que se traducen en valores booleanos `Aceptar` (True) y `Cancelar` o `Cerrar` (False)
```js
window.confirm("quieres ser mi enamorado")
//si deseamos capturar la respuesta almacenaremosel codigo en una variable
respuesta=window.confirm("confirmas que Nadine es una tucan")
```
- **promt** - pregunta al usuario y espera que se ingrese una respuesta
```js
window.promt("como se llama la tucan del salon?")
//si deseamos almacenar la respuesta usaremos una variable
respuesta=window.promt("como se llama la tucan del salon")
```
## Expresiones y Declaraciones
- **Expreciones** - en javascript un fragmento de codigo que produce un valor es llamada `Expresion`. tambien se dice que una `expresion` es el fragmento de una oracion.
```js
1
"hola"
3*5
5>7
!true
```
- **declaraciones** - en javascript es una oracion
```js
!true;
let estado=!false;
```
## bindings (enlaces)
cuando creamos un valor estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
el bindings o enlace es la manera que javscript recuerda los valores y mantiene un estado interno asi como la reutilizacion de valores.
**como usamos los bindings en javascript**
para usar el bindings primero debemos usar la palabra reservada `keyword`de nombre`let`, despues debemos darle un nombre para indentificar el enlace luego asignarle el valor.
```js
// este es un  enlace que puede apuntar a varios valores como un pulpito con muchos brazatos
let edadPersona = 34

//si deseamos que nuestro enlace solo apunte a un valor osea un pulpito con un bracito entonces para crear este enlace debemos hacer uso de la keyword const
const edad=45
//este enlace siempre apuntara al valor 45 no podra moduficar su enlace a otro valor.
```
> [!TIP]
> **que nombre ponerle a nuestro Enlaces** - el nombre de un enlace debera describrir el valor al que esta enlasado y debera estar escrita en `camelCase`
```js
//quiero crear un enlace que tenga el valor de la fecha actual
//incorrecto
let yyyymmdd="20240910"
// correcto
let fechaActual="09-10.2024"
//correcto
let edadActualAlumno=34
```
## el entorno
el entrono es conocido como el momento en el que se ejecuta o inicia un archivo javascript.
el entorno al crearce no se crea vacio dentro del entorno se crearan la coleccion de enlaces y valores.
**tarea** - averiguar mas sobre la ejecucion de los entornos en javascript
## control de flujo
una sentencia se ejecuta como si fuera una historia de arriba abajo.
por ejemplo:
```js
let elNumero = prompt("elige el numero")
console.log(`tu numero es la raiz cuadrada de: ${elNumero*el numero}`)
//primero le pide al usuario un numero y despues muestra un mensaje y el cuadro de ese numero
```
### Ejecucion Condicional 
hacemos usa de este conbtrol de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.
**como creamos una condicion en javascript**
la ejecucion condicional se crea con la palabra reservada (keyword)
`if ` a continuacion de una `condicion` en llaves `{}` se escriba el cuerpo del codigo que deseo ejecutar en caso de la condicion sea `verdad`.
- **condicion simple `if`**
```js
let comparacion=5>4
if comparacion{
  prompt("escribe tu nombre")
}
```
- **condicion simple `if` de una sola linea**
```js
if (1+1==2) console.log("es verdad")
```
- **condicion de doble evaluacion `if else`** 
existen casos en los que tendremos que ejecutar un codifo si es verdad pero tambien si es falso. ejecucion condicional de dos caminos.
```js
let edadPersona = 16;
if (edadPersona>= 18){
  console.log("eres mayor de edad");
}else{
  console.log("eres menos de edad");
}
```
- **condicion multiple `if` `else if`**
se utiliza cuadno tiene que evaluar y devolver varias opciones o multiples respuestas 
```js
let total_compra=105
if (total_compra >= 50 && total_compra < 100){
  console.log(`tiene un descuento del 10% ${total_compra*0.10}`)
}
else if (totaL_compra > 100 && total_compra <500){
  console.log(`tienes un descuento del 20% ${total_compra*0.20}`)
}else{
  console.log(`tienes un descuento del 50% ${total_compra*0.30}`)
}

```
### Bucles
consideremos el siguiente problema 
crear un programa que imprima los numeros del 1 al 12 una forma de hacerlo seria el siguiente:
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
```
el ejemplo anterior es valido pero la idea cuando programamos es hacer menos trabajo no mas, en el ejercicio anterior tendriamos problemas si deseamos mostrar todos los numeros menos a 1000.
necesitamos una manera de ejecutar un fragmento de codigo multiples veces a esta forma de control de flujo se le llama `bucle`.
para crear un buble tenemos dos formas de hacerlo 
1. `while` -para hacer uso de este bucle primero debemos usar la palabra clave `while` este asu ves como el if devera tener una condicion, si esta condision es verdad el bucle se ejecutara indefinidamente en caso que la condicion sea falsa el bluce no se ejecutara, al igual que el if luego de darle la condicion crearemos el `cuerpo` donde escribiremos el codigo que deseamos ejecutar.
```js
while (true){
  console.log("hola")
}
```
2. `for` esta es la manera mas abreviada de crear un bucle en javascript, en el caso de while necesitamos una variavle contador luego la condicion y fanalmente el aumento del contador . en el caso de `for` estos tres pasos se realizan en una sola linea
```js
for (let contador=2;contador<=20;contador++){
  if (contador%2==0) console.log(contador)
}
```
> [!TIP]
> `while` se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo, por lo general su finalizacion requeritra de una intervecion externa. `for` se usa cuando sabemos la cantidad de veces que deseamos ejecutar un codigo

> [!NOTE]
> para terminar un bucle se hace uso de la palabra reservada `break`

