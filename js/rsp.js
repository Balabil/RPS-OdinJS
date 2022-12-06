function getComputerChoice() {

    const n = Math.floor(Math.random() * 3) + 1
    switch (n) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
        default:
            return ""
    }
}

const input = document.querySelector('input');
input.addEventListener("input",game);

function playerSelection() {
    return input.value.toLowerCase();
}

function playRound(playerSelection,computerSelection){
    var selection = playerSelection + "," + computerSelection;
    switch(selection){
        case ("rock,scissors"):
            return "You Win!"
        case ("paper,rock"):
            return "You Win!"
        case ("scissors,paper"):
            return "You Win!"
        case ("rock,paper"):
            return "You Lose!"
        case ("paper,scissors"):
            return "You Lose!"
        case ("scissors,rock"):
            return "You Lose!"
        case ("scissors,scissors"):
            return "You Drew!"
        case ("rock,rock"):
            return "You Drew!"
        case ("paper,paper"):
            return "You Drew!"
        default: 
            return ""
    }
}

function game(event){
    for (let index = 0; index < 5; index++) {
        console.log(playRound(playerSelection(),getComputerChoice()));
    }
}