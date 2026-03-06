
const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');


let humanScoreNumber = 0;
let machineScoreNumber = 0;
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playmachine());

}

const playmachine = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Máquina: " + machine);
    if (human === machine) {
        result.innerHTML = "Empate!";
    } else if ((human === 'Rock' && machine === 'Scissors') ||
        (human === 'Paper' && machine === 'Rock') ||
        (human === 'Scissors' && machine === 'Paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você ganhou!";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "A Alexa ganhou!";
    }
}