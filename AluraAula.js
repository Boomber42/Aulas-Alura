const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial){
    var maisBarato = posicaoInicial;

    for(var atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato;
}

//console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`)

module.exports = menorValor;