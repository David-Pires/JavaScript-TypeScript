// aula 17  - Funções



// function saudacao(nome) {
  
//   return `Bom dia ${nome}`
// }

// const variavel = saudacao('David')
// console.log(variavel);


function soma(x, y) {
  const resultado = x + y
  return resultado
  
}
console.log(soma(56,56));

function subtracao(a,b) {
  const resultadoSubtracao = a - b
  return resultadoSubtracao
}

function soma2(x = 2, y = 4) {
  const resultadoSoma = x + y
  return resultadoSoma
}

//mais formas de criar funções

const raiz = function(n) {
  return n ** 0.5
}

const raiz2 = (n) => n ** 0.5 // se tiver só um parametro não precisa de (n)


console.log(subtracao(45,36));



console.log(soma);

document.body.innerHTML += `${soma(4,5)} <br />`
document.body.innerHTML += `<br /> ${subtracao(89, 67)}`
document.body.innerHTML += `<br /> ${soma2()}`
document.body.innerHTML += `<br /> ${raiz(9)}`
document.body.innerHTML += `<br /> ${raiz2(16)}`