// FORMA IMPERATIVA: Modifica el objeto actual
// FORMA DECLARATIVA: NO Modifica el objeto actual.
const carrito = [];

const producto = {nombre: "Monitor de 32 Pulgadas", precio: 400};
const producto2 = {nombre: "Celular", precio: 800};

// Agrega al final del arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {nombre: "Teclado", precio: 50};
const producto4 = {nombre: "Ratón", precio: 30};

// Agrega al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito); // [{nombre: 'Teclado', precio: 50}, {nombre: 'Celular', precio: 800}, {nombre: 'Monitor de 32 Pulgadas', precio: 400}];

// Elimina el último elemento de un arreglo.
carrito.pop();
console.table(carrito); // [{nombre: 'Teclado', precio: 50}, {nombre: 'Celular', precio: 800}];

// Elimina el primer elemento de un arreglo.
carrito.shift();
console.table(carrito); // [{nombre: 'Celular', precio: 800}];

const carrito2 = [...carrito, producto, producto3, producto4];
// [{nombre: "Celular", precio: 800}, {nombre: "Monitor de 32 Pulgadas", precio: 400}, {nombre: "Teclado", precio: 50}, {nombre: "Ratón", precio: 30}]
console.table(carrito2);

// .splice elimina elementos "intermedios" de un arreglo.
// Recibe dos parámetros: en que posición va a comenzar a eliminar y cuántos elementos se quieren eliminar
// Elimina los elementos: 'Monitor de 32 Pulgadas' y 'Teclado'
carrito2.splice(1, 2);
console.table(carrito2); // [{nombre: "Celular", precio: 800}, {nombre: "Ratón", precio: 30}]
