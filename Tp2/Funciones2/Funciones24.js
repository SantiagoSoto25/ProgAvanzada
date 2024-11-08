function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
}

let usuarios = [
    { id: 1, name: "Santiago", username: "Santi", email: "santi@gmail.com" },
    { id: 2, name: "Nahuel", username: "Nahue", email: "nahue@gmail.com" },
    { id: 3, name: "Lautaro", username: "Lauti", email: "lauti@gmail.com" }
];

let usuariosMapeados = mapearUsuarios(usuarios);
console.log(usuariosMapeados);