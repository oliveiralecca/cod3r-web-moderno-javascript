/*
   Atribuição por valor e por referência

   => Valor: acontece com tipos primitivos. Uma variável copia o seu valor para outra, mas elas ficam independentes entre si.
   => Referência: acontece com objetos, funções. A atribuição faz com que as variáveis apontem para o mesmo objeto na memória, então se você muda o objeto a partir de "A", "B" também recebe a mudança e vice-versa.
*/

/*
   Undefined e Null

   => Null é utilizado para zerar variáveis de referência, para que elas deixem de apontar para algum objeto, função..
   => Undefined: variável definida/declarada porém com valor não definido
*/

let valor // variável não inicializada, undefined
console.log(valor)
console.log(valor2) // variável nem foi definida => not defined

valor = null // inicializada mas com ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro! => não dá para acessar uma propriedade de algo nulo

const produto = {}
console.log(produto.preco) // undefined => o preço não está definido
//console.log(produto.preco.a) // Erro! => não dá para acessar uma propriedade de algo indefinido

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
//delete produto.preco // a melhor opção para excluir um atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(produto)

