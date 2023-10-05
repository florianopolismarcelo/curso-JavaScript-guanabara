let num = [5, 8, 2, 9, 3]
num.push(1) // acrescenta o valor 1 no vetor
num.sort() // Organiza a ordem do vetor
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostra a valor na posição atribuida
let pos = num.indexOf(9) // Se colocar um valor que não existe vai dar um valor negativo
if (pos == -1) {
  console.log("O valor não foi encontrado")
} else {
  console.log(`O valor desejado está na posição ${pos}`)
}
