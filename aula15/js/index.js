//aula 15 - numbers 

/*

let num1 = 9.49

let potencia = 16



function pulaLinha() {
  document.body.innerHTML += "<br> "  
  return
}

const aleatorio = document.body.innerHTML += Math.round(Math.random() * (5 - 10) + 5) // Math.random() números aleatórios 

document.body.innerHTML += Math.floor(num1)
pulaLinha()
document.body.innerHTML += Math.ceil(num1) 
pulaLinha()
document.body.innerHTML += Math.round(num1) //arrendada para cima se número estiver na metade exemplo 9.50 
pulaLinha()
document.body.innerHTML += Math.max(1000,21,350,578,8,9,8,548,2199,5161) // retorna o maior número
pulaLinha()
document.body.innerHTML += Math.min(1000,21,350,578,8,9,8,548,2199,5161)// retorna o menor número
pulaLinha()
document.body.innerHTML += Math.pow(4, 4) // potenciação 
pulaLinha()
document.body.innerHTML += 4**4; // potenciação 
pulaLinha()
document.body.innerHTML += 9**9; // potenciação 
 
*/

function pulaLinha() {
  document.body.innerHTML += "<br> "  
  
}

// let entradaNumero = parseInt(prompt('Entre com um número'))


// let entradaNumero = 5
// let entradaNumeroDecimal = 5.49952

// const numeroTitulo = document.getElementById('numero-titulo')
// const selecionarDiv = document.getElementById('texto')
// const quadrada = document.getElementById('raizQuadrada')


// numeroTitulo.innerHTML = entradaNumero
// quadrada.innerHTML = entradaNumero

// document.body.innerHTML += `O número digitado foi ${entradaNumero}`
// pulaLinha()
// document.body.innerHTML += `A raiz quadrada de ${entradaNumero} é: ${entradaNumero ** entradaNumero}`
// pulaLinha()
// document.body.innerHTML += `${entradaNumero}  é um número inteiro: ${Number.isInteger(entradaNumero)}`
// pulaLinha()
// document.body.innerHTML += `É ${Number.isInteger(entradaNumero)}  `
// pulaLinha()
// document.body.innerHTML += `Arrendondado para baixo ${Math.floor(entradaNumero)}`
// pulaLinha()
// document.body.innerHTML += `Arredondado para cima ${Math.ceil(entradaNumero)}`
// pulaLinha()
// document.body.innerHTML += `Com duas casas decimais: ${entradaNumero.toFixed(2)}`

// const numero = Number(prompt('Digite um número'))

const numero = 4.486
const numero2 = 4.486


const numeroTitulo = document.getElementById('numero-titulo')
const quadrada = document.getElementById('quadrada')
const inteiro = document.getElementById('inteiro')
const arredondarBaixo = document.getElementById('arredondarBaixo')
const arredondarCima = document.getElementById('arredondarCima')
const casasDecimais = document.getElementById('casasDecimais')

numeroTitulo.innerHTML = numero
quadrada.innerHTML = `A raiz quadrada é: ${numero** 0.5}.`
inteiro.innerHTML = `${numero} é inteiro: ${Number.isInteger()}`
arredondarBaixo.innerHTML = `Arredondado para baixo: ${Math.floor(numero)}`
arredondarCima.innerHTML = `Arredondado para baixo: ${Math.ceil(numero)}`
casasDecimais.innerHTML = `com duas casas decimais: ${numero.toFixed(2)}`

const newElement = document.getElementById('new-element')
const qualquerId = document.getElementById('qualquerId')

newElement.innerHTML += numero
qualquerId.innerHTML += `<p>A raiz do quadrada de ${numero} é ${numero ** 0.5}</p>`
qualquerId.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
qualquerId.innerHTML += `<p>O número arredondado para cima é: ${Math.floor(numero)}</p>`
qualquerId.innerHTML += `<p>O número arredondado para baixo é: ${Math.ceil(numero)}</p>`