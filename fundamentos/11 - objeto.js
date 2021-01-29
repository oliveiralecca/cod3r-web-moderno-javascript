/*
   Notação literal de Objeto
      coleção de chaves/identificadores/atributos (nome) e valores ('Celular Ultra Mega')
*/

const produto1 = {}
produto1.nome = 'Celular Ultra Mega'
produto1.preco = 4998.90
produto1['Desconto Legal'] = 0.40 // evitar atributos com espaços

console.log(produto1)

const produto2 = {
   nome: 'Camisa',
   preco: 79.90,
   obj: {
      blabla: 1,
      obj: {
         blabla: 2
      }
   }
} // estrutura aninhada de objetos

console.log(produto2)

const produto3 = {
   nome: 'Tênis',
   preco: 130.00
}

console.log(produto3)
