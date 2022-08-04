// Aula 34 - estrutura de repetição 


// lê os indices 
// const arrayFrutas = ['mamão', 'maçã', 'abacate']

// // for (let i in arrayFrutas) {
  
// //   console.log(i);
// // }

// for (let indice in arrayFrutas) {
  
//   console.log(arrayFrutas[indice]);
// }


const pessoa = {
  altura: 1.85,
  idade: 35
}

for(let atributos in pessoa) {
  console.log(atributos, pessoa[atributos]);
}