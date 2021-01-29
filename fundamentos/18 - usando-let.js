/*
   A variável definida com "let" dentro de qualquer bloco, 
   fica visível apenas dentro daquele bloco (em escopo local).

      => Escopos: global, locais (de bloco e de função)
*/

let numero = 1
{
   let numero = 2
   console.log('dentro =', numero)
}
console.log('fora =', numero)

// por estarem em escopos diferentes, os nomes das variáveis podem ser iguais
