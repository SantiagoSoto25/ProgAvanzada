function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
}

const usuario = {
    id: 1,
    nombre: 'Santiago Soto',
    email: 'santiago@example.com',
    edad: 22
};

const cambios = {
    nombre: 'Santiago Soto Cazzulino',
    edad: 23
};

const usuarioActualizado = actualizarUsuario(usuario, cambios);
console.log('Usuario actualizado:', usuarioActualizado);
