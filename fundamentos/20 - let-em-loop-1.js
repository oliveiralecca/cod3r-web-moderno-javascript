// "let" TEM escopo de bloco, só fica visível dentro do bloco de repetição

for (let i = 0; i < 10; i++) {
   console.log(i)
}

console.log('i =', i) // erro!
