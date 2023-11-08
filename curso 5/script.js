async function searchAddress(zipCode){
    var messageError = document.getElementById('erro');
    messageError.innerHTML = '';

    try{
        var zipCodeQuery = await fetch(`https://viacep.com.br/ws/${zipCode}/json`);
        var verifyZipCodeConverted = await zipCodeQuery.json();

        if(verifyZipCodeConverted.erro){
            throw Error('CEP não existe!')
        }

        var city = document.getElementById('cidade');
        var street = document.getElementById('endereco');
        var state = document.getElementById('estado');
        var neighborhood = document.getElementById('bairro');
        
        city.value = verifyZipCodeConverted.localidade;
        street.value = verifyZipCodeConverted.logradouro;
        state.value = verifyZipCodeConverted.uf;
        neighborhood.value = verifyZipCodeConverted.bairro;

        console.log(verifyZipCodeConverted);
        
        return verifyZipCodeConverted;

    } catch (error){
        messageError.innerHTML = `<p>CEP não encontrado. Tente novamente!</p>`
        console.log(error);
    }
}

var zipC = document.getElementById('cep');
cep.addEventListener('focusout', () => searchAddress(zipC.value));