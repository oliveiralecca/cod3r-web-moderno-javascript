/*
   Exemplos básicos de Funções #02
*/

/* Armazenando função em variável ou constante */
const imprimirSoma = function (a, b) {
   console.log(a + b)
} // função anônima

imprimirSoma(2, 3)


/* Armazenando ARROW FUNCTION em variável ou constante */
const soma = (a, b) => {
   return a + b
} // arrow function = função em forma reduzida
console.log(soma(2, 5))

// retorno implícito em arrow function
const subtracao = (a, b) => a - b // ainda mais reduzida, para funções de linha única
console.log(subtracao(10, 4))

const imprimir = a => console.log(a) // se tem só 1 param. os parênteses podem sair
imprimir('Legal!!!')
