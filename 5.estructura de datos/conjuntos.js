// crear una lista que almacene las cinco vocales y luego las muestre por consola
// let vocales=["a","e","i","o","u"]
// console.log(vocales)

// //acceder a la vocal "o"
// console.log(vocales[3])

// // accediendo a los elementos con for 
// for (let i=0;i<vocales.length;i++){
//     console.log(vocales[i])
// }

// console.log(vocales.length)

// trabajo 
// tengo una lista de 7 frutas
//crear un programa que identifique si en mi lista existe naranja, de existr me mostrara su indice, de no existir me mostrara un mensaje de error.
// Lista de frutas
let frutas = ["manzana", "pera", "plátano", "mango", "uva", "fresa", "cereza"];

// Verificar si 'naranja' está en la lista
let frutaABuscar = "naranja";
let indice = frutas.indexOf(frutaABuscar);

if (indice !== -1) {
    console.log(`La fruta "${frutaABuscar}" se encuentra en el índice ${indice}.`);
} else {
    console.log(`Error: La fruta "${frutaABuscar}" no está en la lista.`);
}

//ejercicio
// crear dos funciones que reciban por parametros una lista de numeros una funcion encontrara de devolvera el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista. ojo no usar los metodos de min y max.

// crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista.
