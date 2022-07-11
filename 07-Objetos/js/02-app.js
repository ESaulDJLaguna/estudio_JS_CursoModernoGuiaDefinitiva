const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

console.log(producto); // {nombre: 'Monitor de 20 Pulgadas', precio: 300, estaDisponible: true}

// Se le conoce como 'Sintaxis de punto'
console.log(producto.nombre); // Monitor de 20 Pulgadas

// Otra forma no muy común de acceder al valor de una llave (propiedad)
console.log(producto["nombre"]); // Monitor de 20 Pulgadas
