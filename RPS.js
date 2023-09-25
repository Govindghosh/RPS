const playerText = document.getElementById("playerText");
const computerText = document.getElementById("ComputerText");
const resultText = document.getElementById("resultText");
const choicebtn = document.querySelectorAll(".choicebtn"); // Add a dot before "choicebtn"

let player;
let computer;
let result;

choicebtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerturn();
}));

function computerturn() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
        default:
            computer = "Error";
            break;
    }
    winner();
}

function winner() {
    if (player === computer) {
        result = `It's a Tie 🙍‍♂️`;
    } else if ((player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")) {
        result = `You win! 🥰`;
        
    } else {
        result = `You Lose 🥹`;
    }
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${result}`;
    
}

// Or
