//aula 13 - strings 
//

// let umaString = 'Um \"texto\"'  barra para caractere por espaço 
let umaString = 'Um texto mais um texto'

console.log(umaString[1]);
console.log(umaString.charAt(1));
console.log(umaString.concat(' ', 'em', ' ', 'um'));
console.log(`${umaString} mais um dia aqui no ITI`);
console.log(umaString.indexOf('texto', 2));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.match(/[a-z]/g)); //expressão regular 
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace('texto', 'dado'));
console.log(umaString.length);
console.log(umaString.slice(1,5));
console.log(umaString.slice(-5,1));
console.log(umaString.split('u', 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());


