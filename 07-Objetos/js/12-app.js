// Object Literal
const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

// Object Constructor
// Era la anterior forma de "emular" clases en JavaScript, hoy en día ya no se utiliza
// es recomendable crear objetos de la forma "Object Literals"
function Producto(nombre, precio) {
  this.estaDisponible = true;
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto("Tablet", 3000);
console.log(producto2); // Producto {estaDisponible: true, nombre: 'Tablet', precio: 3000}
