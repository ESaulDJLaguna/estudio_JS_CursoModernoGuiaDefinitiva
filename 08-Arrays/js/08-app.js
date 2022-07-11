const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

// Destructuring de objetos
const {nombre} = producto;
console.log({nombre}); // Monitor de 20 Pulgadas

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

// A diferencia de la destructuración de objetos que los nombres
// de las variables deben ser los mismos que las propiedades del objeto
// en la destructuración de arreglos podemos usar cualquier nombre
const [primero, segundo, tercero] = numeros; // Extrae los tres primeros elementos
console.log({primero}); // 10
console.log({tercero}); // 30

const [, , , , ultimo] = numeros; // Extrae solo el último elemento
console.log({ultimo}); // 50

const [, second, , , quinto] = numeros; // Extra el segundo y último elemento
console.log({second}); // 20
console.log({quinto}); // 50

// Extrae los primeros dos elementos y los elementos restantes en un arreglo nuevo
const [uno, dos, ...tres] = numeros;
console.log({uno}); // 10
console.log({dos}); // 20
console.log({tres}); // [30, 40, 50]
