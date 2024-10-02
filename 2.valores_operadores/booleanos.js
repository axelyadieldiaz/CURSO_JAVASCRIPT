// ejemplos con operadores de comparacion 
console.log(5>6) 
// esta operacion me generara un valor de tipo boleano

// mayor igual que
console.log(6>=6)

// no es igual
console.log(5 != 7)

// NaN == NaN
console.log(NaN==NaN)

// averiguar la forma en que se realiza las comparaciones con cadena de texto

// todas las letras mayusculas seran menores a las minusculas
//Z>a
// por que javascript compara los codigos unicode de cada caracter
//!>=?
// 33 >= 63
console.log("!">="?")
//ardvark < zoroaster
console.log("ardvark"<"zoroaster")

// en el caso del operdor && su resultado sera verdadero solo si ambos valores verdaderos.
console.log(true && false)
console.log(true && true)
//OBSERVACION: si ambos valores son verdaderos devolvera al segundo valor .
console.log("hola" && "mundo")
//OBSERVACION: en caso exista un valor verdadero y uno falsio devolvera el valor falso.
console.log(0 && "hola")

//OJO: los valores o,NaN y una cadena vacia "" son considerados como false.

// en el caso del operador || produce verdadero si cualquiera de los valores dados es verdadero.
console.log(false || false)
console.log( true || false)

//
respuesta="te devuelvo los ositos tiernos"
console.log(respuesta || "tu respuesta no existe")
console.log(0 || "")
// en el caso del operador ! invierte el valor dado 
console.log(!true)
console.log(!false)

//usando el operador relacional
//observacion solo funciona en objetos o listas

//averiguar por que sale false en este caso.
console.log("hola" in ["hola","mundo"])