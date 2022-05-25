// declarar apenas o nome da variável sem descrever let, var , const cria uma 
//variável de escopo global e isso pode alterar o sistema, não é uma boa prática
//não realizar 

//exemplo

nome = 'Meu Nome';

console.log(nome);

// let uma vez declarada o valor não pode ser alterado utilizando Let novamente


let nome = 'luiz'
// let nome = 'gabriel'        isto geraria um erro 

nome = 'gabriel'  // declarando apenas o nome da variavel neste caso nome e atribuir novo valor
