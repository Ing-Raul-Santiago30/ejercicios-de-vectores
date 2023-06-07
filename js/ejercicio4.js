// Declarar un arreglo vacío para almacenar los números enteros
let numeros = [];

// Pedir al usuario que ingrese 10 números enteros
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Ingrese el número entero #${i+1}:`));
  numeros.push(numero);
}

// Determinar la posición del número mayor en el arreglo
let mayor = numeros[0];
let posiciones = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

// Buscar las posiciones donde se encuentra el número mayor
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === mayor) {
    posiciones.push(i);
  }
}

// Imprimir el número mayor y sus posiciones en la consola
console.log(`El número mayor es ${mayor} y se encuentra en las posiciones ${posiciones}.`);