// 3

const libro = {
    Titulo: 'El Patrón Bitcoin',
    Autor: 'Saifedean Ammous',
    AñoPublicacion: 2018,

descripcion: function(){
    return `El libro "${libro.Titulo}" fue escrito por ${libro.Autor}.`
}
}

console.log(libro.descripcion());