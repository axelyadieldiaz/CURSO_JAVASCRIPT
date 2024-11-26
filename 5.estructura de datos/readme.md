# estructura de datos
## Indice
- [array](#lista-o-array)
- [objetos](#objetos)
a parte de los tipos de datos primitivos, javascript nos proporciona los tipos de datos complejos conocido tambien como datos estructurados o9 estructura de datos.
para poder trabajar con estos tipos de datos deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
javascript trabaja con dos tipos de datos estructurados que trabajan de manerqa independiente o en conjunto.
son los siguientes

## Lista o array
las listas en javascript son un tipo de dato estructurado que nos permite almacenar distintos tipos de datos primitivos separados por comas, cada tipo de dato que se almacene en una lista se lo conoce como elemento.
asi cada elemento estara separado por una coma.
### creacion
primero debemos crear un enlace (unja variable) y luego tendremos que asignarle un nombre, asignar una lista que se cree con chorchetes separados por comas.
``` javascript
//estoy creando una lista vacia
let miLista=[]
//creandi una lista de numeros
let numeros=[2,4,7,8,3]
//creando una lista de nombres
let nombre=["edwin","jory","adan","nadine"]
//crear una lista mixta
let mista=[4,"hola",false,[]]
```
### acceder a un elemento del array
para poder acceder a un elemento del array debemos entender que javascript asignara por cada elemento que especifico que este indice es incremental y comenzada de cero con el primer elemento, el ultimo elemento sera la cantidad de elementos jmenos uno.
```javascript
let numeros=[3,6,7,23,67,8]
console.log(numeros[2])
```
existe otra manera de acceder a los elementos de una lista, esto se logra recorriendo cada elemento de una lista esto se logra con un bucle `for`
```javascript
let nombres=["crhistian","jory","orlando","edwin"]
for (let i=0;<nombres,length;i++){
    console.log(nombres[i])
}
```
### metodos
los metodos son funciones que nos permiten crear actualizar y eliminar los elementos de una lista, todas las variables que almacenan una lista que nos permiten acceder a sus metodos poniendo un punto despues del nombre de la variable
- metodo para recuperar la longitud de elementos que tiene una lista
```javascript
let numeros=[2,4,5,6,7]
numeros.length
```
- metodo para agregar un elemento al final de la lista
```javascript
let vocales=["a"]
vocales.push("e")
```
- metodo para eliminar el ultimo elemento de una lista
```javascript
let vocales=["a","e"]
vocales.pop()
```
### tarea averiguar que otros metodos existen para el tratamiento de listas en javascript

## Objetos 
### creacion
### acceder a un elemento del objeto
### metodos