# ejercicio final del capitulo de funciones
1. crear funcion que devuelva el numero menor psado por agumento.
2. haciendo el uso de la recursion crear una funcxion que me muestre los primeros 20 numeros de la serie fibonacci.
Claro, aquí tienes el código de ambas funciones con explicaciones detalladas de cada una:

### 1. Función para devolver el número menor de una lista de argumentos

La idea aquí es crear una función que acepte una cantidad variable de números y devuelva el menor de ellos. Utilizaremos `*args` para recibir múltiples argumentos y la función `min()` de Python para encontrar el valor mínimo.

```python
def numero_menor(*numeros):
    if not numeros:
        return None  # Retorna None si no se pasan argumentos
    return min(numeros)
```

**Explicación del código:**

- `*numeros`: Este asterisco (`*`) permite que la función acepte una cantidad variable de argumentos. Los valores pasados a la función se almacenan en una tupla llamada `numeros`.
  
- `if not numeros:`: Comprobamos si `numeros` está vacío. Si no se pasa ningún argumento, retorna `None`, lo cual es útil para evitar errores.
  
- `return min(numeros)`: Usamos la función `min()` de Python para obtener el valor mínimo de la tupla `numeros` y devolverlo.

**Ejemplo de uso:**

```python
print(numero_menor(5, 3, 8, 2, 9))  # Salida: 2
```

Al llamar a `numero_menor(5, 3, 8, 2, 9)`, el resultado será `2`, que es el menor valor entre los números pasados como argumentos.


### 2. Función recursiva para mostrar los primeros 20 números de la serie Fibonacci

La serie de Fibonacci es una secuencia en la que cada número es la suma de los dos anteriores. Esta secuencia comienza típicamente con `0` y `1`. La función recursiva calculará los primeros `n` números de la serie. Aquí te explico cómo funciona la función recursiva.

```python
def fibonacci(n, serie=[0, 1]):
    if len(serie) >= n:
        return serie[:n]
    serie.append(serie[-1] + serie[-2])
    return fibonacci(n, serie)
```

**Explicación del código:**

- `def fibonacci(n, serie=[0, 1])`: Definimos la función `fibonacci` que toma dos parámetros: `n` (la cantidad de números de Fibonacci que queremos) y `serie`, que se inicializa con `[0, 1]` (los primeros dos números de la serie).

- `if len(serie) >= n:`: Comprobamos si la longitud actual de la serie es igual o mayor que `n`. Si es así, retornamos solo los primeros `n` elementos de `serie` (esto es para asegurarnos de que no calculamos más de los necesarios).

- `serie.append(serie[-1] + serie[-2])`: Si la longitud de la serie es menor que `n`, añadimos el siguiente número de Fibonacci, que es la suma de los dos últimos elementos de `serie` (`serie[-1] + serie[-2]`).

- `return fibonacci(n, serie)`: Llamamos a la función `fibonacci` nuevamente, ahora con el nuevo valor de `serie` que incluye el último número agregado. Esta llamada recursiva se repite hasta que `len(serie) >= n`.

**Ejemplo de uso:**

```python
print(fibonacci(20))
```

Cuando ejecutas `fibonacci(20)`, la función devolverá los primeros 20 números de la serie Fibonacci, que serán:

```plaintext
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
```

Este enfoque recursivo permite que cada llamada agregue un número más a la secuencia hasta alcanzar el número deseado (`n`).