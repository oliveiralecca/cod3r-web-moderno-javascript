/*
   OBS.: Evite declarar variável (var) em escopo global!
*/

var numero = 1
{
   var numero = 2
   console.log('dentro =', numero)
}
console.log('fora =', numero)

// como estão dentro do mesmo escopo (global), uma sobrescreveu a outra
