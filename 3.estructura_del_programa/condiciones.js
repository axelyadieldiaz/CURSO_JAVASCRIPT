// ejemplo de condicion simple
// capturamos la edad y lo convertimos a numero
let edad = Number(prompt("ingresa tu edad"))
// vereficamos si el tipo de datos edad es number realmente
if (Number.isNaN(edad)){
    //si la comparacion es verdad mostraremos por consola la rais cuadrada de edad
    console.log(edad*edad)
}

// ejemplo de una condicion simple de una sola linea
if (1+1==2) console.log("es verdad");