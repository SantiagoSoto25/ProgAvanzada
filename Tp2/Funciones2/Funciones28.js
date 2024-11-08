function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

const usuarios = [
    { id: 1, nombre: 'Santiago', email: 'santiago@example.com' },
    { id: 2, nombre: 'Lautaro', email: 'lautaro@example.com' },
    { id: 3, nombre: 'Nahuel', email: 'nahuel@example.com' }
];

const emailBuscado = 'santiago@example.com';
const usuarioEncontrado = buscarUsuarioPorEmail(usuarios, emailBuscado);

console.log(usuarioEncontrado);
