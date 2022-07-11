const producto = "Monitor de 20 Pulgadas";
console.log(producto);

// .replace: permite reemplazar un texto en una cadena
console.log(producto.replace(" Pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));
console.log(producto.replace("Monitor", "Monitor Curvo"));

// .slice: extrae (corta) una parte de una cadena de texto.
// Se le pasa como parámetros la posición donde quiero comenzar
// a cortar y dónde quiero terminar.
console.log(producto.slice(0, 10));
// Si solo se pasa un parámetro. El corte inicia desde
// ese índice hasta el final
console.log(producto.slice(8));
// Si el primer parámetro es mayor al segundo NO va a cortar
// hacia atrás, simplemente no hará nada.
console.log(producto.slice(2, 1));

// .substring: Funciona igual que slice, la diferencia entre ambos es
// que si en .substring el segundo parámetro es menor que el primero,
// "invierte" los parámetros
console.log(producto.substring(0, 10));
// substring "invertiría" sus parámetros a producto.substring(1,2);
console.log(producto.substring(2, 1));

// .chartAt, muestra el caracter que pertenece a la posición
// que se pasa como parámetro
console.log(producto.charAt(0)); // M
console.log(producto.charAt(11)); // 2
