const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // o elemento não existe, retorna "undefined"

valores[4] = 10
console.log(valores)

valores[10] = 3
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'texto') // .push() => adiciona elementos no array
console.log(valores)

/*
   Importante prezar por um array homogêneo, com só um tipo de dado!
*/

console.log(valores.pop()) // .pop() => extrai o último valor do array
delete valores[0]
console.log(valores)
