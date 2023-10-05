//Essa é a forma mais simplificada de fazer
let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Organiza a ordem do vetor
console.log(valores)
for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*
// Abaixo uma forma de fazer
let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Organiza a ordem do vetor
console.log(valores)
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Abaixo uma outra forma de fazer e não muito correta
let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Organiza a ordem do vetor
console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[4])
*/
