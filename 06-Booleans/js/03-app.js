const autenticado = true;

// NO comparar autenticado === true, se da por implicito
if (autenticado) {
  console.log("Sí está autenticado");
} else {
  console.log("No está autenticado");
}

// Operador ternario
console.log(autenticado ? "Sí está autenticado" : "No está autenticado");
