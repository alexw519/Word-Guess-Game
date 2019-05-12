//Creating an array of words
var wordBank = ["batman", "joker", "batmobile", "night", "arkham", "robin", "knight", "asylum", "cowl", "vengence", "gotham", "detective", "vigilante"];


//Setting up the global variables
var index = Math.floor(Math.random() * wordBank.length);
var computerWord = wordBank[index];
var letterCheck = false;
var guessesLeft = 6;
var winCount = 0;
var userGuesses = "";
var guessed = [];
var hasBeenGuessed = false;

//Setting up the boardArray for the random word.
var boardArray = [];
for (i = 0; i < computerWord.length; i++)
    boardArray.push(" _ ");

var wordArray = computerWord.split("");
var wordDiv = document.getElementById("word");

//Putting the current word on the screen.
var board = "";
for (i = 0; i < boardArray.length; i++)
    board += boardArray[i];

wordDiv.textContent = board;
var guessedDiv = document.getElementById("lettersGuessed");

//Function to reset all of the variables so another game can be played.
function reset() {
    index = Math.floor(Math.random() * wordBank.length);
    computerWord = wordBank[index];
    letterCheck = false;
    guessesLeft = 6;
    userGuesses = [];
    boardArray = [];
    for (i = 0; i < computerWord.length; i++)
        boardArray.push(" _ ");

    wordArray = [];
    wordArray = computerWord.split("");
    board = "";
    for (i = 0; i < boardArray.length; i++)
        board += boardArray[i];

    wordDiv.textContent = "";
    guessedDiv.textContent = "";
    wordDiv.textContent = board;
    guessed = [];
}

//Linking the div variables to the divs on the html
var winDiv = document.getElementById("wins");
var guessDiv = document.getElementById("guesses");
var winnerDiv = document.getElementById("userWon");
var loserDiv = document.getElementById("userLost");

// Getting the user input and checking if its a correct letter
document.onkeyup = function (event) {
    var guess = event.key.toLowerCase();
    letterCheck = false;
    hasBeenGuessed = false;

    //Checking if letter is in the word, and if it is appears on screen
    for (i = 0; i < computerWord.length; i++) {
        if (guess === wordArray[i]) {
            boardArray[i] = " " + guess + " ";
            wordArray[i] = " _ ";
            letterCheck = true;
        }
    }

    //If the letter has been guessed, it won't penalize the user and lets them know.
    for (i = 0; i < guessed.length; i++) {
        if (guess === guessed[i]) {
            hasBeenGuessed = true;
            letterCheck = true;
            alert("This Letter Has Been Guessed");
        }
    }

    //If the letter hasn't been guessed, adds it the the array.
    if (!hasBeenGuessed) {
        userGuesses += guess;
        guessed.push(guess);
        guessedDiv.append(" " + guess.toUpperCase());
    }

    if (letterCheck === false) {
        guessesLeft--;
    }
    board = "";

    //Putting the current guess and status on the screen.
    for (i = 0; i < boardArray.length; i++)
        board += boardArray[i];

    wordDiv.textContent = board;

    //Checks the array to see if all of the letters have been selected.
    for (i = 0; i < computerWord.length; i++)
        var wordCheck = boardArray.indexOf(" _ ");

    //Tells the user they won, updates the count and reloads the page.
    if (wordCheck === -1) {
        alert("Correct, the word was " + computerWord + ". You win!");
        winCount++;
        winDiv.textContent = winCount;
        reset();
        winnerDiv.style.visibility = 'visible';
        loserDiv.style.visibility = 'hidden';
    }

    //If the user runs out of guesses, the game ends.
    if (guessesLeft === 0) {
        alert("Sorry, you are out of guesses. The word was " + computerWord + ".");
        reset();
        winnerDiv.style.visibility = 'hidden';
        loserDiv.style.visibility = 'visible';
    }

    guessDiv.textContent = guessesLeft;
}