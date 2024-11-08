function crearPersona(nombre, edad){
    return {
        nombre: nombre,
        edad: edad,
    }
}

let persona = crearPersona('Santiago', 21)
console.log(persona)

function actualizarEdad(persona, nuevaEdad){
    persona.edad = nuevaEdad;
}

actualizarEdad(persona, 22)
console.log(persona)