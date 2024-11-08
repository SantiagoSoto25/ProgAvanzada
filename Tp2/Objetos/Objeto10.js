//10

const libro = {
    Titulo: 'El Patrón Bitcoin',
    Autor: 'Saifedean Ammous',
    AñoPublicacion: 2018,

    get AñoPublicacion() {
        return this.AñoPublicacion;
    },

    set AñoPublicacion(valor) {
        if (valor > 0) {
            this.AñoPublicacion = valor;
        }
        else {
            console.error('El año de publicacion tiene que ser positivo')
        }
    }
}

libro.AñoPublicacion = 2019;

console.log(libro.AñoPublicacion);

