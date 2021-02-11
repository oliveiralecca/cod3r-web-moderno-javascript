/* FUNÇÃO - parâmetro objeto */
function rand({ min = 0, max = 1000 }) {
   const valor = Math.random() * (max - min) + min
   return Math.floor(valor)
} // {} de rand = operador destructuring

console.log(rand({ max: 50, min: 40})) 
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand()) // erro! não passei nenhum parâmetro e a função pede

/*
   Nesse caso, o {} = objeto, e seria o mesmo que passar da seguinte forma: 
   
   const obj = { max: 50, min: 40 }
   console.log(rand(obj))
*/

