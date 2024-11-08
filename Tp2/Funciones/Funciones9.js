function crearMultiplicador(x){
    return function(num){
        return num * x;
    }
}

let multiplicador = crearMultiplicador(3);

console.log(multiplicador(10));
console.log(multiplicador(5));