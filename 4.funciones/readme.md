# FUNCIONES
- [estructura de una funcion](#estructura-de-una-funcion-como-se-crea-una-funcion)
- [tipos de argumentos y parametros](#tipos-de-argumetos-y-parametros)
    - [posicionales](#argumentos-y-parametros-posicioneales)
    - [nominales](#argumentos-y-parametros-nominales)
- [tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [funciones como valor](#funciones-como-valor)
las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
nos sirve para modular (modularizar) nuestros programas y estructurarlos en bloques que `realizen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
las funciones normalmente al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `retrun`

## estructura de una funcion (como se crea una funcion)
para crear una funcion debemos realizar los siguientes pasos
1. hacer uso del keyword `function`.
2. darle un nombre a la funcion.
3. crear los parametros que recibira entre parentesis().
4. crear el cuerpo de la funcion `{}`
```js
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(a){
    console.log("tu parametro es" ,a)
}
//funcion con varios parametros
function variosParemetros(a,b){
    console.log(a+b)
}
```
**como ejecutamos una funcion**
para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamenete de su nombre y los parametros que recibira.
```js
//creando la funcion
function saludo(){
    console.log("hola")
}
//ejecutamos la funcion
saludo()

function saludo2(texto){
    console.log("hola: ", texto)
}
//ejecutar 
saludo("jory")
```

> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCION** - Los nombres de las funciones deben representar acciones por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.

```js
function creauUsuario(){

}
function enviarCorre(){

}
```
## tipos de argumetos y parametros
es la manera como remplazan los argumentos con los parametros 
### argumentos y parametros posicioneales
posicionales se le llama por que los argumentos tomaran los parametros en el orden que se le pase a la funcion segun la pocision en tre argumento y parametro
```js
function sumaNumeros(a,b,c,d){
    let suma =a+b+c+d
    return suma
}
// argumentos posicionales
let respuesta=sumaNumeros(2,6,7,8)
console.log(respuesta)
```
### argumentos y parametros nominales
se les conoce a los argumetos que en su creacion se asocian a un parametro en especifico
```js
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre}, ${apellido},${sexo}`
    return respuesta
}
//nominal
resgistroAlumno(sexo="primo", nombre="edwin", apellido="del mar")
//posicional
registroAlumno("jory","redrigues","todos los dias")
```
> [!INFO]
> posicionales en orden y Nominales especificar el parametro y su valor

## tipos de funciones por su notacion
### funciones como valor
en este caso se crea una funcion como si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("bienvenido")
}
saludo()
```
en este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
al igual que una funcion clasica podemos tambien pasarle parametros.

### funcion como declaracion
se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){
    return "saludo a todos"
}
console.log(saludo())
```
### funcion de flecha (arrow function)
esta funcion es introducida a partir de la version de ecma script 5 `es5`.
se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha le `verbosidad` en javascript
> [!NOTE]
> `verbosidad` o `verboso` se utiliza en la progrmacion para referirce a un codigo que necesita demaciadas lineas de codigo o nocesita cumplir estrictamente una serie de reglas podemos comprar la `verbosidad` a un texto demaciado o rodundante.
se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
 la funcion flecha tiene la siguiente estructura.
el parametro seguido del simbolo flecha `=>` y del cuerpo de ser necesario o solo de codigo que retornara 
```js
funxtion saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("hola, "texto)
console.los(mensaje("el primo"))
// en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre}, ${apellido}`
    return alumno
}

console.log(registroAlumno("edwin","cachondo"))
```