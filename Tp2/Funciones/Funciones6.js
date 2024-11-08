function recursiva(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * recursiva(n - 1);
}

let resultado = recursiva(5)
console.log(resultado)