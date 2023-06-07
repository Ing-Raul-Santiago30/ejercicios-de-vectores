// Declarar un arreglo vacío para almacenar los números enteros
let numeros = [];

// Pedir al usuario que ingrese 10 números enteros
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Ingrese el número entero #${i+1}:`));
  numeros.push(numero);
}

// Determinar la cantidad de veces que se repite el número mayor en el arreglo
let mayor = numeros[0];
let cantidad = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === mayor) {
    cantidad++;
  }
}

// Imprimir la cantidad de veces que se repite el número mayor en la consola
console.log(`El número mayor es ${mayor} y se repite ${cantidad} veces.`);
