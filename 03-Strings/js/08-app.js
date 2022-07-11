const producto = "Monitor de 20 Pulgadas";

// Devuelve el valor decimal Unicode del caracter en el índice especificado por el parámetro
console.log(producto.charCodeAt(0)); // ¿A qué decimal unicode corresponde la letra 'M'?: 77

// Devuelve un entero no negativo que equivale al valor Unicode code point del carácter
console.log(producto.codePointAt(0)); // 77

// Determina si una cadena de texto termina con los caracteres de la cadena indicada, devolviendo
// true o false según corresponda. El primer parámetro es la cadena a buscar y el segundo parámetro
// opcional es hasta que longitud de la cadena original se buscará, si no se especifica, se buscará
// hasta el final. Por ejemplo, si mi cadena es 'Monitor', su longitud es de 7 caracteres, por lo tanto,
// el último caracter es 'r', así que si la cadena a buscar es 'Monitor', 'onitor',..., 'r', siempre
// devolverá true, pero si como segundo parámetro pongo 6, la "nueva" cadena en donde se buscará será
// 'Monito', por lo que cualquiera de los ejemplos anteriores dará un false.
console.log(producto.endsWith("Monitor")); // ¿La cadena completa termina con 'Monitor'?: false, termina con '...Pulgadas'.
console.log(producto.endsWith("tor", 7)); // De las 7 letras de la cadena original ('Monitor'), ¿termina con 'tor'?: true
console.log(producto.endsWith("r", 1)); // Toma el primer caracter, ¿termina con 'r'?: false, el único caracter es 'M'

// Devuelve el índice de la última ocurrencia de una subcadena en la cadena. El primer parámetro es la
// subcadena a buscar. El segundo parámetro opcional, es el índice hasta donde se buscará, si se omité,
// la búsqueda se hará hasta el final de la cadena. Devuelve -1 si no encuentra la subcadena
console.log("laralorala".lastIndexOf("r")); // ¿En qué índice se encuentra la última 'r'?: 6
console.log("laralorala".lastIndexOf("r", 5)); // ¿En qué índice se encuentra la última 'r' si buscamos solo en los primeros 6 caracters (la última letra es o y su índice es el 5)?: 2
console.log("laralorala".lastIndexOf("r", 1)); // ¿En qué índice se encuentra la última 'r' si buscamos solo en los primeros 2 caracters (la última letra es a y su índice es el 1)?: -1

// Se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena. Su parámetro es la expresión regular.
const cadena = "The quick brown fox jumps over the lazy dog. It barked.";
const expresion = /[A-Z]/g;
console.log(cadena.match(expresion)); // ['T', 'I']

// Recibe dos parámetros: un dígito y una cadena opcional. La cadena (parámetro) se agrega al final de la
// cadena original tantas veces hasta que la nueva cadena tenga tantos caracteres como se especificó en el
// primer parámetro. Si se omite el segundo parámetro, se rellena con espacios.
const str1 = "Prueba"; // Longitud: 6
console.log(str1.padEnd(11, "?!")); // La longitud de la nueva cadena debe ser 11: Prueba?!?!?
console.log(str1.padEnd(11)); // La longitud de la nueva cadena debe ser 11: 'Prueba     '

// Recibe dos parámetros: un dígito y una cadena opcional. La cadena (parámetro) se agrega al final de la cadena
// original tantas veces hasta que la nueva cadena tenga tantos caracteres como se especificó en el primer parámetro.
// Si se omite el segundo parámetro, se rellena con espacios.
console.log(str1.padStart(11, "?!")); // La longitud de la nueva cadena debe ser 11: ?!?!?Prueba
console.log(str1.padStart(11)); // La longitud de la nueva cadena debe ser 11: '     Prueba'

// Se pasan dos parámetros: una cadena y una posición opcional. Devuelve true si la cadena original inicia con
// la subcadena. Si no se le pasa el segundo parámetro, la búsqueda inicia desde el índice 0, el segundo
// parámetro representa desde qué indice de la cadena comenzará a buscar.
console.log(producto.startsWith("Monitor")); // Buscando desde el índice 0, ¿la cadena inicia con 'Monitor'?: true
console.log(producto.startsWith("Monitor", 2)); // Buscando desde el índice 2, ¿la cadena (nitor de...) inicia con 'Monitor'?: false
console.log(producto.startsWith("nitor", 2)); // true
