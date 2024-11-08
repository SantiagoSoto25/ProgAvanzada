// Crear el array "personas"
let personas = [
    {nombre: "Santiago", edad: 21 },
    {nombre: "Nahuel", edad: 20 },
    {nombre: "Lautaro", edad: 22 },
    {nombre: "Joaquin", edad: 31 }
];

let personaMayorDeTreinta = personas.find(function(persona) {
    return persona.edad > 30;
});

console.log(personaMayorDeTreinta);