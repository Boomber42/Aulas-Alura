import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from './http-validacao.js';

var caminho = process.argv;

async function imoprimeLista(valida, resultado, identificador = ''){
    
    if(valida){
        console.log(chalk.yellow('lista de validada'), chalk.black.bgGreen(identificador), await listaValidada(resultado));
    } else{
        console.log(chalk.yellow('lista de links'), chalk.black.bgGreen(identificador), resultado);
    }

}

async function processaTexto(argumentos){
    var caminho = argumentos[2];
    var valida = argumentos[3] === '--valida';

    try{
        fs.lstatSync(caminho);        
    } catch (erro){
        if(erro.code === 'ENOENT'){
            console.log('Arquivo ou diretório não existe');
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        var resultado = await pegaArquivo(argumentos[2]);
        imoprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()){
        var arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            var lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imoprimeLista(valida, lista, nomeDeArquivo);
        })
    }
}

processaTexto(caminho);