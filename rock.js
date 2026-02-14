let userScore = 0;
let compScore = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    // Computer random choice lega
    const compChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').innerText = `Your Choice: ${userChoice}`;
    document.getElementById('comp-choice').innerText = `Computer's Choice: ${compChoice}`;

    let result = "";

    if (userChoice === compChoice) {
        result = "It's a Tie! 🤝";
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        result = "You Win! 🎉";
        userScore++;
    } else {
        result = "Computer Wins! 🤖";
        compScore++;
    }

    document.getElementById('winner-text').innerText = result;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('comp-score').innerText = compScore;
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    document.getElementById('user-score').innerText = "0";
    document.getElementById('comp-score').innerText = "0";
    document.getElementById('winner-text').innerText = "Choose your move!";
    document.getElementById('user-choice').innerText = "Your Choice: -";
    document.getElementById('comp-choice').innerText = "Computer's Choice: -";
}
