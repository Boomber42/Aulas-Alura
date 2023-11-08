const listaLivros = require('./array');

    function mergeSort(array){

        if(array.length > 1){
            var meio = Math.floor(array.length/2);
            var parte1 = mergeSort(array.slice(0, meio));
            var parte2 = mergeSort(array.slice(meio, array.length));
            array = ordena(parte1, parte2);
        }

        return array;
    }

    function ordena(parte1, parte2){
        var posicaoAtualParte1 = 0
        var posicaoAtualParte2 = 0
        var resultado = []

        while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
            var produtoAtualParte1 = parte1[posicaoAtualParte1]
            var produtoAtualParte2 = parte2[posicaoAtualParte2]

            if(produtoAtualParte1.preco < produtoAtualParte2.preco){
                resultado.push(produtoAtualParte1)
                posicaoAtualParte1++
            } else {
                resultado.push(produtoAtualParte2)
                posicaoAtualParte2++  
            }
        }

        return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))
    }


console.log(mergeSort(listaLivros));