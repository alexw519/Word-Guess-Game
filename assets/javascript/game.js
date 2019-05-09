//Creating an array of words
var wordBank = ["one", "two", "three", "four"];

//Picking a random word from the array.
var index = Math.floor(Math.random() * wordBank.length);
var computerWord = wordBank[index];
var letterCheck = false;
var guessesLeft = 6;
var winCount = 0;
var userGuesses = "";
// wordBank.splice(index, 1);

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

var lettersGuessed = [];

// Getting the user input and checking if its a correct letter
document.onkeyup = function (event) 
{
    var guess = event.key.toLowerCase();
    letterCheck = false;
    lettersGuessed.push(guess);

    //Checking if letter is in the word, and if it is appears on screen
    for (i = 0; i < computerWord.length; i++) 
    {
        if (guess === wordArray[i]) 
        {
            boardArray[i] = " " + guess + " ";
            wordArray[i] = " _ ";
            letterCheck = true;
            userGuesses += guess;
        }
    }
    if (letterCheck === false) 
    {
        guessesLeft--;
        // alert("That guess was incorrect");
    }
    board = "";

    //Putting the current guess and status on the screen.
    for (i = 0; i < boardArray.length; i++) 
        board += boardArray[i];

    wordDiv.textContent = board;
    wordDiv.append(guessesLeft);

    //Checks the array to see if all of the letters have been selected.
    for (i = 0; i < computerWord.length; i++)
        var wordCheck = boardArray.indexOf(" _ ");
    
    //Tells the user they won, updates the count and reloads the page.
    if (wordCheck === -1) 
    {
        alert("Correct, the word was " + computerWord + ". You win!");
        winCount++;
        location.reload(true);
    }

    //If the user runs out of guesses, the game ends.
    if (guessesLeft === 0)
    {
        alert("Sorry, you are out of guesses. The word was " + computerWord + ".");
        location.reload(true);
    }

    
    //Adding in letters guessed.
    var guessedDiv = document.getElementById("lettersGuessed");
    guessedDiv.textContent = lettersGuessed.join(" ");
}