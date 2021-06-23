
//this function will randomly select rock, paper, or scissors from an array
function computerPlay() {
    const rps = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return rps[index];
};

//initialize variables to keep track of computer score, user score, and
//round number, respectively
let computerCounter = 0;
let userCounter = 0;
let roundCounter = 0;

document.querySelectorAll('input').forEach(function(input) {
    input.onclick = function() {
        let computerChoice = computerPlay();
        const computerScore = document.querySelector('#computer-score');
        const userScore = document.querySelector('#user-score');
        const resultMessage = document.querySelector('#results-message'); 
        const computerImage = document.querySelector('#computer-image');

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
        
        if (input.dataset.choice === 'paper') {
            if (computerChoice === 'scissors') {
                computerImage.src = 'images/scissors.png';
                computerCounter++;
                computerScore.innerText = `Computer Score: ${computerCounter}`;
            }
            if (computerChoice === 'rock') {
                computerImage.src = 'images/rock.png';
                userCounter++;
                userScore.innerText = `Computer Score: ${userCounter}`;
            }
            if (computerChoice === 'paper') {
                computerImage.src = 'images/paper.png';
            }
        }

        if (input.dataset.choice === 'scissors') {
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

        console.log(`User: ${userCounter}`);
        console.log(`Computer: ${computerCounter}`);
        console.log(computerChoice);
        console.log(roundCounter);
        if (roundCounter === 5) {
            if (userCounter > computerCounter) {
                resultMessage.innerText = 'You win!';
            }
            else if (userCounter < computerCounter) {
                resultMessage.innerText = 'You lose!';
            }
            else {
                resultMessage.innerText = 'It\s a tie!';
            }
        }
    }  
});
