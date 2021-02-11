/*
   E (&&), OU (||), OU...OU (!=) e NEGAÇÃO (!)
*/

function compras (trabalho1, trabalho2) {
   const comprarSorvete = trabalho1 || trabalho2
   const comprarTv50 = trabalho1 && trabalho2
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) => operador bit a bit
   const comprarTv32 = trabalho1 != trabalho2 // no ou...ou é V se as proposições forem diferentes
   const manterSaudavel = !comprarSorvete

   return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // forma reduzida de criar um objeto, em que o JS pega automaticamente os valores e atribui às chaves passadas (nome da chave é igual ao da variável)
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
