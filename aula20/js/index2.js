
// function escopoTotal() {
//   const formulario = document.querySelector('.form')
//   const infoDoform = document.querySelector('.infoDoForm')

//   const array = []

//   function recebeEventoDoForm(evento) {
//     evento.preventDefault()

//     const nome = formulario.querySelector('.nome')
//     const sobrenome = formulario.querySelector('.sobrenome')
//     const peso = formulario.querySelector('.peso')
//     const altura = formulario.querySelector('.altura')
    
    
//     array.push({
//       nome: nome.value,
//       sobrenome: sobrenome.value,
//       peso: peso.value,
//       altura: altura.value,

//     })
//     console.log(array)
//     infoDoform.innerHTML += `${nome.value} ${sobrenome.value} <br />` +
//     `${peso.value} ${altura.value}`
//   }


// formulario.addEventListener('submit', recebeEventoDoForm) 

// }

// escopoTotal()

function escopoTotal() {
  const form = document.querySelector('.form')
  const infoDoForm = document.querySelector('.infoDoForm')
  const arrayDeInfo = []

    function prevenirComportamentoForm(evento) {
      evento.preventDefault()    
      const nome = form.querySelector('.nome')
      const sobrenome = form.querySelector('.sobrenome')
      const peso = form.querySelector('.peso')
      const altura = form.querySelector('.altura')

      arrayDeInfo.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
      })
      
      infoDoForm.innerHTML += `${nome.value} ${sobrenome.value}` + 
      `${peso.value} ${altura.value}`
    }

  form.addEventListener('submit', prevenirComportamentoForm)
}
escopoTotal()