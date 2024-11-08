// Combina dos arreglos

let lenguajes = ['JavaScript', 'PHP', 'Python', 'Java']
let frameworks = ['React', 'Laravel', 'Django', 'Sprint']

//unir los arreglos en uno solo

let combinacion = lenguajes.concat(frameworks)
console.log(combinacion)

let combinator = [...lenguajes, ...frameworks]
console.log(combinator)

let [ultimo] = [...lenguajes].reverse()
console.log(ultimo)