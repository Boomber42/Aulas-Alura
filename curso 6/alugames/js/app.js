function changeStatus(id){
    var gameClicked = document.getElementById(`game-${id}`);
    var img = gameClicked.querySelector('.dashboard__item__img');
    var button = gameClicked.querySelector('.dashboard__item__button');

    if(img.classList.contains('dashboard__item__img--rented')){
        img.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';
    } else {
        img.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }
}