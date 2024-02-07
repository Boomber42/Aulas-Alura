var drawList = [];
document.getElementById('sortear').removeAttribute('disabled');

function addFriends(){
    var friend = document.getElementById('nome-amigo');

    if(friend.value == ''){
        alert('É necessário informar um nome no campo.');
        return;
    }

    var upperCase = friend.value.toUpperCase();

    if(drawList.includes(upperCase)){
        alert('O nome já foi adicionado no sorteio.');
        return;
    }
    
    var friendList = document.getElementById('lista-amigos');
    drawList.push(upperCase);
    

    if(friendList.textContent == ''){
        friendList.textContent = friend.value;
    } else {
        friendList.textContent = friendList.textContent + ', ' + friend.value;
    }
    friend.value = '';
}

function shuffle(list) {

    for (var i = list.length; i; i--) {

        var iRandom = Math.floor(Math.random() * i);

        [list[i - 1], list[iRandom]] = 
            [list[iRandom], list[i - 1]];
    }
}

function drawFriends(){
    if(drawList.length < 4){
        alert('É necessário ter ao menos 4 amigos para realizar o sorteio!');
        return;
    }

    shuffle(drawList);
    var draw = document.getElementById('lista-sorteio');

    for(var i = 0; i < drawList.length; i++){
        if(i == drawList.length - 1){
            draw.innerHTML = draw.innerHTML + drawList[i] + '-->' + drawList[0] + '<br>';
        } else {
            draw.innerHTML = draw.innerHTML + drawList[i] + '-->' + drawList[i + 1] + '<br>';
        }
    }

    alert('Sorteio realizado com sucesso! Para realizar outro sorteio clique em "Reiniciar"!')
    document.getElementById('sortear').setAttribute('disabled', true);
}

function restart(){
    drawList = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('sortear').removeAttribute('disabled');
}