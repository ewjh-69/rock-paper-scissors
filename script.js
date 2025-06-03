
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let num = function getRandom() {
            return Math.random() * 3;
        };

        function getComputerChoice(num) {
            if (num <= 1) return "Rock";
            else if (num > 1 && num <= 2) return "Scissors";
            else return "Paper";
        }

        function getHumanChoice() {
            let input = prompt("What's your input?");
            return input.toLowerCase();
        }

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                console.log("It's a tie!");
            }
            else {
                if (humanChoice === "rock" && computerChoice === "scissors") {
                    humanScore++;
                    console.log("You win!");
                }
                if (humanChoice === "rock" && computerChoice === "paper") {
                    computerScore++;
                    console.log("You lose!");
                }

                if (humanChoice === "scissors" && computerChoice === "rock") {
                    computerScore++;
                    console.log("You lose!");
                }
                if (humanChoice === "scissors" && computerChoice === "paper") {
                    humanScore++;
                    console.log("You win!");
                }

                if (humanChoice === "paper" && computerChoice === "scissors") {
                    computerScore++;
                    console.log("You lose!");
                }
                if (humanChoice === "paper" && computerChoice === "rock") {
                    humanScore++;
                    console.log("You win!");
                }
            }
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(num);

        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore === computerScore) {
        console.log("It's a tie!");
    }
    else console.log("You lose!")
}