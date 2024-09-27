// si nuestro texto tiene que estar entre comillas simples
console.log("'este texto se muestra entre comillas simples'")
// si nuestro texto tiene que estar entre comillas dobles
console.log('"este texto se muestra entre comillas dobles"')
//si nuestro texto tendra tanto comillas dobles como simples
console.log(`'esta en la comillas simples', "esta en comillas dobles"`)

// usando caracter de escape 
console.log("de este texto solo esta \"palabra\" estara en comillas ")

// salto de linea usando acento grave
console.log(`aqui una linea
    aqui otra linea`)

// salto de linea ante es6
console.log(" esta es mi primera linea \n y esta es la segunda linea")

// tabulacion con asentos graves
console.log(`
este texto no esta tabulado
     este texto si esta tabulado 
    `)

// tabulando con el caracter de escape
console.log("si tabular \t y tabulado ")
console.log("esta es una barra invertida \\")

// concatenando cadenas 
console.log("hola"+" "+"mundo ")
console.log("hola "+"mundo")

// usando plantillas liteales
NumeroUno=34
NumeroDos=23
console.log(`la suma de ${NumeroUno} + ${NumeroDos} es = ${NumeroUno+NumeroDos}`)