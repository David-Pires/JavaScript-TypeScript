// switch case

function getDiaSemanaTexto (diaSemana) {
  let diaSemanaTexto

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto
    case 1:
      diaSemanaTexto = "Segunda-feira";
      return diaSemanaTexto
    case 2:
      diaSemanaTexto = "Terça-feira";
      return diaSemanaTexto
    case 3:
      diaSemanaTexto = "Quarta-feira";
      return diaSemanaTexto
    case 4:
      diaSemanaTexto = "Quinta-feira";
      return diaSemanaTexto
    case 5:
      diaSemanaTexto = "Sexta-feira";
      return diaSemanaTexto
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto
  
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto
  }
  return diaSemanaTexto
}
const data = new Date("2022-06-09 10:56:00");
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
// diaSemana = 7


getDiaSemanaTexto(2)

console.log(diaSemanaTexto);

// if (diaSemana === 0) {
//   diaSemanaTexto = 'Domingo'
// } else if ( diaSemana === 1) {
//   diaSemanaTexto = 'Segunda-feira'
// } else if ( diaSemana === 2) {
//   diaSemanaTexto = 'terça-feira'
// } else if ( diaSemana === 3) {
//   diaSemanaTexto = 'Quarta-feira'
// } else if ( diaSemana === 4) {
//   diaSemanaTexto = 'Quinta-feira'
// } else if ( diaSemana === 5) {
//   diaSemanaTexto = 'Sexta-feira'
// } else if ( diaSemana === 6) {
//   diaSemanaTexto = 'Sábado'
// }

// if (diaSemana === 0) {
//   diaSemanaTexto = 'Domingo'
// } else if ( diaSemana === 1) {
//   diaSemanaTexto = 'Segunda-feira'
// } else if ( diaSemana === 2) {
//   diaSemanaTexto = 'terça-feira'
// } else if ( diaSemana === 3) {
//   diaSemanaTexto = 'Quarta-feira'
// } else if ( diaSemana === 4) {
//   diaSemanaTexto = 'Quinta-feira'
// } else if ( diaSemana === 5) {
//   diaSemanaTexto = 'Sexta-feira'
// } else if ( diaSemana === 6) {
//   diaSemanaTexto = 'Sábado'
// }

