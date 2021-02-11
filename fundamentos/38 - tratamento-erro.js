function tratarErroELancar (erro) {
   //throw new Error('Este é o erro!')
   //throw 10
   //throw true
   //throw 'mensagem'
   throw {
      nome: erro.name,
      msg: erro.message,
      date: new Date
   }
}

function imprimirNomeGritando(obj) {
   try {
      console.log(obj.name.toUpperCase() + '!!!') // nAme
   } catch (e) {
      tratarErroELancar(e)
   } finally {
      console.log('este bloco sempre é executado, tendo erro ou não')
   }
}

const objeto = { nome: 'Pedro' } // nOme
imprimirNomeGritando(objeto)
