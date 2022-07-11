const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

// Agregar una propiedad durante la ejecución del proyecto
producto.imagen = "imagen.jpg";

// Eliminar propiedades del objeto
delete producto.estaDisponible;

console.log(producto); // {nombre: 'Monitor de 20 Pulgadas', precio: 300, imagen: 'imagen.jpg'}
