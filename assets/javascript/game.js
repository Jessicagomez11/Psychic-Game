//asking the user to make an input.  this will need to be changed to on key up event instead of an alert


//this is the array of choices that bingo bronson has to choose from
var bingoBronsonChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;// goes up by 1 when userGuess=bingoBronsonIsThinkingOf
var losses = 0;//goes up by 1 each time guessLeft reaches 0.  
var guessesLeft = 10;//starts off at 10 and goes down if the userGuess != bingoBronsonIsThinkingOf. once this gets to 0, losses needs to go up by 1.  restarts after it reaches 0.  if user guess corectly count stays the same.
var guessedAlready = [];// = userGuess and would need to append future guesses

// grabs elements from the page
var winsDisplayed = document.getElementById("wins-Displayed");
var lossesDisplayed = document.getElementById("losses-Displayed");
var remainingDisplayed = document.getElementById("remaining-Displayed");
var guessesDisplayed = document.getElementById("guesses-Displayed");

//********figure out how to get this to show on the html document and link this to the portfolio*************
document.onkeyup = function (event) {

    var userGuess = event.key;

   guessedAlready.push(userGuess);

 
    

    //this picks a random letter in the array
    var bingoBronsonIsThinkingOf = bingoBronsonChoices[Math.floor(Math.random() * bingoBronsonChoices.length)]
    console.log(bingoBronsonIsThinkingOf);



    if (userGuess === bingoBronsonIsThinkingOf) {
        alert("You read Bingo Bronson's mind!");
        console.log("you win! score: " + parseInt(wins+=1));
        guessesLeft=10;
        // add one more to wins
        // wins = wins + 1;
        // wins += 1;
        // wins++;

    }
    else {
        console.log("Nope. Try again!");
    }

  //needs a loop here to keep track of how many times the user has made a guess
  if (userGuess = event.key) {

    console.log(parseInt(guessesLeft-=1))

    if (guessesLeft == 0) {
        alert("You loose!")
        console.log(guessesLeft = 10);
        console.log(losses+=1)
        
    }

}



    winsDisplayed.textContent = "Wins: " + wins ;
    lossesDisplayed.textContent = "Losses: " + losses;
    remainingDisplayed.textContent = "Guesses Left: " + guessesLeft;
    guessesDisplayed.textContent = "Your guesses so far: " + guessedAlready;

}; 