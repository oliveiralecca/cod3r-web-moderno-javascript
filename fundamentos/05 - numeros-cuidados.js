/* 
   o JS reconhece essa operação, 
   e tem um tipo específico pra isso: Infinity
*/
console.log(7 / 0) 

/* 
   por ser de linguagem fracamente tipada,
   o JS consegue identificar que dentro da String tem um "número",
   o converte em Number e faz a operação.
*/
console.log("10.2" / 2)
console.log('3' - 2)

/*
   nesse caso ele não soma, concatena (32). 
   pois o operador + faz sentido para Strings, e a String "ganha"!
*/
console.log('3' + 2)

/* 
   o resultado dessa operação é NaN (not a number),
   o JS não mostra a String 2x como em outras linguagens.
*/
console.log("Show" * 2)

/* 
   não gera o resultado de 0.8 exatamente, 
   devido a uma imprecisão da linguagem definida em especificação IEEE
   (para gerar o resultado exato, a linguagem seria mais lenta).
*/
console.log(0.1 + 0.7)

/*
   o JS não permite aplicar funções em cima de valores 
   literais, é preciso colocar o valor entre ().

   console.log(10.toString()) => número em forma literal
*/
console.log((10).toString())


