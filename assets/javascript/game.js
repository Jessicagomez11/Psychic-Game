

//this is the array of choices that bingo bronson has to choose from
var bingoBronsonChoices = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];

var wins = 0 ;// goes up by 1 when userGuess=bingoBronsonIsThinkingOf
var losses = 0 ;//goes up by 1 each time guessLeft reaches 0.  
var guessesLeft = 10 ;//starts off at 10 and goes down if the userGuess != bingoBronsonIsThinkingOf. once this gets to 0, losses needs to go up by 1.  restarts after it reaches 0.  if user guess corectly count stays the same.
var guessedAlready = 0 ;// = userGuess and would need to append future guesses

//what shows up on the html page
var winsDisplayed = document.getElementById("wins-Displayed")
var lossesDisplayed = document.getElementById("losses-Displayed")
var remainingDisplayed = document.getElementById("remaining-Displayed")
var guessesDisplayed = document.getElementById("guesses-Displayed")


//********figure out how to get this to show on the html document and link this to the portfolio*************
//asking the user to make an input.  this will need to be changed to on key up event instead of an alert


//this picks a random number in the array
var bingoBronsonIsThinkingOf = bingoBronsonChoices[Math.floor(Math.random() * bingoBronsonChoices.length)];
console.log(bingoBronsonIsThinkingOf);

var userGuess = prompt("what letter is Bingo Bronson thinking of?"); 
alert("you guessed " + userGuess + ".  Bingo Bronson was thinking of the letter " + bingoBronsonIsThinkingOf)

if(userGuess === bingoBronsonIsThinkingOf){

    alert("You guessed right");
    alert("wins: " + (parseInt(wins)) + 1);
} else{
    alert("wins: " (parseInt(losses)) + 1);
}


winsDisplayed.textContent = "Wins: " + wins;
lossesDisplayed.textContent = "Losses: " + losses;
remainingDisplayed.textContent = "Guesses Left: " + losses;
guessesDisplayed.textContent = "Your guesses so far: " + losses;