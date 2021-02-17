/*
   Hoisting = jogar para cima, içamento
*/

/*
   a declaração da variável com "var" nesse caso é jogada para cima,
   como se o código ficasse assim:

   var a
   console.log('a =', a)
   a = 2
   console.log('a =', a)
*/

console.log('a =', a) // undefined, mas ela existe
var a = 2
console.log('a =', a)

/*
   declaração dentro de função: ocorre o içamento também
*/

function teste() {
   console.log('a =', a)
   var a = 2
   console.log('a =', a)
}

teste()

/* 
   não ocorre Hoisting em declaração de variável com "let" 
*/

console.log('b =', b) // erro!
let b = 3
console.log('b =', b)
