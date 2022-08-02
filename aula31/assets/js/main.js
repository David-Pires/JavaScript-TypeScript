const verdadeira = true 

// let tem escopo de bloco { ... bloco}
// var só tem escopo de função

// let nome = 'David' // criando
// var nome2 = 'David'


// if (verdadeira) {
//   let nome = 'David Pires'
//   console.log(nome, nome2);

//   if (verdadeira) {
//     console.log('Ok');
//   }

// }

var sobrenome = 'Pires'
function falaEu () {
  // var nome = 'David'
  console.log(sobrenome);

}

falaEu()