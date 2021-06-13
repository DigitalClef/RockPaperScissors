
//this function will randomly select rock, paper, or scissors from an array
function computerPlay() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return rps[index];
}

//this function verifies that the user inputs rock, paper, or scissors
function userInputValid(validChoice) {
    validChoice = prompt('Rock, Paper, or Scissors?').toUpperCase(); //allows user response to be case-insensitive
    while (validChoice != 'ROCK' && validChoice != 'PAPER' && validChoice != 'SCISSORS') {
        validChoice = prompt('That\'s not an option. Choose again.').toUpperCase();
    }
    return validChoice;
}

//this function will take user input and computer choice as arguments and generate 
//win or lose messages based on results
function roundRPS(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK') {
        document.getElementById('userChoice').innerHTML = 'Your choice: Rock';
        if (computerSelection === 'Scissors') {
            document.querySelector('p').innerHTML = 'You win! Rock beats scissors!';
        }
        else if (computerSelection === 'Paper') {
            document.querySelector('p').innerHTML = 'You lose. Paper beats rock...';
        }
        else {
            document.querySelector('p').innerHTML = 'It\'s a tie!';
        }
    }

    else if (playerSelection === 'SCISSORS') {
        document.getElementById('userChoice').innerHTML = 'Your choice: Scissors';
        if (computerSelection === 'Paper') {
            document.querySelector('p').innerHTML = 'You win! Scissors beats paper!';
        }
        else if (computerSelection === 'Rock') {
            document.querySelector('p').innerHTML = 'You lose. Rock beats scissors...';
        }
        else {
            document.querySelector('p').innerHTML = 'It\'s a tie!';
        }
    }

    else if (playerSelection === 'PAPER') {
        document.getElementById('userChoice').innerHTML = 'Your choice: Paper';
        if (computerSelection === 'Rock') {
            document.querySelector('p').innerHTML = 'You win! Paper beats rock!';
        }
        else if (computerSelection === 'Scissors') {
            document.querySelector('p').innerHTML = 'You lose. Scissors beats paper...';
        }
        else {
            document.querySelector('p').innerHTML = 'It\'s a tie!';
        }
    }
    
}


// initialize variable to be assigned computer value
let computerChoice = computerPlay();
let userChoice = userInputValid();

roundRPS(userChoice, computerChoice);

console.log('Computer: ' + computerChoice);
console.log('You: ' + userChoice);
