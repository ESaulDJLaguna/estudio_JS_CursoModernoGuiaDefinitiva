const producto = "Monitor 20 Pulgadas";

// Muetra la longitud de una cadena
console.log(producto.length); // 19

// Retorna la posición donde se encuentra la cadena buscada
// dentro de producto, -1 si no la encuentra
console.log(producto.indexOf("Pulgadas")); // 11
console.log(producto.indexOf("Precio")); // -1

// Retorna true si encuentra la cadena buscada dentro de
// 'producto' o false si no la encuentra
console.log(producto.includes("Pulgadas")); // true
console.log(producto.includes("Precio")); // false
