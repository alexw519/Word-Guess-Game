//Creating an array of words
var wordBank = ["one", "two", "three", "four"];


//Picking a random word from the array.
var index = Math.floor(Math.random() * wordBank.length);
var computerWord = wordBank[index];
var letterCheck = false;
var guessesLeft = 6;
var winCount = 0;
var userGuesses = "";
var guessed = [];

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
/////////////////////////////////////////////////////////////////////////
var guessedDiv = document.getElementById("lettersGuessed");

function reset()
{
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
}

/////////////////////////////////////////////////////////////////////////
var winDiv = document.getElementById("wins");
// winDiv.append(winCount);

// Getting the user input and checking if its a correct letter
document.onkeyup = function (event) 
{
    var guess = event.key.toLowerCase();
    letterCheck = false;

    //Checking if letter is in the word, and if it is appears on screen
    for (i = 0; i < computerWord.length; i++) 
    {
        if (guess === wordArray[i]) 
        {
            boardArray[i] = " " + guess + " ";
            wordArray[i] = " _ ";
            letterCheck = true;
            userGuesses += guess;
            guessed.push(guess);
        }
    }

    // for (i = 0; i < guessed.length; i++)
    // {

    // }
    if (letterCheck === false) 
    {
        guessesLeft--;
    }
    board = "";

    //Putting the current guess and status on the screen.
    for (i = 0; i < boardArray.length; i++) 
        board += boardArray[i];

    wordDiv.textContent = board;
    wordDiv.append(guessesLeft);
    // wordDiv.textContent(guessesLeft);

    //Checks the array to see if all of the letters have been selected.
    for (i = 0; i < computerWord.length; i++)
        var wordCheck = boardArray.indexOf(" _ ");
    
    guessedDiv.append(" " + guess);
    

    //Tells the user they won, updates the count and reloads the page.
    if (wordCheck === -1) 
    {
        alert("Correct, the word was " + computerWord + ". You win!");
        winCount++;
        winDiv.textContent = winCount;
        // location.reload(true);
        reset();
    }

    //If the user runs out of guesses, the game ends.
    if (guessesLeft === 0)
    {
        alert("Sorry, you are out of guesses. The word was " + computerWord + ".");
        // location.reload(true);
        reset();
    }

    //Adding in letters guessed.
    // var guessedDiv = document.getElementById("lettersGuessed");
    // guessedDiv.append(" " + guess);
}