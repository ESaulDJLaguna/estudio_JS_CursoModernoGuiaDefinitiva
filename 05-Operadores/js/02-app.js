const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Comparador no estricto que compara que dos valores sean iguales
console.log(numero1 == numero3); // 20 == 30: false
console.log(numero1 == numero2); // 20 == '20': true

// Comparador estricto. Compara el valor y el tipo de dato
console.log(numero1 === numero2); // 20 === '20': false
console.log(numero1 === parseInt(numero2)); // 20 === 20: true

// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // true
// Solo compara el valor
console.log(numero1 != numero2); // 20 != '20': false
// Diferenciador estricto. Compara el valor y el tipo de dato
console.log(numero1 !== numero2); // 20 !== '20': true
console.log(numero1 !== parseInt(numero2)); // 20 !== '20': false
