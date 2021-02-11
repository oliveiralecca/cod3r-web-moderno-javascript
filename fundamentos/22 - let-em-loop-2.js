// o "let" respeita os blocos, então ele tem "memória" dos valores que foram atribuídos a ele dentro do bloco em cada iteração

const funcs = []

for (let i = 0; i < 10; i++) {
   funcs.push(function() {
      console.log(i)
   })
}

funcs[2]()
funcs[8]()
