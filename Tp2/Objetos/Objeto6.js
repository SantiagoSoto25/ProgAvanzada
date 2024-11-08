//6

function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto
}

const producto = {
    Nombre: "BEAR",
    Precio: 210,
    Disponible: "No"
}

console.log(tienePropiedad(producto, "Nombre"))
console.log(tienePropiedad(producto, "LugarEncontrado"))
console.log(tienePropiedad(producto, "Precio"))