const livros = require('./listaLivros');
const menorValor = require('./AluraAula');

for (var atual = 0; atual < livros.length - 1; atual++){
    var menor = menorValor(livros, atual)

    var livroAtual = livros[atual];
    //console.log("posição atual", atual)
    //console.log("livro atual", livros[atual])
    var livroMenorPreco = livros[menor];
    //console.log("livro menor preço", livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)