# Estructura del programa
## Indice
- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y Declaraciones](#expresiones-y-declaraciones)
  - [binddings o enlaces](#bindings-enlaces)
  - [el entorno](#el-entorno)
  - [control de flujo](#control-de-flujo)
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