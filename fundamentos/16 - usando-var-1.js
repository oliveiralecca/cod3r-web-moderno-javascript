/*
   Em outras linguagens, a variável ficaria visível apenas em escopo local,
   que nesse caso é dentro do bloco onde esté definida. 

   Mas em JS, a variável definida com "var" dentro de um bloco (que não seja função), 
   fica visível em escopo global (no programa inteiro).

      => Escopos: global e local (de função)
*/

{
   {
      {
         {
            var sera = 'Será?'
            console.log(sera)
         }
      }
   }
}
console.log(sera)

/* 
   var definida em bloco de função
      => variável de escopo local
*/

function teste() {
   var local = 123
   console.log(local)
}
console.log(local) // fora da função ela não pode ser acessada
