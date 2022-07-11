const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

producto.estaDisponible = false;
delete producto.precio;

console.log(producto); // {nombre: 'Monitor de 20 Pulgadas', estaDisponible: false}
