//Organize javascript sheet to avoid confusion and headache
//Reference *new* terms when using new methods of javascript
//==============================================================
//List all of my global variables here

var wordBank = [
    "japan", "italy", "canada", "colombia", "venezuela",
    "germany", "portugal", "mexico", "greenland", "china",
    "brazil", "russia", "taiwan", "newzealand", "egypt",
    "mongolia", "romania", "madagascar", "libya", "spain"
];
var wordChoice;
var lettersinWord = [];
var numBlanks = 0;
var correctLetterGuessed = [];
var wrongLettersGuessed = [];
var guessesRemaining = 10;
var winCount = 0;
var lossCount = 0;

//==============================================================
//List all of my functions here

function gameStart() {
    wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersinWord = wordChoice.split(""); //*new* split method 'splits' string into substrings and return as array, used here to split each word into letters; "" hides commas
    numBlanks = lettersinWord.length;

    guessesRemaining = 10;
    wrongLettersGuessed = [];
    correctLetterGuessed = [];

    for (var i=0; i<numBlanks; i++) {
        correctLetterGuessed.push("_"); //*new* push method allows letters to replace '_' when letter is correctly guessed
    }

    document.getElementById("currentWord").innerHTML = correctLetterGuessed.join(" "); //*new* join method combines all elements of array and returns as a string... " " makes it so the commas do not appear on screen
    document.getElementById("numGuesses").innerHTML = guessesRemaining;
    document.getElementById("numWins").innerHTML = winCount;
    document.getElementById("numLosses").innerHTML = lossCount;

    //Debugging checkpoint

    //console.log(wordChoice);
    //console.log(lettersinWord);
    //console.log(numBlanks);
    //console.log(correctLetterGuessed);
}

function checkLetters(letter) {
    
    var correctLetter = false;
    
    for (var i = 0; i < numBlanks; i++) {
        if(wordChoice[i] == letter) {
            correctLetter = true;            
        }
    }

    if(correctLetter) {
        for (var i = 0; i < numBlanks; i++) {
            if(wordChoice[i] == letter) {
                 correctLetterGuessed[i] = letter;                 
            }
        }
    }
    else {
        wrongLettersGuessed.push(letter);
        guessesRemaining--;        
    }
}

function gameEnd() {

    document.getElementById("numGuesses").innerHTML = guessesRemaining;
    document.getElementById("currentWord").innerHTML = correctLetterGuessed.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLettersGuessed.join(" ");

    if (lettersinWord.toString() == correctLetterGuessed.toString()) {
        winCount++;
        alert("Winner, winner, chicken dinner!");

        document.getElementById("numWins").innerHTML = winCount;

        gameStart();
    }
    else if (guessesRemaining == 0) {
        lossCount++;
        alert("You lost! Try again.");

        document.getElementById("numLosses").innerHTML = lossCount;

        gameStart();
    }
}

gameStart();
//Notes:
//Need to figure out how to start game without inputting a key as guess
//Need to figure out how to check if letter is already guessed and prevent it from being input twice
//Need to figure out how to only check if letters A-Z is pressed
document.onkeyup = function(event) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed);
    
    gameEnd();
}