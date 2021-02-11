/*
   Três operandos 

   condição ? 'verdadeiro' : 'falso'
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // arrow function
console.log(resultado(7.1))
console.log(resultado(6.7))


/*
   Arrow function "tradicional":

   const resultado = nota => {
      return nota >= 7 ? 'Aprovado' : 'Reprovado'
   }

   Com variável sem função:

   let nota = 7.6
   const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
   console.log(status)
*/

