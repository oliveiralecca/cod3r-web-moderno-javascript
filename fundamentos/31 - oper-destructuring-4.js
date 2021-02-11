/* FUNÇÃO - parâmetro array */
function rand([min = 0, max = 1000]) {
   if (min > max) [min, max] = [max, min] // invertendo as variáveis, se a condição for satisfeita
   const valor = Math.random() * (max - min) + min
   return Math.floor(valor)
}

console.log(rand([50, 40])) // nesse caso o if é satisfeito, inverte a ordem
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand()) // erro! não passei nenhum parâmetro e a função pede
