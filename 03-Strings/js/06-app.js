const producto = "Monitor de 20 Pulgadas";

// .repeat: permite repetir una cadena de texto n veces. Si el número que se
// pasa es un número decimal, se reptirá tantas veces según el número
// entero, por ejemplo: 3.2 => repetirá 3 veces
const texto = "en Promoción ".repeat(3);
console.log(texto);
console.log(`${producto}, ¡¡¡${texto}!!!`);

// .split: se le pasa como parámetro un caracter o una cadena. Si dicho
// parámetro se encuentra en la cadena una o más veces, convierte la cadena
// en un arreglo de caracteres. Los elementos serán las partes de la cadena
// que fueron divididas por el parámetro sin ser incluido este
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // ["Estoy", "aprendiendo", "JavaScript", "Moderno"]

const hobbies =
  "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));
