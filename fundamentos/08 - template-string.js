/*
   Concatenação - sem template string
*/

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

/*
   Interpolação/interpretação - com template string ${}
*/

// suporta e aceita quebras de linha, diferente da concatenação
const template = `
   Olá
   ${nome}!` 

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

// funções
const up = texto => texto.toUpperCase() // arrow function
console.log(`Ei... ${up('cuidado')}!`)
