const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
  informacion: {
    peso: "1 kg",
    medida: "1 m",
    fabricacion: {
      pais: "China",
    },
  },
};

console.log(producto); // {nombre: 'Monitor de 20 Pulgadas', precio: 300, estaDisponible: true, informacion: {...}}
console.log(producto.informacion); // {peso: '1 kg', medida: '1 m', fabricacion: {...}}
console.log(producto.informacion.peso); // 1 kg
console.log(producto.informacion.fabricacion); // {pais: 'China'}
console.log(producto.informacion.fabricacion.pais); // China
