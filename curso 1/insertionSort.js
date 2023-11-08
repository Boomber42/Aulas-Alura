//incertionSort é uma forma de ir inserindo objetos numa array

const livro = require('./listaLivros');

function insertionSort(lista){

    for(var atual = 0; atual < lista.length; atual++){
        var analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            var itenAnalise = lista[analise];
            var itenAnterior = lista[analise - 1];
        
            lista[analise] = itenAnterior
            lista[analise - 1] = itenAnalise

            analise--
        }
    }

    console.log(lista);
}

insertionSort(livro);