var listaLivros = require('./arrays')

function busca(array, de, ate, valorBuscado){
    var meio = Math.floor((de + ate) / 2);
    var atual = array[meio];

    if(de > ate){
        return -1;
    }

    if(valorBuscado === atual.preco){
        return meio;
    }

    if(valorBuscado < atual.preco){
        return busca(array, de, meio - 1, valorBuscado);
    }

    if(valorBuscado > atual.preco){
        return busca(array, meio + 1, ate, valorBuscado);
    }

}


console.log(busca(listaLivros, 0, listaLivros.length -1, 40))