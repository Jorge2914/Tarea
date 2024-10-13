/* 1. Suma de tres números
Escribe una función que tome tres números como entrada y devuelva la suma de esos números.

Entrada:

Tres números (por ejemplo: 4, 7, 10)
Salida esperada:

La suma de esos tres números.

2. Promedio de cuatro números
Crea una función que tome cuatro números y calcule el promedio de ellos.

Entrada:

Cuatro números (por ejemplo: 12, 15, 18, 22)
Salida esperada:

El promedio de los cuatro números.


3. Conversión de dólares a euros
Escribe una función que convierta una cantidad en dólares a euros. Asume que 1 dólar es igual a 0.85 euros.

Entrada:

Un número que representa una cantidad en dólares (por ejemplo: 100)
Salida esperada:

La cantidad equivalente en euros. 
*/

let a = 4
let b = 7
let c = 10

function suma(a, b, c) {
  const resultado2 = a + b + c
    return console.log(resultado2)
}

suma(a, b, c)

let d = 12
let e = 15
let f = 18
let g = 22
function promedio (d, e, f, g) {
  const resultado6 = d + e + f + g
  const resultado7 = resultado6 / 4
  return console.log(resultado7)
}

promedio(12, 15, 18, 22)

const dolar = 100
const euro = 0.85 

function conversor (dolar, euro) {
  const resultado8 = dolar * euro
  return console.log(resultado8)
}
conversor(euro, dolar)
