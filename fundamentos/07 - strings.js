/*
   Formas de criar uma String
*/

const escola = "Cod3r"
const colégio = 'Cod3r'
const curso = `Cod3r` // para uso do template string ${}

/*
   Funções/Métodos para Strings
*/

console.log(escola.charAt(4)) // mostra o caractere que está na posição 4 da String
console.log(escola.charAt(5)) // se a letra não existe, ele retorna um espaço vazio

console.log(escola.charCodeAt(3)) // código do caractere

console.log(escola.indexOf('d')) // posição do caractere, e se ele não existe na String retorna -1

console.log(escola.substring(1)) // mostra a String a partir do índice 1
console.log(escola.substring(0, 3)) // começa no índice 0 e termina no índice 2

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(',')) // quebra a String em um array com 3 itens, nesse caso
