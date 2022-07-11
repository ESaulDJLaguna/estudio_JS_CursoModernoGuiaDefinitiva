const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// Objeto Number que contiene constantes y métodos relacionados con los números
console.log(Number);

// Convierte una cadena a un número entero. Si la cadena representa un número flotante, solo convierte la parte entera
console.log(Number.parseInt(numero1)); // 20
console.log(Number.parseInt(numero2)); // 20
console.log(Number.parseFloat(numero2)); // 20.2
console.log(Number.parseInt(numero3)); // NaN

// Revisar si es un entero o no
console.log(Number.isInteger(numero4)); // true
console.log(Number.isInteger(numero1)); // false
