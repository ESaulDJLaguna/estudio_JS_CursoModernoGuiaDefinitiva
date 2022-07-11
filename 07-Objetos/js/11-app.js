const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  estaDisponible: true,
  mostrarInformacion: function () {
    console.log(
      // this busca las propiedades dentro del mismo objeto
      `El Producto: ${this.nombre} tiene un precio de ${this.precio} USD`
    );
  },
};

const producto2 = {
  nombre: "Tablet",
  precio: 3000,
  estaDisponible: true,
  mostrarInformacion: function () {
    console.log(
      // this busca las propiedades dentro del mismo objeto
      `El Producto: ${this.nombre} tiene un precio de ${this.precio} USD`
    );
  },
};

producto.mostrarInformacion(); // El Producto Monitor de 20 Pulgadas tiene un precio de 300 USD
producto2.mostrarInformacion(); // El Tablet tiene un precio de 3000 USD
