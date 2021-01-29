/*
   Booleanos padrões
*/

let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

/*
   Outros Bools
*/

// os verdadeiros...
isAtivo = 1
console.log(!!isAtivo) // negação 2x para saber o valor em Bool correspondente

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// os falsos...
console.log(!!0) // todos os inteiros são true, com exceção do 0
console.log(!!'') // String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // olha o que foi atribuído à variável, nesse caso false

// expressões
let nome = ''
console.log(nome || 'Desconhecido') // (false || true) => retorna o primeiro valor true que aparecer, então se eu troco o nome para 'Bento', por exemplo, retornará esse nome, pois será o primeiro true da operação
