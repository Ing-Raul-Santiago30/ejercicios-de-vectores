var numeros = [];

// Llenar el vector con 10 números aleatorios
for (var i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100));
}

console.log("Vector original:", numeros);

// Encontrar el valor mínimo y máximo del vector
var minimo = numeros[0];
var maximo = numeros[0];

for (var i = 1; i < numeros.length; i++) {
  if (numeros[i] < minimo) {
    minimo = numeros[i];
  } else if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}

console.log("El valor mínimo es:", minimo);
console.log("El valor máximo es:", maximo);
