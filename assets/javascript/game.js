//Creating an array of words
var wordBank = ["one", "two", "three", "four"];

//Picking a random word from the array.
var index = Math.floor(Math.random() * wordBank.length);
var computerWord = wordBank[index];
var letterCheck = false;
var guessesLeft = 6;
var winCount = 0;
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

// Getting the user input and checking if its a correct letter
document.onkeyup = function (event) 
{
    var guess = event.key;
    letterCheck = false;

    //Checking if letter is in the word, and if it is appears on screen
    for (i = 0; i < computerWord.length; i++) 
    {
        if (guess === wordArray[i]) 
        {
            boardArray[i] = " " + guess + " ";
            wordArray[i] = " _ ";
            letterCheck = true;
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
        alert("You Win");
        winCount++;
        location.reload(true);
    }



}