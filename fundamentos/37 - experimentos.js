/*
   Experimentos com Node x Browser (runtime = local de execução do JS)
*/

/* no Node, cada arquivo representa um módulo */

let a = 3 // variável local, não é exportada (não está no global)

global.b = 123 // global no Node equivale ao objeto window do browser

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // this é module.exports dentro de um arquivo, no browser é o window 
console.log(module.exports)

// criando uma variável maluca: sem var e let!
abc = 3 // não faça isso em casa!!!
console.log(global.abc) // criando dessa forma, a variável é colocada direto no global do Node e pode ser acessada por tudo e todos (fugir de variáveis no global)

// module.exports = { e: 456, f: false, g: 'teste' } => sintaxe diretamente em NodeJS
