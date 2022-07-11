const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

// Método que concatena dos o más cadenas
console.log(producto.concat(": ", precio));
console.log(producto.concat(" en descuento. De ", precio, " a 29 USD"));

// Concatena cadenas
console.log(producto + ". Con un precio de: " + precio);
// Agrega un espacio al final de cada cadena
console.log(producto, "Con un precio de:", precio);

// Template strings o template literals
console.log(`El Producto ${producto} tiene un precio de $${precio}`);
