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
---

### **Métodos para Agregar o Quitar Elementos**
1. **`push()`**: Agrega uno o más elementos al final del array.  
   ```javascript
   let arr = [1, 2];
   arr.push(3); // [1, 2, 3]
   ```

2. **`pop()`**: Elimina el último elemento del array.  
   ```javascript
   arr.pop(); // [1, 2]
   ```

3. **`unshift()`**: Agrega uno o más elementos al inicio del array.  
   ```javascript
   arr.unshift(0); // [0, 1, 2]
   ```

4. **`shift()`**: Elimina el primer elemento del array.  
   ```javascript
   arr.shift(); // [1, 2]
   ```

---

### **Métodos para Acceder o Buscar Elementos**
5. **`indexOf()`**: Encuentra el índice de un elemento en el array (o -1 si no existe).  
   ```javascript
   arr.indexOf(2); // 1
   ```

6. **`includes()`**: Verifica si un elemento está en el array (retorna `true` o `false`).  
   ```javascript
   arr.includes(2); // true
   ```

7. **`find()`**: Encuentra el primer elemento que cumple con una condición.  
   ```javascript
   arr.find(x => x > 1); // 2
   ```

8. **`findIndex()`**: Encuentra el índice del primer elemento que cumple una condición.  
   ```javascript
   arr.findIndex(x => x > 1); // 1
   ```

---

### **Métodos para Ordenar y Revertir**
9. **`sort()`**: Ordena los elementos del array.  
   ```javascript
   arr.sort((a, b) => a - b); // [1, 2, 3]
   ```

10. **`reverse()`**: Invierte el orden de los elementos del array.  
    ```javascript
    arr.reverse(); // [3, 2, 1]
    ```

---

### **Métodos para Transformar**
11. **`map()`**: Aplica una función a cada elemento y devuelve un nuevo array.  
    ```javascript
    arr.map(x => x * 2); // [2, 4, 6]
    ```

12. **`filter()`**: Crea un nuevo array con elementos que cumplen una condición.  
    ```javascript
    arr.filter(x => x > 1); // [2, 3]
    ```

13. **`reduce()`**: Reduce el array a un solo valor, aplicando una función acumulativa.  
    ```javascript
    arr.reduce((sum, x) => sum + x, 0); // 6
    ```

14. **`forEach()`**: Ejecuta una función para cada elemento (no retorna nada).  
    ```javascript
    arr.forEach(x => console.log(x)); // 1, 2, 3
    ```

---

### **Métodos para Modificar**
15. **`splice()`**: Agrega, elimina o reemplaza elementos.  
    ```javascript
    arr.splice(1, 1, 4); // [1, 4, 3]
    ```

16. **`slice()`**: Crea una copia de una parte del array.  
    ```javascript
    arr.slice(1, 2); // [2]
    ```

---

### **Métodos para Combinar o Dividir**
17. **`concat()`**: Une dos o más arrays en uno nuevo.  
    ```javascript
    let arr2 = [4, 5];
    arr.concat(arr2); // [1, 2, 3, 4, 5]
    ```

18. **`join()`**: Une todos los elementos del array en un string.  
    ```javascript
    arr.join('-'); // "1-2-3"
    ```

19. **`split()`** (con strings): Convierte un string en un array.  
    ```javascript
    let str = "a,b,c";
    str.split(','); // ["a", "b", "c"]
    ```

---

### **Métodos para Crear o Rellenar**
20. **`from()`**: Crea un nuevo array a partir de un iterable (como un string o un objeto).  
    ```javascript
    Array.from('abc'); // ['a', 'b', 'c']
    ```

21. **`fill()`**: Rellena todos los elementos del array con un valor.  
    ```javascript
    arr.fill(0); // [0, 0, 0]
    ```

22. **`flat()`**: Aplana arrays anidados en un solo nivel.  
    ```javascript
    let nested = [1, [2, 3]];
    nested.flat(); // [1, 2, 3]
    ```

23. **`flatMap()`**: Aplica una función y aplana el resultado.  
    ```javascript
    arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
    ```

---
## Objetos
los objetos son tipos de datos estructurados similares a las listas, para poder acceder a un elemento de las lista javascript les asignaraindices, en este caso los objetos como unica diferencia de las lista nosotros podremos asignar el nombre del elemento al cual deseamos acceder a esto se le conoce como `clave:valor`
cada clave:valor es un elemento de un objeto se deseamos crear mas elementos tendremos que separarlos por comas.
### creacion
para crear un objeto debemos encerra los elementos en llaves`{}` cada elemento debera estar conformado por su `clave:valor`.
```javascript
let datosJory=["jory","redrigues",20,"M"]
let datosJoryObjeto={
    nombre:"jory",
    apellido:"rodrigues",
    edad:20,
    sexo:"todos los dias",
    ganado:["el primo","los chamos","las emfermeras","mineros"],
    direccion:{
        tipoCalle:"pasaje",
        nombreCalle:"querobamba",
        numeroVivienda:222,
        numeroCuarto:5
    },
    accion:()=>{console.log("hola soy jory")}
}
```
### acceder a un elemento del objeto
### metodos