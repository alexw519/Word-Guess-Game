//Creating an array of words
var wordBank = ["one", "two", "three", "four"];

//Picking a random word from the array.
var index = Math.floor(Math.random() * wordBank.length);
var computerWord = wordBank[index];
var letterCheck = false;
var guessesLeft = 6;
// wordBank.splice(index, 1);

var board = [];
for (i = 0; i < computerWord.length; i++)
{
    board.push(" _ ");
}
var wordArray = computerWord.split("");
var wordDiv = document.getElementById("word");
wordDiv.textContent = "test";

// 
var guess = "e";
letterCheck = false;
for (i = 0; i < computerWord.length; i++)
{
    if (guess === wordArray[i])
    {
        board[i] = " " + guess + " ";
        letterCheck = true;
    }
}
if (letterCheck === false)
{
    guessesLeft--;
    // alert("That guess was incorrect");
}
wordDiv.textContent = board;
wordDiv.append(guessesLeft);