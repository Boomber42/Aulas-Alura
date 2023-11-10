var listOfDrawnNumbers = [];
var maxValue = 10;

function generateRandomNumber(){
    var chosenNumber = parseInt(Math.random() * maxValue +1);
    var amountOfElementsInTheList = listOfDrawnNumbers.length;

    if(amountOfElementsInTheList == maxValue){
        listOfDrawnNumbers = [];
    }
    if(listOfDrawnNumbers.includes(chosenNumber)){
        return generateRandomNumber();
    } else {
        listOfDrawnNumbers.push(chosenNumber);
        return chosenNumber;
    }
}

var secretNumber = generateRandomNumber();
var attempts = 1;

function displayTextOnScreen(tag, text){
    var field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Male', {rate:1.2});
}

function displayInitialMessage(){
    displayTextOnScreen('h1', 'Jogo do número secreto');
    displayTextOnScreen('p', 'Escolha um número entre 1 a 10.');
}

displayInitialMessage();

function clearField(){
    var guess = document.querySelector('input');
    guess.value = '';
}

function checkGuess(){
    var guess = document.querySelector('input').value;
    
    if(guess == secretNumber){
        var wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';
        var attemptsMessage = `Parabéns, você descobriu o número secreto com ${attempts} ${wordAttempts}.`
        displayTextOnScreen('h1', 'Acertou!');
        displayTextOnScreen('p', attemptsMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(guess > secretNumber){
            displayTextOnScreen('p', 'O número secreto é menor.');
        } else{
            displayTextOnScreen('p', 'O número secreto é maior.');
        }

        attempts++
        clearField();
    }
}

function restartGame(){
    secretNumber = generateRandomNumber();
    attempts = 1;
    clearField();
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}