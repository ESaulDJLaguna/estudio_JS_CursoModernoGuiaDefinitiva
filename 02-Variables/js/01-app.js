// Inicializar una variable con un valor
var producto = "Monitor de 24 Pulgadas";
console.log(producto);

// Las variables se pueden reasignar
producto = "Monitor de 19 Pulgadas";
console.log(producto);

// JavaScript es un lenguaje de tipo dinámico, no se especifica tipo de dato
producto = 20;
console.log(producto);

// Se puede inicializar sin valor y asignarlo después
var disponible;
disponible = true;

// Inicializar múltiples variables. Se utiliza la coma al final. Esto nos
// evita tener que escribir muchas veces var, el punto y coma final es obligatorio
var categoria = "Computadoras",
  marca = "Marca Famosa",
  calificacion = 5;

// Las variable NO pueden iniciar con un número
//var 99dias; // ERROR
var dias99; // Bien
//var 01_; // ERROR
var __01; // Bien

//! Estilos para escribir variables con más de una palabra
// Camel Case
var nombreProducto;
// Underscore o snake
var nombre_producto_categoria_precio;
// Pascal Case
var NombreProducto;
