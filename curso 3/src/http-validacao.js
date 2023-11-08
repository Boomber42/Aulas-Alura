function extraiLinks(arrayLinks){
    return arrayLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listaURLs){
    var arrayStatus = await Promise.all(
        listaURLs.map(async(url) => {
            try{
                var response = await fetch(url)
                return response.status;     
            } catch (erro){
                return manejaErros(erro);
            }
        })
    )
    return arrayStatus;
}

function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}

export default async function listaValidada(listaDeLinks){
    var links = extraiLinks(listaDeLinks);
    var status = await checaStatus(links);
    
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))

}