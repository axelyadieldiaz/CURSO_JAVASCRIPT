//ejercicio con clases
//diseñar una clase para mi entidad calular
// trendra como atributos numero,marca,mnodelo,capacidad de bateria,
//tendra como metodos encender, apagar, llamar, colgar, enviar mensaje.
class Celular {
    constructor(numero, marca, modelo, capacidadBateria) {
        this.numero = numero;
        this.marca = marca;
        this.modelo = modelo;
        this.capacidadBateria = capacidadBateria;
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        console.log("Celular encendido.");
    }

    apagar() {
        this.encendido = false;
        console.log("Celular apagado.");
    }

    llamar(numeroDestino) {
        console.log(this.encendido ? `Llamando a ${numeroDestino}...` : "El celular está apagado.");
    }

    enviarMensaje(numeroDestino, mensaje) {
        console.log(this.encendido ? `Mensaje a ${numeroDestino}: ${mensaje}` : "El celular está apagado.");
    }
}

// Ejemplo de uso:
const miCelular = new Celular("987654321", "Xiaomi", "Redmi Note 10", 5000);
miCelular.encender();
miCelular.llamar("123456789");
miCelular.enviarMensaje("123456789", "¡Hola!");
miCelular.apagar();
