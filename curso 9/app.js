var listOfDrawnNumbers = [];
var maxValue = 10;
var minValue = 1;
document.getElementById('chute').removeAttribute('disabled');

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
    var initialText = `Escolha um número entre ${minValue} a ${maxValue}.`;
    displayTextOnScreen('h1', 'Jogo do número secreto');
    displayTextOnScreen('p', initialText);
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
        responsiveVoice.speak(attemptsMessage, 'Brazilian Portuguese Male', {rate:1.2});
        displayTextOnScreen('h1', 'Acertou!');
        displayTextOnScreen('p', attemptsMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);

    } else{
        if(guess > secretNumber){
            displayTextOnScreen('p', 'O número secreto é menor.');
        } else{
            displayTextOnScreen('p', 'O número secreto é maior.');
        }

        attempts++
        clearField();
    }

    if(guess > maxValue){
        var errorMessage = `O número que você escolheu: ${guess}, é maior que ${maxValue}, tente novamente com um número entre ${minValue} e ${maxValue}.`;
        displayTextOnScreen('p', errorMessage);
    } else if(guess < minValue){
        var errorMessage = `O número que você escolheu: ${guess}, é menor que ${minValue}, tente novamente com um número entre ${minValue} e ${maxValue}.`;
        displayTextOnScreen('p', errorMessage);
    }
}

function restartGame(){
    secretNumber = generateRandomNumber();
    attempts = 1;
    clearField();
    displayInitialMessage();
    document.getElementById('chute').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}