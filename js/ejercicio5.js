var numeros = new Array(10);
var posiciones = [];   // Crear un array vacío para almacenar las posiciones de los números terminados en 4

// Leer 10 números enteros y almacenarlos en el vector
for (var i = 0; i < numeros.length; i++) {
  numeros[i] = 
  console.log(numeros)
  
  // Verificar si el número termina en 4 y si es así, guardar su posición en el array
  if (numeros[i] % 10 == 4) {
    posiciones.push(i);
  }
}

// Imprimir el vector y las posiciones de los números que terminan en 4
console.log("Números digitados:", numeros);
console.log("Las posiciones de los números que terminan en 4 son:", posiciones);