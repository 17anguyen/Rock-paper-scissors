//TODO: collect and store user input
var wins=0
var userInput = 0;
var pcInput = 0; 
var pcChoice = ""
var userChoice = prompt("R,P, or S for Rock,Paper,or Scissors").toLowerCase();


var pcInput = Math.random();
if (pcInput < 0.34) {
    pcChoice = "r";
} else if(pcInput <= 0.67) {
    pcChoice = "p";
} else {
    pcChoice = "s";
}
console.log (pcChoice);

var compare = function() {
    if(userInput === pcInput) {
    return "The result is a tie!";
}
if(userInput === "r") {
    if(pcInput === "s") {
        wins ++;
        return "you win";
    } else {
        return "you lose";
    }
}
if(userInput === "p") {
    if(pcInput === "r") {
        wins ++;
        return "you win";
    } else {
            return "you lose";
    }
}
if(userInput === "s") {
    if(pcInput === "r") {
        wins ++;
        return "you win";
    } else {
            return "you lose";
        }
    }
};

// var compare = function(choice1, choice2) {
//     if(choice1 === choice2) {
//     return "The result is a tie!";
// }
// if(choice1 === "r") {
//     if(choice2 === "s") {
//         wins ++;
//         return "you win";
//     } else {
//         return "you lose";
//     }
// }
// if(choice1 === "p") {
//     if(choice2 === "r") {
//         wins ++;
//         return "you win";
//     } else {
//             return "you lose";
//     }
// }
// if(choice1 === "s") {
//     if(choice2 === "r") {
//         wins ++;
//         return "you win";
//     } else {
//             return "you lose";
//         }
//     }
// };

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + pcChoice);
var message = compare(userChoice, pcChoice);
alert(message)

// let playAgain = confirm("Play Again")
// if (playAgain) {
//     compare []
// }

//  alert("final score! + "win" + win + "loss" + loss + "tie" + tie)

// var userInput = {
//     inputChoice: ["Rock", "Paper", "Scissors"],
//     outputMessage: function () {
//     console.log("You chose " + userInput.inputChoice);
//   }
// };
// arr[Math.floor(Math.random() *arr.length)]

//     result = 'Result'

// function rps(){
//   var shoot=['rock','paper','scissor'];
//   return shoot[Math.floor(Math.random() * shoot.length)] 
// }
// console.log('Rock, Paper, Scissors, Shoot ....\n' + rps())

//TODO: use popup window to allow user to pick R,P, or S
    //TODO: store result in a variable called userChoice
    //TODO: EDGE CASE: what happens if the user picks another letter?
    //TODO: EDGE CASE: what happens if they use a lowercase letter

//TODO: randomly select pc choice, store in variable
    //TODO: possible choices include R, P, or S,
    //TODO: store in variable called compChoice

//TODO: compare user and computer choice
//TODO: display results of game
    // TODO: if user = rock and comp = scissors or user = scissors and comp = paper or user = paper and comp = rock, user wins
    // TODO: if user = rock and comp = paper or user = scissors and comp = roce or user = paper and comp = scissors, comp wins
    // TODO: if user = rock and comp = rock or user = scissors and comp = scissors or user = paper and comp = paper, tie

//TODO: display stats
    //TODO: track wins, losses and ties
    //TODO: display all three in one screen

//TODO: ask user if they want to play again
    //TODO: if they say yes, restart whole game
    //TODO: if they say no, stop doing anything

