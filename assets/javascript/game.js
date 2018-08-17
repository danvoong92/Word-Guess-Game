//Organize javascript sheet to avoid confusion and headache

//==============================================================
//List all of my global variables here

var wordBank = [
    "japan", "italy", "canada", "colombia", "venezuela",
    "germany", "portugal", "mexico", "greenland", "china",
    "brazil", "russia", "taiwan", "newzealand", "egypt",
    "mongolia", "romania", "madagascar", "libya", "spain"
];
var selectedWord = "";
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
    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    
    guessesRemaining = 10;
    wrongLettersGuessed = [];
    correctLetterGuessed = [];

    for (var i=0; i<numBlanks; i++) {
        correctLetterGuessed.push("_");
    }


    document.getElementById("currentWord").innerHTML = correctLetterGuessed.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesRemaining;
    document.getElementById("numWins").innerHTML = winCount;
    document.getElementById("numLosses").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}

function checkLetters(letter) {
    alert("You guessed the letter: " + letter + ".");
    var isLetterInWord = false;
    
    for (var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
            
        }
    }

    if(isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                 correctLetterGuessed[i] = letter;
                 alert("Survey says, DING!");
            }
        }
    }
    else {
        wrongLettersGuessed.push(letter);
        guessesRemaining--;
        alert("Survey says, ERR!");
    }
}

function gameEnd() {

    document.getElementById("numGuesses").innerHTML = guessesRemaining;
    document.getElementById("currentWord").innerHTML = correctLetterGuessed.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLettersGuessed.join(" ");

    if (lettersinWord.toString() == correctLetterGuessed.toString()) {
        winCount++;
        alert("You Won!");

        document.getElementById("numWins").innerHTML = winCount;

        gameStart();
    }
    else if (guessesRemaining == 0) {
        lossCount++;
        alert("You Lost!");

        document.getElementById("numLosses").innerHTML = lossCount;

        gameStart();
    }
}

gameStart();

document.onkeyup = function(event) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed);
    gameEnd();

    console.log("letterGuessed");
}