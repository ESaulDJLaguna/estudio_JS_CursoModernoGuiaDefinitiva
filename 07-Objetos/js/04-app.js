const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

// Anterior forma de acceder al valor de una propiedad
const nombreProducto = producto.nombre;
console.log(nombreProducto); // Monitor de 20 Pulgadas

// Forma actual de almacenar los valores de las propiedades de un objeto en variables individuales
// Extrae el valor del objeto y crea la variable
const {nombre, precio} = producto;

console.log(nombre); // Monitor de 20 Pulgadas
console.log(precio); // 300
