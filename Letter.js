// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// var secretWord = ["harry" ];
// var currentWord = secretWord[0];
// var currentWordArray = [];
// currentWordArray.push(currentWord)
// var currentWordArraySplit = currentWordArray[0].split('')
// //.split('')
// console.log (currentWordArraySplit);
// var currentWordGuessArray = [];
// for (x=0; x < currentWordArraySplit.length; x++){
//     currentWordArraySplit[x] = currentWordArraySplit[x].replace(currentWordArraySplit[x], '_');
//     currentWordGuessArray.push(currentWordArraySplit[x]);
// }
// console.log (currentWordGuessArray);

function Letter(alpha) {
    this.alpha = alpha;
    this.guessed = false;
    this.displayLet = function() {
        if (this.alpha === " ") {
            return " ";
        }
        else if(!this.guessed) {
            return "_";
        }
        else {
            return this.alpha;
        }
    }
    this.check = function(userGuess) {
        if (userGuess === this.alpha) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;