/* ARRAY */
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6=0] = [10, 7, 9, 8] // os espaços vazios ignoram o elemento daquela posição
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[3, 4, 6], [9, 6, 8]] // [, segundo] = ignorando o primeiro elemento
console.log(nota)
