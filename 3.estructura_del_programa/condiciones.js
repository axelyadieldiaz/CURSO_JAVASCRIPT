// // ejemplo de condicion simple
// // capturamos la edad y lo convertimos a numero
// let edad = Number(prompt("ingresa tu edad"))
// // vereficamos si el tipo de datos edad es number realmente
// if (Number.isNaN(edad)){
//     //si la comparacion es verdad mostraremos por consola la rais cuadrada de edad
//     console.log(edad*edad)
// }

// // ejemplo de una condicion simple de una sola linea
// if (1+1==2) console.log("es verdad");

// //ejercicio: de consiciones
// // crear un programa que me pida un numero y me muestre por consola si es un numero par o impar 
// let numero=prompt("ingrese un numero")
// if (+numero%2==0){
//     console,log("es par");
// }else{
//     console.log("es impar")
// }

// EJERCICIO
//crear un programa que pida al usuario su edad y dependiendo su edad le daremos una serie de regalos
// REGALOS
/**
 * - si su edad esta entre 4 a 8 años: te ganaras un chupetin
 * - si su edad esta entre 9 a 13 años: te ganaras una pelota firmada por cuto
 * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia 6101.
 * - si su edad es mayor igual a 18 : te ganaras al primo lo haces leña.
 */

let edadPersona = Number(prompt("Ingresa tu edad:"))

if (edadPersona >= 4 && edadPersona <= 8) {
  console.log("Te ganaste un chupetín")
} else if (edadPersona >= 9 && edadPersona <= 13) {
  console.log("Te ganaste  una pelota firmada por Cuto")
} else if (edadPersona >= 14 && edadPersona <= 17) {
  console.log("Te ganaste un celular Nokia 6101")
} else if (edadPersona >= 18 && edadPersona <=100){
    console.log("Te ganaste al primo, lo haces leña")
}
else{
    console.log("no tienes la edad necesaria")
}