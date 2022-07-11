const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

meses[0] = "Nuevo mes"; // Modifica el valor de la posición 0
// Agregamos un nuevo elemento en la posición 10 del arreglo.
// NO crea las posiciones anteriores: 7, 8, 9
meses[10] = "Último mes";

console.table(meses);
console.log(meses); // (11) ["Nuevo mes", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", empty x 3, "Último mes"]
