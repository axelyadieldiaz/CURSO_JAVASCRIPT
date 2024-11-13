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
### diferencias 
las diferencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha es binding.
### binding
es una tecnica que guarda las funciones y variables (enlaces) sube al principio de la declaracion no el valor ala cabecera del archivo javascript.
```js
function saludo(){
    return "hola primo"
}
function despedida(){
    return "adios primo"
}
```
```js
saludo()
despedida()
```
## la pila de llamadas
es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion
**averiguar sobre LIFO**
```js
// programa que haga una ensalada
function cortarTomate(){
    console.log("cortando tomate")
}
function cortarLechuga(){
    console.log("cortando lechuga")
}
function cortarPepino(){
    console.log("cortando pepino para el primo")
}
function cortarLimon(){
    console.log("cortando limon")
}
function preparaEnsalada(){
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando las verduras")
}
function comer(){
    preparaEnsalada()
    console.log("tragando la ensalada")
}
comer()
```
## CLOSERE o funciones de cierre(funciones que retorna funciones)
un `closure` es una funcion que encapsula una serie de variables y deficiones locales que unicament5e seran accesibles si son devueltas con el keyword `return` .
antes de que aparesca la version `ecma 6` los `closure` eran un patron creacional que nos permita modularizar nuestro codigo, en lugar de usar las `clases`, que eran populares en otros languajes pero que javascript aun no lo implementaba.
```js
//una funcion que retorna otra funcion
function retornaValor(n){
    return +1
}
//function closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando a la funcion closure
retornaValor(10)()
```
> [!NOTE]
> las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realize.

### closure tipo clase
son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en javascript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con las funciones `closure` clasicas es que en esta hacemos una de la palabra reservada `keyword` llama `this`.
```javascript
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }
}
//realizamos la instancia
let count1=new contador()
console.log(count1.contador)
count1.incre()
console,log(count1.contador)
```
> [!NOTE]
> la funcion closure de tipo clase no hace uso de `return` en sus funciones al hacer uso de `this` cada funcion o variable estara enlazada al objeto que se cree

> [!WARNING]
> wl problema principal de este tipo de funcion es que cuando creamos un nuevo objeto a partir de la funcion tipo clase resercara espacio en memoria para toda la clase y sus valores creados eso quiere decir variable y funciones, cada vez que llamamos a una funcion esta aplicada en memoria.

## protoype (tarea-averiguar y sus ejemplos)
En JavaScript, un prototipo es un mecanismo que permite a los objetos y las funciones "heredar" propiedades y métodos de otros objetos. Este concepto es fundamental en JavaScript, ya que permite crear objetos y modelos de herencia sin necesidad de clases, aunque las clases modernas en JavaScript también usan prototipos internamente.

¿Cómo funcionan los prototipos en JavaScript?
Cada objeto en JavaScript tiene una propiedad interna llamada [[Prototype]] (a la que podemos acceder con Object.getPrototypeOf(obj) o con la propiedad __proto__). Esta propiedad hace referencia a otro objeto, y este, a su vez, puede tener su propio prototipo, formando una cadena llamada cadena de prototipos.
```js
const persona = {
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};

const juan = Object.create(persona);
juan.nombre = "Juan"
juan.saludar()

```
para crear un Prototype tendremos que crear primero nuestra funcion principal que es la encargada de almacenar nuestras variables locales con las que trabajaremos,
luego accederemos al prototype de nuestra funcion creada y en valor o variable de tipo objeto le indicaremos las funciones que tendra nuestra funcion principal que interactuara con nustras variables locales.
```js
function Contador(){
    this.count=0
    this.nombre=nombre
}
Contador.prototype={
    incremento:function(){
        this.count++
    },
    decremento:function(){
        thid.count-- 
    },
    mostraDatos:funcion(){
        retrun '${this.count}, ${this.nombre}'
    }
}
// instanciar mi funcion
let contadorUno=Contador("el primo")
console.log(contadorUno.mostraDatos())
```
> [!NOTE]
> es una convencion usar como nombre de nuestra funcion principal, 1. que debe ser singular, 2. que use PascalCase
## RECURSION EN FUNCIONES (tareas)
Aquí tienes una versión más resumida para tu tarea en JavaScript, manteniendo los conceptos clave:

---

### Tarea: Funciones Recursivas en JavaScript
La recursión es una técnica de programación en la que una función se llama a sí misma para resolver un problema. Es útil cuando un problema se puede dividir en subproblemas más simples, pero requiere un **caso base** que detenga la recursión.

---

### 1. Función Recursiva para Calcular el Factorial

El **factorial** de un número \( n \) es el producto de todos los números enteros de 1 a \( n \). Se define recursivamente como:
\[
n! = n \times (n-1)!
\]
El caso base es \( 1! = 1 \).

#### Código en JavaScript:

```javascript
function factorial(n) {
    if (n === 1) return 1;  // Caso base
    return n * factorial(n - 1);  // Llamada recursiva
}

console.log(factorial(5));  // 120
```

---

### 2. Función Recursiva para la Serie de Fibonacci

La **serie de Fibonacci** es una secuencia donde cada número es la suma de los dos anteriores:
\[
F(0) = 0, \quad F(1) = 1, \quad F(n) = F(n-1) + F(n-2)
\]

#### Código en JavaScript:

```javascript
function fibonacci(n) {
    if (n === 0) return 0;  // Caso base
    if (n === 1) return 1;  // Caso base
    return fibonacci(n - 1) + fibonacci(n - 2);  // Llamada recursiva
}

console.log(fibonacci(6));  // 8
```

---

### 3. Optimización con Memorización (Fibonacci)

La recursión en Fibonacci puede ser ineficiente debido a cálculos redundantes. Usamos **memorización** para almacenar resultados intermedios y mejorar la eficiencia.

#### Código con Memorización:

```javascript
function fibonacciMemo(n, memo = {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];  // Resultado almacenado

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(6));  // 8
```
---

### Conclusión:
La recursión es útil para problemas que se pueden dividir en subproblemas. Vimos cómo calcular el **factorial** y los números de **Fibonacci** de forma recursiva. Además, aprendimos a optimizar la recursión con memorización para mejorar el rendimiento.

---
## FUNCIONES CALLBACKS (tareas)
### Funciones Callback en JavaScript

Una **función callback** es una función que se pasa como argumento a otra y se ejecuta después de que esta última termine su tarea. Es común en operaciones asincrónicas como lecturas de archivos o peticiones HTTP.

#### Ejemplo Básico:

```javascript
function saludo(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();  
}

function despedida() {
    console.log("¡Adiós!");
}

saludo("Juan", despedida);
```

**Salida**:
```
Hola, Juan
¡Adiós!
```

En este ejemplo, la función `saludo` recibe una función `callback` (en este caso, `despedida`), y la ejecuta después de saludar.

#### Función Callback con `setTimeout`:

```javascript
function mostrarMensaje() {
    console.log("Este mensaje aparece después de 2 segundos.");
}

setTimeout(mostrarMensaje, 2000);  
```

**Salida (después de 2 segundos)**:
```
Este mensaje aparece después de 2 segundos.
```

#### Consideraciones:
- **Asincronía**: Los callbacks son útiles para manejar tareas que no bloquean el hilo principal, como operaciones de red o temporizadores.
- **Callback Hell**: Si anidas demasiados callbacks, el código puede volverse difícil de manejar. Para solucionar esto, se utilizan **promesas** o **async/await**.

---

# CLASES
las clases en java script lleguan en la version `ECMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion orientados a objetos las `clases` ya que js se enfocaba en lñas `programacion funcional`, sin embargo con la llegada es`ES6`, javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la `programacion orientada a objetos` con lña llegada de las `clases`.
## estructura de una clase en javascript.
una clase esta separada en tres grandes secciones.
1. el nombre de la clase que debera ser un singular y deberan estar escritos en pascalCase.
2. debera tener atributos estos deberan ser sustantivos y estar escristos en CamelCase.
3. debera tenr metodos (acciones, funciones) estos deberan ser verbos y estas escritos en CamelCase.
```js
class Computadora{
    //atributo
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){
        return "estoy encendiendo"
    }
    apagar(){
        return "estoy cerrando seccion y7 guardando informacion"
    }
    escribir(){
        return "estoy erscribiendo"
    }
    jugar(){
        return "estoy jugando"
    }

}
// instanciar
ley miPC=new computador ("gigabytyte")
```