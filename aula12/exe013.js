/*
0 = Domingo
1 = Segunda 
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem) // Se quiseres apaga esse e faça o de baixo
// diaSem = 5 (Esse comando você apaga o de cima e escolhe o número do dia da semana)
switch (diaSem) {
  case 0:
    console.log("Domingo")
    break
  case 1:
    console.log("Segunda")
    break
  case 2:
    console.log("Terça")
    break
  case 3:
    console.log("Quarta")
    break
  case 4:
    console.log("Quinta")
    break
  case 5:
    console.log("Sexta")
    break
  default:
    console.log("[Erro] Dia invalido")
    break
}
