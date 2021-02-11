/*
   Par chave = nome = identificador/valor: não é só em objeto

      => Objeto: coleção de pares chave/valor
*/

// contexto léxico 1
const saudacao = 'Opa' // saudacao = chave, 'opa' = valor

// contexto léxico 2
function exec() {
   const saudacao = 'E aí?'
   return saudacao
}

// contexto léxico 3
const cliente = {
   nome: 'Pedro',
   idade: 32,
   peso: 90,
   endereco: {
      logradouro: 'Rua A',
      numero: 9
   }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
