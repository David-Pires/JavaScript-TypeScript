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
const {endereco: {rua, numero} } = pessoa;
console.log(rua, numero);