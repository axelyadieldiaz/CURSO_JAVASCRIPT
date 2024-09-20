# Introduccion
- **Temario**
  - [comentarios](#comentarios) 
  - [Consola](#consola)
  - Naining
  
## Comentarios
Es la parte denttro de mi archivo de codigo que no es leido ni ejecutado por el interpetre de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlos para silenciar temporalmente partes del codigo *(comentar un codigo)*

### Tipos de Comentario
1. **Una sola linea**
   ```js
   //comentario de una sola linea
   ```
2. **Multiples lineas**
   ```js
   /*
   comentario de multi
   linea
   */
   ```
3. **JSDoc**
4. ```js
   /**
    * este es una linea
    * esta es otra linea
    */
   ```
   este tipo de comentario es muy usado para documentar el codigo, generalmente usado para la explicacion de funciones y clases en `js`.

   [Link del archivo](comentarios.js)
   
   ## Consola
   La herramienta de JavaScripts mas usada dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo
   > [!TIP]
   > #### depuracion , es la tecnica que nos permite mostrar el codigo en las distintas facesdel desarrollo ,y verificar que el mensaje mostrado sea el correcto. Y verificando que el codigo no tenga errores de sintaxis de logica y de precaucion. 

   ### Tipos de mensaje por consola
   #### 1. Notificadores
   MOSTRAR UN MENSAJE POR CONSOLA
   ```js
   console.log("hola mundo")
   ```
   MOSTRAR UN MENSAJE DE ESTILO INFORMATIVO
   ```js
   console.info("mensaje informativo")
   ```
   MOSTRAR UN MENSAJE DE TIPO ALERTA
   ```js
   console.warn("Mensaje tipo alerta")
   ```
   MOSTRAR MENSAJE DE ESTILO O TIPO ERROR
   ```js
   console.error("mensaje tipo error")
   ```
   #### 2. gestion de tiempo
este tipo de mensaje no sirve para ver la duracion de ejecucion de nuestro codigo y poder optmizar para hacer uso de esta herramienta tenemos que iniciar la consola con un `time()` luego vendra el codigo que deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`.
```js
edad=18
if(edad>=18){
    console.log("eres mayor de edad")
}else{
    console.warn("eres pulpin")
}
```
#### 3. tablas 
este tipo de mensaje por consola nos muestra la imformacion en una tabla,.
solo formateara a los datos de tipo `array` y `objetos`.
```js
```

## naiming
es la tecnica para nombrar variables, funcion y clases dentro de un lenguaje de progrmacion
las variables tienen reglas muy especificas que debemos seguir a la hora de designar sus nombres.
### usos incorrectos
- no se puede usar espacios.
>[!WARNING]
```js
> # Incorrecto
con espacio=45
```
- no usar un numero delante
>[!WARNING]
```js
> # Incorrecto
1numero=45
```
- evitar simbolos y `snake_case`
>[!WARNING]
```js
> # Incorrecto
dame$=45
> incorrecto
con_guiones_bajos="no es correcto"
```
### usos correctos
- debemos usar nombres que expliquen que aportara esa variable a nuestro codigo
- usar `camelcare`
>[!INFORMATION]
```js
> # Correcto
edadAlumno=45
```