// Initialize variable
var win = 0;
var loss = 0;
var tries = 9;
var guess; //Guess
var guesses = []; //stored guesses
var correct = 0; //Count correct guesses
var progressWord = [];

var list = ['cat', 'hey', 'dog'];
var previousGuess = null;

function chooseWord() {

    return list[Math.floor(Math.random() * list.length)];

}

var magicWord = chooseWord();
console.log("Computer word is: " + magicWord);


var progressWord = [];

for (var i = 0; i < magicWord.length; i++) {
    progressWord.push('_');
}

document.onkeydown = function(event) {

    var guess = event.key.toLowerCase();
    //take out 1 tries and updates tries after key pressed
    tries -= 1;
    document.getElementById("tries").textContent = tries;

    //log in history of guess words
    guesses.push(guess);
    console.log("History letter " + guesses);

    console.log("I just typed a letter: " + guess);
    //x.indexOf("y") returns a index position
    //when no guess letter match magicWord, then its -1 (false)
    var checkIndex = 0;

    // if the character is found
    if (checkIndex = magicWord.indexOf(guess)) != -1) {
    for (var i = 0; i < wordLength; i++) { // loop on all characters
        if (chosenWord[i] == keyString) // if this is an occurance
            progressWord[i] = chosenWord[i];
    }
}
else {
    // wrong choice
}

//Search letter in magicWord at ith index
for (var i = 0; i < magicWord.length; i++) {
    if (magicWord[i] === guess) {
        correct += 1;
        console.log(correct);
    }
}
//To Win
// 	for(i=0;i<toGuess.length;++i) {
// 		if(guess.indexOf(toGuess.charAt(i)) === -1) return false
// 	}
// 	return true
// }

//gameover
if (tries === 0) {
    loss += 1;
    document.getElementById("loss").textContent = loss;
}


}

// THINGS TO DO
// -MAKE WINNER
// -DISPLAY TYPED WORD
//-RESET GAME
