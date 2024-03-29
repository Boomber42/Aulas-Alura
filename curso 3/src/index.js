import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto){
    var regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    var capturas = [...texto.matchAll(regex)];
    var resultados =  capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

async function pegaArquivo(caminhoDoArquivo){
    try {
        var encoding = 'utf-8';
        var texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch(erro){
        trataErro(erro);
    }
}


export default pegaArquivo;
