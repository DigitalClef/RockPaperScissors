
//this function will randomly select rock, paper, or scissors from an array
function computerPlay() {
    const rpm = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return rpm[index];
}

let computerChoice = computerPlay();
console.log(computerChoice);