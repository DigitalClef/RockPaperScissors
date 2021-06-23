
//this function will randomly select rock, paper, or scissors from an array
function computerPlay() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return rps[index];
};

