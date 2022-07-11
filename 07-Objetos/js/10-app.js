const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
};

const medidas = {
  peso: "1 kg",
  medida: "1 m",
};

console.log(producto); // {nombre: "Monitor de 20 Pulgadas", precio: 300, estaDisponible: true};
console.log(medidas); // {peso: "1 kg", medida: "1 m"};

// assign: devuelve la unión de los dos objetos que se le pasa como parámetros
const unionDeObjetos = Object.assign(producto, medidas);
console.log(unionDeObjetos); // {nombre: "Monitor de 20 Pulgadas", precio: 300, estaDisponible: true, peso: "1 kg", medida: "1 m"};

// Spread Operator o Rest Operator
// Los tres puntos dicen "copia" las propiedades del objeto y asignalas a uno nuevo. Hace lo mismo que assign y es más utilizado
const unionDeObjetos2 = {...producto, ...medidas};
console.log(unionDeObjetos2); // {nombre: "Monitor de 20 Pulgadas", precio: 300, estaDisponible: true, peso: "1 kg", medida: "1 m"};
