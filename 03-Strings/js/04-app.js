const producto = "     Monitor de 20 pulgadas     ";

console.log(producto);

// Eliminar espacios del inicio
console.log(producto.trimStart());

// Eliminar espacios del final
console.log(producto.trimEnd());

// Eliminar espacios en ambos lados
console.log(producto.trim());

// Se pueden utilizar los métodos de forma encadenada
console.log(producto.trimStart().trimEnd());
