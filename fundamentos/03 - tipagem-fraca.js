/*
   uma mesma variável pode assumir valores de múltiplos tipos,
   esse tipo não é pré-definido como em Haskell, por exemplo.
*/

let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 4.55667
console.log(qualquer)
console.log(typeof qualquer)

/* 
   Evitar nomes de variáveis genéricos e siglas, por exemplo:
   let valor = ''
   let numero = 1
   let pqp = false
*/
