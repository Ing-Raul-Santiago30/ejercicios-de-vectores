var numeros = new Array(10);
var posiciones = [];

// Leer 10 números enteros y almacenarlos en el vector
for (var i = 0; i < numeros.length; i++) {
  numeros[i] =parseInt(prompt("Ingrese un número enter o:"));
  
  // Verificar si el número tiene más de 3 dígitos y si es así, guardar su posición en el array
  if (numeros[i].toString().length > 3) {
    posiciones.push(i);
  }
}

// Imprimir el vector y las posiciones de los números con más de 3 dígitos
console.log("Números digitados:", numeros);
console.log("Las posiciones de los números con más de 3 dígitos son:", posiciones)