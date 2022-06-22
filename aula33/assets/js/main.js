// Aula 33 - Objeto - Atribuição via desestruturação


const pessoa = {
  nome: 'David',
  sobrenome: 'Pires',
  idade: 30,
  endereco: {
    rua: 'Setor O',
    numero: 49
  }
}
// atribuição via desestruturação 
const {nome} = pessoa;
console.log(nome);