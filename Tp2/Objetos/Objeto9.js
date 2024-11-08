// 9

const estudiante = {
    nombre: "Santiago",
    edad: 21,
    dirección: {
      ciudad: "Concepcion del Uruguay",
      país: "Argentina",
      calle: "Estrada 1176"
    }
  };

  const copia = JSON.parse(JSON.stringify(estudiante));
  
  console.log(copia);
  