
//this function will randomly select rock, paper, or scissors from an array
function computerPlay() {
    const rpm = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return rpm[index];
}

//this function will take user input and computer choice as arguments and generate 
//win or lose messages based on results
function roundRPM(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'Scissors') {
            document.querySelector('p').innerHTML = 'You win!';
        }
        else if (computerSelection === 'Paper') {
            document.querySelector('p').innerHTML = 'You lose!';
        }
        else {
            document.querySelector('p').innerHTML = 'It\'s a tie!';
        }
    }

    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'Paper') {
            document.querySelector('p').innerHTML = 'You win!';
        }
        else if (computerSelection === 'Rock') {
            document.querySelector('p').innerHTML = 'You lose!';
        }
        else {
            document.querySelector('p').innerHTML = 'It\'s a tie!';
        }
    }

    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'Rock') {
            document.querySelector('p').innerHTML = 'You win!';
        }
        else if (computerSelection === 'Scissors') {
            document.querySelector('p').innerHTML = 'You lose!';
        }
        else {
            document.querySelector('p').innerHTML = 'It\'s a tie!';
        }
    }

}


// initialize variable to be assigned computer value
let computerChoice = computerPlay();
// ask user for choice
let userChoice = prompt('Rock, Paper, or Scissors?').toUpperCase();
roundRPM(userChoice, computerChoice);

console.log('Computer: ' + computerChoice);
console.log('You: ' + userChoice);
