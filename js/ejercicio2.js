
var numerosPrimos = [];   // Crear un array vacío para guardar los números primos
var contador = 0;   // Contador de números primos encontrados

// Verificar si cada número entre 100 y 300 es primo
for (var i = 100; i <= 300; i++) {
  var esPrimo = true;   // Suponemos que el número es primo

  // Verificar si el número es divisible entre algún otro número
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      esPrimo = false;   // Si es divisible, no es primo
      break;
    }
  }

  // Si el número es primo, agregarlo al array
  if (esPrimo) {
    numerosPrimos.push(i);
    contador++;

    // Si ya se agregaron 10 números primos, detener el bucle
    if (contador == 10) {
      break;
    }
  }
}

// Imprimir los números primos en la consola
console.log('Números primos encontrados:', numerosPrimos);
