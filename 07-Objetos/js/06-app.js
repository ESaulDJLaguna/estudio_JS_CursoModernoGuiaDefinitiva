const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
  informacion: {
    medidas: {
      peso: "1 kg",
      medida: "1 m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

// Para desestructurar un objeto anidado, debemos utilizar llaves
// Queremos extraer nombre y fabricacion en variables individuales
// informacion solo sirve para indicar a qué propiedad queremos acceder NO estamos creando esta variable
const {
  nombre,
  informacion: {fabricacion},
} = producto;

console.log(nombre); // Monitor de 20 Pulgadas
console.log(fabricacion); // {pais: "China"}

// Si queremos acceder a pais, hacemos lo mismo, en este caso, solo se creará la variable pais,
// informacion y fabricacion solo sirven para indicar "hasta que nivel" de propiedad quiero acceder,
// o dicho de otra forma, de qué propiedad del objeto quiero crear su variable independiente
const {
  informacion: {
    //fabricacion, // Si quiero extrar fabricacion también, lo indicamos (quitar comentario)
    fabricacion: {pais}, // Extraigo solo pais NO fabricacion
  },
} = producto;
console.log(pais); // China
