// Initialize variable
var win = 0;
var loss = 0;
var tries = 9;
var guess; //Guess
var guesses = []; //stored guesses
var correct = 0; //Count correct guesses
var progressWord = [];

var list = ['cat', 'zebra', 'elephant'];

//background audio
//var bgMusic = new Audio('assets/Pokemon8bit.mp3');
//bgMusic.play();
//typing keyboard audio
var keybrType = new Audio('assets/keyboard.wav');

function chooseWord() {
    return list[Math.floor(Math.random() * list.length)];
}

var magicWord = chooseWord();
console.log("Computer word is: " + magicWord);

//show the "_"
function start() {
    for (var i = 0; i < magicWord.length; i++) {
        progressWord[i] = "_";
    }
    var x = progressWord.join(" ");
    document.getElementById("answer").innerHTML = x;
}

start();

document.onkeydown = function(event) {

    //choose a letter
    //keybrType.play();
    var guess = event.key.toLowerCase();

    //log in history of guess words
    guesses.push(guess);
    document.getElementById("letterGuessed").innerHTML = guesses.join(" ")

    checkLetter(guess);
    checkLives();

}

function checkLetter(letterGuess) {
    // True when letter is found in magicWord else its -1 (false)
    if (magicWord.indexOf(letterGuess) != -1) {

        // check each letter
        for (var i = 0; i < magicWord.length; i++) {

            //when guess letter match a magic word, it will appear screen
            if (magicWord[i] === letterGuess) {
                progressWord[i] = magicWord[i];
                document.getElementById("answer").innerHTML = progressWord.join(" ");
            }
        }
    }

    else{
    	console.log("I type wrong letter");
    	tries -= 1; 
    	document.getElementById("tries").textContent = tries;
    }
}

function checkLives() {
    //Win when there are no '_' left else you lose
    if (progressWord.indexOf('_') == -1) {
        win++;
        document.getElementById("win").textContent = win;
        //magicWord = chooseWord();
        reset();
        console.log(magicWord);

    } else if (tries <= 0) {
        loss++;
        document.getElementById("loss").textContent = loss;
        reset();
        console.log(magicWord);
        //magicWord = chooseWord();

    }
}

function reset() {
    magicWord = chooseWord();
    tries = 9;
    document.getElementById("tries").textContent = tries;
    progressWord = [];
        guesses = [];
            document.getElementById("letterGuessed").innerHTML = guesses.join(" ")
    start();

    //magicWord = chooseWord();
}


// THINGS TO DO
//-RESET GAME
