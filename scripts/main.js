
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
            document.getElementById('results-message').innerHTML = 'You win! Rock beats scissors!';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Scissors';
        }
        else if (computerSelection === 'Paper') {
            document.getElementById('results-message').innerHTML = 'You lose. Paper beats rock...';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Paper';
        }
        
        else {
            document.getElementById('results-message').innerHTML = 'It\'s a tie!';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Rock';
        }
        
    }

    else if (playerSelection === 'SCISSORS') {
        document.getElementById('userChoice').innerHTML = 'Your choice: Scissors';
        if (computerSelection === 'Paper') {
            document.getElementById('results-message').innerHTML = 'You win! Scissors beats paper!';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Paper';
        }
        
        else if (computerSelection === 'Rock') {
            document.getElementById('results-message').innerHTML = 'You lose. Rock beats scissors...';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Rock';
        }
        
        else {
            document.getElementById('results-message').innerHTML = 'It\'s a tie!';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Scissors';
        }
        
    }

    else if (playerSelection === 'PAPER') {
        document.getElementById('userChoice').innerHTML = 'Your choice: Paper';
        if (computerSelection === 'Rock') {
            document.getElementById('results-message').innerHTML = 'You win! Paper beats rock!';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Rock';
        }
        
        else if (computerSelection === 'Scissors') {
            document.getElementById('results-message').innerHTML = 'You lose. Scissors beats paper...';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Scissors';
        }
        
        else {
            document.getElementById('results-message').innerHTML = 'It\'s a tie!';
            document.getElementById('comChoice').innerHTML = 'Computer choice: Paper';
        }
    }
    
}


// initialize variable to be assigned computer value
let computerChoice = computerPlay();
let userChoice = userInputValid();

roundRPS(userChoice, computerChoice);

console.log('Computer: ' + computerChoice);
console.log('You: ' + userChoice);
