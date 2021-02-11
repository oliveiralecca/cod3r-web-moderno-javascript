console.log(typeof Object)
console.log(typeof new Object) // instanciando uma função, transforma em object

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente) // transforma em object

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto()) // instancia com ou sem parênteses
