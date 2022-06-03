




function escopoGlobal() {
  const form = document.querySelector('.form')
  const info = document.querySelector('.info')

  const infoDoResultado = []

  function comportamentoForm(event) {
    const peso = document.querySelector('#peso')
    const altura = document.querySelector('#altura')
    event.preventDefault()

    console.log(peso.value, altura.value)

    infoDoResultado.push({
      peso: Number(peso.value),
      altura: Number(altura.value),     
      imc: peso / (altura*altura)
    })
      
    console.log(infoDoResultado)


      
    }

    form.addEventListener('submit', comportamentoForm)

}

escopoGlobal()