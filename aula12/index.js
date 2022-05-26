/*
=== Aritméticos ===

+ adição e concatenação 
- subtração
/ divisão
** potenciação 
% resto da divisão 

=== precedência === 

1º() parenteses 
2º** potenciação 
3º* / %  multiplicação, divisão, resto de divisão 
4º + - 

=== Incremento === 
++
=== Decremento === 
--

pré incremento 

++nomeVariavel
--nomeVariavel 

*/

const num1 = 5 
const num2 = Number('10')




const passo = 2
let contador = 1

contador = contador + passo
console.log(contador);


console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 + num2 - num1 + num2);
