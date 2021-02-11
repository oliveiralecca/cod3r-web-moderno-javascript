console.log('01)', '1' == 1) // compara apenas o valor
console.log('02)', '1' === 1) // identidade = compara valor e tipo (idênticos)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // data de referência em JS = 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // comparando referência de memória, sempre falso
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // compara dois Number, então é OK

console.log('12)', undefined == null)
console.log('13)', undefined === null)
