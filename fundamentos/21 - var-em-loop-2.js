// apesar de ter um bloco de função (que o "var" respeita), ele está definido em um for, e já que não tem escopo de bloco, qualquer chamada fora do bloco terá o resultado 10

const funcs = []

for (var i = 0; i < 10; i++) {
   funcs.push(function() {
      console.log(i)
   })
}

funcs[2]()
funcs[8]()
