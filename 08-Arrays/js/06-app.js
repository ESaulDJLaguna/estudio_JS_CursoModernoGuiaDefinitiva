const carrito = [];

const producto = {
  nombre: "Monitor de 32 Pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

let resultado;

// El spread operator se agrega al (los) arreglo(s) de los cuales se quiere copiar su contenido

// Copia el contenido del arreglo 'carrito' y almacenalo en 'resultado', después agrega
// un nuevo elemento a dicho arreglo: producto
resultado = [...carrito, producto];

// Genera una copia del arreglo 'resultado' y en seguida agrega el 'producto2' y guarda todo el
// contenido en resultado
resultado = [...resultado, producto2];
// El orden también importa. Agrega primero 'producto3' y a continuación todos los elementos de 'resultado'
resultado = [producto3, ...resultado];

console.table(resultado);
