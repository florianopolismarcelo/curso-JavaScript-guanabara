let amigo ={idade: "46", nome: "José", sexo: "M", peso: 85.4, engordar(p=0){
  console.log("Engordou")
  this.peso += p
}}
amigo.engordar(2)
console.log(
  `Nome:${amigo.nome} Sexo:${amigo.sexo} Idade:${amigo.idade} Peso:${amigo.peso}Kg`
)