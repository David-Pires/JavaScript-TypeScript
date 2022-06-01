// aula 18  - Objetos


// const array = [1,2,3]
// array.push(4)
// array[3] = 'David'
// array.push(5)
// document.body.innerHTML += array

// const nome01 = 'David'
// const sobrenome01 = 'Pires'
// const idade01 = 25

// const nome02 = 'Maria'
// const sobrenome2 = 'Souza'
// const idade02 = 54

// const pessoa = {
//  nome: 'Barão',
//  sobrenome: 'Maua',
//  idade: 89
// }

// function criarPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade
//   }
   
// }
// const pessoa1 = criarPessoa('david', 'pires', 40);
// const pessoa2 = criarPessoa('luiza', 'oliveira', 50);
// const pessoa3 = criarPessoa('bruno', 'manha', 60);
// const pessoa4 = criarPessoa('marco', 'bruno', 20);
// const pessoa5 = criarPessoa('leandro', 'tarde', 10);
// const pessoa6 = criarPessoa('cassio', 'arantes', 20);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)
// console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)
// console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade)
// console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade)
// console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade)
// console.log(pessoa6.nome, pessoa6.sobrenome, pessoa6.idade)

// document.body.innerHTML += `${pessoa.nome} <br />`
// document.body.innerHTML += `${pessoa.sobrenome} <br />`
// document.body.innerHTML += `${pessoa.idade} <br />`


const pessoa = {
  nome: 'Meu Nome',
  sobrenome: 'Mira',
  idade: 30,
  //criar uma função aqui dentro
  fala() {
    console.log(`${this.idade} idade`);
  },
  incrementaIdade() {
    this.idade++
  }
}

pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
