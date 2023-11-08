var attempts = 1;
var answer;
var maxValue = 100;
var secretNumber = parseInt(Math.random() * maxValue + 1);

alert('Boas vindas ao jogo do número secreto.');

while(answer != secretNumber){
    answer = prompt(`Escolha um número entre 1 e ${maxValue}.`);

    if(answer == secretNumber){
        break;
    } else {
        if(answer > secretNumber) {
        alert(`O número secreto é menor que ${answer}.`);
    } else {
        alert(`O número secreto é maior que ${answer}.`);
    }
      attempts++;
    }
}

var wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns, você descobriu o número secreto: ${secretNumber} com ${attempts} ${wordAttempts}.`);