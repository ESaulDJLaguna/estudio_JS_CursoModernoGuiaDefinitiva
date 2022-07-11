"use strict";

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

Object.seal(producto);

producto.estaDisponible = false;
// producto.imagen = "Imagen.jpg"; // ERROR
// delete producto.precio; // ERROR

console.log(producto); // {nombre: 'Monitor de 20 Pulgadas', precio: 300, estaDisponible: false}
console.log(Object.isSealed(producto)); // true
