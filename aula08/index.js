// IMC peso / (altura * altura)

const nome = 'David'

const sobreNome = 'Pires'

const peso = 98

const alturaMetros = 1.85

let imc = peso / (alturaMetros**2)

let idade = 30
let ano = 2022 

let anoNascimento = ano - idade

console.log(imc);
console.log(anoNascimento);
console.log(nome + " " + sobreNome + " tem " + peso + " kilos" + " e " + alturaMetros
+ " de altura" + " seu IMC é: " + imc + " ano de nascimento: " + anoNascimento);
console.log(`${nome} ${sobreNome} tem ${peso} kilos e ${alturaMetros} de altura, seu IMC é: ${imc}, ano de nascimento: ${anoNascimento}`);
