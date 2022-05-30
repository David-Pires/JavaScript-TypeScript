//aula 15 - numbers 

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
 