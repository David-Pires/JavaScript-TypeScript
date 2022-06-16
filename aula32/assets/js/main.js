// Aula 32 - Atribuição via desestruturação


// let a = 'A' //B
// let b = 'B' //C
// let c = 'C' //A

// const letras = [b, c, a];
// [a, b, c] = letras

// console.log(a, b, c)
//    índice        0  1  2  3  4  5  6  7  8
// const numeros = [1562, 259, 3, 4, 5, 6, 7, 8, 9];

// const [um, ,tres, ,cinco, ,sete] = numeros;
//                  0           1          2
//               0   1  2    0  1  2    0  1  2 
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(numeros[0] [1]);