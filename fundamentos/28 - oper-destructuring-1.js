/*
   Operador de Desestruturação = extrai dados de alguma estrutura, por exemplo, de um objeto, de um array...
*/

/* OBJETO */
const pessoa = {
   nome: 'Ana',
   idade: 5,
   endereco: {
      logradouro: 'Rua ABC',
      numero: 1000
   }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // mudando o nome das variáveis
console.log(n, i)

const { sobrenome, status = true } = pessoa // atributos que não existem, atribuição de valor padrão
console.log(sobrenome, status)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/*
   Essa seria uma das formas de extrair dados sem usar o operador destructuring:

   const nome = pessoa.nome
   const idade = pessoa.idade
   console.log(`${nome} tem ${idade} anos de idade!`)
*/
