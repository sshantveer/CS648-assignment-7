
function getUserSelection() {
    "use strict";
    var selection = window.prompt("Enter your choice: Rock, Paper or Scissor");
    while(selection) {
        selection = selection.toLowerCase();
        if (["rock", "paper", "scissor"].includes(selection)) {
            return selection;
        }
        selection = window.prompt("Invalid entry! Please enter : Rock, Paper or Scissor");
    }
    return selection;
}

function getCompSelection() {
    var number = Math.floor(Math.random() * 3) + 1;
    var compSelection;
    if(number === 1){
        compSelection = "rock";
    } else if (number === 2) {
        compSelection = "paper";
    } else if (number === 3) {
        compSelection = "scissor";
    }
    return compSelection;
}

function outcome(compSelection, userSelection) {
    "use strict";
    if(compSelection == userSelection){
        return "It is a tie! You selected: "+userSelection+" Computer selected: " + compSelection;
    } 
    if (userSelection === "rock"){
        if (compSelection === "paper") {
            return "You loose... Paper covers rock! You selected: "+userSelection+" Computer selected: " + compSelection;
        } else if (compSelection == "scissor") {
            return "You win... Rock destroys scissors! You selected: "+userSelection+" Computer selected: " + compSelection;
        }
    } else if (userSelection === "paper") {
        if (compSelection === "rock") {
            return "You win... Paper covers rock! You selected: "+userSelection+" Computer selected: " + compSelection;
        } else if (compSelection == "scissor") {
            return "You loose... Scissors cut paper! You selected: "+userSelection+" Computer selected: " + compSelection;
        }
    } else if (userSelection === "scissor") {
        if (compSelection === "paper") {
            return "You win... Scissor cut paper! You selected: "+userSelection+" Computer selected: " + compSelection;
        } else if (compSelection == "rock") {
            return "You loose... Rock destroys scissors! You selected: "+userSelection+" Computer selected: " + compSelection;
        }
    } else{
        return "Invalid Input. Enter the correct option.";
    }
}

function main() {
    "use strict";
    window.alert("Welcome to rock, paper or scissors game! You Vs Computer!");
    var userSelection = getUserSelection();
    var compSelection = getCompSelection();
    if(userSelection) {
        var result = outcome(compSelection, userSelection);
        window.alert(result);
    } else {
        window.alert("See you next time!")
    }
    
}

main();