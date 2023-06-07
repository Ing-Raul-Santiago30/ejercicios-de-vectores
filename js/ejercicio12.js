// Declarar un arreglo vacío para almacenar los números enteros
let numeros = [];

// Pedir al usuario que ingrese 10 números enteros
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Ingrese el número entero #${i+1}:`));
  numeros.push(numero);
}

// Determinar cuántos números son múltiplos de 3 en el arreglo
let cantidad = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 === 0) {
    cantidad++;
  }
}

// Imprimir la cantidad de números múltiplos de 3 en la consola
console.log(`Hay ${cantidad} números múltiplos de 3.`);
