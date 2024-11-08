// 8

const persona = {
    nombre: "Santiago",
    edad: 21,
}

const informacion = {
    ciudad: "Concepcion del Uruguay",
    pais: "Argentina",
}

const combinar = Object.assign({}, persona, informacion);

console.log(combinar)