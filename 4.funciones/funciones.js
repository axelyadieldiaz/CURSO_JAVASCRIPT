// //EJERCICIO
// // crear una funcion que me de un saludo de bienvenida 
// function saludo(){
//     console.log("bienvenido")
// }
//
// let saludo=function(){
//     console.log("bienvenido")
// }

// binding en java script lo que hace es subir las funciones declarativas a la cabecera de mi archivo
// function despedida(){
//     return "adios"
// }
// let saludo
console.log(despedida())

// en el caso de funciones como valor o funciones flecha el binding solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar las funciones despues  de haberlo creado
let saludo=()=>{return "hola primo"}
console.log(saludo())

// en el casp de la funcion ceckarativa el binding eleva toda la funcion al principio del archivo por eso podemos ejecutar los funcion desde cualquier parte del archivo incluso antes de que sea creada.
function despedida(){
    return "adios"
}