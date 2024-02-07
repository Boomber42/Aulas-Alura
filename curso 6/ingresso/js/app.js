function purchase(){
    var type = document.getElementById('tipo-ingresso');
    var amount = parseInt(document.getElementById('qtd').value);

    if(type.value == 'pista'){
        purchaseTrack(amount);
    } else if(type.value == 'superior'){
        purchaseHigher(amount);
    } else {
        purchaseBottom(amount);
    }

}

function purchaseTrack(amount){
    var amtTrack = parseInt(document.getElementById('qtd-pista').textContent);
    
    if(amount > amtTrack){
        alert('Quantidade indisponivel.');
    } else {
        amtTrack = amtTrack - amount;
        document.getElementById('qtd-pista').textContent = amtTrack;
        alert('Compra realizada!');
    }
}

function purchaseHigher(amount){
    var amtHigher = parseInt(document.getElementById('qtd-superior').textContent);
    
    if(amount > amtHigher){
        alert('Quantidade indisponivel.');
    } else {
        amtHigher = amtHigher - amount;
        document.getElementById('qtd-superior').textContent = amtHigher;
        alert('Compra realizada!');
    }
}

function purchaseBottom(amount){
    var amtBottom = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if(amount > amtBottom){
        alert('Quantidade indisponivel.');
    } else {
        amtBottom = amtBottom - amount;
        document.getElementById('qtd-inferior').textContent = amtBottom;
        alert('Compra realizada!');
    }
}