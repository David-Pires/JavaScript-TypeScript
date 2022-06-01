// aula19 - Valores primitivos e valores por referencia

// Primitivos (imutáveis) - string, number, boolean, undefined,
//  null (bigint, symbol)

let a = 'A'
let b = a

a = 'Outra coisa'
console.log(
  a, b
);

//Referência (mutável)= array, object, function - Passados por referência 
let c = [1, 2, 3]
let d = c // let d aponta para o mesmo valor em memória 
console.log(c, d);