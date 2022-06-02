// aula 24 If, else if e else

/*
Entre 0 - 11 Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

const hora = Number(prompt('Que horas são agora?'))
if (hora >= 0 && hora <= 11) {
  document.body.innerHTML += 'Bom dia';
} else if (hora >= 12 && hora <= 17) {
  document.body.innerHTML += 'Boa tarde';  
} else if (hora >=18 && hora <= 23) {
  document.body.innerHTML += 'Boa noite';
} else {
  document.body.innerHTML += 'Olá'
}