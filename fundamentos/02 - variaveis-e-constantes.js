/*
   declaração de variável e atribuição de valor
*/

var a = 3 
let b = 4 // REGRA GERAL = criar variável com let (é mais moderno)

var a = 30 // permite que a variável 'a' seja redeclarada dentro do mesmo escopo
b = 40 // se usar a palavra reservada 'let', redeclarando a variável, vai dar erro

console.log(a, b)

/*
   declaração de constante e atribuição de valor
*/

const c = 5
// c = 50 => constante não admite atribuição de novos valores
console.log(c)


// PRIORIZAR O USO DE CONSTANTES NO CÓDIGO!
