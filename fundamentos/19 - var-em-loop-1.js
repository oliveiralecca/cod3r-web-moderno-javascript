// "var" não tem escopo de bloco, fica visível fora da repetição

for (var i = 0; i < 10; i++) {
   console.log(i)
}

console.log('i =', i)
