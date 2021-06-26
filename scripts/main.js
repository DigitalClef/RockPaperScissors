//this function will randomly select rock, paper, or scissors from an array
function computerPlay() {
    const rps = ['rock', 'paper', 'scissors'];
    return rps[Math.floor(Math.random() * 3)];
};

//initialize variables 
let computerCounter = 0;
let userCounter = 0;
let roundCounter = 2;
const computerScore = document.querySelector('#computer-score');
const userScore = document.querySelector('#user-score');
const resultMessage = document.querySelector('#results-message'); 
const computerImage = document.querySelector('#computer-image');
const allInputs = document.querySelectorAll('input');
//const userButtons = document.querySelectorAll('.rps-button');


//iterates through nodelist of inputs elements 
allInputs.forEach(function(input) {
    input.onclick = function() { //generate game when upon click
        
        allInputs.forEach(function(input) { 
        input.style.backgroundColor = 'rgb(146, 216, 240)'; //sets each background color to blue;
        });
        
        let computerChoice = computerPlay();
        resultMessage.innerText = `Round ${roundCounter}`;
        input.style.backgroundColor = '#76f597';
        
        if (input.dataset.choice === 'rock') {
            if (computerChoice === 'scissors') {
                computerImage.src = 'images/scissors.png';
                userCounter++;
                userScore.innerText = `Your Score: ${userCounter}`;
            }
            if (computerChoice === 'paper') {
                computerImage.src = 'images/paper.png';
                computerCounter++;
                computerScore.innerText = `Computer Score: ${computerCounter}`;
            }
            if (computerChoice === 'rock') {
                computerImage.src = 'images/rock.png';
            }
        }  
        
        else if (input.dataset.choice === 'paper') {
            if (computerChoice === 'scissors') {
                computerImage.src = 'images/scissors.png';
                computerCounter++;
                computerScore.innerText = `Computer Score: ${computerCounter}`;
            }
            if (computerChoice === 'rock') {
                computerImage.src = 'images/rock.png';
                userCounter++;
                userScore.innerText = `Your Score: ${userCounter}`;
            }
            if (computerChoice === 'paper') {
                computerImage.src = 'images/paper.png';
            }
        }

        else if (input.dataset.choice === 'scissors') {
            if (computerChoice === 'paper') {
                computerImage.src = 'images/paper.png';
                userCounter++;
                userScore.innerText = `Your Score: ${userCounter}`;
            }
            if (computerChoice === 'rock') {
                computerImage.src = 'images/rock.png';
                computerCounter++;
                computerScore.innerText = `Computer Score: ${computerCounter}`;
            }
            if (computerChoice === 'scissors') {
                computerImage.src = 'images/scissors.png';
            }
        } 
        roundCounter++;
        if (roundCounter === 7) {
            
            allInputs.forEach(function(input) { //disables buttons for user
                input.disabled = true;
            });
        
            if (userCounter > computerCounter) {
                resultMessage.innerText = 'You win! Click new game to play again!';
            }
            else if (userCounter < computerCounter) {
                resultMessage.innerText = 'You lose! Click new game to play again!';
            }
            else {
                resultMessage.innerText = 'It\s a tie! Click new game to play again!';
            }
        }
    }
});


//resets game
document.querySelector('#new-game').onclick = function() {
    allInputs.forEach(function(input) {
        input.disabled = false;
        input.style.backgroundColor = 'rgb(146, 216, 240)';
    });
    computerImage.src = 'images/question-mark.png';
    userCounter = 0;
    computerCounter = 0;
    roundCounter = 2;
    userScore.innerText = `Your Score: ${userCounter}`;
    computerScore.innerText = `Computer Score: ${computerCounter}`;
    resultMessage.innerText = 'New game... Round 1';
}