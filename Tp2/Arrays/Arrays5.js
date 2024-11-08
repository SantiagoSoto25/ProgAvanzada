function filtrarMayoresDe(array, mayor) {
    return array.filter(function(num) {
        return num > mayor;
    });
}

let numeros = [1, 3, 8, 10, 11];

let mayoresDeSiete = filtrarMayoresDe(numeros, 7);
console.log(mayoresDeSiete); 