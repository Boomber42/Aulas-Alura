var listaLivros = require('./arrays')

function encontraMenores(pivo, array){
    var menores = 0

    for(var atual = 0; atual < array.length; atual++){
        var produtoAtual = array[atual]
        if( produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}

function trocaLugar(array, de, para){
    var elem1 = array[de]
    var elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}

function divideNoPivo(array){
    var pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);
    var valoresMenores = 0;

    for(var analisando = 0; analisando < array.length; analisando++){
        var atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return array;
}

console.log(divideNoPivo(listaLivros));
//console.log(encontraMenores(listaLivros[2], listaLivros))


module.exports = trocaLugar;