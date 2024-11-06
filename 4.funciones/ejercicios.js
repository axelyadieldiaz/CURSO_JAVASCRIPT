//haciendo uso de las funciones de tipo closure 
//ejercicio1
//pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje de vienvenida mas el nombre que ingreso el usuario.
// function solicitarNombre() {
//     let nombre = prompt("Por favor, ingresa tu nombre:");
//     console.log("Gracias, has ingresado el nombre:", nombre);
//     return nombre;
// }

// function solicitarEdad() {
//     let edad = parseInt(prompt("Ahora, ingresa tu edad en números:"));
//     console.log("La edad ingresada es:", edad);
//     return edad;
// }

// function verificarMayorDeEdad(edad) {
//     if (edad >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function verificarEdad() {
//     let nombre = solicitarNombre();
//     let edad = solicitarEdad();

//     return function() {
//         if (verificarMayorDeEdad(edad)) {
//             console.log(`¡Bienvenido, ${nombre}! Nos alegra que puedas ingresar.`);
//         } else {
//             console.log("Lo sentimos, eres muy pequeño para ingresar.");
//         }
//     };
// }

// let bienvenidaUsuario = verificarEdad();
// bienvenidaUsuario();

//ejercicio2
//crear un programa que pida registrar el nombre de un producto el usuario podra luego eliminar el producto o actualizar el nombre del producto.
//observacion al realizar la actualizacion podre ver el valor anterior como valor nuevo.
function gestionarProducto() {
    let producto = prompt("Ingresa el nombre del producto:")

    function eliminarProducto() {
        producto = null
        console.log("Producto eliminado.")
    }

    function actualizarProducto() {
        if (producto) {
            let nuevoNombre = prompt(`Nombre actual: ${producto}. Ingresa el nuevo nombre:`)
            console.log(`Producto actualizado: de "${producto}" a "${nuevoNombre}".`)
            producto = nuevoNombre;
        } else {
            console.log("No hay producto para actualizar.")
        }
    }

    function verProducto() {
        if (producto) {
            console.log(`Producto registrado: ${producto}`)
        } else {
            console.log("No hay producto registrado.")
        }
    }

    function salir() {
        console.log("Saliendo...")
    }

    return function() {
        let opcion = prompt("1. Eliminar\n2. Actualizar\n3. Ver\n4. Salir")

        if (opcion === "1") {
            eliminarProducto()
        } else if (opcion === "2") {
            actualizarProducto()
        } else if (opcion === "3") {
            verProducto()
        } else if (opcion === "4") {
            salir()
        } else {
            console.log("Opción no válida.")
        }
    }
}

let gestionar = gestionarProducto()
gestionar()
