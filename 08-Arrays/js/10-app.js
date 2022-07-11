const carrito = [
  {nombre: "Monitor 27 Pulgadas", precio: 500},
  {nombre: "Televisión", precio: 100},
  {nombre: "Tablet", precio: 200},
  {nombre: "Audifonos", precio: 300},
  {nombre: "Teclado", precio: 400},
  {nombre: "Celular", precio: 700},
];

const precioProducto = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

// [ "Monitor 27 Pulgadas - Precio: 500", "Televisión - Precio: 100",
// 		"Tablet - Precio: 200", "Audifonos - Precio: 300",
// 		"Teclado -  Precio: 400", "Celular - Precio: 700", ];
console.log(precioProducto);
