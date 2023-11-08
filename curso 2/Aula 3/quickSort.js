var listaLivros = require('./arrays');
var trocaLugar = require('./encontraMenores')

function quickSort(array, esquerda, direita){

    if(array.length > 1){
        var indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual -1){
            quickSort(array, esquerda, indiceAtual -1)
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita)
        }
    }
    return array;
}

function particiona(array, esquerda, direita){
    var pivo = array[Math.floor((esquerda + direita) / 2)]
    var atualEsquerda = esquerda;
    var atualDireita = direita;

    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }

        while(array[atualDireita].preco < pivo.preco){
            atualDireita--
        }

        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
        return atualEsquerda;
    }
}


console.log(quickSort(listaLivros, 0, listaLivros.length - 1))