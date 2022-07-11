// Sin el modo estricto, el programa se ejecutará hasta el final, en las partes
// cuando intentamos modificar el objeto congelado, simplemente no se ejecutarán.
// Si se utiliza el modo estricto, no ejecutará la aplicación hasta eliminar
// los intentos de modificación del objeto
"use strict";

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

// El método freeze evita que la estructura de un objeto sea modificada
// y también que no se puedan editar los valores de las propiedades
Object.freeze(producto);

// producto.estaDisponible = false; // ERROR: EL OBJETO ESTÁ CONGELADO
// producto.imagen = "imagen.jpg"; // ERROR: EL OBJETO ESTÁ CONGELADO
// delete producto.precio; // ERROR: EL OBJETO ESTÁ CONGELADO

console.log(producto);
console.log(Object.isFrozen(producto)); // true
