// PI
console.log(Math.PI); // 3.14159...

// Redondear
console.log(Math.round(2.8)); // 3
console.log(Math.round(2.2)); // 2
console.log(Math.round(2.5)); // 3

// Redondear hacia arriba
console.log(Math.ceil(2.5)); // 3
console.log(Math.ceil(2.1)); // 3

// Redondea hacia abajo
console.log(Math.floor(2.9)); // 2

// Raíz cuadrada
console.log(Math.sqrt(144)); // 12

// Valor absoluto
console.log(Math.abs(-500)); // 500

// Potencia
console.log(Math.pow(8, 3)); // 8^3 = 512

// Mínimo de una serie de números
console.log(Math.min(3, 5, 1, 12, -3)); // -3

// Máximo de una serie de números
console.log(Math.max(3, 5, 1, 12, -3)); // 12

// Devuelve un número aleatorio mayor que cero y menor que uno (NO uno)
console.log(Math.random());

// Números aleatorios entre 0 y 10, ambos inlcuidos
console.log(Math.round(Math.random() * 10));

// Números aleatorios en un rango: minimo y máximo, ambos incluidos
// Math.floor(Math.random()*((maximo+1) - minimo) + minimo)
// Números entre 5 y 10, ambos incluidos
console.log(Math.floor(Math.random() * (10 + 1 - 5) + 5));
