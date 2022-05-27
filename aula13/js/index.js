//aula 13 - strings 
//

// let umaString = 'Um \"texto\"'  barra para caractere por espaço 
// let umaString = 'Um texto mais um texto'

// console.log(umaString[1]);
// console.log(umaString.charAt(1));
// console.log(umaString.concat(' ', 'em', ' ', 'um'));
// console.log(`${umaString} mais um dia aqui no ITI`);
// console.log(umaString.indexOf('texto', 2));
// console.log(umaString.lastIndexOf('o'));
// console.log(umaString.match(/[a-z]/g)); //expressão regular 
// console.log(umaString.match(/[a-z]/));
// console.log(umaString.search(/x/));
// console.log(umaString.replace('texto', 'dado'));
// console.log(umaString.length);
// console.log(umaString.slice(1,5));
// console.log(umaString.slice(-5,1));
// console.log(umaString.split('u', 2));
// console.log(umaString.toUpperCase());
// console.log(umaString.toLowerCase());



//+= mais e recebe acrescenta ao invés de substituir

// const digiteSeuNome = prompt('Digite seu nome')

let digiteSeuNome = 'David'


document.body.innerHTML = `O nome digitado é: ${digiteSeuNome} <br />`
document.body.innerHTML += `Seu nome tem: ${digiteSeuNome.length} letras <br/>`
document.body.innerHTML += `A segunda letra do seu nome é: ${digiteSeuNome.charAt(1)} <br/>`
document.body.innerHTML += `O primeiro índice é: ${digiteSeuNome.indexOf()} <br />`
document.body.innerHTML += `Qual é o último índice da letra "a" no seu nome? <br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${digiteSeuNome.toUpperCase()} <br />`
document.body.innerHTML += `Seu nome com letras minúsculas: ${digiteSeuNome.toLowerCase()}`
