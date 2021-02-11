/*
   Operadores que precisam de apenas um operando

   ++ , -- , ! ...
*/

let num1 = 1
let num2 = 2

num1++ // + 1
console.log(num1)

--num1 // -1
console.log(num1)

console.log(++num1 === num2--) // só depois da comparação que o num2 é decrementado e passa a valer 1
console.log(num1 === num2)
