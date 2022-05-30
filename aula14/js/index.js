//aula 14 - numbers 


let num1 = 7
let num2 = 2.5
let num3 = 20.554054156

console.log(num1.toString() + num2);

document.body.innerHTML += num1.toString() + num2 //converter para string .toString()
document.body.innerHTML += `<br /> typeof ${num1} `
document.body.innerHTML += `<br /> ${num1.toString(2)}` // representação binaria do número 5 
document.body.innerHTML += `<br /> ${num3.toFixed(2)}` // .toFixed(2) escolher quantas casas decimais você irá apresentar