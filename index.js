import { prompt } from "./prompt.js";




console.log(`
    Welcome to the Number Guessing Game !

    Rules : 
    1. The system will generate a random number between 0 and 100.
    2. Your task is to guess this number.
    3. Enter a number when prompted.
    4. If your guess is too high or too low, you'll be notified, and you can guess again.
    5. The game continues until you guess the correct number.

    Let's get started! 🚀
`)

const targetNumber = Math.floor(Math.random()*100)
let numberOfTry = 0

function playAgain() {
    const wantToPlayAgain = prompt("Do you want to play again ? (Y/N) ")
    if(wantToPlayAgain.toUpperCase() === "Y") {
        const newTargetNumber = Math.floor(Math.random()* 101)
        numberOfTry = 0
        playGuessNumber(newTargetNumber)
    } else {
        console.log("Thank for playing ! Bye Bye !")
    }
}
 

function playGuessNumber(targetNumber) {
   const guessNumber = Number(prompt("Enter a number : "))
    if(guessNumber < 0 || guessNumber > 100) {
        console.log('Error, the number must me between 0 & 100')
    } 
    
     else if(guessNumber > targetNumber) {
        console.log('The number is too big !');
        numberOfTry++;
        return playGuessNumber(targetNumber);
    } 

    else if(guessNumber < targetNumber) {
        console.log("The number is too small !");
        numberOfTry++;
        return playGuessNumber(targetNumber);
    } else {
        console.log('🟢 GG 🟢')
        console.log(`✨ You have succeed aftet ${numberOfTry} try ! ✨`)
        playAgain()
        process.exit(1)
    }
}
playGuessNumber(targetNumber)

console.log(playGuessNumber(targetNumber))

