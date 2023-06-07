var vector = new Array(10);

// Asignamos los primeros dos elementos de la serie
vector[0] = 0;
vector[1] = 1;

// Calculamos y asignamos los siguientes 8 elementos
for (var i = 2; i < 10; i++) {
  vector[i] = vector[i - 1] + vector[i - 2];
}

// Mostramos el vector en pantalla
console.log(vector);