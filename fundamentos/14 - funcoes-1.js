/*
   Exemplos básicos de Funções #01
*/

/* Função sem retorno  */
function imprimirSoma(a, b) {
   console.log(a + b)
}

imprimirSoma(2, 3) // chamada da função
imprimirSoma(2) // segundo param. automaticamente será "undefined" => resultado = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // só considera os dois primeiros
imprimirSoma() // também aceita, mas o resultado é NaN


/* Função com retorno */
function soma(a, b=1) {
   return a + b
}

soma(2, 4) // nada vai ser impresso, pois a função retorna valor e não impressão de algo
console.log(soma(2, 4))
console.log(soma(2)) // nesse caso o b será 1, como foi padronizado na função (param. opcional)
console.log(soma()) // NaN => o primeiro param. é obrigatório e não foi passado, "undefined"
