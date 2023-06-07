alert('digite los numeros ');
var numeros = new Array(10);
var suma = 0;
var promedio = 0;

// Leer 10 números enteros y almacenarlos en el vector
for (var i = 0; i < numeros.length; i++) {
  numeros[i] = parseInt(prompt("Ingrese un número entero:"));
  
  // Sumar el número al total
  suma += numeros[i];
}

// Calcular el promedio y convertirlo a número entero
promedio = Math.round(suma / numeros.length);

// Imprimir el vector y el promedio entero de los datos
console.log("Números digitados:", numeros);
console.log("El promedio entero de los datos es:", promedio);