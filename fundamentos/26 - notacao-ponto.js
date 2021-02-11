console.log(Math.ceil(6.1))

const qualquer = {}
qualquer.nome = 'Bola'
// qualquer['nome'] = 'Bola'
console.log(qualquer.nome)

function outra(nome) {
   this.nome = nome // this. = deixa o atributo "nome" visível fora da função
   this.exec = function() {
      console.log('Exec...')
   } // this. = cria uma função dentro da principal, que tb ficará visível externamente
}

const qualquer2 = new outra('Cadeira') // cria uma instância na função "outra"
const qualquer3 = new outra('Mesa') // outra instância
console.log(qualquer2.nome)
console.log(qualquer3.nome)
qualquer3.exec()
