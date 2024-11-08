//4

const producto = {
    nombre: "Funko USEC",
    precio: 180,
    disponible: "Si"
}

for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

producto.precio = 195

console.log(producto)