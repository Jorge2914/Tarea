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

let numero1 = 4;
let numero2 = 7;
let numero3 = 10;

hola(numero1, numero2, numero3);

function hola(numero1, numero2, numero3) {
  let resultado = numero1 + numero2 + numero3; 
  return resultado; 
  
}

console.log(hola(numero1, numero2, numero3));

let numero4 = 12 
let numero5 = 15
let numero6 = 18
let numero7 = 22

hola2(numero4, numero5, numero6, numero7);

function hola2(numero4, numero5, numero6, numero7) {
  let resultado2 = numero4 + numero5 + numero6 +numero7;
  let promedio = resultado2 / 4;
  return promedio;
}

console.log(hola2(numero4, numero5, numero6, numero7));

let dolares = 100
let euros = 0.85

hola3(dolares, euros);

function hola3(dolares, euros) {
  let conversor = dolares * euros;
  return conversor;
}

console.log(hola3(dolares, euros));



let contraseña = "Hola24"

hola4(contraseña);

function hola4(contraseña) {
  if(contraseña === "Hola24") {
  return console.log("correcto")
  } else {
    console.log("incorrecto")
  }
} 

let pan = 30
let sandia = 50
let juego = 100
let tacos = 500
let presupuesto = 100

if (pan < presupuesto) {
  console.log("Puedes comprar pan cuesta menos que tu presupuesto.");
} else {
  console.log("No lo puedes comprar el pan");
}

if (tacos > presupuesto) {
  console.log("No puedes comprar tacos, cuestan más que tu presupuesto.");
} else {
  console.log("Si lo puedes comprar el taco");
}

if (juego <= presupuesto) {
  console.log("Puedes comprar el juego, está dentro de tu presupuesto.");
} else {
  console.log("No lo puedes comprar el juego");
}

if (sandia === 50) {
  console.log("La sandía cuesta exactamente 50.");
} else {
  console.log("No cuesta eso");
}

if (pan + sandia < presupuesto) {
  console.log("Puedes comprar pan y sandía juntos, está dentro de tu presupuesto.");
} else {
  console.log("No lo puedes comprar todo junto");
}











let contraseñaN = "Hola10"

contraseñaNueva(contraseñaN);



function contraseñaNueva(contraseñaN) {
  if (contraseñaN === "Hola10") {
    console.log("Contraseña correcta");
    Hola10(contraseñaN)
  } else {
      console.log("Contraseña incorrecta");
  }
}

function cantidadCaracteres(contraseñaN) {
  const longitud = contraseñaN.length;
  return longitud;
}
const resultado = cantidadCaracteres(contraseñaN);
console.log("Longitud de la contraseña:" + resultado);

if(resultado <= 10) {
  console.log("Caracteres admitidos")
} else { 
  console.log("Superaste la cantidad de caracteres permitidos")
}

function Hola10 (contraseñaN) {
  for (let i = 0; i < contraseñaN.length; i++) {
  console.log(contraseñaN[i])
  }
}



