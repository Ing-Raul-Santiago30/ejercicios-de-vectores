var numeros = new Array(10);
var suma = 0;
var existePromedioEntero = false;

// Leer 10 números enteros y almacenarlos en el vector
for (var i = 0; i < numeros.length; i++) {
  numeros[i] = parseInt(prompt("Ingrese un número entero:"));
  
  // Sumar el número al total
  suma += numeros[i];
}

// Calcular el promedio y convertirlo a número entero
var promedio = Math.round(suma / numeros.length);

// Verificar si el promedio entero está almacenado en el vector
for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] == promedio) {
    existePromedioEntero = true;
    break;
  }
}

// Imprimir el vector y si el promedio entero está almacenado en el mismo
console.log("Números digitados:", numeros);
if (existePromedioEntero) {
  console.log("El promedio entero", promedio, "está almacenado en el vector.");
} else {
  console.log("El promedio entero", promedio, "no está almacenado en el vector.");
}
