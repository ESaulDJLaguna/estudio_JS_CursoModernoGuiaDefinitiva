const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

// Retorna un arreglo de strings con las llaves del objeto que se le pasa como parámetro
console.log(Object.keys(producto)); // ["nombre", "precio", "estaDisponible"]

// Retorna un arreglo con los valores de las llaves del objeto. Se respeta el tipo de dato
// de las propiedades
console.log(Object.values(producto)); // ["Monitor de 20 Pulgadas", 300, true]

// Retorna un arreglo de arreglos. Cada arreglo es un par. Representa la propiedad y su respectivo valor
console.log(Object.entries(producto)); // [["nombre", "Monitor de 20 Pulgadas"], ["precio", 300], ["estaDisponible", true]]
