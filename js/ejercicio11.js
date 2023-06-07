
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = parseInt(prompt("Ingrese un número entero:"));
    
    // Sumar el número al total
    suma += numeros[i];
  }
  
  // Calcular el promedio y convertirlo a número entero
  var promedio = Math.round(suma / numeros.length);
  
  // Contar cuántas veces se repite el promedio entero en el vector
  var contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] == promedio) {
      contador++;
    }
  }
  
  // Imprimir el vector, el promedio entero y cuántas veces se repite
  console.log("Números digitados:", numeros);
  