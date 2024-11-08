let usuarioPredefinido = {
    usuario: "usuario123",
    contraseña: "contraseñaSecreta"
};

function autenticarUsuario(credenciales) {
    if (credenciales.usuario === usuarioPredefinido.usuario && credenciales.contraseña === usuarioPredefinido.contraseña) {
        return true;
    } else {
        return false;
    }
}

let credencialesCorrectas = {
    usuario: "usuario123",
    contraseña: "contraseñaSecreta"
};

let credencialesIncorrectas = {
    usuario: "usuario123",
    contraseña: "contraseñaIncorrecta"
};

console.log(autenticarUsuario(credencialesCorrectas));
console.log(autenticarUsuario(credencialesIncorrectas));